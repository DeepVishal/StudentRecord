import { Component } from '@angular/core';

import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <ul>
  <li class="text" *ngFor="let item of items | async">
    {{item.$value}}
  </li>
</ul>`,
})
export class AppComponent  { 
  items: FirebaseListObservable<any[]>;
  constructor(af: AngularFireDatabase) {
    this.items = af.list('/items');
  }
  name = 'Angular'; }
