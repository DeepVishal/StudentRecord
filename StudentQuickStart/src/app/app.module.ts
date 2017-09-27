import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AngularFireModule} from 'angularfire2';
import { firebaseConfig } from './environments/firebase.config';
import { AngularFireDatabase } from 'angularfire2/database';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabase
   ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
