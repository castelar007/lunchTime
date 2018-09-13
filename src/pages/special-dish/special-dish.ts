import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-special-dish',
  templateUrl: 'special-dish.html',
})
export class SpecialDishPage {
  isFav = false;
  options = [
    {name:'Opción 1 '},
    {name:'Opción 2 '},
    {name:'Opción 3 '},
   
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpecialDishPage');
  }
  heartClick(){
    this.isFav = !this.isFav;
  }
  addToCart(){
    console.log('addtocart clicked');
    
    this.navCtrl.popAll();
  }
}
