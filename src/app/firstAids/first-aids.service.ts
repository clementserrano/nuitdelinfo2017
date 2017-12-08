import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class FirstAidsService {

  constructor( private http: Http) { }

  getAdvice(itemId) {
    return new Promise((resolve, reject) => {
      this.http.get('../assets/firstAidsAdvices/' + itemId + '.txt')
      .toPromise()
      .then(res => resolve(res.text()))
      .catch(err => reject(err));
    });
  }
}
