import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-special-dish',
  templateUrl: 'special-dish.html',
})
export class SpecialDishPage {
  isFav = false;
  options = [
    {name:'Opción 1 ', isChecked:true},
    {name:'Opción 2 ', isChecked:false},
    {name:'Opción 3 ', isChecked:false},
    {name:'Opción 4 ', isChecked:true},
    {name:'Opción 5 ', isChecked:false},
    {name:'Opción 6 ', isChecked:false},
   
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
