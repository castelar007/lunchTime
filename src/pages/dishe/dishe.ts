import { Component } from '@angular/core';
import {  NavController, NavParams,ModalController } from 'ionic-angular';
import {SpecialDishPage} from '../special-dish/special-dish';
@Component({
  selector: 'page-dishe',
  templateUrl: 'dishe.html',
})
export class DishePage {
  isFav = false;
  specialDishPage = SpecialDishPage
  constructor(private modalCtrl:ModalController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DishePage');
  }
  heartClick(){
    this.isFav = !this.isFav;
  }
  especialClick(){
    let loginPageModal = this.modalCtrl.create(this.specialDishPage);
    loginPageModal.onDidDismiss(() => {
    //on dissmiss
  });
    loginPageModal.present();
  }
}
