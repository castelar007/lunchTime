import { Component ,ViewChild,NgZone} from '@angular/core';
import {  NavController, NavParams,ModalController } from 'ionic-angular';
import { Content } from 'ionic-angular';
import { DishePage } from '../dishe/dishe';
import {SpecialDishPage} from '../special-dish/special-dish';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
@Component({
  selector: 'page-restaurant',
  templateUrl: 'restaurant.html',
})
export class RestaurantPage {
  // @ViewChild(Content) content: Content;
  @ViewChild('scroll') ionScroll: any;
  @ViewChild('sideScroll') sideScroll: any;
  items=[{name:'Dish Name',description:'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',stars:5,favorite:false,imageUrl:'assets/imgs/test.png'},
  {name:'Dish Name',description:'es lo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',stars:5,favorite:false,imageUrl:'assets/imgs/test.png'},
  {name:'Dish Name',description:'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',stars:5,favorite:false,imageUrl:'assets/imgs/test.png'},
  {name:'Dish Name',description:'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',stars:5,favorite:false,imageUrl:'assets/imgs/test.png'},
  {name:'Dish Name',description:'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',stars:5,favorite:false,imageUrl:'assets/imgs/test.png'},
  {name:'Dish Name',description:'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',stars:5,favorite:false,imageUrl:'assets/imgs/test.png'},
  {name:'Dish Name',description:'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',stars:5,favorite:false,imageUrl:'assets/imgs/test.png'},
  {name:'Dish Name',description:'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',stars:5,favorite:false,imageUrl:'assets/imgs/test.png'},
        ];
  childScroll='false';
  dish = DishePage;
  specialDishPage = SpecialDishPage
  categorias=[{name:'cate',active:false},{name:'cate',active:false},{name:'cate',active:false},{name:'cate',active:false},{name:'cate',active:false},{name:'cate',active:false},{name:'cate',active:false},{name:'cate',active:false}];
  isFav = false;
  searchIsActive = false;
  constructor(private nativePageTransitions: NativePageTransitions,private modalCtrl:ModalController,private zone: NgZone,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantPage');
  }
  ionViewDidEnter() {
    // console.log(this.ionScroll);
    // console.log(document.getElementsByClassName('headerScroll')[0].clientHeight);
    document.getElementById('innerScrollRestaurant').firstChild['style'].overflowY = 'hidden';
   
    let contentHeight =  document.getElementsByClassName('headerScrollRestaurante')[0].clientHeight;
    this.ionScroll.addScrollEventListener((event:Event)=>{
      //  console.log(event);
      //  console.log(event.srcElement.scrollTop);
       
       this.zone.run(() => {
            if(event.srcElement.scrollTop >= (contentHeight - 40)){
              
              document.getElementById('innerScrollRestaurant').firstChild['style'].overflowY = 'auto';
            }else{
              
              document.getElementById('innerScrollRestaurant').firstChild['style'].overflowY = 'hidden';
            }
          });
            console.log(this.childScroll);
    });
    
    let contentWidth = document.querySelector('#restaurantScroll .scroll-zoom-wrapper').clientWidth - document.querySelector('#restaurantScroll .scroll-content').clientWidth;
      
    // console.log('ancho: '+contentWidth);
    // console.log( document.querySelector('#restaurantScroll .scroll-zoom-wrapper').clientWidth);
    // console.log(document.getElementsByClassName('scroll-content')[0].clientWidth);
    
    this.sideScroll.addScrollEventListener((event:Event)=>{
       console.log(event);
       console.log(event.srcElement.scrollLeft);
       
       
       this.zone.run(() => {
            if(event.srcElement.scrollLeft <= 10){
              document.getElementById('sideScrollRestaurant').classList.add('activeLeft');
              
            }else{
              console.log('entro');
              document.getElementById('sideScrollRestaurant').classList.remove('activeLeft');
              if(event.srcElement.scrollLeft >= contentWidth ){
                document.getElementById('sideScrollRestaurant').classList.add('activeRight');
              }else{
                document.getElementById('sideScrollRestaurant').classList.remove('activeRight');
              }
             
            }
          });
            
    });
}
ionViewWillLeave() {
  this.nativePageTransitions.cancelPendingTransition();
}
  categoryClick(categoria){
    if(categoria.active == true)
      categoria.active = false;
    else if(categoria.active == false)
      categoria.active = true;   
  }
  goDeep(item){
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
  heartClick(ev,item){
    ev.stopPropagation();
    ev.preventDefault();
    console.log('clicked favorite');
    
    item.favorite = !item.favorite;
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
  clickSearch(){
    this.searchIsActive = !this.searchIsActive;
  }
}
