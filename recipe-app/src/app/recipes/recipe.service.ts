import {Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject, throwError} from "rxjs";
import {Http} from "@angular/http";
import {catchError, map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesUpdated: Subject<Recipe[]> = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Schnitzel',
      'A tasty Schnitzel',
      'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=aWyDp3CA',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
    ),
    new Recipe(
      'Burger',
      'Tasty burger',
      'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=aWyDp3CA',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]
    )
  ];

  getRecipe(id: number): Recipe {
    return this.recipes[id];
  }

  constructor(private shoppingListService: ShoppingListService,
              private http: Http) {
  }

  getRecipes = () => {
    return this.recipes.slice();
  };

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesUpdated.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesUpdated.next(this.recipes.slice());
  }

  deleteRecipe(id: number) {
    this.recipes.splice(id, 1);
    this.recipesUpdated.next(this.recipes.slice());
  }

  saveRecipes() {
    return this.http.put(
      'https://shopping-list-b30b1.firebaseio.com/recipes.json',
      this.recipes.slice()
      )
      .pipe(
        map(response => response.json()),
        catchError(error => throwError(error))
      );
  }

  getRecipesFromServer = () => {
    this.http.get('https://shopping-list-b30b1.firebaseio.com/recipes.json')
      .pipe(
        map(response => {
          const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        })
      )
      .subscribe(
        recipes => {
          this.recipes = recipes;
          this.recipesUpdated.next(this.recipes.slice())
        }
      )
  }
}
