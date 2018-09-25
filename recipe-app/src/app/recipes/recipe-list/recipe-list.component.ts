import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output()
  recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=aWyDp3CA'),
    new Recipe(
      'A Test Recipe 2',
      'This is simply a test 2',
      'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1506120378/MR_0917170472.jpg?itok=aWyDp3CA')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
