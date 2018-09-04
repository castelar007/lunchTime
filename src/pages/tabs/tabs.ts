import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import { FavoritesPage } from '../favorites/favorites';
import { SearchPage } from '../search/search';
import { AccountPage } from '../account/account';
import { BasketPage } from '../basket/basket';

@Component({
  selector: 'tabs-page',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FavoritesPage;
  tab3Root = BasketPage;
  tab4Root = SearchPage;
  tab5Root = AccountPage;

  constructor() {

  }
}
