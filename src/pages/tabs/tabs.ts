import { Component } from '@angular/core';

import { ModalController} from 'ionic-angular';
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
  
  tab4Root = SearchPage;
  tab5Root = AccountPage;
  basketPage = BasketPage;
  constructor(private modalCtrl:ModalController) {

  }
  toggleBasket(){
    let loginPageModal = this.modalCtrl.create(this.basketPage);
    loginPageModal.onDidDismiss(() => {
     //on dismiss
  });
    loginPageModal.present();
  }
  
}
