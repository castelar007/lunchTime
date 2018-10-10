import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  prices=[
    {name:'Menor a L.100 ',value:0,selected:false},
    {name:'L.100 - L.200',value:0,selected:false},
    {name:'L.200 - L.300',value:0,selected:false},
    {name:'L.300 - L.400',value:0,selected:false},
    {name:'L.400 - L.500',value:0,selected:false},
    {name:'Mayor a L.500',value:0,selected:false},
     ];
  options = [
    {name:'Postres'},
    {name:'Café'},
    {name:'Bebidas'},
    {name:'Comida China'},
    {name:'Pizza'},
    {name:'Hamburguesas'},
    {name:'Vegetariana'},
    {name:'Familiar'},
    {name:'Personal'},
    {name:'Golosinas'},
    {name:'Comida Rápida'},
  ];
  delays = [
    {name:'15m',value:0,selected:false},
    {name:'30m',value:0,selected:false},
    {name:'45m',value:0,selected:false},
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }
  selectPrice(price){
    price.selected = !price.selected;
  }
}
