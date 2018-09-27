import {Component, OnInit} from '@angular/core';
import {IntervalObservable} from "rxjs-compat/observable/IntervalObservable";
import 'rxjs/Rx';
import {Observable, Observer} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const myNumbers: Observable<number> = Observable.interval(1000);
    myNumbers
      .subscribe(
        number => console.log(number)
      )

    const myObservable: Observable<number> = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      },2000);

      setTimeout(() => {
        observer.next('second package');
      },4000);

      setTimeout(() => {
        observer.error('this does not work');
      },5000);
    });

    myObservable.subscribe(
      data => console.log(data),
      error => console.log(error),
      () => console.log('complete')
    )
  }

}
