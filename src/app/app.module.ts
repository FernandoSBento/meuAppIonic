import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  AngularFireModule.initializeApp({

    apiKey: "AIzaSyBhC6j4C7Tid4f9SwSGWEXciR56ASC59t8",
    authDomain: "ionic-cac84.firebaseapp.com",
    databaseURL: "https://ionic-cac84.firebaseio.com",
    projectId: "ionic-cac84",
    storageBucket: "ionic-cac84.appspot.com",
    messagingSenderId: "698851873713",
    appId: "1:698851873713:web:e3f2422c459eed1d"
  }),
    AngularFireDatabaseModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
