import {Injectable} from '@angular/core';
import {Headers, Http, Response} from "@angular/http";
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  constructor(private http: Http) {
  }

  storeServers = (servers: any[]) => {
    return this.http.put(
      'https://angular5-the-complete-guide.firebaseio.com/data.json',
      servers
      )
      .pipe(
        map(
          response => {
            return response.json();
          }
        )
      );
  };

  getServers = () => {
    return this.http.get('https://angular5-the-complete-guide.firebaseio.com/data')
      .pipe(
        map(response => response.json()),
        catchError(error => {
          return throwError('Something went wrong');
        })
      );
  };

  getAppName = () => {
    return this.http.get('https://angular5-the-complete-guide.firebaseio.com/appName.json')
      .pipe(
        map(response => response.json() )
      )
  };
}
