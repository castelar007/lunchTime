import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AccountPage } from '../pages/account/account';
import { FavoritesPage } from '../pages/favorites/favorites';
import { RestaurantPage } from '../pages/restaurant/restaurant'
import { SearchPage } from '../pages/search/search';
import { BasketPage } from '../pages/basket/basket';
import { ParallaxHeaderDirective } from '../directives/parallax/parallax';
import { DishePage } from '../pages/dishe/dishe';
import {SpecialDishPage} from '../pages/special-dish/special-dish';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { SortPageModule } from '../pages/sort/sort.module';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AccountPage,
    FavoritesPage,
    SearchPage,
    BasketPage,
    ParallaxHeaderDirective,
    RestaurantPage,
    DishePage,
    SpecialDishPage
  ],
  imports: [
    BrowserModule,
    SortPageModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: true,
      autoFocusAssist: false
  })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AccountPage,
    FavoritesPage,
    SearchPage,
    BasketPage,
    RestaurantPage,
    DishePage,
    SpecialDishPage
  ],
  providers: [
    NativePageTransitions,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
