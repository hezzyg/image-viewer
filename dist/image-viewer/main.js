(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gallery-wrapper\" *ngIf=\"images\">\r\n  <iv-master-view\r\n    [images]=\"images\"\r\n    (selectedImage)=\"selectedIndex = $event\">\r\n  </iv-master-view>\r\n  <iv-detail-view\r\n    [image]=\"images[selectedIndex]\"\r\n    [index]=\"selectedIndex\"\r\n    [updateImageDescription]=\"updateImageDescription\"\r\n    [deleteImage]=\"deleteImage\">\r\n  </iv-detail-view>\r\n</div>\r\n<footer>Images courtesy of <a href=\"https://www.unsplash.com\" target=\"_blank\">unsplash.com</a></footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gallery-wrapper {\n  display: flex;\n  height: 100%;\n  max-height: 100%;\n  padding: 0.5em 0 2em; }\n  .gallery-wrapper > * {\n    flex: 1 0 50%; }\n  footer {\n  position: fixed;\n  bottom: 4px;\n  left: 50%;\n  width: 100%;\n  text-align: center;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  font-size: 0.8em; }\n  @media screen and (max-width: 767px) {\n  .gallery-wrapper {\n    flex-direction: column-reverse;\n    height: auto;\n    max-height: unset;\n    padding-top: 0; }\n    .gallery-wrapper iv-detail-view {\n      height: 75vh;\n      flex: unset; }\n    .gallery-wrapper iv-master-view {\n      height: 20vh;\n      flex: unset; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXHByb2plY3RzXFxpbWFnZS12aWV3ZXIvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG9CQUFvQixFQUFBO0VBSnRCO0lBT0ksYUFBYSxFQUFBO0VBSWpCO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxTQUFTO0VBQ1QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLGdCQUFnQixFQUFBO0VBR2xCO0VBQ0U7SUFDRSw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixjQUFjLEVBQUE7SUFKaEI7TUFPSSxZQUFZO01BQ1osV0FBVyxFQUFBO0lBUmY7TUFZSSxZQUFZO01BQ1osV0FBVyxFQUFBLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FsbGVyeS13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAuNWVtIDAgMmVtO1xyXG5cclxuICAmID4gKiB7XHJcbiAgICBmbGV4OiAxIDAgNTAlO1xyXG4gIH1cclxufVxyXG5cclxuZm9vdGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiA0cHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuZ2FsbGVyeS13cmFwcGVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1heC1oZWlnaHQ6IHVuc2V0O1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcblxyXG4gICAgaXYtZGV0YWlsLXZpZXcge1xyXG4gICAgICBoZWlnaHQ6IDc1dmg7XHJcbiAgICAgIGZsZXg6IHVuc2V0O1xyXG4gICAgfVxyXG5cclxuICAgIGl2LW1hc3Rlci12aWV3IHtcclxuICAgICAgaGVpZ2h0OiAyMHZoO1xyXG4gICAgICBmbGV4OiB1bnNldDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/http.service */ "./src/app/core/http.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(httpService) {
        var _this = this;
        this.httpService = httpService;
        this.selectedIndex = 0;
        this.updateImageDescription = function (index, description) {
            var image = _this.images[index];
            image.description = description;
            _this.images[index] = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, image);
            _this.images = _this.images.slice();
        };
        this.deleteImage = function (index) {
            _this.images.splice(index, 1);
            _this.selectedIndex = 0;
            _this.images = _this.images.slice();
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getLivePhotos();
    };
    AppComponent.prototype.getLivePhotos = function () {
        var _this = this;
        this.httpService.getLivePhotos()
            .subscribe(function (images) { return _this.images = images; }, function (error) { return _this.getBackupPhotos(); });
    };
    AppComponent.prototype.getBackupPhotos = function () {
        var _this = this;
        this.httpService.getBackupPhotos().subscribe(function (images) { return _this.images = images.data; });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'iv-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/http.service */ "./src/app/core/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_master_view_master_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/master-view/master-view.component */ "./src/app/components/master-view/master-view.component.ts");
/* harmony import */ var _components_detail_view_detail_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/detail-view/detail-view.component */ "./src/app/components/detail-view/detail-view.component.ts");
/* harmony import */ var _components_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/thumbnail/thumbnail.component */ "./src/app/components/thumbnail/thumbnail.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_master_view_master_view_component__WEBPACK_IMPORTED_MODULE_7__["MasterViewComponent"],
                _components_detail_view_detail_view_component__WEBPACK_IMPORTED_MODULE_8__["DetailViewComponent"],
                _components_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_9__["ThumbnailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]
            ],
            providers: [_core_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/detail-view/detail-view.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/detail-view/detail-view.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <input\r\n    class=\"description-input\"\r\n    type=\"text\"\r\n    placeholder=\"Add a description for this image\"\r\n    title=\"Click to edit the description\"\r\n    [(ngModel)]=\"image.description\"\r\n    (change)=\"handleDescriptionChange()\"\r\n    (keyup)=\"handleDescriptionChange()\">\r\n  <img class=\"full-image\" [class.fade]=\"fadeImageAnimation\" [src]=\"image?.urls.regular\">\r\n</div>\r\n<button class=\"delete-button\" title=\"Delete image\" (click)=\"deleteImage(index)\">\r\n  <img src=\"https://image.flaticon.com/icons/png/128/25/25214.png\" />\r\n</button>\r\n"

/***/ }),

/***/ "./src/app/components/detail-view/detail-view.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/detail-view/detail-view.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  height: 100%;\n  padding: 0.5em;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  overflow: hidden;\n  background-color: #f1f1f1; }\n  .container .description-input {\n    width: 90%;\n    max-width: 100%;\n    font-size: 1.4em;\n    margin-bottom: 1em;\n    padding: 0.23em;\n    text-align: center;\n    border: none;\n    background-color: transparent; }\n  .container .full-image {\n    max-height: 70vh;\n    max-width: 100%;\n    border-radius: 3px;\n    margin-top: 4vh;\n    transition: all .3s; }\n  .delete-button {\n  position: fixed;\n  bottom: 1em;\n  right: 0;\n  margin: 2em;\n  width: 3em;\n  height: 3em;\n  border-radius: 50%;\n  border: none;\n  padding: 0.25em;\n  background-color: white;\n  opacity: 0.5;\n  transition: all .2s ease-in-out; }\n  .delete-button:hover {\n    opacity: 0.8;\n    background-color: #e25b52;\n    box-shadow: 0px 2px 14px 0px rgba(57, 57, 57, 0.9); }\n  .delete-button img {\n    width: 80%; }\n  @media screen and (max-width: 767px) {\n  .container .full-image {\n    max-height: 50vh; }\n  .delete-button {\n    position: relative;\n    bottom: 6em;\n    left: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXRhaWwtdmlldy9DOlxccHJvamVjdHNcXGltYWdlLXZpZXdlci9zcmNcXGFwcFxcY29tcG9uZW50c1xcZGV0YWlsLXZpZXdcXGRldGFpbC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHlCQUF5QixFQUFBO0VBUjNCO0lBV0ksVUFBVTtJQUNWLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDZCQUE2QixFQUFBO0VBbEJqQztJQXNCSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsbUJBQW1CLEVBQUE7RUFLdkI7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFFBQVE7RUFDUixXQUFXO0VBQ1gsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLCtCQUErQixFQUFBO0VBWmpDO0lBZUksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrREFBa0QsRUFBQTtFQWpCdEQ7SUFxQkksVUFBVSxFQUFBO0VBSWQ7RUFDRTtJQUNFLGdCQUFnQixFQUFBO0VBR2xCO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxPQUFPLEVBQUEsRUFDUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV0YWlsLXZpZXcvZGV0YWlsLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMC41ZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuXHJcbiAgLmRlc2NyaXB0aW9uLWlucHV0IHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDEuNGVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgcGFkZGluZzogMC4yM2VtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICAuZnVsbC1pbWFnZSB7XHJcbiAgICBtYXgtaGVpZ2h0OiA3MHZoO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgbWFyZ2luLXRvcDogNHZoO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICB9XHJcblxyXG59XHJcblxyXG4uZGVsZXRlLWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMWVtO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbjogMmVtO1xyXG4gIHdpZHRoOiAzZW07XHJcbiAgaGVpZ2h0OiAzZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAwLjI1ZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyNWI1MjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMTRweCAwcHggcmdiYSg1NywgNTcsIDU3LCAwLjkpO1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5jb250YWluZXIgLmZ1bGwtaW1hZ2Uge1xyXG4gICAgbWF4LWhlaWdodDogNTB2aDtcclxuICB9XHJcblxyXG4gIC5kZWxldGUtYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogNmVtO1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/detail-view/detail-view.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/detail-view/detail-view.component.ts ***!
  \*****************************************************************/
/*! exports provided: DetailViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailViewComponent", function() { return DetailViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var DetailViewComponent = /** @class */ (function () {
    function DetailViewComponent() {
        this.inputChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.unsubscribeOnDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    DetailViewComponent.prototype.ngOnInit = function () {
        this.subscribeToInputChanges();
    };
    DetailViewComponent.prototype.subscribeToInputChanges = function () {
        var _this = this;
        this.inputChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribeOnDestroy), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300)).subscribe(function (value) { return _this.updateImageDescription(_this.index, value); });
    };
    DetailViewComponent.prototype.handleDescriptionChange = function () {
        var description = this.image.description;
        this.inputChange.next(description);
    };
    DetailViewComponent.prototype.ngOnDestroy = function () {
        this.unsubscribeOnDestroy.next(true);
        this.unsubscribeOnDestroy.complete();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], DetailViewComponent.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DetailViewComponent.prototype, "image", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DetailViewComponent.prototype, "updateImageDescription", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DetailViewComponent.prototype, "deleteImage", void 0);
    DetailViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'iv-detail-view',
            template: __webpack_require__(/*! ./detail-view.component.html */ "./src/app/components/detail-view/detail-view.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./detail-view.component.scss */ "./src/app/components/detail-view/detail-view.component.scss")]
        })
    ], DetailViewComponent);
    return DetailViewComponent;
}());



/***/ }),

/***/ "./src/app/components/master-view/master-view.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/master-view/master-view.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <iv-thumbnail\r\n    [image]=\"image\"\r\n    [index]=\"index\"\r\n    [selectImage]=\"handleSelectImage\"\r\n    *ngFor=\"let image of images; let index = index; trackBy: trackByFn\">\r\n  </iv-thumbnail>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/master-view/master-view.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/master-view/master-view.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-items: flex-start;\n  max-height: 100%;\n  overflow-x: hidden;\n  overflow-y: auto;\n  padding: 0 0.25em; }\n  .container iv-thumbnail {\n    width: 33.33%; }\n  @media screen and (max-width: 767px) {\n  .container {\n    flex-wrap: nowrap;\n    overflow-x: auto;\n    overflow-y: hidden;\n    padding: 0.5em; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYXN0ZXItdmlldy9DOlxccHJvamVjdHNcXGltYWdlLXZpZXdlci9zcmNcXGFwcFxcY29tcG9uZW50c1xcbWFzdGVyLXZpZXdcXG1hc3Rlci12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBO0VBUm5CO0lBV0ksYUFBYSxFQUFBO0VBSWpCO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixjQUFjLEVBQUEsRUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFzdGVyLXZpZXcvbWFzdGVyLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBwYWRkaW5nOiAwIDAuMjVlbTtcclxuXHJcbiAgaXYtdGh1bWJuYWlsIHtcclxuICAgIHdpZHRoOiAzMy4zMyU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMC41ZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/master-view/master-view.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/master-view/master-view.component.ts ***!
  \*****************************************************************/
/*! exports provided: MasterViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterViewComponent", function() { return MasterViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MasterViewComponent = /** @class */ (function () {
    function MasterViewComponent() {
        var _this = this;
        this.selectedImage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.handleSelectImage = function (index) {
            _this.selectedImage.emit(index);
        };
    }
    MasterViewComponent.prototype.trackByFn = function (index, item) {
        return item.id + "_" + index;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MasterViewComponent.prototype, "images", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MasterViewComponent.prototype, "selectedImage", void 0);
    MasterViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'iv-master-view',
            template: __webpack_require__(/*! ./master-view.component.html */ "./src/app/components/master-view/master-view.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./master-view.component.scss */ "./src/app/components/master-view/master-view.component.scss")]
        })
    ], MasterViewComponent);
    return MasterViewComponent;
}());



/***/ }),

/***/ "./src/app/components/thumbnail/thumbnail.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/thumbnail/thumbnail.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" (click)=\"selectImage(index)\">\r\n  <div class=\"card\">\r\n    <div class=\"thumbnail\" [style.background-image]=\"'url(' + image.urls.thumb + ')'\"></div>\r\n    <p [title]=\"image?.description\">{{image?.description}}</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/thumbnail/thumbnail.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/thumbnail/thumbnail.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  padding: 0 0.5em 1em;\n  overflow: hidden; }\n  .container .card {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    border: 1px solid #e2e2e2;\n    border-radius: 3px;\n    cursor: pointer;\n    opacity: 0.6;\n    box-shadow: 0 2px 4px 0 rgba(57, 57, 57, 0.5);\n    transition: all .5s ease-in-out; }\n  .container .card:hover {\n      opacity: 1; }\n  .container .card .thumbnail {\n      width: 100%;\n      height: 200px;\n      background-size: contain;\n      background-repeat: no-repeat;\n      background-position: center center; }\n  .container .card p {\n      width: 100%;\n      height: 51px;\n      text-align: center;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      font-weight: bold;\n      white-space: nowrap;\n      margin: 0;\n      padding: 1em 0.25em;\n      border-top: 1px solid #e2e2e2; }\n  @media screen and (max-width: 767px) {\n  .container .card {\n    opacity: 1; }\n    .container .card .thumbnail {\n      height: 14vh;\n      opacity: 1; }\n    .container .card p {\n      font-size: 0.7em;\n      padding: 0.7em 0.25em;\n      height: 2.7em; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aHVtYm5haWwvQzpcXHByb2plY3RzXFxpbWFnZS12aWV3ZXIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHRodW1ibmFpbFxcdGh1bWJuYWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGdCQUFnQixFQUFBO0VBTGxCO0lBUUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWiw2Q0FBNkM7SUFDN0MsK0JBQStCLEVBQUE7RUFqQm5DO01Bb0JNLFVBQVUsRUFBQTtFQXBCaEI7TUF3Qk0sV0FBVztNQUNYLGFBQWE7TUFDYix3QkFBd0I7TUFDeEIsNEJBQTRCO01BQzVCLGtDQUFrQyxFQUFBO0VBNUJ4QztNQWdDTSxXQUFXO01BQ1gsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixnQkFBZ0I7TUFDaEIsdUJBQXVCO01BQ3ZCLGlCQUFpQjtNQUNqQixtQkFBbUI7TUFDbkIsU0FBUztNQUNULG1CQUFtQjtNQUNuQiw2QkFBNkIsRUFBQTtFQUtuQztFQUNFO0lBRUksVUFBVSxFQUFBO0lBRmQ7TUFLTSxZQUFZO01BQ1osVUFBVSxFQUFBO0lBTmhCO01BVU0sZ0JBQWdCO01BQ2hCLHFCQUFxQjtNQUNyQixhQUFhLEVBQUEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGh1bWJuYWlsL3RodW1ibmFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMCAwLjVlbSAxZW07XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgLmNhcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UyZTJlMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoNTcsIDU3LCA1NywgMC41KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgLnRodW1ibmFpbCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDUxcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmc6IDFlbSAwLjI1ZW07XHJcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTJlMmUyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIC5jYXJkIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuXHJcbiAgICAgIC50aHVtYm5haWwge1xyXG4gICAgICAgIGhlaWdodDogMTR2aDtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuN2VtIDAuMjVlbTtcclxuICAgICAgICBoZWlnaHQ6IDIuN2VtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/thumbnail/thumbnail.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/thumbnail/thumbnail.component.ts ***!
  \*************************************************************/
/*! exports provided: ThumbnailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbnailComponent", function() { return ThumbnailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ThumbnailComponent = /** @class */ (function () {
    function ThumbnailComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ThumbnailComponent.prototype, "image", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ThumbnailComponent.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ThumbnailComponent.prototype, "selectImage", void 0);
    ThumbnailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'iv-thumbnail',
            template: __webpack_require__(/*! ./thumbnail.component.html */ "./src/app/components/thumbnail/thumbnail.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./thumbnail.component.scss */ "./src/app/components/thumbnail/thumbnail.component.scss")]
        })
    ], ThumbnailComponent);
    return ThumbnailComponent;
}());



/***/ }),

/***/ "./src/app/core/http.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/http.service.ts ***!
  \**************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        this.apiUrl = 'https://api.unsplash.com/photos/random?client_id=c60fbe677a161ee3f79f85dc8fcc49d6ce407e7b6caefce10ed43239dfd00827&count=30&orientation=squarish';
    }
    HttpService.prototype.getLivePhotos = function () {
        return this.http.get(this.apiUrl);
    };
    HttpService.prototype.getBackupPhotos = function () {
        return this.http.get('./assets/images.json');
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projects\image-viewer\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map