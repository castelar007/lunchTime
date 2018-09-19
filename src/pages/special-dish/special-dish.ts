import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-special-dish',
  templateUrl: 'special-dish.html',
})
export class SpecialDishPage {
  isFav = false;
  step = 0;
  options = [
    {name:'Opción 1 ', isChecked:true},
    {name:'Opción 2 ', isChecked:false},
    {name:'Opción 3 ', isChecked:false},
      
  ];

  selecciones = [
     {name:'Array 1',opciones:[
      {name:'Opción 1 ', isChecked:true},
      {name:'Opción 2 ', isChecked:false},
      {name:'Opción 3 ', isChecked:false},
     ]},
     {name:'Array 2',opciones:[
      {name:'Opción 1 ', isChecked:true},
      {name:'Opción 2 ', isChecked:false},
      {name:'Opción 3 ', isChecked:false},
     ]},
     {name:'Array 3',opciones:[
      {name:'Opción 1 ', isChecked:true},
      {name:'Opción 2 ', isChecked:false},
      {name:'Opción 3 ', isChecked:false},
     ]},

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
