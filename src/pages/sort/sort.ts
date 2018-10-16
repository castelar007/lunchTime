import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { SpecialDishPage } from '../special-dish/special-dish';
import { DishePage } from '../dishe/dishe';

/**
 * Generated class for the SortPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sort',
  templateUrl: 'sort.html',
})
export class SortPage {
  dish = DishePage;
  specialDishPage = SpecialDishPage;
  categorias=[
    {name:'Postres',active:false},
    {name:'Café',active:false},
    {name:'Bebidas',active:false},
    {name:'Comida China',active:false},
    {name:'Pizza',active:false},
    {name:'Hamburguesas',active:false},
    {name:'Vegetariana',active:false},
    {name:'Familiar',active:false},
    {name:'Personal',active:false},
    {name:'Golosinas',active:false},
    {name:'Comida Rápida',active:false},
  ];
  sorts = [ 1,2,3,4,5];
  constructor(public modalCtrl:ModalController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SortPage');
  }
  especialClick(ev){
    ev.stopPropagation();
    ev.preventDefault();
    let loginPageModal = this.modalCtrl.create(this.specialDishPage);
    loginPageModal.onDidDismiss(() => {
    //on dissmiss
  });
    loginPageModal.present();
  }
  goDeep(){
    // this.navCtrl.push(this.dish, {
    //   //parameters
    // });
    let loginPageModal = this.modalCtrl.create(this.dish);
    loginPageModal.onDidDismiss(() => {
       
      console.log('dissmiss');
      
    //on dissmiss
  });
    loginPageModal.present();
  }
}
