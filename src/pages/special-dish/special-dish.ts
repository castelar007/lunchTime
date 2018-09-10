import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-special-dish',
  templateUrl: 'special-dish.html',
})
export class SpecialDishPage {
  isFav = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpecialDishPage');
  }
  heartClick(){
    this.isFav = !this.isFav;
  }
}
