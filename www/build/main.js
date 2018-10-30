webpackJsonp([5],{

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cards/cards.module": [
		282,
		4
	],
	"../pages/directions/directions.module": [
		283,
		3
	],
	"../pages/history/history.module": [
		284,
		2
	],
	"../pages/options/options.module": [
		285,
		1
	],
	"../pages/promos/promos.module": [
		286,
		0
	],
	"../pages/sort/sort.module": [
		154
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortPageModule", function() { return SortPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sort__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SortPageModule = /** @class */ (function () {
    function SortPageModule() {
    }
    SortPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sort__["a" /* SortPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sort__["a" /* SortPage */]),
            ],
        })
    ], SortPageModule);
    return SortPageModule;
}());

//# sourceMappingURL=sort.module.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__special_dish_special_dish__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dishe_dishe__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SortPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SortPage = /** @class */ (function () {
    function SortPage(modalCtrl, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dish = __WEBPACK_IMPORTED_MODULE_3__dishe_dishe__["a" /* DishePage */];
        this.specialDishPage = __WEBPACK_IMPORTED_MODULE_2__special_dish_special_dish__["a" /* SpecialDishPage */];
        this.categorias = [
            { name: 'Postres', active: false },
            { name: 'Café', active: false },
            { name: 'Bebidas', active: false },
            { name: 'Comida China', active: false },
            { name: 'Pizza', active: false },
            { name: 'Hamburguesas', active: false },
            { name: 'Vegetariana', active: false },
            { name: 'Familiar', active: false },
            { name: 'Personal', active: false },
            { name: 'Golosinas', active: false },
            { name: 'Comida Rápida', active: false },
        ];
        this.sorts = [1, 2, 3, 4, 5];
    }
    SortPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SortPage');
    };
    SortPage.prototype.especialClick = function (ev) {
        ev.stopPropagation();
        ev.preventDefault();
        var loginPageModal = this.modalCtrl.create(this.specialDishPage);
        loginPageModal.onDidDismiss(function () {
            //on dissmiss
        });
        loginPageModal.present();
    };
    SortPage.prototype.goDeep = function () {
        // this.navCtrl.push(this.dish, {
        //   //parameters
        // });
        var loginPageModal = this.modalCtrl.create(this.dish);
        loginPageModal.onDidDismiss(function () {
            console.log('dissmiss');
            //on dissmiss
        });
        loginPageModal.present();
    };
    SortPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sort',template:/*ion-inline-start:"/Users/beanario/Documents/Ionic_Projects/loncheando/lunchTime/src/pages/sort/sort.html"*/'<ion-content class="mainContent" parallax>\n  <div class="menuCiudad " [class.active]="this.menuCityActive">\n    <div class="menuIcon" (click)=\'this.ciudadClick()\'>\n      <ion-icon class=" downIcon" name="ios-arrow-down"></ion-icon>\n\n    </div>\n  </div>\n\n  <div class="searchBar" (click)="clickSearch()" [class.active]="this.searchIsActive">\n    <ion-icon class="searchIcon" name="search"></ion-icon>\n    <ion-icon class="closeIcon" name="md-close"></ion-icon>\n\n  </div>\n  <ion-input *ngIf=\'this.searchIsActive\' style="\n      height: 30px;\n     \n      width: calc(100% - 70px);\n      border-radius: 30px;\n      color: white;\n      margin:0px 40px 0px 30px;\n      position: fixed;\n      top: 5px;\n    \n      \n      z-index: 11111;\n      ">\n  </ion-input>\n  <div class="header">\n    <div class="h h1">\n      <div class="h11">\n        <div style="    \n        width: calc(100% - 30px);\n    display: flex;\n    align-items: center; padding-left: 10px;">\n\n\n          <span>Tegucigalpa, F.M.</span>\n        </div>\n\n\n      </div>\n\n    </div>\n    <div class="h h2">\n      <ion-scroll scrollX="true">\n        <div [class.active]="categoria.active" class="category" *ngFor="let categoria of categorias" (click)=\'categoryClick(categoria)\'>\n          {{categoria.name}}\n        </div>\n      </ion-scroll>\n    </div>\n  </div>\n  <div class="body">\n    <div class="headerBody">\n      Cate\n    </div>\n    <ion-scroll scrollY=\'true\'>\n      <div class="itemBody" *ngFor=\'let sort of sorts\'> \n          <div class="ibHeader">\n            <div>\n              Nombre del Plato de Comida\n            </div>\n            <div style="    display: flex;\n          justify-content: center;\n          align-items: center;\n          height: 100%;"> \n            <ion-icon style="font-size:1rem;  color:#EA8A04;" name="star"></ion-icon>\n            <ion-icon style="font-size:1rem;  color:#EA8A04;" name="star"></ion-icon>\n            <ion-icon style="font-size:1rem;  color:#EA8A04;" name="star"></ion-icon>\n            <ion-icon style="font-size:1rem;  color:#CBCCCA;" name="star"></ion-icon>\n            <ion-icon style="font-size:1rem;  color:#CBCCCA;" name="star"></ion-icon>\n          </div>\n          </div>\n          <div class="ibBody" (click)=\'goDeep()\'>\n            <img src="assets/imgs/test.png" alt="">\n          </div>\n          <div class="ibImg">\n              <img src="assets/imgs/test.png" alt="">\n          </div>\n          <div class="ibFooter">\n            <div style="    height: 100%;\n            width: 90%;\n            display: flex;\n            justify-content: flex-end;\n            align-items: center;">\n              <div style="\n                  height: 65%;\n                  width: 50%;\n                  display: flex;\n                  justify-content: flex-end;\n                  align-items: flex-end;\n                  font-size: 1.6rem;">\n                <span style="color:#007D69; font-size: 0.5rem;">lps.</span>\n                <span style="font-size:2rem;">88,888</span>\n                <span style=" font-size: 0.5rem;     padding-bottom: 12px;">88</span>\n              </div>\n            <div style="       width: 15%;\n            height: 100%;\n            display: flex;\n            justify-content: flex-end;\n            align-items: center;">\n                <!-- <img style="width:25%; margin-left: 10px; height: 85%;" [src]="item.favorite? \'assets/imgs/fullGreenHeart.svg\':\'assets/imgs/heartBlackB.svg\'" alt="" (click)=\'heartClick($event,item)\'> -->\n                <!-- <div style="width:30%">\n                  <img src="assets/imgs/heartBlackB.svg" alt="" (click)=\'heartClick($event,item)\'> -->\n                <!-- </div> -->\n                <div  style="width:75%">\n                    <img src="assets/imgs/basket.svg" alt="" (click)=\'especialClick($event,item)\'>\n                </div>\n            </div>\n          </div>\n        </div>\n        </div>\n      </ion-scroll>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/beanario/Documents/Ionic_Projects/loncheando/lunchTime/src/pages/sort/sort.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SortPage);
    return SortPage;
}());

//# sourceMappingURL=sort.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__favorites_favorites__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_account__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__basket_basket__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = /** @class */ (function () {
    function TabsPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__favorites_favorites__["a" /* FavoritesPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__account_account__["a" /* AccountPage */];
        this.basketPage = __WEBPACK_IMPORTED_MODULE_6__basket_basket__["a" /* BasketPage */];
    }
    TabsPage.prototype.toggleBasket = function () {
        var loginPageModal = this.modalCtrl.create(this.basketPage);
        loginPageModal.onDidDismiss(function () {
            //on dismiss
        });
        loginPageModal.present();
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'tabs-page',template:/*ion-inline-start:"/Users/beanario/Documents/Ionic_Projects/loncheando/lunchTime/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabIcon="heart"></ion-tab>\n  <ion-tab (ionSelect)=\'toggleBasket()\' tabIcon="basket"></ion-tab>\n  <ion-tab [root]="tab4Root" tabIcon="search"></ion-tab>\n  <ion-tab [root]="tab5Root" tabIcon="account"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/beanario/Documents/Ionic_Projects/loncheando/lunchTime/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__restaurant_restaurant__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(zone, navCtrl) {
        this.zone = zone;
        this.navCtrl = navCtrl;
        this.categorias = [
            { name: 'Todos', active: true },
            { name: 'Postres', active: false },
            { name: 'Café', active: false },
            { name: 'Bebidas', active: false },
            { name: 'Comida China', active: false },
            { name: 'Pizza', active: false },
            { name: 'Hamburguesas', active: false },
            { name: 'Vegetariana', active: false },
            { name: 'Familiar', active: false },
            { name: 'Personal', active: false },
            { name: 'Golosinas', active: false },
            { name: 'Comida Rápida', active: false },
        ];
        this.items = [{ name: 'Ristorante Name', description: 'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.', stars: 5, favorite: true, imageUrl: 'assets/imgs/test.png' },
            { name: 'Ristorante Name', description: 'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.', stars: 5, favorite: true, imageUrl: 'assets/imgs/test.png' },
            { name: 'Ristorante Name', description: 'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.', stars: 5, favorite: true, imageUrl: 'assets/imgs/test.png' },
            { name: 'Ristorante Name', description: 'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.', stars: 5, favorite: true, imageUrl: 'assets/imgs/test.png' },
            { name: 'Ristorante Name', description: 'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.', stars: 5, favorite: true, imageUrl: 'assets/imgs/test.png' },
            { name: 'Ristorante Name', description: 'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.', stars: 5, favorite: true, imageUrl: 'assets/imgs/test.png' },
            { name: 'Ristorante Name', description: 'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.', stars: 5, favorite: true, imageUrl: 'assets/imgs/test.png' },
            { name: 'Ristorante Name', description: 'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.', stars: 5, favorite: true, imageUrl: 'assets/imgs/test.png' },
        ];
        this.childScroll = 'false';
        this.restaurantPage = __WEBPACK_IMPORTED_MODULE_2__restaurant_restaurant__["a" /* RestaurantPage */];
        this.searchIsActive = false;
        this.menuCityActive = false;
    }
    HomePage.prototype.onScroll = function (e) {
        console.log('scroll:' + e);
    };
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        // console.log(this.ionScroll);
        // console.log(document.getElementsByClassName('headerScroll')[0].clientHeight);
        document.getElementById('innerScroll').firstChild['style'].overflowY = 'hidden';
        var contentHeight = document.getElementsByClassName('headerScroll')[0].clientHeight;
        this.ionScroll.addScrollEventListener(function (event) {
            //  console.log(event);
            //  console.log(event.srcElement.scrollTop);
            _this.zone.run(function () {
                if (event.srcElement.scrollTop >= contentHeight) {
                    document.getElementById('innerScroll').firstChild['style'].overflowY = 'auto';
                }
                else {
                    document.getElementById('innerScroll').firstChild['style'].overflowY = 'hidden';
                }
            });
            console.log(_this.childScroll);
        });
        var contentWidth = document.querySelector('#homeScroll .scroll-zoom-wrapper').clientWidth - document.querySelector('#homeScroll .scroll-content').clientWidth;
        // console.log('ancho: '+contentWidth);
        // console.log( document.getElementsByClassName('scroll-zoom-wrapper')[0].clientWidth);
        // console.log(document.getElementsByClassName('scroll-content')[0].clientWidth);
        this.sideScroll.addScrollEventListener(function (event) {
            console.log(event);
            console.log(event.srcElement.scrollLeft);
            _this.zone.run(function () {
                if (event.srcElement.scrollLeft <= 10) {
                    document.getElementById('sideScroll').classList.add('activeLeft');
                }
                else {
                    console.log('entro');
                    document.getElementById('sideScroll').classList.remove('activeLeft');
                    if (event.srcElement.scrollLeft >= contentWidth) {
                        document.getElementById('sideScroll').classList.add('activeRight');
                    }
                    else {
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
    };
    HomePage.prototype.categoryClick = function (categoria) {
        this.categorias.forEach(function (element) {
            element.active = false;
        });
        categoria.active = true;
    };
    HomePage.prototype.goDeep = function (item) {
        this.navCtrl.push(this.restaurantPage, {});
    };
    HomePage.prototype.clickSearch = function () {
        this.searchIsActive = !this.searchIsActive;
    };
    HomePage.prototype.ciudadClick = function () {
        this.menuCityActive = !this.menuCityActive;
        console.log('click');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('scroll'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "ionScroll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('sideScroll'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "sideScroll", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/beanario/Documents/Ionic_Projects/loncheando/lunchTime/src/pages/home/home.html"*/'<ion-content class="mainContent"parallax>\n    <div class="menuCiudad "  [class.active]="this.menuCityActive" >\n      <div class="menuIcon" (click)=\'this.ciudadClick()\'>\n        <ion-icon class=" downIcon" name="ios-arrow-down" ></ion-icon>\n        \n      </div>\n    </div>\n\n    <div class="searchBar" (click)="clickSearch()"  [class.active]="this.searchIsActive">\n        <ion-icon class="searchIcon"   name="search"></ion-icon>\n        <ion-icon  class="closeIcon" name="md-close"></ion-icon>\n       \n      </div>\n      <ion-input *ngIf=\'this.searchIsActive\' style="\n      height: 30px;\n     \n      width: calc(100% - 70px);\n      border-radius: 30px;\n      color: white;\n      margin:0px 40px 0px 30px;\n      position: fixed;\n      top: 5px;\n    \n      \n      z-index: 11111;\n      ">  </ion-input>\n <div class="header" >\n   <div class="h h1">\n        <div class="h11">\n        <div style="    \n        width: calc(100% - 30px);\n    display: flex;\n    align-items: center; padding-left: 10px;">\n        \n        \n        <span>Tegucigalpa, F.M.</span>\n        </div>\n        \n        \n       </div>\n       \n   </div>\n   <div  id=\'sideScroll\' class="h h2 activeLeft">\n      <ion-scroll id="homeScroll" scrollX="true" #sideScroll >\n          <div [class.active]="categoria.active" class="category" *ngFor="let categoria of categorias" (click)=\'categoryClick(categoria)\'>\n            {{categoria.name}}\n          </div>\n        </ion-scroll>\n   </div>\n   </div>\n   <ion-scroll #scroll scrollY=\'true\' style="height:calc(100% - 76px); width:100%; " (ionScroll)="onScroll($event)">\n   <div class="headerScroll" >\n   <div class="h h3">\n      <ion-slides style="width:100vw">\n          <ion-slide class="slideLayout">\n            <!-- <h1>Slide 1</h1> -->\n            <img src="assets/imgs/mainLogoLoncheando.png" alt="">\n          </ion-slide>\n          <ion-slide class="slideLayout">\n            <h1>Slide 2</h1>\n          </ion-slide>\n          <ion-slide class="slideLayout">\n            <h1>Slide 3</h1>\n          </ion-slide>\n        </ion-slides>     \n   </div>\n   <div class="h h4">\n     <div class="lh4" >\n       <img src="assets/imgs/loncheandoLogo.svg" alt=""> <span style="color: #BF2708; font-size: 1.4rem; padding-left: 10px;">food.</span>\n      </div>\n      <div class="rh4" >\n        <span>9:00 a.m. - 10:00 p.m.</span>\n      </div>\n    </div>\n </div>\n <div class="body" >\n  <div class=\'headerBody\'>\n    Random Name\n  </div>\n  <ion-scroll id=\'innerScroll\' >\n    <div class="itemBody" *ngFor="let item of items" (click)=goDeep(item)>\n      <div class="innerContainer">\n      <div style="height: 100%;\n      width: 56px;\n      display: flex;\n      justify-content: center;\n      align-items: center;">\n          <img style="width:100%; height: 56px; border-radius: 5px;     object-fit: cover;" src="{{item.imageUrl}}" alt="">\n      </div>\n      <div style="height: 100%;\n      width: calc(100% - 56px)">\n        <div style="display: flex;\n        justify-content: space-between;\n        align-items: flex-start;\n        height: 15px;\n        margin: 10px 10px 5px 10px;">\n          <div style="font-size:1.3rem; font-weight:500;     white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis;">{{item.name}}</div>\n          <div style="    display: flex;\n          justify-content: center;\n          align-items: flex-end;\n          height: 100%;"> \n            <ion-icon style="font-size:1rem;  color:#EA8A04;" name="star"></ion-icon>\n            <ion-icon style="font-size:1rem;  color:#EA8A04;" name="star"></ion-icon>\n            <ion-icon style="font-size:1rem;  color:#EA8A04;" name="star"></ion-icon>\n            <ion-icon style="font-size:1rem;  color:#CBCCCA;" name="star"></ion-icon>\n            <ion-icon style="font-size:1rem;  color:#CBCCCA;" name="star"></ion-icon>\n          </div>\n        </div>\n        <div class="block-with-text">{{item.description}}</div>\n      </div>\n      <!-- <div style="height: 100%;\n      width: 10%;\n      display: flex;\n      justify-content: center;\n      padding-top: 5px;"> \n      <ion-icon  style="color:#CBCCCA;" name=\'heart\'></ion-icon>  \n    </div> -->\n    </div>\n      \n    </div>\n  </ion-scroll>\n </div>\n</ion-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/beanario/Documents/Ionic_Projects/loncheando/lunchTime/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dishe_dishe__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__special_dish_special_dish__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_page_transitions__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RestaurantPage = /** @class */ (function () {
    function RestaurantPage(nativePageTransitions, modalCtrl, zone, navCtrl, navParams) {
        this.nativePageTransitions = nativePageTransitions;
        this.modalCtrl = modalCtrl;
        this.zone = zone;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [{ name: 'Dish Name', description: 'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.', stars: 5, favorite: false, imageUrl: 'assets/imgs/test.png' },
            { name: 'Dish Name', description: 'es lo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.', stars: 5, favorite: false, imageUrl: 'assets/imgs/test.png' },
            { name: 'Dish Name', description: 'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.', stars: 5, favorite: false, imageUrl: 'assets/imgs/test.png' },
            { name: 'Dish Name', description: 'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.', stars: 5, favorite: false, imageUrl: 'assets/imgs/test.png' },
            { name: 'Dish Name', description: 'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.', stars: 5, favorite: false, imageUrl: 'assets/imgs/test.png' },
            { name: 'Dish Name', description: 'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.', stars: 5, favorite: false, imageUrl: 'assets/imgs/test.png' },
            { name: 'Dish Name', description: 'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.', stars: 5, favorite: false, imageUrl: 'assets/imgs/test.png' },
            { name: 'Dish Name', description: 'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.', stars: 5, favorite: false, imageUrl: 'assets/imgs/test.png' },
        ];
        this.childScroll = 'false';
        this.dish = __WEBPACK_IMPORTED_MODULE_2__dishe_dishe__["a" /* DishePage */];
        this.specialDishPage = __WEBPACK_IMPORTED_MODULE_3__special_dish_special_dish__["a" /* SpecialDishPage */];
        this.categorias = [{ name: 'cate', active: false }, { name: 'cate', active: false }, { name: 'cate', active: false }, { name: 'cate', active: false }, { name: 'cate', active: false }, { name: 'cate', active: false }, { name: 'cate', active: false }, { name: 'cate', active: false }];
        this.isFav = false;
        this.searchIsActive = false;
    }
    RestaurantPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RestaurantPage');
    };
    RestaurantPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        // console.log(this.ionScroll);
        // console.log(document.getElementsByClassName('headerScroll')[0].clientHeight);
        document.getElementById('innerScrollRestaurant').firstChild['style'].overflowY = 'hidden';
        var contentHeight = document.getElementsByClassName('headerScrollRestaurante')[0].clientHeight;
        this.ionScroll.addScrollEventListener(function (event) {
            //  console.log(event);
            //  console.log(event.srcElement.scrollTop);
            _this.zone.run(function () {
                if (event.srcElement.scrollTop >= (contentHeight - 40)) {
                    document.getElementById('innerScrollRestaurant').firstChild['style'].overflowY = 'auto';
                }
                else {
                    document.getElementById('innerScrollRestaurant').firstChild['style'].overflowY = 'hidden';
                }
            });
            console.log(_this.childScroll);
        });
        var contentWidth = document.querySelector('#restaurantScroll .scroll-zoom-wrapper').clientWidth - document.querySelector('#restaurantScroll .scroll-content').clientWidth;
        // console.log('ancho: '+contentWidth);
        // console.log( document.querySelector('#restaurantScroll .scroll-zoom-wrapper').clientWidth);
        // console.log(document.getElementsByClassName('scroll-content')[0].clientWidth);
        this.sideScroll.addScrollEventListener(function (event) {
            console.log(event);
            console.log(event.srcElement.scrollLeft);
            _this.zone.run(function () {
                if (event.srcElement.scrollLeft <= 10) {
                    document.getElementById('sideScrollRestaurant').classList.add('activeLeft');
                }
                else {
                    console.log('entro');
                    document.getElementById('sideScrollRestaurant').classList.remove('activeLeft');
                    if (event.srcElement.scrollLeft >= contentWidth) {
                        document.getElementById('sideScrollRestaurant').classList.add('activeRight');
                    }
                    else {
                        document.getElementById('sideScrollRestaurant').classList.remove('activeRight');
                    }
                }
            });
        });
    };
    RestaurantPage.prototype.ionViewWillLeave = function () {
        this.nativePageTransitions.cancelPendingTransition();
    };
    RestaurantPage.prototype.categoryClick = function (categoria) {
        if (categoria.active == true)
            categoria.active = false;
        else if (categoria.active == false)
            categoria.active = true;
    };
    RestaurantPage.prototype.goDeep = function (item) {
        // this.navCtrl.push(this.dish, {
        //   //parameters
        // });
        var loginPageModal = this.modalCtrl.create(this.dish);
        loginPageModal.onDidDismiss(function () {
            console.log('dissmiss');
            //on dissmiss
        });
        loginPageModal.present();
    };
    RestaurantPage.prototype.heartClick = function (ev, item) {
        ev.stopPropagation();
        ev.preventDefault();
        console.log('clicked favorite');
        item.favorite = !item.favorite;
    };
    RestaurantPage.prototype.especialClick = function (ev) {
        ev.stopPropagation();
        ev.preventDefault();
        var loginPageModal = this.modalCtrl.create(this.specialDishPage);
        loginPageModal.onDidDismiss(function () {
            //on dissmiss
        });
        loginPageModal.present();
    };
    RestaurantPage.prototype.clickSearch = function () {
        this.searchIsActive = !this.searchIsActive;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('scroll'),
        __metadata("design:type", Object)
    ], RestaurantPage.prototype, "ionScroll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('sideScroll'),
        __metadata("design:type", Object)
    ], RestaurantPage.prototype, "sideScroll", void 0);
    RestaurantPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-restaurant',template:/*ion-inline-start:"/Users/beanario/Documents/Ionic_Projects/loncheando/lunchTime/src/pages/restaurant/restaurant.html"*/'<ion-content class="mainContent">\n  \n  <div class="header" >\n    <div class="h h1">\n      <div style="width: 100%;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;">\n        <ion-icon navPop style="padding-right:15px; color: #BF2708;" name="ios-arrow-back"></ion-icon>\n        <span>Ristorante Name</span>\n      </div>\n      <div style="    display: flex;\n      justify-content: center;\n      align-items: center;\n      height: 100%;"> \n        <ion-icon style="font-size:1.5rem;  color:#EA8A04;" name="star"></ion-icon>\n        <ion-icon style="font-size:1.5rem;  color:#EA8A04;" name="star"></ion-icon>\n        <ion-icon style="font-size:1.5rem;  color:#EA8A04;" name="star"></ion-icon>\n        <ion-icon style="font-size:1.5rem;  color:#CBCCCA;" name="star"></ion-icon>\n        <ion-icon style="font-size:1.5rem;  color:#CBCCCA;" name="star"></ion-icon>\n      </div>\n    </div>\n  </div>\n  <ion-scroll #scroll scrollY=\'true\' style="height:calc(100% - 36px); width:100%; " (ionScroll)="onScroll($event)">\n    <div class="headerScrollRestaurante" >\n    <div class="h h2">\n      <div class="innerH2">\n      <div class="footer"></div>  \n      <img src="assets/imgs/test.png" alt="">\n      </div>\n      <div class="h22">\n          <div style="color:white; height: 15px;">88:88 a.m. - 88:88 p.m. </div>\n          <div class="rh333">\n            <img src="assets/imgs/time.svg" alt="">\n            <span>88m</span>\n            <img src="assets/imgs/motoGreen.svg" alt="">\n            <span>L.88</span>\n          </div>\n        </div>\n    </div>\n    <div class="h h3">\n      <div class="lh3">\n        <img src="assets/imgs/test.png" alt="">\n      </div>\n      <div class="rh3">\n      \n      \n        <div class="lh33">\n            <div style="color:#60665A" class="lh333">Esta es la dirección del restaurante en x ciudad</div>\n          </div>\n      </div>\n    </div>\n    <div id=\'sideScrollRestaurant\' class="h h4 activeLeft" >\n        <ion-scroll id=\'restaurantScroll\' #sideScroll scrollX="true">\n            <div [class.active]="categoria.active" class="category" *ngFor="let categoria of categorias" (click)=\'categoryClick(categoria)\'>\n              {{categoria.name}}\n            </div>\n          </ion-scroll>\n     </div>\n  </div>\n  <div class="body" >\n      <div class="headerBody">\n          <div class="h11">\n              <div style="    \n              width: calc(100% - 30px);\n          display: flex;\n          align-items: center;">\n              <span style="font-size:1.8rem; font-weight: bold;">Menu</span>\n              </div>\n              <ion-input *ngIf=\'this.searchIsActive\' style="\n                  height: 30px;\n                 \n                  width: 100%;\n                  border-radius: 30px;\n                  color: white;\n                  margin-right: 15px;\n                  position: absolute;\n                  top: 50%;\n                  margin-top: -15px;\n                  padding-right: 15px;\n                  z-index: 111;\n                  ">  </ion-input>\n              <div class="searchBar" (click)="clickSearch()"  [class.active]="this.searchIsActive">\n                <ion-icon class="searchIcon"   name="search"></ion-icon>\n                <ion-icon  class="closeIcon" name="md-close"></ion-icon>\n              </div>\n             </div>\n          <!-- <div style="    width: 90%;\n          height: 100%; display: flex; align-items: center;" >\n           \n           \n          </div>\n          <div style="    width: 25px;\n          height: 25px; display: flex; align-items: center;  justify-content: center;\n          border-radius: 50%;\n          background-color: gray; \n          color: white; \n          align-self: center;">\n            <ion-icon  name="search"></ion-icon>\n          </div> -->\n         </div>\n         <ion-scroll id=\'innerScrollRestaurant\'>\n            <div class="itemBody" *ngFor="let item of items" (click)=goDeep(item)>\n              <div class="innerContainer">\n             \n              <div style="height: 100%;\n              width: calc(67% - 56px)">\n                <div style="display: flex;\n                flex-grow: 1;\n                justify-content: space-between;\n                align-items: flex-start;\n                height: 15px;\n                margin: 10px 0px 5px 0px;">\n                  <div style="font-size:1.3rem; font-weight:500;     white-space: nowrap;\n                  overflow: hidden;\n                  text-overflow: ellipsis;">{{item.name}}</div>\n                 \n                </div>\n                <div class="block-with-text" >{{item.description}}</div>\n              </div>\n              <div  *ngIf="true" style="height: 100%;\n              width: 56px;\n              display: flex;\n              justify-content: center;\n              align-items: center;">\n                  <img style="width:100%; height: 56px; border-radius: 5px;     object-fit: cover; " src="{{item.imageUrl}}" alt="">\n              </div>\n              <div style="height: 100%;\n              width: 33%;\n              position: relative;\n              display: flex;\n              justify-content: center;\n              padding: 10px 15px 10px 0px;\n              flex-direction: column;"\n              > \n              <div style="    width: 100%;\n              height: 35%;\n              justify-content: flex-end;\n              position: relative;\n              display: flex;\n              align-items: flex-end;">\n                <img style="width:25%; margin-left: 10px; height: 85%;" [src]="item.favorite? \'assets/imgs/fullGreenHeart.svg\':\'assets/imgs/heartBlackB.svg\'" alt="" (click)=\'heartClick($event,item)\'>\n                <img style="width:25%; margin-left: 10px; height: 100%;" src="assets/imgs/basket.svg" alt="" (click)=\'especialClick($event,item)\'>\n              </div>\n              <div style="width: 100%;\n              height: 65%;\n              display: flex;\n              justify-content: flex-end;\n              align-items: flex-end;\n              font-size: 1.6rem;">\n                <span style="color:#007D69; font-size: 0.5rem;">lps.</span>\n                <span style="letter-spacing: -1px; font-size:1.8rem;">88,888</span>\n                <span style=" font-size: 0.5rem;  letter-spacing: -1px;   padding-bottom: 12px;">88</span>\n              </div>\n            </div>\n            </div>\n              \n            </div>\n          </ion-scroll>\n  </div>\n  </ion-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/beanario/Documents/Ionic_Projects/loncheando/lunchTime/src/pages/restaurant/restaurant.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_native_page_transitions__["a" /* NativePageTransitions */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RestaurantPage);
    return RestaurantPage;
}());

//# sourceMappingURL=restaurant.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FavoritesPage = /** @class */ (function () {
    function FavoritesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // resFavoritos = [7];
        this.resFavoritos = [1, 2, 3, 4, 5, 6, 7];
    }
    FavoritesPage.prototype.ionViewDidLoad = function () {
    };
    FavoritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorites',template:/*ion-inline-start:"/Users/beanario/Documents/Ionic_Projects/loncheando/lunchTime/src/pages/favorites/favorites.html"*/'<ion-content class="main-content">\n  <div class="headerTop">\n      Favoritos\n  </div>\n  <div class="body">\n    <div class="bodyHeader">\n        <ion-scroll scrollX=\'true\'>\n            <div class="imgContainer" *ngFor=\'let favorito of resFavoritos\'>\n              <img src="assets/imgs/test.png" alt="">\n            </div>\n          </ion-scroll>\n    </div>\n    <ion-grid class="bodyContainer">\n      <ion-scroll scrollY="true" >\n        <ion-row>\n          <ion-col style="background-color:white; padding: 0px;"  col-6 col-md-4 col-xl-3 *ngFor="let favorito of resFavoritos">\n            <div class="foodContainer">\n              <div class="header">\n                  <span>Titulo del Plato</span>\n                  <ion-icon name=\'close\'></ion-icon>\n              </div>\n              <div class="body">\n                  <img src="assets/imgs/test.png" alt="">\n              </div>\n              <div class="footer">\n                <div class="price">\n                    <span style="    color: #007D69;  font-size: 1rem;">lps.</span>\n                <span style=" font-size: 2rem; letter-spacing: -1px;">88,888</span>\n                <span style=" font-size: 1rem;     padding-bottom: 12px; letter-spacing: -1px;">88</span>\n                </div>\n                <div>\n                    <img  src="assets/imgs/basket.svg" alt="" (click)=\'especialClick($event,item)\'>\n                </div>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-scroll>\n    </ion-grid>\n\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/beanario/Documents/Ionic_Projects/loncheando/lunchTime/src/pages/favorites/favorites.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], FavoritesPage);
    return FavoritesPage;
}());

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sort_sort__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.prices = [
            { name: 'Menor a L.100 ', value: 0, selected: false },
            { name: 'L.100 - L.200', value: 0, selected: false },
            { name: 'L.200 - L.300', value: 0, selected: false },
            { name: 'L.300 - L.400', value: 0, selected: false },
            { name: 'L.400 - L.500', value: 0, selected: false },
            { name: 'Mayor a L.500', value: 0, selected: false },
        ];
        this.options = [
            { name: 'Postres' },
            { name: 'Café' },
            { name: 'Bebidas' },
            { name: 'Comida China' },
            { name: 'Pizza' },
            { name: 'Hamburguesas' },
            { name: 'Vegetariana' },
            { name: 'Familiar' },
            { name: 'Personal' },
            { name: 'Golosinas' },
            { name: 'Comida Rápida' },
        ];
        this.delays = [
            { name: '15m', value: 0, selected: false },
            { name: '30m', value: 0, selected: false },
            { name: '45m', value: 0, selected: false },
        ];
        this.times = [
            { imgUrl: 'assets/imgs/sun.svg', imgAlterUrl: 'assets/imgs/sunActive.svg', selected: false, label: 'Desayunos' },
            { imgUrl: 'assets/imgs/lunch.svg', imgAlterUrl: 'assets/imgs/lunchActive.svg', selected: false, label: 'Almuerzos' },
            { imgUrl: 'assets/imgs/moon.svg', imgAlterUrl: 'assets/imgs/moonActive.svg', selected: false, label: 'Cenas' }
        ];
        this.selectedTime = [];
        this.sortPage = __WEBPACK_IMPORTED_MODULE_2__sort_sort__["a" /* SortPage */];
    }
    SearchPage.prototype.ionViewDidLoad = function () {
    };
    SearchPage.prototype.selectPrice = function (price) {
        price.selected = !price.selected;
    };
    SearchPage.prototype.selectTime = function (time) {
        time.selected = !time.selected;
        if (time.selected) {
            this.selectedTime.push(time.label);
        }
        else {
            // this.selectedTime.splice(this.selectedTime.indexOf(time.label));
            this.selectedTime = this.selectedTime.filter(function (item) { return item !== time.label; });
        }
    };
    SearchPage.prototype.goSort = function () {
        this.navCtrl.push(this.sortPage, {});
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/beanario/Documents/Ionic_Projects/loncheando/lunchTime/src/pages/search/search.html"*/'<ion-content class="mainContainer">\n  <div class="headerContainer">\n    Filtros\n  </div>\n  <div class="bodyContainer">\n    <div class="insideBodyContainer izquierdo">\n      <div class="top">\n        <div class="header">Precio</div>\n        <div class="body">\n          <ion-scroll scrollY=\'true\' style="height:100%; width:100%; display: flex; align-items: center; ">\n              <div *ngFor=\'let price of prices\' class="priceRange" [class.active]=\'price.selected\' (click)=\'selectPrice(price)\'>\n                {{price.name}}\n              </div>\n          </ion-scroll>    \n        </div>\n      </div>\n      <div class="bottom">\n        <div class="header">Tiempo</div>\n        <div class="body">\n          <div class="delay">\n              <ion-scroll scrollX=\'true\' style="height:100%; width:100%; display: flex; align-items: center; ">\n                <div *ngFor=\'let delay of delays\' class="delayItem" [class.active]=\'delay.selected\' (click)=\'selectPrice(delay)\'> \n                  {{delay.name}}\n                </div>\n                </ion-scroll>\n          </div>\n          <div class="dayTime">\n            <div class="dayContainer">\n              <div *ngFor=\'let time of times\' (click)=\'selectTime(time)\' class="imgContainer">\n                <img [src]="time.selected? time.imgAlterUrl : time.imgUrl" alt="">\n              </div>\n            </div>\n            <div class="dayContainerLabel" *ngIf=\'this.selectedTime.length != 0\'>\n              <div *ngFor=\'let ltime of selectedTime\'>\n                {{ltime}}\n\n              </div> \n              </div>\n            <div class="dayContainerLabel filter"  *ngIf=\'this.selectedTime.length == 0\'>\n            Seleccione un filtro\n            </div>\n          </div>  \n        </div>\n      </div>\n    </div>\n    <div class="insideBodyContainer derecho ">\n        <div class="categoria">\n        <div class="header">Categoría</div>\n        <div class="body">\n          <ion-scroll scrollY=\'true\' style="height:100%; width:100%; display: flex; align-items: center; ">\n            <ion-item  no-lines style=\'min-width: 100px;\' *ngFor=\'let option of options\'>\n                <ion-label>{{option.name}}</ion-label>\n                <ion-checkbox style="margin: 8px 8px 8px 2px;"  ></ion-checkbox>\n              </ion-item>\n            </ion-scroll>              \n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="footerContainer" (click)=\'goSort()\'>\n    Filtrar\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/beanario/Documents/Ionic_Projects/loncheando/lunchTime/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountPage = /** @class */ (function () {
    function AccountPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AccountPage.prototype.ionViewDidLoad = function () {
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"/Users/beanario/Documents/Ionic_Projects/loncheando/lunchTime/src/pages/account/account.html"*/'<ion-content class="mainContent" >\n    <div class="header">\n      <span>User Name</span>\n      <span class="points">888888 <span>puntos</span></span>\n    </div>\n    <div class="body">\n        <div class="dona">\n            <svg viewbox="0,0 200,200" width="100%" height="100%">\n  \n                <!-- the path to be animated along -->  \n                <path \n                  class="track"\n                  fill="none"\n                  stroke-width="0"\n                  d="M 125 125 m -87.5, 0 a 75,75 0 1,0 175,0 a 75,75 0 1,0 -175,0"\n                />\n                \n                <!-- the mover -->\n                \n                \n              </svg>\n              <div class="a a1">\n                  <img src="assets/imgs/a1.svg" alt="">\n                  <span  class="animated fadeInUp delay quick" >Direcciones</span>\n              </div>\n              <div class="a a2">\n                  <img src="assets/imgs/a2.svg" alt="">\n                  <span class="animated fadeInDown delay quick">Historial</span>\n              </div>\n              <div class="a a3">\n                <img src="assets/imgs/a3.svg" alt="">\n                <span class="animated fadeInDown delay quick">Promociones</span>\n              </div>\n              <div class="a a4">\n                <img src="assets/imgs/a4.svg" alt="">\n                <span class="animated fadeInUp delay quick">Otros</span>\n              </div>\n              <div class="a a5">\n                <img src="assets/imgs/a5.svg" alt="">\n                <span class="animated fadeInUp delay quick">Tarjetas D/C</span>\n              </div>\n              \n              <img class="monch" src="assets/imgs/accountMuch.svg" alt="">\n             \n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/beanario/Documents/Ionic_Projects/loncheando/lunchTime/src/pages/account/account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BasketPage = /** @class */ (function () {
    function BasketPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.aceptar = true;
        this.togglePago = false;
        this.tarjetas = [{ number: '8888-8888-8888-8888', selected: true }, { number: '8888-888888-88888', selected: false }, { number: '8888-8888-7788-8888', selected: false }, { number: '8888-888778-88888', selected: false }];
        this.pagos = [{ name: 'Efectivo', active: true }, { name: 'Tarjeta', active: false }, { name: 'Otro', active: false }];
        this.items = [{ imgUrl: 'assets/imgs/test.png', cant: 0 }, { imgUrl: 'assets/imgs/test.png', cant: 0 }, { imgUrl: 'assets/imgs/test.png', cant: 0 }, { imgUrl: 'assets/imgs/test.png', cant: 0 }, { imgUrl: 'assets/imgs/test.png', cant: 0 }];
    }
    BasketPage.prototype.ionViewDidLoad = function () {
    };
    BasketPage.prototype.addCant = function (item) {
        item.cant = item.cant + 1;
    };
    BasketPage.prototype.removeCant = function (item) {
        if (item.cant != 0)
            item.cant = item.cant - 1;
    };
    BasketPage.prototype.pagoClick = function (pago) {
        this.pagos.forEach(function (element) {
            element.active = false;
        });
        pago.active = true;
        if (pago.name == 'Tarjeta') {
            this.togglePago = true;
        }
        else if (pago.name == 'Otro') {
            this.togglePago = true;
        }
        else {
            this.togglePago = false;
        }
    };
    BasketPage.prototype.acceptClick = function () {
        this.togglePago = false;
    };
    BasketPage.prototype.enableAceptar = function () {
        console.log('changed');
        this.aceptar = false;
    };
    BasketPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-basket',template:/*ion-inline-start:"/Users/beanario/Documents/Ionic_Projects/loncheando/lunchTime/src/pages/basket/basket.html"*/'<ion-content class="mainContent">\n  <div class="header">\n    <div class="h1">\n      <div class="h11">\n        <ion-icon navPop style="padding-right:15px; color: #BF2708;" name="ios-arrow-back"></ion-icon>\n        <div>\n          <div>\n\n            <ion-input placeholder=\'RTN\'></ion-input>\n\n            <ion-input placeholder=\'Nombre de Factura\'></ion-input>\n          </div>\n\n\n        </div>\n\n      </div>\n      <div class="h12">\n        <img src="assets/imgs/locationIcon.svg" alt="">\n      </div>\n    </div>\n    <div class="h2">\n      <div class="h21">Forma de pago:</div>\n      <div class="h22">\n        <div *ngFor=\'let pago of pagos\' class="pagos" [class.active]=\'pago.active\' (click)=\'pagoClick(pago)\' >\n          {{pago.name}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="body">\n    <div class="pagoList" [class.active]=\'togglePago\'>\n      <div class="whiteHeader">\n          <ion-list mode=\'ios\' no-lines radio-group [(ngModel)]="this.card" >\n              <ion-item>\n                  <button class="buttonAdd" color="light"  mode=\'ios\' ion-button> <ion-icon name=\'add\'></ion-icon> Añadir Tarjeta</button>\n                </ion-item>\n              <ion-item *ngFor=\'let card of tarjetas\' >\n                <ion-label>{{card.number}}</ion-label>\n                <ion-radio  [value]="card.number"  item-left (click)=\'enableAceptar()\'></ion-radio>\n              </ion-item>\n             \n          </ion-list>\n       <button class="buttonAceptar" ion-button mode=\'ios\' [disabled]=\'aceptar\' (click)=\'acceptClick()\'> Aceptar</button>\n      </div>\n    </div>\n    <div style="height: 10%;\n       width: 100%;\n       color: #212C32;\n       font-size: 1.8rem;\n       font-weight: bold;\n       display: flex;\n       align-items: flex-end;\n       justify-content: flex-start;\n       padding: 0px 0px 5px 15px;">Tu\n      Canasta</div>\n    <div style="height: 80%; width: 100%;">\n      <ion-list style="height:100%; width: 100%;" no-lines>\n        <ion-scroll scrollY="true" style="    height: 100%;\n         width: 100%;">\n          <ion-item-sliding *ngFor="let item of items" style="margin-bottom: 5px;  ">\n            <ion-item>\n              <div style="width:100%; height:76px; background-color:white; margin-bottom: 3px; display: flex;">\n                <!-- <div style="    height: 100%;\n                  width: 5%;\n                  display: flex;\n                  justify-content: center;\n                  padding-top: 5px;">\n                    <ion-icon style="font-size:1.5rem; font-weight:bold;" name="close"></ion-icon>\n                  </div> -->\n                <div style="width: 22%;\n                  height: 100%;\n                  justify-content: center;\n                  align-items: center;\n                  display: flex;">\n                  <img style="width:56px; height:56px; border-radius: 5px; object-fit: cover;" [src]="item.imgUrl" alt="">\n                  <img src="" alt="">\n                </div>\n                <div style="    width: 50%;\n                  height: calc(100% - 20px);\n                  display: flex;\n                  flex-direction: column;\n                  text-align: justify;\n                  margin: 9px 0px;\n                  overflow: hidden;\n                  ">\n                  <div style="font-size:1.5rem; color:#212C32;white-space: nowrap;\n                     overflow: hidden;\n                     text-overflow: ellipsis; font-weight: bold; ">Nombre\n                    Plato</div>\n                  <div class="block-with-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo odit\n                    minima doloremque aliquam optio suscipit harum maxime fuga non eaque saepe ullam et fugit, iure\n                    aspernatur recusandae similique inventore nobis?</div>\n                </div>\n                <div style="width: 28%;\n                  height: 100%;\n                  display: flex;\n                  flex-direction: column;">\n                  <div style="  display: flex;  width: 100%; height: 50%; justify-content: flex-end;">\n                    <div style="height: 100%;\n                      display: flex;\n                      width: 15%;\n                      justify-content: flex-end;\n                      align-items: center;\n                      font-size: 1.5rem;">\n                      <ion-icon name=\'add\' (click)="addCant(item)"></ion-icon>\n                    </div>\n                    <div style="width: 40%;\n                      height: 100%;\n                      display: flex;\n                      justify-content: center;\n                      align-items: center;\n                      font-size: 1.5rem;">{{item.cant}}</div>\n                    <div style="width: 15%;\n                      height: 100%;\n                      display: flex;\n                      justify-content: flex-start;\n                      font-size: 1.5rem;\n                      align-items: center;">\n                      <ion-icon name=\'remove\' (click)="removeCant(item)"></ion-icon>\n                    </div>\n\n\n                  </div>\n                  <div style="     width: 100%;\n                    height: 50%;\n                    display: flex;\n                    justify-content: flex-end;\n                    align-items: center;\n                   \n                    font-size: 2rem;\n                    color:#212C32;">\n                    <span style="font-size:0.8rem; color: #00794E">lps.</span>\n                    <span>8888</span>\n                    <span style="font-size:0.8rem; align-self: self-start;">88</span>\n                  </div>\n                </div>\n              </div>\n            </ion-item>\n            <!-- <ion-item-options side="left">\n              <button ion-button (click)="favorite(item)">Favorite</button>\n              <button ion-button color="danger" (click)="share(item)">Share</button>\n            </ion-item-options> -->\n\n            <ion-item-options side="right">\n              <button color="danger" ion-button (click)="unread(item)">Borrar</button>\n            </ion-item-options>\n\n          </ion-item-sliding>\n        </ion-scroll>\n      </ion-list>\n    </div>\n    <div style="    height: 10%;\n       width: 100%;\n       display: flex;\n       justify-content: space-between;\n       padding: 0px 15px;\n       align-items: flex-end;">\n\n      <div style="color: #212C32;\n          text-align: end;\n          font-weight: bold;\n          font-size: 1.2rem;\n          ">\n        <span>TOTAL:</span>\n      </div>\n      <div style="    color: #212C32;\n          font-size: 3rem;\n          font-weight: bold;\n          text-align: end;">\n        <span style="font-size: 1rem;\n            color: #00794E;\n            font-weight: bold;\n        ">Lps.</span>\n        <span>8,888.88</span>\n      </div>\n\n    </div>\n  </div>\n  <div class="footer">\n    <div class="f1">\n      Realizar Pedido\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/beanario/Documents/Ionic_Projects/loncheando/lunchTime/src/pages/basket/basket.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
    ], BasketPage);
    return BasketPage;
    var _a, _b;
}());

//# sourceMappingURL=basket.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(228);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_account_account__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_favorites_favorites__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_restaurant_restaurant__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_search_search__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_basket_basket__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__directives_parallax_parallax__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_dishe_dishe__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_special_dish_special_dish__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_native_page_transitions__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_sort_sort_module__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_basket_basket__["a" /* BasketPage */],
                __WEBPACK_IMPORTED_MODULE_15__directives_parallax_parallax__["a" /* ParallaxHeaderDirective */],
                __WEBPACK_IMPORTED_MODULE_12__pages_restaurant_restaurant__["a" /* RestaurantPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_dishe_dishe__["a" /* DishePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_special_dish_special_dish__["a" /* SpecialDishPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_19__pages_sort_sort_module__["SortPageModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    scrollPadding: false,
                    scrollAssist: true,
                    autoFocusAssist: false
                }, {
                    links: [
                        { loadChildren: '../pages/cards/cards.module#CardsPageModule', name: 'CardsPage', segment: 'cards', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/directions/directions.module#DirectionsPageModule', name: 'DirectionsPage', segment: 'directions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/history/history.module#HistoryPageModule', name: 'HistoryPage', segment: 'history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/options/options.module#OptionsPageModule', name: 'OptionsPage', segment: 'options', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/promos/promos.module#PromosPageModule', name: 'PromosPage', segment: 'promos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sort/sort.module#SortPageModule', name: 'SortPage', segment: 'sort', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_favorites_favorites__["a" /* FavoritesPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_basket_basket__["a" /* BasketPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_restaurant_restaurant__["a" /* RestaurantPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_dishe_dishe__["a" /* DishePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_special_dish_special_dish__["a" /* SpecialDishPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.overlaysWebView(false);
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/beanario/Documents/Ionic_Projects/loncheando/lunchTime/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/beanario/Documents/Ionic_Projects/loncheando/lunchTime/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/beanario/Documents/Ionic_Projects/loncheando/lunchTime/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/beanario/Documents/Ionic_Projects/loncheando/lunchTime/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/beanario/Documents/Ionic_Projects/loncheando/lunchTime/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/beanario/Documents/Ionic_Projects/loncheando/lunchTime/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParallaxHeaderDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParallaxHeaderDirective = /** @class */ (function () {
    function ParallaxHeaderDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    ParallaxHeaderDirective.prototype.ngOnInit = function () {
        console.log('parallax here');
        var content = this.element.nativeElement.getElementsByClassName('scroll-content')[0];
        this.header = content.getElementsByClassName('header')[0];
        var mainContent = content.getElementsByClassName('body')[0];
        this.headerHeight = this.header.clientHeight;
        // this.renderer.setElementStyle(this.header, 'webkitTransformOrigin', 'center bottom');
        // this.renderer.setElementStyle(this.header, 'background-size', 'cover');
        // this.renderer.setElementStyle(mainContent, 'position', 'absolute');
    };
    ParallaxHeaderDirective.prototype.onWindowResize = function (ev) {
        this.headerHeight = this.header.clientHeight;
    };
    ParallaxHeaderDirective.prototype.onContentScroll = function (ev) {
        var _this = this;
        ev.domWrite(function () {
            _this.updateParallaxHeader(ev);
        });
    };
    ParallaxHeaderDirective.prototype.updateParallaxHeader = function (ev) {
        console.log(ev.scrollTop);
        console.log(this.headerHeight);
        if (ev.scrollTop == this.headerHeight) {
            console.log('test');
        }
        if (ev.scrollTop >= 0) {
            this.translateAmt = ev.scrollTop / 6;
            this.scaleAmt = 1;
        }
        else {
            this.translateAmt = 0;
            this.scaleAmt = -ev.scrollTop / this.headerHeight + 1;
        }
        // this.renderer.setElementStyle(this.header, 'webkitTransform', 'translate3d(0,'+this.translateAmt+'px,0) scale('+this.scaleAmt+','+this.scaleAmt+')');
    };
    ParallaxHeaderDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[parallax]',
            host: {
                '(ionScroll)': 'onContentScroll($event)',
                '(window:resize)': 'onWindowResize($event)'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], ParallaxHeaderDirective);
    return ParallaxHeaderDirective;
}());

//# sourceMappingURL=parallax.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecialDishPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpecialDishPage = /** @class */ (function () {
    function SpecialDishPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.isFav = false;
        this.step = 0;
        this.options = [
            { name: 'Opción 1 ', isChecked: true },
            { name: 'Opción 2 ', isChecked: false },
            { name: 'Opción 3 ', isChecked: false },
        ];
        this.selecciones = [
            { name: 'Array 1', opciones: [
                    { name: 'Opción 1 ', isChecked: true },
                    { name: 'Opción 2 ', isChecked: false },
                    { name: 'Opción 3 ', isChecked: false },
                ] },
            { name: 'Array 2', opciones: [
                    { name: 'Opción 1 ', isChecked: true },
                    { name: 'Opción 2 ', isChecked: false },
                    { name: 'Opción 3 ', isChecked: false },
                ] },
            { name: 'Array 3', opciones: [
                    { name: 'Opción 1 ', isChecked: true },
                    { name: 'Opción 2 ', isChecked: false },
                    { name: 'Opción 3 ', isChecked: false },
                ] },
        ];
    }
    SpecialDishPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SpecialDishPage');
    };
    SpecialDishPage.prototype.heartClick = function () {
        this.isFav = !this.isFav;
    };
    SpecialDishPage.prototype.addToCart = function () {
        console.log('addtocart clicked');
        this.navCtrl.pop();
    };
    SpecialDishPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-special-dish',template:/*ion-inline-start:"/Users/beanario/Documents/Ionic_Projects/loncheando/lunchTime/src/pages/special-dish/special-dish.html"*/'<ion-content class="mainContent">\n    <div class="header" >\n      <div class="h h1">\n        <div style="white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;">\n          <ion-icon navPop style="padding-right:15px; color: #BF2708;" name="arrow-back"></ion-icon>\n          <span>Dish Name</span>\n        </div>\n        <div style="    display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 100%;"> \n          <ion-icon style="font-size:1.5rem;  color:#EA8A04;" name="star"></ion-icon>\n          <ion-icon style="font-size:1.5rem;  color:#EA8A04;" name="star"></ion-icon>\n          <ion-icon style="font-size:1.5rem;  color:#EA8A04;" name="star"></ion-icon>\n          <ion-icon style="font-size:1.5rem;  color:#CBCCCA;" name="star"></ion-icon>\n          <ion-icon style="font-size:1.5rem;  color:#CBCCCA;" name="star"></ion-icon>\n        </div>\n      </div>\n      \n    \n    </div>\n    <div class="body" >\n        <div class="mainTitle">\n            Personalizar\n          </div>\n      <ion-scroll scrollY="true" style="height: 100%; width:100%;">\n       \n       \n        <div class="b1">\n            <div class="title">Extras 1</div> \n\n        <ion-grid>\n          <ion-row>\n            <ion-col col-6 col-md-4 col-xl-3 *ngFor=\'let option of options\' >\n          <ion-item  no-lines style=\'min-width: 100px;\'>\n            <ion-label>{{option.name}}</ion-label>\n            <ion-checkbox style="margin:0px;" item-right ></ion-checkbox>\n          </ion-item>\n        </ion-col>\n        </ion-row>\n        </ion-grid>\n        \n        \n       \n      </div>\n        <div class="b1">\n            <div class="title">Extras 2</div> \n\n            <ion-grid>\n                <ion-row radio-group [(ngModel)]="this.option">\n                    <ion-col style="flex-direction: row; display:flex;" col-6 col-md-4 col-xl-3 *ngFor=\'let option of options\'>\n                        <ion-label>{{option.name}}</ion-label>\n                        <ion-radio [value]="option.name"></ion-radio>\n                      </ion-col >\n                  </ion-row>\n                </ion-grid>\n        </div>\n        <div class="b1">\n            <div class="title">Extras 3</div> \n            <ion-grid>\n              <!-- <ion-row [(ngModel)]="this.option"> -->\n                <ion-row >\n                  <ion-col col-6 col-md-4 col-xl-3 *ngFor=\'let option of selecciones; let i = index;\' >\n                    <ion-item  no-lines>\n                      <!-- <ion-label>{{option.name}} </ion-label> -->\n                      <ion-select style="width:100%; max-width: 100%;" interface=\'popover\' placeholder=\'{{option.name}}\' [(ngModel)]="this.option.opciones[j]">\n                          <ion-option *ngFor=\'let select of option.opciones; let j = index;\'  [value]="select">{{select.name}}</ion-option>\n                          \n                        </ion-select>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </div>\n        <div class="b1">\n            <div class="title">Extras 4</div> \n            <ion-item style="height:100%; width:100%;">\n                <ion-range step=\'20\' snaps="true" min=\'0\' max=\'100\' [(ngModel)]="step" color="primary" pin="true">\n                    <ion-label range-left>0</ion-label>\n                    <ion-label range-right>100</ion-label>\n                </ion-range>\n            </ion-item>\n        </div>\n      </ion-scroll>\n    </div>\n    <div class="footer">\n        <div style="    height: 40%;\n        width: 100%;\n        display: flex;\n        justify-content: space-between;\n        padding: 0px 15px;\n        align-items: flex-end;">\n        \n           <div style="color: #212C32;\n           text-align: end;\n           font-weight: bold;\n           font-size: 1.2rem;\n           ">\n             <span>TOTAL:</span>\n           </div>\n           <div style="    color: #212C32;\n           font-size: 3rem;\n           font-weight: bold;\n           text-align: end;">\n             <span style="font-size: 1rem;\n             color: #00794E;\n             font-weight: bold;\n         ">Lps.</span>\n             <span>8,888.88</span>\n           </div>\n        \n       </div>\n      <div class="f1" (click)=\'addToCart()\'>\n       <span>Añadir</span> \n      </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/beanario/Documents/Ionic_Projects/loncheando/lunchTime/src/pages/special-dish/special-dish.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SpecialDishPage);
    return SpecialDishPage;
}());

//# sourceMappingURL=special-dish.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DishePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__special_dish_special_dish__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_page_transitions__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DishePage = /** @class */ (function () {
    function DishePage(nativePageTransitions, modalCtrl, navCtrl, navParams) {
        this.nativePageTransitions = nativePageTransitions;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.isFav = false;
        this.specialDishPage = __WEBPACK_IMPORTED_MODULE_2__special_dish_special_dish__["a" /* SpecialDishPage */];
    }
    DishePage.prototype.ionViewWillLeave = function () {
        this.nativePageTransitions.cancelPendingTransition();
    };
    DishePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DishePage');
    };
    DishePage.prototype.heartClick = function () {
        this.isFav = !this.isFav;
    };
    DishePage.prototype.especialClick = function () {
        var loginPageModal = this.modalCtrl.create(this.specialDishPage);
        loginPageModal.onDidDismiss(function () {
            //on dissmiss
        });
        loginPageModal.present();
    };
    DishePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dishe',template:/*ion-inline-start:"/Users/beanario/Documents/Ionic_Projects/loncheando/lunchTime/src/pages/dishe/dishe.html"*/'\n<ion-content class="mainContent">\n    <div class="header" >\n      <div class="h h1">\n        <div style="white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;">\n          <ion-icon navPop style="padding-right:15px; color: #BF2708;" name="ios-arrow-back"></ion-icon>\n          <span>Dish Name</span>\n        </div>\n        <div style="    display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 100%;"> \n          <ion-icon style="font-size:1.5rem;  color:#EA8A04;" name="star"></ion-icon>\n          <ion-icon style="font-size:1.5rem;  color:#EA8A04;" name="star"></ion-icon>\n          <ion-icon style="font-size:1.5rem;  color:#EA8A04;" name="star"></ion-icon>\n          <ion-icon style="font-size:1.5rem;  color:#CBCCCA;" name="star"></ion-icon>\n          <ion-icon style="font-size:1.5rem;  color:#CBCCCA;" name="star"></ion-icon>\n        </div>\n      </div>\n      <div class="h h2">\n        <div class="imgHolder">\n        <img  src="assets/imgs/test.png" alt="">\n        </div>\n      </div>\n      <div class="h h3">\n        <div class="lh3">\n          <img src="assets/imgs/test.png" alt="">\n        </div>\n        <div class="rh3">\n         <img src="assets/imgs/time.svg" alt="">\n          <span style="color:#007D69;">888m </span>\n         <img src="assets/imgs/calorias.svg" alt="">\n          <span style="color:#007D69;">8888cal </span>\n        </div>\n      </div>\n    \n    </div>\n    <div class="body" >\n      <p>\n        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati maiores nulla natus quam, porro, voluptatum repudiandae perferendis sit magni possimus nam blanditiis? At quos excepturi aut et totam quis dignissimos.\n        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam voluptatibus dicta in eligendi quisquam? Veritatis perspiciatis eos, quaerat delectus ad, quas, architecto quod eligendi est consequatur optio unde non consectetur.\n      </p>\n    </div>\n    <div class="footer">\n      <div class="f1" ></div>\n      <div class="f2">\n        <div class="lf2">\n        <img [src]="isFav? \'assets/imgs/fullGreenHeart.svg\':\'assets/imgs/heart.svg\'" alt="" (click)=\'heartClick()\'>\n        <img (click)=\'especialClick()\' style="height:36px; width: 36px;" src="assets/imgs/basket.svg" alt="">\n      </div>\n      <div class="rf2">\n        <span style="color:#007D69; font-size: 0.5rem;  padding-top: 10px;">lps.</span>\n        <span style="letter-spacing: -1px;">88,888</span>\n        <span style=" font-size: 0.5rem;  letter-spacing: -1px;   padding-bottom: 10px;">88</span>\n      </div>\n      </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/beanario/Documents/Ionic_Projects/loncheando/lunchTime/src/pages/dishe/dishe.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_native_page_transitions__["a" /* NativePageTransitions */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DishePage);
    return DishePage;
}());

//# sourceMappingURL=dishe.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map