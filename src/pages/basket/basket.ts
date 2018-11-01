import { Component,NgZone } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-basket',
  templateUrl: 'basket.html',
})
export class BasketPage {
 
  isOtherSelected=false;
  aceptar = true;
  togglePago = false;
  tarjetas = [{number:'8888-8888-8888-8888',selected:true},{number:'8888-888888-88888',selected:false},{number:'8888-8888-7788-8888',selected:false},{number:'8888-888778-88888',selected:false}];
  pagos = [{name:'Efectivo',active:true},{name:'Tarjeta',active:false},{name:'Otro',active:false}];
  items = [{imgUrl:'assets/imgs/test.png',cant:0},{imgUrl:'assets/imgs/test.png',cant:0},{imgUrl:'assets/imgs/test.png',cant:0},{imgUrl:'assets/imgs/test.png',cant:0},{imgUrl:'assets/imgs/test.png',cant:0}];
  constructor(private zone: NgZone,public navCtrl: NavController, public navParams: NavParams) {
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
    let whiteHeader = document.querySelector('.whiteHeader');
    let sliderContainer = document.querySelector('.sliderContainer');
    let activeFunc = function(){
        if(pago.name == 'Tarjeta'){
         sliderContainer.classList.add('slow');
        }else if(pago.name == 'Otro'){
          sliderContainer.classList.add('slow');
          
        }else {
          sliderContainer.classList.remove('slow');
        }
        
        
        
        whiteHeader.removeEventListener("transitionend", activeFunc, true); 
      }
      whiteHeader.addEventListener("transitionend", activeFunc, true);
      if(pago.name == 'Tarjeta'){
        this.isOtherSelected = false;
        this.togglePago = true;
      }else if(pago.name == 'Otro'){
        this.isOtherSelected = true;
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
