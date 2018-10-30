import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-basket',
  templateUrl: 'basket.html',
})
export class BasketPage {
  aceptar = true;
  togglePago = false;
  tarjetas = [{number:'8888-8888-8888-8888',selected:true},{number:'8888-888888-88888',selected:false},{number:'8888-8888-7788-8888',selected:false},{number:'8888-888778-88888',selected:false}];
  pagos = [{name:'Efectivo',active:true},{name:'Tarjeta',active:false},{name:'Otro',active:false}];
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
  pagoClick(pago){
    this.pagos.forEach(element => {
      element.active = false;
    });
    pago.active = true;
    if(pago.name == 'Tarjeta'){
      this.togglePago = true;
    }else if(pago.name == 'Otro'){
      this.togglePago = true;
    }else {
      this.togglePago = false;
    }

  }
  acceptClick(){
    this.togglePago = false;
  }
  enableAceptar(){
    console.log('changed');
    
    this.aceptar = false;
  }
}
