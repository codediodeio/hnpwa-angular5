import { Injectable } from '@angular/core';
// import { HttpClient,  HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class DataService {

  constructor(private db: AngularFireDatabase) { }


  getFeed(feed): Observable<number[]> {
    const ref = this.db.list<number>(`/v0/${feed}`);
    return ref.valueChanges();
  }

  getItem(itemId):  Observable<any> {
    const ref = this.db.object(`/v0/item/${itemId}`);
    return ref.valueChanges();
  }

  getUser(userId): Observable<any> {
    const ref = this.db.object(`/v0/user/${userId}`);
    return ref.valueChanges();
  }


}
