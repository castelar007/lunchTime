import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  categorias=[{name:'cate'},{name:'cate'},{name:'cate'},{name:'cate'},{name:'cate'},{name:'cate'},{name:'cate'},{name:'cate'},
  {name:'cate'},{name:'cate'},{name:'cate'},{name:'cate'},{name:'cate'},{name:'cate'},{name:'cate'},{name:'cate'}];
  constructor(public navCtrl: NavController) {

  }

}
