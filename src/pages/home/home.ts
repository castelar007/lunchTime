import { Component,ViewChild,NgZone} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Content } from 'ionic-angular';
import { RestaurantPage } from '../restaurant/restaurant';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  // @ViewChild(Content) content: Content;
  @ViewChild('scroll') ionScroll: any;
  @ViewChild('sideScroll') sideScroll: any;
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
  items=[{name:'Ristorante Name',description:'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',stars:5,favorite:true,imageUrl:'assets/imgs/test.png'},
  {name:'Ristorante Name',description:'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',stars:5,favorite:true,imageUrl:'assets/imgs/test.png'},
  {name:'Ristorante Name',description:'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',stars:5,favorite:true,imageUrl:'assets/imgs/test.png'},
  {name:'Ristorante Name',description:'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',stars:5,favorite:true,imageUrl:'assets/imgs/test.png'},
  {name:'Ristorante Name',description:'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',stars:5,favorite:true,imageUrl:'assets/imgs/test.png'},
  {name:'Ristorante Name',description:'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',stars:5,favorite:true,imageUrl:'assets/imgs/test.png'},
  {name:'Ristorante Name',description:'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',stars:5,favorite:true,imageUrl:'assets/imgs/test.png'},
  {name:'Ristorante Name',description:'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',stars:5,favorite:true,imageUrl:'assets/imgs/test.png'},
        ];
  
  childScroll='false';
  restaurantPage = RestaurantPage;
  searchIsActive = false;
  menuCityActive = false;
  constructor(private zone: NgZone,public navCtrl: NavController) {

  }
  onScroll(e){
    console.log('scroll:'+e);
    
  }
  ionViewDidEnter() {
      // console.log(this.ionScroll);
      // console.log(document.getElementsByClassName('headerScroll')[0].clientHeight);
      document.getElementById('innerScroll').firstChild['style'].overflowY = 'hidden';
      
      let contentHeight =  document.getElementsByClassName('headerScroll')[0].clientHeight;
      this.ionScroll.addScrollEventListener((event:Event)=>{
        //  console.log(event);
        //  console.log(event.srcElement.scrollTop);
         
         this.zone.run(() => {
              if(event.srcElement.scrollTop >= contentHeight){
                
                document.getElementById('innerScroll').firstChild['style'].overflowY = 'auto';
              }else{
                
                document.getElementById('innerScroll').firstChild['style'].overflowY = 'hidden';
              }
            });
              console.log(this.childScroll);
      });

      let contentWidth = document.querySelector('#homeScroll .scroll-zoom-wrapper').clientWidth -  document.querySelector('#homeScroll .scroll-content').clientWidth;
      
      // console.log('ancho: '+contentWidth);
      // console.log( document.getElementsByClassName('scroll-zoom-wrapper')[0].clientWidth);
      // console.log(document.getElementsByClassName('scroll-content')[0].clientWidth);
      
      this.sideScroll.addScrollEventListener((event:Event)=>{
         console.log(event);
         console.log(event.srcElement.scrollLeft);
         
         
         this.zone.run(() => {
              if(event.srcElement.scrollLeft <= 10){
                document.getElementById('sideScroll').classList.add('activeLeft');
                
              }else{
                console.log('entro');
                document.getElementById('sideScroll').classList.remove('activeLeft');
                if(event.srcElement.scrollLeft >= contentWidth ){
                  document.getElementById('sideScroll').classList.add('activeRight');
                }else{
                  document.getElementById('sideScroll').classList.remove('activeRight');
                }
               
              }
            });
              
      });
    //   this.content.ionScrollEnd.subscribe((data)=>{ 

    //     let dimensions = this.content.getContentDimensions();

    //     let scrollTop = this.content.scrollTop;
    //     let contentHeight = dimensions.contentHeight;
    //     let scrollHeight = dimensions.scrollHeight;
    //     console.log('1: '+scrollTop+' 2: '+contentHeight+' 3: '+scrollHeight);
    //     this.zone.run(() => {
    //     if((scrollTop + contentHeight) >= scrollHeight){
    //       this.childScroll = 'true';

    //     }else{
    //       this.childScroll = 'false';
    //     }
    //   });
    //     console.log(this.childScroll);
        
    //     // if ( (scrollTop + contentHeight + 20) > scrollHeight) {
    //     //   this.shouldScrollDown = true;
    //     //   this.showScrollButton = false;
    //     // } else {
    //     //   this.shouldScrollDown = false;
    //     //   this.showScrollButton = true;
    //     // }

    // });
  }
  categoryClick(categoria){
    if(categoria.active == true)
      categoria.active = false;
    else if(categoria.active == false)
      categoria.active = true;   
  }
  goDeep(item){
    this.navCtrl.push(this.restaurantPage, {
      //parameters
    });
  }
  clickSearch(){
    this.searchIsActive = !this.searchIsActive;
  }
  ciudadClick(){
    this.menuCityActive = !this.menuCityActive;
    console.log('click');
    
  }
}
