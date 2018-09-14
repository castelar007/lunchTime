webpackJsonp([0],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
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
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__favorites_favorites__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_account__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__basket_basket__ = __webpack_require__(201);
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

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__restaurant_restaurant__ = __webpack_require__(196);
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
        this.categorias = [{ name: 'cate', active: false }, { name: 'cate', active: false }, { name: 'cate', active: false }, { name: 'cate', active: false }, { name: 'cate', active: false }, { name: 'cate', active: false }, { name: 'cate', active: false }, { name: 'cate', active: false }];
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
    }
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.content.ionScrollEnd.subscribe(function (data) {
            var dimensions = _this.content.getContentDimensions();
            var scrollTop = _this.content.scrollTop;
            var contentHeight = dimensions.contentHeight;
            var scrollHeight = dimensions.scrollHeight;
            console.log('1: ' + scrollTop + ' 2: ' + contentHeight + ' 3: ' + scrollHeight);
            _this.zone.run(function () {
                if ((scrollTop + contentHeight) >= scrollHeight) {
                    _this.childScroll = 'true';
                }
                else {
                    _this.childScroll = 'false';
                }
            });
            console.log(_this.childScroll);
            // if ( (scrollTop + contentHeight + 20) > scrollHeight) {
            //   this.shouldScrollDown = true;
            //   this.showScrollButton = false;
            // } else {
            //   this.shouldScrollDown = false;
            //   this.showScrollButton = true;
            // }
        });
    };
    HomePage.prototype.categoryClick = function (categoria) {
        if (categoria.active == true)
            categoria.active = false;
        else if (categoria.active == false)
            categoria.active = true;
    };
    HomePage.prototype.goDeep = function (item) {
        this.navCtrl.push(this.restaurantPage, {});
    };
    HomePage.prototype.clickSearch = function () {
        this.searchIsActive = !this.searchIsActive;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
    ], HomePage.prototype, "content", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/beanario/Documents/Ionic_Projects/loncheando/lunchTime/src/pages/home/home.html"*/'<ion-content class="mainContent"parallax>\n <div class="header" >\n   <div class="h h1">\n        <div class="h11">\n        <div style="    \n        width: calc(100% - 30px);\n    display: flex;\n    align-items: center;">\n        <ion-icon style="padding-right:15px; color: #BF2708;" name="arrow-down"></ion-icon>\n        <span>Tegucigalpa, F.M.</span>\n        </div>\n        <ion-input *ngIf=\'this.searchIsActive\' style="\n            height: 30px;\n           \n            width: 100%;\n            border-radius: 30px;\n            color: white;\n            margin-right: 15px;\n            position: absolute;\n            top: 50%;\n            margin-top: -15px;\n            padding-right: 15px;\n            z-index: 111;\n            ">  </ion-input>\n        <div class="searchBar" (click)="clickSearch()"  [class.active]="this.searchIsActive">\n          <ion-icon class="searchIcon"   name="search"></ion-icon>\n          <ion-icon  class="closeIcon" name="md-close"></ion-icon>\n        </div>\n       </div>\n       \n   </div>\n   <div class="h h2">\n      <ion-scroll scrollX="true">\n          <div [class.active]="categoria.active" class="category" *ngFor="let categoria of categorias" (click)=\'categoryClick(categoria)\'>\n            {{categoria.name}}\n          </div>\n        </ion-scroll>\n   </div>\n   <div class="h h3">\n      <ion-slides style="width:100vw">\n          <ion-slide class="slideLayout">\n            <h1>Slide 1</h1>\n          </ion-slide>\n          <ion-slide class="slideLayout">\n            <h1>Slide 2</h1>\n          </ion-slide>\n          <ion-slide class="slideLayout">\n            <h1>Slide 3</h1>\n          </ion-slide>\n        </ion-slides>     \n   </div>\n   <div class="h h4">\n     <div class="lh4" >\n       <img src="assets/imgs/loncheandoLogo.svg" alt=""> <span style="color: #BF2708; font-size: 1.4rem; padding-left: 10px;">food.</span>\n      </div>\n      <div class="rh4" >\n        <span>9:00 a.m. - 10:00 p.m.</span>\n      </div>\n    </div>\n </div>\n <div class="body" >\n  <div class=\'headerBody\'>\n    Random Name\n  </div>\n  <ion-scroll [scrollY]="this.childScroll">\n    <div class="itemBody" *ngFor="let item of items" (click)=goDeep(item)>\n      <div class="innerContainer">\n      <div style="height: 100%;\n      width: 56px;\n      display: flex;\n      justify-content: center;\n      align-items: center;">\n          <img style="width:100%; height: 56px; border-radius: 5px; " src="{{item.imageUrl}}" alt="">\n      </div>\n      <div style="height: 100%;\n      width: calc(90% - 56px)">\n        <div style="display: flex;\n        justify-content: space-between;\n        align-items: flex-start;\n        height: 15px;\n        margin: 10px 10px 5px 10px;">\n          <div style="font-size:1.3rem; font-weight:500; ">{{item.name}}</div>\n          <div style="    display: flex;\n          justify-content: center;\n          align-items: flex-end;\n          height: 100%;"> \n            <ion-icon style="font-size:1rem;  color:#EA8A04;" name="star"></ion-icon>\n            <ion-icon style="font-size:1rem;  color:#EA8A04;" name="star"></ion-icon>\n            <ion-icon style="font-size:1rem;  color:#EA8A04;" name="star"></ion-icon>\n            <ion-icon style="font-size:1rem;  color:#CBCCCA;" name="star"></ion-icon>\n            <ion-icon style="font-size:1rem;  color:#CBCCCA;" name="star"></ion-icon>\n          </div>\n        </div>\n        <div class="block-with-text">{{item.description}}</div>\n      </div>\n      <div style="height: 100%;\n      width: 10%;\n      display: flex;\n      justify-content: center;\n      padding-top: 5px;"> \n      <ion-icon  style="color:#CBCCCA;" name=\'heart\'></ion-icon>  \n    </div>\n    </div>\n      \n    </div>\n  </ion-scroll>\n </div>\n</ion-content>\n'/*ion-inline-end:"/Users/beanario/Documents/Ionic_Projects/loncheando/lunchTime/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestaurantPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dishe_dishe__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__special_dish_special_dish__ = __webpack_require__(99);
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
    function RestaurantPage(modalCtrl, zone, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.zone = zone;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [{ name: 'Dish Name', description: 'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.', stars: 5, favorite: false, imageUrl: 'assets/imgs/test.png' },
            { name: 'Dish Name', description: 'es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.', stars: 5, favorite: false, imageUrl: 'assets/imgs/test.png' },
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
    }
    RestaurantPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RestaurantPage');
    };
    RestaurantPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.content.ionScrollEnd.subscribe(function (data) {
            var dimensions = _this.content.getContentDimensions();
            var scrollTop = _this.content.scrollTop;
            var contentHeight = dimensions.contentHeight;
            var scrollHeight = dimensions.scrollHeight;
            console.log('1: ' + scrollTop + ' 2: ' + contentHeight + ' 3: ' + scrollHeight);
            _this.zone.run(function () {
                if ((scrollTop + contentHeight) >= scrollHeight) {
                    _this.childScroll = 'true';
                }
                else {
                    _this.childScroll = 'false';
                }
            });
            console.log(_this.childScroll);
            // if ( (scrollTop + contentHeight + 20) > scrollHeight) {
            //   this.shouldScrollDown = true;
            //   this.showScrollButton = false;
            // } else {
            //   this.shouldScrollDown = false;
            //   this.showScrollButton = true;
            // }
        });
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
    ], RestaurantPage.prototype, "content", void 0);
    RestaurantPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-restaurant',template:/*ion-inline-start:"/Users/beanario/Documents/Ionic_Projects/loncheando/lunchTime/src/pages/restaurant/restaurant.html"*/'<ion-content class="mainContent">\n  <div class="header" >\n    <div class="h h1">\n      <div>\n        <ion-icon navPop style="padding-right:15px; color: #BF2708;" name="arrow-back"></ion-icon>\n        <span>Ristorante Name</span>\n      </div>\n      <div style="    display: flex;\n      justify-content: center;\n      align-items: center;\n      height: 100%;"> \n        <ion-icon style="font-size:1.5rem;  color:#EA8A04;" name="star"></ion-icon>\n        <ion-icon style="font-size:1.5rem;  color:#EA8A04;" name="star"></ion-icon>\n        <ion-icon style="font-size:1.5rem;  color:#EA8A04;" name="star"></ion-icon>\n        <ion-icon style="font-size:1.5rem;  color:#CBCCCA;" name="star"></ion-icon>\n        <ion-icon style="font-size:1.5rem;  color:#CBCCCA;" name="star"></ion-icon>\n      </div>\n    </div>\n    <div class="h h2">\n      <div style="    height: 100%;\n      width: 100%;\n      background-color: antiquewhite;\n      border-radius: 25px 25px 0px 0px;">\n\n      </div>\n    </div>\n    <div class="h h3">\n      <div class="lh3">\n        <img src="assets/imgs/test.png" alt="">\n      </div>\n      <div class="rh3">\n        <span style="color:#60665A" >Dirección del ristorante</span>\n        <span style="color:#007D69;">xx:xx a.m. - xx:xx p.m. </span>\n      </div>\n    </div>\n    <div class="h h4">\n        <ion-scroll scrollX="true">\n            <div [class.active]="categoria.active" class="category" *ngFor="let categoria of categorias" (click)=\'categoryClick(categoria)\'>\n              {{categoria.name}}\n            </div>\n          </ion-scroll>\n     </div>\n  </div>\n  <div class="body" >\n      <div class="headerBody">\n          <div style="    width: 90%;\n          height: 100%; display: flex; align-items: center;" >\n           \n           <span style="font-size:1.8rem; font-weight: bold;">Menu</span>\n          </div>\n          <div style="    width: 25px;\n          height: 25px; display: flex; align-items: center;  justify-content: center;\n          border-radius: 50%;\n          background-color: gray; \n          color: white; \n          align-self: center;">\n            <ion-icon  name="search"></ion-icon>\n          </div>\n         </div>\n         <ion-scroll [scrollY]="this.childScroll">\n            <div class="itemBody" *ngFor="let item of items" (click)=goDeep(item)>\n              <div class="innerContainer">\n             \n              <div style="height: 100%;\n              width: calc(67% - 56px)">\n                <div style="display: flex;\n                flex-grow: 1;\n                justify-content: space-between;\n                align-items: flex-start;\n                height: 15px;\n                margin: 10px 0px 5px 0px;">\n                  <div style="font-size:1.3rem; font-weight:500; ">{{item.name}}</div>\n                 \n                </div>\n                <div class="block-with-text" >{{item.description}}</div>\n              </div>\n              <div  *ngIf="true" style="height: 100%;\n              width: 56px;\n              display: flex;\n              justify-content: center;\n              align-items: center;">\n                  <img style="width:100%; height: 56px; border-radius: 5px; " src="{{item.imageUrl}}" alt="">\n              </div>\n              <div style="height: 100%;\n              width: 33%;\n              position: relative;\n              display: flex;\n              justify-content: center;\n              padding: 10px 15px 10px 0px;\n              flex-direction: column;"\n              > \n              <div style="    width: 100%;\n              height: 35%;\n              justify-content: flex-end;\n              position: relative;\n              display: flex;\n              align-items: flex-end;">\n                <img style="width:25%; margin-left: 10px; height: 85%;" [src]="item.favorite? \'assets/imgs/fullGreenHeart.svg\':\'assets/imgs/heartBlackB.svg\'" alt="" (click)=\'heartClick($event,item)\'>\n                <img style="width:25%; margin-left: 10px; height: 100%;" src="assets/imgs/basket.svg" alt="" (click)=\'especialClick($event,item)\'>\n              </div>\n              <div style="width: 100%;\n              height: 65%;\n              display: flex;\n              justify-content: flex-end;\n              align-items: flex-end;\n              font-size: 1.6rem;">\n                <span style="color:#007D69; font-size: 0.5rem;">lps.</span>\n                <span>88,888</span>\n                <span style=" font-size: 0.5rem;     padding-bottom: 10px;">88</span>\n              </div>\n            </div>\n            </div>\n              \n            </div>\n          </ion-scroll>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/beanario/Documents/Ionic_Projects/loncheando/lunchTime/src/pages/restaurant/restaurant.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RestaurantPage);
    return RestaurantPage;
}());

//# sourceMappingURL=restaurant.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DishePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__special_dish_special_dish__ = __webpack_require__(99);
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
    function DishePage(modalCtrl, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.isFav = false;
        this.specialDishPage = __WEBPACK_IMPORTED_MODULE_2__special_dish_special_dish__["a" /* SpecialDishPage */];
    }
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
            selector: 'page-dishe',template:/*ion-inline-start:"/Users/beanario/Documents/Ionic_Projects/loncheando/lunchTime/src/pages/dishe/dishe.html"*/'\n<ion-content class="mainContent">\n    <div class="header" >\n      <div class="h h1">\n        <div>\n          <ion-icon navPop style="padding-right:15px; color: #BF2708;" name="arrow-back"></ion-icon>\n          <span>Dish Name</span>\n        </div>\n        <div style="    display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 100%;"> \n          <ion-icon style="font-size:1.5rem;  color:#EA8A04;" name="star"></ion-icon>\n          <ion-icon style="font-size:1.5rem;  color:#EA8A04;" name="star"></ion-icon>\n          <ion-icon style="font-size:1.5rem;  color:#EA8A04;" name="star"></ion-icon>\n          <ion-icon style="font-size:1.5rem;  color:#CBCCCA;" name="star"></ion-icon>\n          <ion-icon style="font-size:1.5rem;  color:#CBCCCA;" name="star"></ion-icon>\n        </div>\n      </div>\n      <div class="h h2">\n        <div style="    height: 100%;\n        width: 100%;\n        background-color: antiquewhite;\n        border-radius: 25px 25px 0px 0px;">\n  \n        </div>\n      </div>\n      <div class="h h3">\n        <div class="lh3">\n          <img src="assets/imgs/test.png" alt="">\n        </div>\n        <div class="rh3">\n         <img src="assets/imgs/time.svg" alt="">\n          <span style="color:#007D69;">888m </span>\n         <img src="assets/imgs/calorias.svg" alt="">\n          <span style="color:#007D69;">8888cal </span>\n        </div>\n      </div>\n    \n    </div>\n    <div class="body" >\n      <p>\n        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati maiores nulla natus quam, porro, voluptatum repudiandae perferendis sit magni possimus nam blanditiis? At quos excepturi aut et totam quis dignissimos.\n        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam voluptatibus dicta in eligendi quisquam? Veritatis perspiciatis eos, quaerat delectus ad, quas, architecto quod eligendi est consequatur optio unde non consectetur.\n      </p>\n    </div>\n    <div class="footer">\n      <div class="f1" ></div>\n      <div class="f2">\n        <div class="lf2">\n        <img [src]="isFav? \'assets/imgs/fullGreenHeart.svg\':\'assets/imgs/heart.svg\'" alt="" (click)=\'heartClick()\'>\n        <img (click)=\'especialClick()\' style="height:36px; width: 36px;" src="assets/imgs/basket.svg" alt="">\n      </div>\n      <div class="rf2">\n        <span style="color:#007D69; font-size: 0.5rem;  padding-top: 10px;">lps.</span>\n        <span>88,888</span>\n        <span style=" font-size: 0.5rem;     padding-bottom: 10px;">88</span>\n      </div>\n      </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/beanario/Documents/Ionic_Projects/loncheando/lunchTime/src/pages/dishe/dishe.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DishePage);
    return DishePage;
}());

//# sourceMappingURL=dishe.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
    }
    FavoritesPage.prototype.ionViewDidLoad = function () {
    };
    FavoritesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorites',template:/*ion-inline-start:"/Users/beanario/Documents/Ionic_Projects/loncheando/lunchTime/src/pages/favorites/favorites.html"*/'<!--\n  Generated template for the FavoritesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>favorites</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/beanario/Documents/Ionic_Projects/loncheando/lunchTime/src/pages/favorites/favorites.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], FavoritesPage);
    return FavoritesPage;
}());

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
    }
    SearchPage.prototype.ionViewDidLoad = function () {
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/beanario/Documents/Ionic_Projects/loncheando/lunchTime/src/pages/search/search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>search</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/beanario/Documents/Ionic_Projects/loncheando/lunchTime/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
            selector: 'page-account',template:/*ion-inline-start:"/Users/beanario/Documents/Ionic_Projects/loncheando/lunchTime/src/pages/account/account.html"*/'<!--\n  Generated template for the AccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n   \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/beanario/Documents/Ionic_Projects/loncheando/lunchTime/src/pages/account/account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
    }
    BasketPage.prototype.ionViewDidLoad = function () {
    };
    BasketPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-basket',template:/*ion-inline-start:"/Users/beanario/Documents/Ionic_Projects/loncheando/lunchTime/src/pages/basket/basket.html"*/'<ion-content class="mainContent">\n    <div class="header" >\n     \n    \n    </div>\n    <div class="body" >\n       \n    </div>\n    <div class="footer">\n      <div class="f1">\n        Realizar Pedido\n      </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/beanario/Documents/Ionic_Projects/loncheando/lunchTime/src/pages/basket/basket.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], BasketPage);
    return BasketPage;
}());

//# sourceMappingURL=basket.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_account_account__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_favorites_favorites__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_restaurant_restaurant__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_search_search__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_basket_basket__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__directives_parallax_parallax__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_dishe_dishe__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_special_dish_special_dish__ = __webpack_require__(99);
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
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
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(194);
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

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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

/***/ 278:
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

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecialDishPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
        this.options = [
            { name: 'Opción 1 ' },
            { name: 'Opción 2 ' },
            { name: 'Opción 3 ' },
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
        this.navCtrl.popAll();
    };
    SpecialDishPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-special-dish',template:/*ion-inline-start:"/Users/beanario/Documents/Ionic_Projects/loncheando/lunchTime/src/pages/special-dish/special-dish.html"*/'<ion-content class="mainContent">\n    <div class="header" >\n      <div class="h h1">\n        <div>\n          <ion-icon navPop style="padding-right:15px; color: #BF2708;" name="arrow-back"></ion-icon>\n          <span>Dish Name</span>\n        </div>\n        <div style="    display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 100%;"> \n          <ion-icon style="font-size:1.5rem;  color:#EA8A04;" name="star"></ion-icon>\n          <ion-icon style="font-size:1.5rem;  color:#EA8A04;" name="star"></ion-icon>\n          <ion-icon style="font-size:1.5rem;  color:#EA8A04;" name="star"></ion-icon>\n          <ion-icon style="font-size:1.5rem;  color:#CBCCCA;" name="star"></ion-icon>\n          <ion-icon style="font-size:1.5rem;  color:#CBCCCA;" name="star"></ion-icon>\n        </div>\n      </div>\n      \n    \n    </div>\n    <div class="body" >\n        <div class="mainTitle">\n          Personalizar\n        </div>\n        <div class="b1">\n          <div class="title">Ingredientes </div> \n          <div class="b11" *ngFor=\'let option of options\'>\n            <span>{{option.name}}</span>\n            <div class="b11r">\n              <img src="assets/imgs/check.svg" alt="">\n            </div>\n          </div>\n        </div>\n        <div class="b1">\n            <div class="title">Extras </div> \n        </div>\n    </div>\n    <div class="footer">\n      <div class="f1" (click)=\'addToCart()\'>\n        Añadir\n      </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/beanario/Documents/Ionic_Projects/loncheando/lunchTime/src/pages/special-dish/special-dish.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SpecialDishPage);
    return SpecialDishPage;
}());

//# sourceMappingURL=special-dish.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map