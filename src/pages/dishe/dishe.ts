import { Component } from '@angular/core';
import {  NavController, NavParams,ModalController } from 'ionic-angular';
import {SpecialDishPage} from '../special-dish/special-dish';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
@Component({
  selector: 'page-dishe',
  templateUrl: 'dishe.html',
})
export class DishePage {
  isFav = false;
  specialDishPage = SpecialDishPage
  constructor(private nativePageTransitions: NativePageTransitions,private modalCtrl:ModalController,public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewWillLeave() {
    this.nativePageTransitions.cancelPendingTransition();
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
