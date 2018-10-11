import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  categorias=[{name:'cate',active:false},{name:'cate',active:false},{name:'cate',active:false},{name:'cate',active:false},{name:'cate',active:false},{name:'cate',active:false},{name:'cate',active:false},{name:'cate',active:false}];
  sorts = [ 1,2,3,4,5];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SortPage');
  }
  
}
