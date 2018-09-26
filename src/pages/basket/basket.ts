import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-basket',
  templateUrl: 'basket.html',
})
export class BasketPage {
  items = [{imgUrl:'assets/imgs/test.png',cant:0},{imgUrl:'assets/imgs/test.png',cant:0},{imgUrl:'assets/imgs/test.png',cant:0},{imgUrl:'assets/imgs/test.png',cant:0},{imgUrl:'assets/imgs/test.png',cant:0}];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }
  addCant(item:any){
    item.cant = item.cant + 1;
  }
  removeCant(item:any){
    if(item.cant != 0)
    item.cant = item.cant - 1;
  }
}
