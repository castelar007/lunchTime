import { Component,ViewChild,NgZone} from '@angular/core';

import {  NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-special-dish',
  templateUrl: 'special-dish.html',
})
export class SpecialDishPage {
  @ViewChild('scroll2') ionScroll: any;
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
  constructor(public zone:NgZone ,public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ionViewDidEnter() {
    let contentHeight =  document.getElementsByClassName('bodyScroll')[0].clientHeight;
    let headerHeight =  document.getElementsByClassName('bodyHeader')[0].clientHeight;
    let headerStep = headerHeight/10;
      this.ionScroll.addScrollEventListener((event:Event)=>{
        //  console.log(event);
         console.log(event.srcElement.scrollTop);
         
         this.zone.run(() => {

           document.querySelector('.itemHeader')['style'].top = '-'+(10 - (event.srcElement.scrollTop * 10)/headerHeight) +'%' ;
           if(event.srcElement.scrollTop == 0){
              document.querySelector('.itemHeader .body')['style'].opacity = 1 ;
           }else if((event.srcElement.scrollTop >= headerHeight/3) && (event.srcElement.scrollTop <= headerHeight - 10) ){
              document.querySelector('.itemHeader .body')['style'].opacity = 0.4 ;
           }else if(event.srcElement.scrollTop >= headerHeight - 10 ){
              document.querySelector('.itemHeader .body')['style'].opacity = 0 ;
           }
              // if(event.srcElement.scrollTop <= contentHeight){
                
              // }else{
                
              //   document.getElementById('innerScroll').firstChild['style'].overflowY = 'hidden';
              // }
            });
             
      });
  }
  heartClick(){
    this.isFav = !this.isFav;
  }
  addToCart(){
    console.log('addtocart clicked');
    
    this.navCtrl.pop();
  }
}
