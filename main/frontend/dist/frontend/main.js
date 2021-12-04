"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["main"],{

/***/ 9803:
/*!******************************************************!*\
  !*** ./src/app/account-nav/account-nav.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountNavComponent": () => (/* binding */ AccountNavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);



function AccountNavComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", i_r1.to);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.text);
} }
class AccountNavComponent {
    constructor() {
        this.navItems = [
            { text: "Авторизация", to: "/login" },
            { text: "Регистрация", to: "/register" }
        ];
    }
    ngOnInit() {
    }
}
AccountNavComponent.ɵfac = function AccountNavComponent_Factory(t) { return new (t || AccountNavComponent)(); };
AccountNavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountNavComponent, selectors: [["account-nav"]], decls: 2, vars: 1, consts: [[1, "Account-Nav"], ["class", "Account-Nav__Item", 4, "ngFor", "ngForOf"], [1, "Account-Nav__Item"], ["routerLinkActive", "Active", 3, "routerLink"]], template: function AccountNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccountNavComponent_div_1_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.Row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.Column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.Account-Nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n  font-family: \"Rubik\", sans-serif;\n  font-weight: 550;\n  font-size: 16px;\n  height: 40px;\n  border-radius: 10px 10px 0 0;\n}\n\n.Account-Nav[_ngcontent-%COMP%]   .Account-Nav__Item[_ngcontent-%COMP%]:first-child   a[_ngcontent-%COMP%] {\n  border-radius: 10px 0 0 0;\n}\n\n.Account-Nav[_ngcontent-%COMP%]   .Account-Nav__Item[_ngcontent-%COMP%]:last-child   a[_ngcontent-%COMP%] {\n  border-radius: 0 10px 0 0;\n}\n\n.Account-Nav[_ngcontent-%COMP%]   .Account-Nav__Item[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.Account-Nav[_ngcontent-%COMP%]   .Account-Nav__Item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  background-color: #fff;\n  color: var(--blue);\n  text-decoration: none;\n  width: 100%;\n  height: 100%;\n  transition: all 0.1s;\n}\n\n.Account-Nav[_ngcontent-%COMP%]   .Account-Nav__Item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:not(.Active) {\n  color: var(--lite-blue);\n}\n\n.Account-Nav[_ngcontent-%COMP%]   .Account-Nav__Item[_ngcontent-%COMP%]   a.Active[_ngcontent-%COMP%] {\n  background-color: var(--blue);\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcc3R5bGVzLnNhc3MiLCJhY2NvdW50LW5hdi5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDQ0o7O0FEU0E7RUFMSSxhQUFBO0VBQ0EsbUJBS2dCO0VBSmhCLDJCQUgrQjtFQUkvQix1QkFKZ0Q7QUNJcEQ7O0FES0E7RUFSSSxhQUFBO0VBQ0Esc0JBRmtCO0VBR2xCLDJCQUgrQjtFQUkvQix1QkFKZ0Q7QUNXcEQ7O0FBZkE7RURLSSxhQUFBO0VBQ0EsbUJDTGdCO0VETWhCLDJCQUgrQjtFQUkvQix1QkFKZ0Q7RUNGaEQsV0FBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FBcUJKOztBQWxCWTtFQUNJLHlCQUFBO0FBb0JoQjs7QUFsQlk7RUFDSSx5QkFBQTtBQW9CaEI7O0FBbkJJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFxQlI7O0FBcEJRO0VEYkosYUFBQTtFQUNBLG1CQ2F3QjtFRFp4Qix1QkNZNkI7RURYN0IsbUJDV3FDO0VBQzdCLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUF5Qlo7O0FBeEJZO0VBQ0ksdUJBQUE7QUEwQmhCOztBQXpCWTtFQUNJLDZCQUFBO0VBQ0EsV0FBQTtBQTJCaEIiLCJmaWxlIjoiYWNjb3VudC1uYXYuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLCBib2R5XG4gICAgbWFyZ2luOiAwXG4gICAgcGFkZGluZzogMFxuXG4kbmF2X3c6MzAwcHhcbiAgICBcbj1mbGV4LWNvbnRhaW5lcigkZGlyOiBjb2x1bW4sICRqYzogZmxleC1zdGFydCwgJGFpOiBmbGV4LXN0YXJ0KVxuICAgIGRpc3BsYXk6IGZsZXhcbiAgICBmbGV4LWRpcmVjdGlvbjogJGRpclxuICAgIGp1c3RpZnktY29udGVudDogJGpjXG4gICAgYWxpZ24taXRlbXM6ICRhaSBcblxuLlJvd1xuICAgICtmbGV4LWNvbnRhaW5lcihyb3cpXG5cbi5Db2x1bW5cbiAgICArZmxleC1jb250YWluZXIoKVxuIiwiaHRtbCwgYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLlJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5Db2x1bW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uQWNjb3VudC1OYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XG59XG4uQWNjb3VudC1OYXYgLkFjY291bnQtTmF2X19JdGVtOmZpcnN0LWNoaWxkIGEge1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDAgMCAwO1xufVxuLkFjY291bnQtTmF2IC5BY2NvdW50LU5hdl9fSXRlbTpsYXN0LWNoaWxkIGEge1xuICBib3JkZXItcmFkaXVzOiAwIDEwcHggMCAwO1xufVxuLkFjY291bnQtTmF2IC5BY2NvdW50LU5hdl9fSXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uQWNjb3VudC1OYXYgLkFjY291bnQtTmF2X19JdGVtIGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzO1xufVxuLkFjY291bnQtTmF2IC5BY2NvdW50LU5hdl9fSXRlbSBhOmhvdmVyOm5vdCguQWN0aXZlKSB7XG4gIGNvbG9yOiB2YXIoLS1saXRlLWJsdWUpO1xufVxuLkFjY291bnQtTmF2IC5BY2NvdW50LU5hdl9fSXRlbSBhLkFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xuICBjb2xvcjogI2ZmZjtcbn0iXX0= */"] });


/***/ }),

/***/ 3696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _chats_chats_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chats/chats.component */ 3621);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 4018);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ 5639);
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logout/logout.component */ 5716);
/* harmony import */ var _offers_offers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./offers/offers.component */ 924);
/* harmony import */ var _personal_area_personal_area_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./personal-area/personal-area.component */ 9967);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ 5068);
/* harmony import */ var _reset_password_confirm_reset_password_confirm_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reset-password-confirm/reset-password-confirm.component */ 9566);
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reset-password/reset-password.component */ 9559);
/* harmony import */ var _search_users_search_users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search-users/search-users.component */ 1320);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 4001);













const routes = [
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent },
    { path: "logout", component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_3__.LogoutComponent },
    { path: "register", component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__.RegisterComponent },
    { path: "reset-password", component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_8__.ResetPasswordComponent },
    { path: "reset-password/confirm/:uid/:token", component: _reset_password_confirm_reset_password_confirm_component__WEBPACK_IMPORTED_MODULE_7__.ResetPasswordConfirmComponent },
    { path: "profile", component: _personal_area_personal_area_component__WEBPACK_IMPORTED_MODULE_5__.PersonalAreaComponent },
    { path: "users", component: _search_users_search_users_component__WEBPACK_IMPORTED_MODULE_9__.SearchUsersComponent },
    { path: "chats", component: _chats_chats_component__WEBPACK_IMPORTED_MODULE_0__.ChatsComponent },
    { path: "offers", component: _offers_offers_component__WEBPACK_IMPORTED_MODULE_4__.OffersComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] }); })();


/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _business_actions_account_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./business/actions/account.actions */ 7786);
/* harmony import */ var _business_actions_chats_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./business/actions/chats.actions */ 5306);
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/user.model */ 1133);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/account.service */ 5921);
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/chat.service */ 5292);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ 21);
/* harmony import */ var _head_head_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./head/head.component */ 3414);












function AppComponent_navbar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "navbar", 4);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("Content", _r1);
} }
function AppComponent_headerbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "headerbar");
} }
class AppComponent {
    constructor(_router, _store, _accountService, _chatService) {
        this._router = _router;
        this._store = _store;
        this._accountService = _accountService;
        this._chatService = _chatService;
        this.title = 'frontend';
        this._getUser();
        this._getChats();
        this._router.events.subscribe((e) => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd) {
                this._getUser();
                this._getChats();
            }
        });
        this._store.subscribe(data => {
            this.user = data.account.user;
        });
    }
    ngOnInit() {
    }
    _getUser() {
        this._accountService.getUser().subscribe(data => {
            let JSONUser = data.data.user;
            if (!JSONUser) {
                let path = location.pathname.split("/")[1];
                if (location.pathname === "/" || path === "home" || path === "news" || path === "events" || path === "chats" || path === "chat" || path === "profile") {
                    console.log(location.pathname.split("/")[1]);
                    this._router.navigateByUrl("login");
                }
            }
            else {
                let { id, username, email, first_name, last_name, profile } = JSONUser;
                let { user, patronymic, age, phone, user_in_school_status, status, country, city, about_me } = profile;
                let p = new _models_user_model__WEBPACK_IMPORTED_MODULE_2__.Profile(profile.id, user, phone, patronymic, age, user_in_school_status, status, country, city, about_me);
                let u = new _models_user_model__WEBPACK_IMPORTED_MODULE_2__.User(id, username, email, first_name, last_name, p);
                this._store.dispatch(new _business_actions_account_actions__WEBPACK_IMPORTED_MODULE_0__.SetUser(u));
                this.user = u;
                if (location.pathname === "/") {
                    this._router.navigateByUrl("home");
                }
            }
        });
    }
    _getChats() {
        this._chatService.getUserChats().subscribe(data => {
            if (data.result && data.data.chats) {
                this._store.dispatch(new _business_actions_chats_actions__WEBPACK_IMPORTED_MODULE_1__.SetUserChats(data.data.chats));
            }
            else {
                console.error(data.message);
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_4__.ChatService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 4, consts: [[3, "Content", 4, "ngIf"], [1, "C"], ["Content", ""], [4, "ngIf"], [3, "Content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, AppComponent_navbar_0_Template, 1, 1, "navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AppComponent_headerbar_3_Template, 1, 0, "headerbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("margin-left", ctx.user ? "320px" : 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__.NavbarComponent, _head_head_component__WEBPACK_IMPORTED_MODULE_6__.HeadComponent], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.Row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.Column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.C[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n  margin-left: 320px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxzdHlsZXMuc2FzcyIsImFwcC5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDQ0o7O0FEU0E7RUFMSSxhQUFBO0VBQ0EsbUJBS2dCO0VBSmhCLDJCQUgrQjtFQUkvQix1QkFKZ0Q7QUNJcEQ7O0FES0E7RUFSSSxhQUFBO0VBQ0Esc0JBRmtCO0VBR2xCLDJCQUgrQjtFQUkvQix1QkFKZ0Q7QUNXcEQ7O0FBZkE7RURLSSxhQUFBO0VBQ0Esc0JBRmtCO0VBR2xCLDJCQUgrQjtFQUkvQix1QkFKZ0Q7RUNGaEQsV0FBQTtFQUNBLGtCQUFBO0FBcUJKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHlcbiAgICBtYXJnaW46IDBcbiAgICBwYWRkaW5nOiAwXG5cbiRuYXZfdzozMDBweFxuICAgIFxuPWZsZXgtY29udGFpbmVyKCRkaXI6IGNvbHVtbiwgJGpjOiBmbGV4LXN0YXJ0LCAkYWk6IGZsZXgtc3RhcnQpXG4gICAgZGlzcGxheTogZmxleFxuICAgIGZsZXgtZGlyZWN0aW9uOiAkZGlyXG4gICAganVzdGlmeS1jb250ZW50OiAkamNcbiAgICBhbGlnbi1pdGVtczogJGFpIFxuXG4uUm93XG4gICAgK2ZsZXgtY29udGFpbmVyKHJvdylcblxuLkNvbHVtblxuICAgICtmbGV4LWNvbnRhaW5lcigpXG4iLCJodG1sLCBib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uUm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLkNvbHVtbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5DIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAzMjBweDtcbn0iXX0= */"] });


/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3696);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 4018);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ 21);
/* harmony import */ var _head_head_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./head/head.component */ 3414);
/* harmony import */ var _business__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./business */ 8625);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ 5639);
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logout/logout.component */ 5716);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ 5068);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reset-password/reset-password.component */ 9559);
/* harmony import */ var _reset_password_confirm_reset_password_confirm_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reset-password-confirm/reset-password-confirm.component */ 9566);
/* harmony import */ var _account_nav_account_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./account-nav/account-nav.component */ 9803);
/* harmony import */ var _personal_area_personal_area_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./personal-area/personal-area.component */ 9967);
/* harmony import */ var _form_switcher_form_switcher_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./form-switcher/form-switcher.component */ 3501);
/* harmony import */ var _chats_chats_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./chats/chats.component */ 3621);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 4008);
/* harmony import */ var _chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./chat-message/chat-message.component */ 668);
/* harmony import */ var _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./progress-bar/progress-bar.component */ 5936);
/* harmony import */ var _image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./image-slider/image-slider.component */ 1914);
/* harmony import */ var _search_users_search_users_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./search-users/search-users.component */ 1320);
/* harmony import */ var _hamburger_hamburger_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./hamburger/hamburger.component */ 7815);
/* harmony import */ var _offers_offers_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./offers/offers.component */ 924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 4001);




























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ providers: [
        rxjs__WEBPACK_IMPORTED_MODULE_22__.Subject
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_25__.HttpClientModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_26__.StoreModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_26__.StoreModule.forRoot(_business__WEBPACK_IMPORTED_MODULE_5__.reducers)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent,
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__.NavbarComponent,
        _head_head_component__WEBPACK_IMPORTED_MODULE_4__.HeadComponent,
        _login_login_component__WEBPACK_IMPORTED_MODULE_6__.LoginComponent,
        _logout_logout_component__WEBPACK_IMPORTED_MODULE_7__.LogoutComponent,
        _register_register_component__WEBPACK_IMPORTED_MODULE_8__.RegisterComponent,
        _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_9__.ResetPasswordComponent,
        _reset_password_confirm_reset_password_confirm_component__WEBPACK_IMPORTED_MODULE_10__.ResetPasswordConfirmComponent,
        _account_nav_account_nav_component__WEBPACK_IMPORTED_MODULE_11__.AccountNavComponent,
        _personal_area_personal_area_component__WEBPACK_IMPORTED_MODULE_12__.PersonalAreaComponent,
        _form_switcher_form_switcher_component__WEBPACK_IMPORTED_MODULE_13__.FormSwitcherComponent,
        _chats_chats_component__WEBPACK_IMPORTED_MODULE_14__.ChatsComponent,
        _chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_15__.ChatMessageComponent,
        _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_16__.ProgressBarComponent,
        _image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_17__.ImageSliderComponent,
        _search_users_search_users_component__WEBPACK_IMPORTED_MODULE_18__.SearchUsersComponent,
        _hamburger_hamburger_component__WEBPACK_IMPORTED_MODULE_19__.HamburgerComponent,
        _offers_offers_component__WEBPACK_IMPORTED_MODULE_20__.OffersComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_25__.HttpClientModule,
        _ngrx_store__WEBPACK_IMPORTED_MODULE_26__.StoreModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_26__.StoreRootModule] }); })();


/***/ }),

/***/ 7786:
/*!*****************************************************!*\
  !*** ./src/app/business/actions/account.actions.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountActions": () => (/* binding */ AccountActions),
/* harmony export */   "SetUser": () => (/* binding */ SetUser)
/* harmony export */ });
var AccountActions;
(function (AccountActions) {
    AccountActions["SetUser"] = "[Account Page] Set User";
})(AccountActions || (AccountActions = {}));
class SetUser {
    constructor(user) {
        this.user = user;
        this.type = AccountActions.SetUser;
    }
}


/***/ }),

/***/ 5306:
/*!***************************************************!*\
  !*** ./src/app/business/actions/chats.actions.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatsActions": () => (/* binding */ ChatsActions),
/* harmony export */   "SetUserChats": () => (/* binding */ SetUserChats)
/* harmony export */ });
var ChatsActions;
(function (ChatsActions) {
    ChatsActions["SetUserChats"] = "[Chats Page] Set User Chats";
})(ChatsActions || (ChatsActions = {}));
class SetUserChats {
    constructor(chats) {
        this.chats = chats;
        this.type = ChatsActions.SetUserChats;
    }
}


/***/ }),

/***/ 8625:
/*!***********************************!*\
  !*** ./src/app/business/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rootReducer": () => (/* binding */ rootReducer),
/* harmony export */   "reducers": () => (/* binding */ reducers)
/* harmony export */ });
/* harmony import */ var _reducers_account_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers/account.reducer */ 7238);
/* harmony import */ var _reducers_chat_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/chat.reducer */ 7913);


const rootReducer = {};
const reducers = {
    account: _reducers_account_reducer__WEBPACK_IMPORTED_MODULE_0__.accountReducer,
    chats: _reducers_chat_reducer__WEBPACK_IMPORTED_MODULE_1__.chatsReducer,
};


/***/ }),

/***/ 7238:
/*!******************************************************!*\
  !*** ./src/app/business/reducers/account.reducer.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "accountReducer": () => (/* binding */ accountReducer)
/* harmony export */ });
/* harmony import */ var _actions_account_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/account.actions */ 7786);

const initialState = {
    user: undefined
};
function accountReducer(state = initialState, action) {
    switch (action.type) {
        case _actions_account_actions__WEBPACK_IMPORTED_MODULE_0__.AccountActions.SetUser:
            return {
                user: action.user,
            };
        default:
            return state;
    }
}


/***/ }),

/***/ 7913:
/*!***************************************************!*\
  !*** ./src/app/business/reducers/chat.reducer.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "chatsReducer": () => (/* binding */ chatsReducer)
/* harmony export */ });
/* harmony import */ var _actions_chats_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/chats.actions */ 5306);

const initialState = {
    chats: []
};
function chatsReducer(state = initialState, action) {
    switch (action.type) {
        case _actions_chats_actions__WEBPACK_IMPORTED_MODULE_0__.ChatsActions.SetUserChats:
            return {
                chats: action.chats,
            };
        default:
            return state;
    }
}


/***/ }),

/***/ 668:
/*!********************************************************!*\
  !*** ./src/app/chat-message/chat-message.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatMessageComponent": () => (/* binding */ ChatMessageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8267);



function ChatMessageComponent_div_0_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 9);
} }
function ChatMessageComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatMessageComponent_div_0_div_4_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.openImagesSlider(ctx_r5.message.imgs.indexOf(i_r4)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + i_r4.file + ")");
} }
function ChatMessageComponent_div_0_div_7_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", i_r8.file, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r8.name ? ctx_r7.spliceFileURL(i_r8.name) : ctx_r7.spliceFileURL(i_r8.file));
} }
function ChatMessageComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatMessageComponent_div_0_div_7_a_1_Template, 5, 2, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.message.docs);
} }
const _c0 = function (a0) { return { "not-from-user": a0 }; };
function ChatMessageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatMessageComponent_div_0_span_1_Template, 1, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChatMessageComponent_div_0_div_4_Template, 2, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChatMessageComponent_div_0_div_7_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("justify-content", ctx_r0.checkMessageIsFromUser() ? "flex-end" : "flex-start");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.checkUserIsReadMessage() && ctx_r0.checkMessageIsFromUser());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, !ctx_r0.checkMessageIsFromUser()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.message.imgs);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.message.body);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.message.docs.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](10, 8, ctx_r0.message.date, "dd.MM.y HH:mm", "UTC-3"));
} }
class ChatMessageComponent {
    constructor() {
        this.userId = -1;
        this.openSlider = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    checkMessageIsFromUser() {
        var _a;
        return ((_a = this.message) === null || _a === void 0 ? void 0 : _a.user.id) === this.userId;
    }
    checkUserIsReadMessage() {
        var _a;
        let r = (_a = this.message) === null || _a === void 0 ? void 0 : _a.readers;
        return r ? r.includes(this.userId) && r.length > 1 : false;
    }
    spliceFileURL(path) {
        let a = path.split('/');
        let str = a[a.length - 1];
        let type = '.' + str.split('.')[1];
        return a[a.length - 1].substr(0, 23) + '...';
    }
    openImagesSlider(id) {
        var _a;
        this.openSlider.emit({ id, urls: ((_a = this.message) === null || _a === void 0 ? void 0 : _a.imgs.map(i => i.file)) || [] });
    }
}
ChatMessageComponent.ɵfac = function ChatMessageComponent_Factory(t) { return new (t || ChatMessageComponent)(); };
ChatMessageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatMessageComponent, selectors: [["chat-message"]], inputs: { message: "message", userId: "userId" }, outputs: { openSlider: "openSlider" }, decls: 1, vars: 1, consts: [["class", "Message-Container", 3, "justifyContent", 4, "ngIf"], [1, "Message-Container"], ["class", "Message-Is-Read", 4, "ngIf"], [1, "Message__Ava"], [1, "Message", 3, "ngClass"], ["class", "Message__Images", 4, "ngFor", "ngForOf"], [1, "Message__Body"], ["class", "Message__Docs", 4, "ngIf"], [1, "Message__Date"], [1, "Message-Is-Read"], [1, "Message__Images"], [1, "Item", 3, "click"], [1, "Message__Docs"], ["class", "Item", 3, "href", 4, "ngFor", "ngForOf"], [1, "Item", 3, "href"], [1, "Icon"], [1, "Name"]], template: function ChatMessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChatMessageComponent_div_0_Template, 11, 14, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.Row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.Column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.Message-Container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n}\n\n.Message-Container[_ngcontent-%COMP%]   .Message-Is-Read[_ngcontent-%COMP%] {\n  width: 5px;\n  height: 5px;\n  margin-right: 15px;\n  background: var(--blue);\n  border-radius: 50%;\n}\n\n.Message-Container[_ngcontent-%COMP%]   .Message[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  width: auto;\n  background: #BDE7FF;\n  padding: 10px;\n  border-radius: 10px 0 10px 10px;\n  max-width: 400px;\n}\n\n@media screen and (max-width: 1043px) {\n  .Message-Container[_ngcontent-%COMP%]   .Message[_ngcontent-%COMP%] {\n    max-width: 300px;\n  }\n}\n\n.Message-Container[_ngcontent-%COMP%]   .Message.not-from-user[_ngcontent-%COMP%] {\n  border-radius: 0 10px 10px 10px;\n  background: #AAF5FF;\n}\n\n.Message-Container[_ngcontent-%COMP%]   .Message[_ngcontent-%COMP%]   .Message__Images[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  margin-bottom: 10px;\n}\n\n.Message-Container[_ngcontent-%COMP%]   .Message[_ngcontent-%COMP%]   .Message__Images[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%] {\n  padding: 5px;\n  width: 200px;\n  height: 100px;\n  background-size: 100% auto;\n  background-position: center;\n  cursor: pointer;\n}\n\n.Message-Container[_ngcontent-%COMP%]   .Message[_ngcontent-%COMP%]   .Message__Body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  font-size: 16px;\n}\n\n.Message-Container[_ngcontent-%COMP%]   .Message[_ngcontent-%COMP%]   .Message__Docs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 5px;\n  background: rgba(0, 0, 0, 0.05);\n  border-radius: 10px;\n  margin-top: 10px;\n}\n\n.Message-Container[_ngcontent-%COMP%]   .Message[_ngcontent-%COMP%]   .Message__Docs[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 5px 10px;\n  cursor: pointer;\n  color: #000;\n  text-decoration: none;\n}\n\n.Message-Container[_ngcontent-%COMP%]   .Message[_ngcontent-%COMP%]   .Message__Docs[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  padding: 5px;\n  border-radius: 100%;\n  background: var(--blue);\n}\n\n.Message-Container[_ngcontent-%COMP%]   .Message[_ngcontent-%COMP%]   .Message__Docs[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 30px;\n  content: url(\"/media/icons/file-upload-white.svg\");\n}\n\n.Message-Container[_ngcontent-%COMP%]   .Message[_ngcontent-%COMP%]   .Message__Docs[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Name[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  font-size: 14px;\n  font-weight: 550;\n}\n\n.Message-Container[_ngcontent-%COMP%]   .Message[_ngcontent-%COMP%]   .Message__Docs[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]:hover   .Name[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n\n.Message-Container[_ngcontent-%COMP%]   .Message[_ngcontent-%COMP%]   .Message__Date[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: flex-start;\n  width: 100%;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcc3R5bGVzLnNhc3MiLCJjaGF0LW1lc3NhZ2UuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQ0NKOztBRFNBO0VBTEksYUFBQTtFQUNBLG1CQUtnQjtFQUpoQiwyQkFIK0I7RUFJL0IsdUJBSmdEO0FDSXBEOztBREtBO0VBUkksYUFBQTtFQUNBLHNCQUZrQjtFQUdsQiwyQkFIK0I7RUFJL0IsdUJBSmdEO0FDV3BEOztBQWZBO0VES0ksYUFBQTtFQUNBLG1CQ0xnQjtFRE1oQiwyQkNOcUI7RURPckIsbUJDUGlDO0VBQ2pDLFdBQUE7QUFxQko7O0FBcEJJO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFzQlI7O0FBbkJJO0VETkEsYUFBQTtFQUNBLHNCQ01vQjtFRExwQix1QkNLNEI7RURKNUIsdUJBSmdEO0VDUzVDLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FBd0JSOztBQXZCUTtFQVBKO0lBUVEsZ0JBQUE7RUEwQlY7QUFDRjs7QUExQlE7RUFDSSwrQkFBQTtFQUNBLG1CQUFBO0FBNEJaOztBQTNCUTtFRGxCSixhQUFBO0VBQ0EsbUJDa0J3QjtFRGpCeEIsMkJBSCtCO0VBSS9CLHVCQUpnRDtFQ3FCeEMsZUFBQTtFQUNBLG1CQUFBO0FBZ0NaOztBQS9CWTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FBaUNoQjs7QUFoQ1E7RUQ3QkosYUFBQTtFQUNBLG1CQzZCd0I7RUQ1QnhCLDJCQzRCNkI7RUQzQjdCLHVCQUpnRDtFQ2dDeEMsZUFBQTtBQXFDWjs7QUFwQ1E7RURoQ0osYUFBQTtFQUNBLHNCQUZrQjtFQUdsQiwyQkFIK0I7RUFJL0IsdUJBSmdEO0VDbUN4QyxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBeUNaOztBQXhDWTtFRHRDUixhQUFBO0VBQ0EsbUJDc0M0QjtFRHJDNUIsMkJDcUNpQztFRHBDakMsbUJDb0M2QztFQUNqQyxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUE2Q2hCOztBQTVDZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBOENwQjs7QUE3Q29CO0VBQ0ksZUFBQTtFQUNBLGtEQUFBO0FBK0N4Qjs7QUE5Q2dCO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFnRHBCOztBQTlDb0I7RUFDSSwwQkFBQTtBQWdEeEI7O0FBL0NRO0VENURKLGFBQUE7RUFDQSxtQkM0RHdCO0VEM0R4Qix5QkMyRDZCO0VEMUQ3Qix1QkFKZ0Q7RUMrRHhDLFdBQUE7RUFDQSxlQUFBO0FBb0RaIiwiZmlsZSI6ImNoYXQtbWVzc2FnZS5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHlcbiAgICBtYXJnaW46IDBcbiAgICBwYWRkaW5nOiAwXG5cbiRuYXZfdzozMDBweFxuICAgIFxuPWZsZXgtY29udGFpbmVyKCRkaXI6IGNvbHVtbiwgJGpjOiBmbGV4LXN0YXJ0LCAkYWk6IGZsZXgtc3RhcnQpXG4gICAgZGlzcGxheTogZmxleFxuICAgIGZsZXgtZGlyZWN0aW9uOiAkZGlyXG4gICAganVzdGlmeS1jb250ZW50OiAkamNcbiAgICBhbGlnbi1pdGVtczogJGFpIFxuXG4uUm93XG4gICAgK2ZsZXgtY29udGFpbmVyKHJvdylcblxuLkNvbHVtblxuICAgICtmbGV4LWNvbnRhaW5lcigpXG4iLCJodG1sLCBib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uUm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLkNvbHVtbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5NZXNzYWdlLUNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4uTWVzc2FnZS1Db250YWluZXIgLk1lc3NhZ2UtSXMtUmVhZCB7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJsdWUpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uTWVzc2FnZS1Db250YWluZXIgLk1lc3NhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjQkRFN0ZGO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDAgMTBweCAxMHB4O1xuICBtYXgtd2lkdGg6IDQwMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA0M3B4KSB7XG4gIC5NZXNzYWdlLUNvbnRhaW5lciAuTWVzc2FnZSB7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgfVxufVxuLk1lc3NhZ2UtQ29udGFpbmVyIC5NZXNzYWdlLm5vdC1mcm9tLXVzZXIge1xuICBib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjQUFGNUZGO1xufVxuLk1lc3NhZ2UtQ29udGFpbmVyIC5NZXNzYWdlIC5NZXNzYWdlX19JbWFnZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uTWVzc2FnZS1Db250YWluZXIgLk1lc3NhZ2UgLk1lc3NhZ2VfX0ltYWdlcyAuSXRlbSB7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uTWVzc2FnZS1Db250YWluZXIgLk1lc3NhZ2UgLk1lc3NhZ2VfX0JvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uTWVzc2FnZS1Db250YWluZXIgLk1lc3NhZ2UgLk1lc3NhZ2VfX0RvY3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uTWVzc2FnZS1Db250YWluZXIgLk1lc3NhZ2UgLk1lc3NhZ2VfX0RvY3MgLkl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjMDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uTWVzc2FnZS1Db250YWluZXIgLk1lc3NhZ2UgLk1lc3NhZ2VfX0RvY3MgLkl0ZW0gLkljb24ge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJsdWUpO1xufVxuLk1lc3NhZ2UtQ29udGFpbmVyIC5NZXNzYWdlIC5NZXNzYWdlX19Eb2NzIC5JdGVtIC5JY29uIGkge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbnRlbnQ6IHVybChcIi9tZWRpYS9pY29ucy9maWxlLXVwbG9hZC13aGl0ZS5zdmdcIik7XG59XG4uTWVzc2FnZS1Db250YWluZXIgLk1lc3NhZ2UgLk1lc3NhZ2VfX0RvY3MgLkl0ZW0gLk5hbWUge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTUwO1xufVxuLk1lc3NhZ2UtQ29udGFpbmVyIC5NZXNzYWdlIC5NZXNzYWdlX19Eb2NzIC5JdGVtOmhvdmVyIC5OYW1lIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uTWVzc2FnZS1Db250YWluZXIgLk1lc3NhZ2UgLk1lc3NhZ2VfX0RhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn0iXX0= */"] });


/***/ }),

/***/ 3621:
/*!******************************************!*\
  !*** ./src/app/chats/chats.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatsComponent": () => (/* binding */ ChatsComponent)
/* harmony export */ });
/* harmony import */ var _business_actions_chats_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../business/actions/chats.actions */ 5306);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/chat.service */ 5292);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image-slider/image-slider.component */ 1914);
/* harmony import */ var _hamburger_hamburger_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hamburger/hamburger.component */ 7815);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chat-message/chat-message.component */ 668);
/* harmony import */ var _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../progress-bar/progress-bar.component */ 5936);












const _c0 = ["chatBody"];
const _c1 = ["chatMessage"];
function ChatsComponent_image_slider_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "image-slider", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("close", function ChatsComponent_image_slider_0_Template_image_slider_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r3.closeImageSlider(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("urls", ctx_r0.imagesForImageSlider)("id", ctx_r0.imageIdForImageSlider);
} }
const _c2 = function (a0) { return { id: a0 }; };
function ChatsComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ChatsComponent_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r6.chatNavIsOpen = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", "/chats")("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c2, c_r5.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](c_r5.title || ((tmp_2_0 = ctx_r1.getOtherUserInChat(c_r5.id)) == null ? null : tmp_2_0.first_name) + " " + ((tmp_2_0 = ctx_r1.getOtherUserInChat(c_r5.id)) == null ? null : tmp_2_0.last_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](c_r5.messages[c_r5.messages.length - 1].body);
} }
function ChatsComponent_div_3_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ChatsComponent_div_3_div_1_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r19.setChatInfoIsOpen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r10.getChatTitle());
} }
function ChatsComponent_div_3_div_1_a_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", "/profile")("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](3, _c2, (tmp_1_0 = ctx_r11.getOtherUserInChat()) == null ? null : tmp_1_0.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r11.getChatTitle());
} }
function ChatsComponent_div_3_div_1_chat_message_12_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "chat-message", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("openSlider", function ChatsComponent_div_3_div_1_chat_message_12_Template_chat_message_openSlider_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r23.openImageSlider($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r21 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("message", m_r21)("userId", (ctx_r13.user == null ? null : ctx_r13.user.id) || -1);
} }
function ChatsComponent_div_3_div_1_div_30_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ChatsComponent_div_3_div_1_div_30_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4); return ctx_r28.breakUpload(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("Break-Upload");
} }
function ChatsComponent_div_3_div_1_div_30_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ChatsComponent_div_3_div_1_div_30_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r32); const i_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r30.deleteUploadedFile(i_r25.type, i_r25.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"]("Delete-File");
} }
function ChatsComponent_div_3_div_1_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "progress-bar", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ChatsComponent_div_3_div_1_div_30_button_9_Template, 2, 2, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ChatsComponent_div_3_div_1_div_30_button_10_Template, 2, 2, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](i_r25.type === "img" ? "Upload-Img" : "Upload-Doc");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r25.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("progress", i_r25.progress)("progressColor", i_r25.progressColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](i_r25.progress.toString() + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r25.progress < 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r25.progress === 100);
} }
function ChatsComponent_div_3_div_1_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 44);
} }
function ChatsComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "header", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "hamburger", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onchange", function ChatsComponent_div_3_div_1_Template_hamburger_onchange_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r34.setChatNavIsOpen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ChatsComponent_div_3_div_1_div_6_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ChatsComponent_div_3_div_1_a_7_Template, 2, 5, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "main", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, ChatsComponent_div_3_div_1_chat_message_12_Template, 2, 2, "chat-message", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "form", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function ChatsComponent_div_3_div_1_Template_form_ngSubmit_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r36.sendMessage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ChatsComponent_div_3_div_1_Template_input_ngModelChange_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r37.writingMessage(); })("ngModelChange", function ChatsComponent_div_3_div_1_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r38.message.body = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "input", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ChatsComponent_div_3_div_1_Template_input_change_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r39.uploadFile($event, "img"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "input", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ChatsComponent_div_3_div_1_Template_input_change_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r40.uploadFile($event, "doc"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ChatsComponent_div_3_div_1_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](19); return _r15.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ChatsComponent_div_3_div_1_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35); const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](21); return _r16.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, ChatsComponent_div_3_div_1_div_30_Template, 11, 8, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, ChatsComponent_div_3_div_1_div_31_Template, 1, 0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isOpen", ctx_r8.chatNavIsOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r8.chat.is_group);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r8.chat.is_group);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r8.writingUsers.length === 0 ? "online" : ctx_r8.getWritingUsersString());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r8.chat.messages);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r8.message.body);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r8.uploadigFiles);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r8.message.docs);
} }
function ChatsComponent_div_3_form_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r44.getChatTitle());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r44.chat.about || "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043D\u0435 \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u043E");
} }
function ChatsComponent_div_3_form_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ChatsComponent_div_3_form_2_div_4_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r50.chatForEdit.title = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "textarea", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ChatsComponent_div_3_form_2_div_4_Template_textarea_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r51); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r52.chatForEdit.about = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r45.chatForEdit.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r45.chatForEdit.about);
} }
function ChatsComponent_div_3_form_2_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ChatsComponent_div_3_form_2_div_5_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4); return ctx_r56.startEditing(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ChatsComponent_div_3_form_2_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u041F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C\u0441\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ChatsComponent_div_3_form_2_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ChatsComponent_div_3_form_2_div_5_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4); return ctx_r58.signoutFromChat(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u0447\u0430\u0442\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ChatsComponent_div_3_form_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ChatsComponent_div_3_form_2_div_5_div_1_Template, 2, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ChatsComponent_div_3_form_2_div_5_div_2_Template, 2, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ChatsComponent_div_3_form_2_div_5_div_3_Template, 2, 0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r46.checkUserCanEditChat());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r46.checkUserIsAdmin());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r46.checkUserIsAdmin());
} }
function ChatsComponent_div_3_form_2_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u0413\u043E\u0442\u043E\u0432\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ChatsComponent_div_3_form_2_div_6_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3); return ctx_r60.stopEditing(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ChatsComponent_div_3_form_2_div_7_a_1_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ChatsComponent_div_3_form_2_div_7_a_1_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "moder");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ChatsComponent_div_3_form_2_div_7_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ChatsComponent_div_3_form_2_div_7_a_1_span_8_Template, 2, 0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ChatsComponent_div_3_form_2_div_7_a_1_span_9_Template, 2, 0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const u_r63 = ctx.$implicit;
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", "/profile")("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](6, _c2, u_r63.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](u_r63.id === (ctx_r62.user == null ? null : ctx_r62.user.id) ? "\u0412\u044B" : u_r63.first_name + " " + u_r63.last_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](u_r63.profile.status || "online");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r62.checkUserIsAdmin(u_r63.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r62.checkUserIsModer(u_r63.id));
} }
function ChatsComponent_div_3_form_2_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ChatsComponent_div_3_form_2_div_7_a_1_Template, 10, 8, "a", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r48.chat.users);
} }
const _c3 = function (a0, a1) { return { "Is-Banned": a0, "Not-Banned": a1 }; };
function ChatsComponent_div_3_form_2_div_8_div_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "select", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\u041C\u043E\u0434\u0435\u0440\u0430\u0442\u043E\u0440");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ChatsComponent_div_3_form_2_div_8_div_1_ng_container_6_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r71); const u_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4); return ctx_r69.banUser(u_r67.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const u_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r68.checkUserIsModer() ? "moder" : "user");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](2, _c3, ctx_r68.checkUserIsBanned(u_r67.id), !ctx_r68.checkUserIsBanned(u_r67.id)));
} }
function ChatsComponent_div_3_form_2_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ChatsComponent_div_3_form_2_div_8_div_1_ng_container_6_Template, 8, 5, "ng-container", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const u_r67 = ctx.$implicit;
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](u_r67.first_name + " " + u_r67.last_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", u_r67.id !== (ctx_r66.user == null ? null : ctx_r66.user.id));
} }
function ChatsComponent_div_3_form_2_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ChatsComponent_div_3_form_2_div_8_div_1_Template, 7, 2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r49.chat.users);
} }
function ChatsComponent_div_3_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "form", 50, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function ChatsComponent_div_3_form_2_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r74); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r73.editChat(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "hamburger", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onchange", function ChatsComponent_div_3_form_2_Template_hamburger_onchange_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r74); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r75.setChatInfoIsOpen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ChatsComponent_div_3_form_2_div_3_Template, 6, 2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ChatsComponent_div_3_form_2_div_4_Template, 4, 2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ChatsComponent_div_3_form_2_div_5_Template, 4, 3, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ChatsComponent_div_3_form_2_div_6_Template, 6, 0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ChatsComponent_div_3_form_2_div_7_Template, 2, 1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ChatsComponent_div_3_form_2_div_8_Template, 2, 1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isOpen", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r9.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r9.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r9.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r9.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r9.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r9.isEditing);
} }
function ChatsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ChatsComponent_div_3_div_1_Template, 32, 8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ChatsComponent_div_3_form_2_Template, 9, 7, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.chatIsOpen() || !ctx_r2.chatInfoIsOpen && !ctx_r2.chatNavIsOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.chat.is_group && ctx_r2.chatInfoIsOpen);
} }
const _c4 = function (a0) { return { "Close": a0 }; };
class ChatsComponent {
    constructor(_router, _route, _chat, _store) {
        this._router = _router;
        this._route = _route;
        this._chat = _chat;
        this._store = _store;
        this.writingUsers = [];
        this.chats = [];
        this.chatInfoIsOpen = false;
        this.chatNavIsOpen = false;
        this.message = {
            user: -1,
            chat: -1,
            body: "",
            is_forwarded: false,
            imgs: [],
            docs: []
        };
        this.uploadigFiles = [];
        this.chatForEdit = {
            photo: undefined,
            title: undefined,
            about: undefined,
            users: [],
            moderators: [],
            banned_list: [],
            is_private: false,
        };
        this.isEditing = false;
        this.imageIdForImageSlider = 0;
        this.imagesForImageSlider = [];
        this.imageSliderIsOpen = false;
        _store.subscribe(data => {
            var _a;
            this.user = data.account.user;
            this.chats = data.chats.chats;
            this.message["user"] = ((_a = this.user) === null || _a === void 0 ? void 0 : _a.id) || -1;
            _route.queryParams.subscribe(p => {
                let id = parseInt(p["id"]);
                if (id) {
                    this.chat = data.chats.chats.find(i => i.id === id);
                    if (this.chat) {
                        let { title, about, users, banned_list, moderators, is_private } = this.chat;
                        this.chatForEdit = { photo: undefined, title, about, users: users.map(i => { return i.id; }), moderators, banned_list, is_private };
                        this.message["chat"] = id;
                        this.chatBody && this.scroll(this.chatBody.nativeElement);
                        this._chat.readMessage(id);
                    }
                }
                else {
                    this.chatNavIsOpen = true;
                }
            });
        });
    }
    ngOnInit() {
        this._route.queryParams.subscribe(p => {
            let id = parseInt(p["id"]);
            if (id) {
                this.connect(id);
            }
        });
    }
    connect(id) {
        this._chat.connectToMessages(id);
        this._chat.subscribeToMessages().subscribe(data => {
            this._subscribeToWSMessages(data);
        });
    }
    getChatTitle() {
        if (this.user && this.chat) {
            if (this.chat.title)
                return this.chat.title;
            else if (this.chat.is_group)
                return "Чат 1";
            else {
                let user = this.chat.users.filter(i => { var _a; return i.id !== ((_a = this.user) === null || _a === void 0 ? void 0 : _a.id); })[0];
                return user.first_name + " " + user.last_name;
            }
        }
        return null;
    }
    sendMessage() {
        this._chat.sendMessage(this.message);
    }
    uploadFile(event, type) {
        let el = event.target;
        let fileList = el.files;
        let fd = new FormData();
        if (fileList) {
            let f = fileList[0];
            if (f.name.length > 100) {
                console.error("Длина названия файла не может быть больше 100 символов.");
            }
            else {
                let uf = { type, name: f.name, progress: 0 };
                fd.append("file", f);
                this.uploadigFiles.push(uf);
                let uploadingFilesLastId = this.uploadigFiles.length - 1;
                this.uploadSubscription = this._chat.uploadFile(fd, type).subscribe(data => {
                    var _a, _b, _c;
                    if (data.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpEventType.UploadProgress && data.total) {
                        this.uploadigFiles[uploadingFilesLastId].progress = Math.round(data.loaded / data.total * 100);
                    }
                    else if (data.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpEventType.Response) {
                        if ((_a = data.body) === null || _a === void 0 ? void 0 : _a.data.id) {
                            type === "img" && this.message['imgs'].push((_b = data.body) === null || _b === void 0 ? void 0 : _b.data.id);
                            type === "doc" && this.message['docs'].push((_c = data.body) === null || _c === void 0 ? void 0 : _c.data.id);
                            this.uploadigFiles[uploadingFilesLastId].id = data.body.data.id;
                        }
                    }
                });
            }
        }
    }
    breakUpload() {
        var _a;
        (_a = this.uploadSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        let uploadingFilesLastId = this.uploadigFiles.length - 1;
        this.uploadigFiles.splice(uploadingFilesLastId, 1);
    }
    deleteUploadedFile(type, id) {
        id && this._chat.deleteUploadedFile(id, type).subscribe(data => {
            if (type === 'img') {
                this.message['imgs'].splice(this.message.imgs.indexOf(id), 1);
            }
            else if (type === 'doc') {
                this.message['docs'].splice(this.message.docs.indexOf(id), 1);
            }
            let uf = this.uploadigFiles.find(i => i.id === id);
            uf && this.uploadigFiles.splice(this.uploadigFiles.indexOf(uf), 1);
        });
    }
    openImageSlider(data) {
        this.imagesForImageSlider = data.urls;
        this.imageIdForImageSlider = data.id;
        this.imageSliderIsOpen = true;
    }
    closeImageSlider() {
        this.imagesForImageSlider = [];
        this.imageIdForImageSlider = 0;
        this.imageSliderIsOpen = false;
    }
    writingMessage() {
        var _a;
        this._chat.writingMessage(((_a = this.user) === null || _a === void 0 ? void 0 : _a.id) || -1);
    }
    scroll(el) {
        el.scrollTop = el.scrollHeight;
    }
    getWritingUsersString() {
        let totalString = "";
        let a = this.writingUsers.map(i => { return `${i.first_name} ${i.last_name}`; });
        for (let i = 0; i < a.length; i++) {
            totalString += a[i];
            if (i + 1 !== a.length) {
                totalString += ", ";
            }
        }
        totalString = totalString.length > 60 ? totalString.substring(0, 80) + "..." : totalString;
        return totalString.length >= 1 ? totalString + " печатает..." : totalString + " печатают...";
    }
    startEditing() {
        this.isEditing = true;
    }
    stopEditing() {
        this.isEditing = false;
    }
    editChat() {
        this.chat && this._chat.editChat(this.chatForEdit, this.chat.id).subscribe(data => {
            if (data.result) {
                this.chat = data.data.chat;
                if (this.chat) {
                    let { title, about, users, banned_list, moderators, is_private } = this.chat;
                    this.chatForEdit = { photo: undefined, title, about, users: users.map(i => { return i.id; }), moderators, banned_list, is_private };
                }
            }
            else
                console.error(data.message);
        });
        this.stopEditing();
    }
    signoutFromChat() {
        this.chat && this._chat.signout(this.chat.id).subscribe(data => {
            var _a;
            if (data.result) {
                this.chat = data.data.chat;
                this.chatForEdit.banned_list = ((_a = data.data.chat) === null || _a === void 0 ? void 0 : _a.banned_list) || this.chatForEdit.banned_list;
            }
            else
                console.error(data.message);
        });
    }
    banUser(id) {
        this.chat && this._chat.ban(this.chat.id, id).subscribe(data => {
            var _a;
            if (data.result) {
                this.chat = data.data.chat;
                this.chatForEdit.banned_list = ((_a = data.data.chat) === null || _a === void 0 ? void 0 : _a.banned_list) || this.chatForEdit.banned_list;
                console.log(data.data.chat);
            }
            else
                console.error(data.message);
        });
    }
    checkUserIsAdmin(id) {
        var _a;
        return this.user ? (_a = this.chat) === null || _a === void 0 ? void 0 : _a.admins.includes(id || this.user.id) : false;
    }
    checkUserIsModer(id) {
        var _a;
        return this.user ? (_a = this.chat) === null || _a === void 0 ? void 0 : _a.moderators.includes(id || this.user.id) : false;
    }
    checkUserIsBanned(id) {
        var _a;
        return this.user ? (_a = this.chat) === null || _a === void 0 ? void 0 : _a.banned_list.includes(id || this.user.id) : false;
    }
    checkUserCanEditChat() {
        var _a;
        switch ((_a = this.chat) === null || _a === void 0 ? void 0 : _a.who_can_edit_chat) {
            case "everybody": return true;
            case "admins_and_moders": return this.checkUserIsAdmin() || this.checkUserIsModer;
            case "admins": return this.checkUserIsAdmin();
            default: return false;
        }
    }
    getOtherUserInChat(id) {
        let chat;
        if (id)
            chat = this.chats.find(i => i.id === id);
        else
            chat = this.chat;
        return chat === null || chat === void 0 ? void 0 : chat.users.filter(i => { var _a; return i.id !== ((_a = this.user) === null || _a === void 0 ? void 0 : _a.id); })[0];
    }
    setChatNavIsOpen() {
        this.chatNavIsOpen = !this.chatNavIsOpen;
        if (this.chatNavIsOpen && window.innerWidth < 1043) {
            this.chatInfoIsOpen = false;
        }
    }
    setChatInfoIsOpen() {
        this.chatInfoIsOpen = !this.chatInfoIsOpen;
        if (this.chatInfoIsOpen && window.innerWidth < 1043) {
            this.chatNavIsOpen = false;
        }
    }
    chatIsOpen() {
        return window.innerWidth > 767;
    }
    _subscribeToWSMessages(data) {
        switch (data.action) {
            case "send_message": {
                if (data.message) {
                    let chatsCopy = [...this.chats];
                    let messageCopy = Object.assign({}, data.message);
                    let chat = chatsCopy.find(i => i.id === data.message.chat);
                    if (chat) {
                        let chatCopy = Object.assign({}, chat);
                        let id = chatsCopy.indexOf(chat);
                        chatCopy.messages = [...chatCopy.messages, messageCopy];
                        chatsCopy.splice(id, 1, chatCopy);
                    }
                    this._store.dispatch(new _business_actions_chats_actions__WEBPACK_IMPORTED_MODULE_0__.SetUserChats(chatsCopy));
                }
                break;
            }
            case "writing_message": {
                let id = this.writingUsers.map(i => i.id).indexOf(data.user.id);
                if (id === -1) {
                    this.writingUsers.push(data.user);
                }
                if (this.intervalRef)
                    clearInterval(this.intervalRef);
                this.intervalRef = setInterval(() => {
                    this.writingUsers.splice(id, 1);
                }, 2000);
                console.log(id);
                break;
            }
            case "read_messages": {
                if (data.id && this.user) {
                    let chatsCopy = [...this.chats];
                    let chat = chatsCopy.find(i => i.id === data.id);
                    if (chat) {
                        let chatCopy = Object.assign({}, chat);
                        let id = chatsCopy.indexOf(chat);
                        chatCopy.messages = chatCopy.messages.map(i => {
                            this.user && i.readers.push(this.user.id);
                            return i;
                        });
                        chatsCopy.splice(id, 1, chatCopy);
                    }
                    this._store.dispatch(new _business_actions_chats_actions__WEBPACK_IMPORTED_MODULE_0__.SetUserChats(chatsCopy));
                }
                break;
            }
            default: console.error("Action in data is incorrect");
        }
    }
}
ChatsComponent.ɵfac = function ChatsComponent_Factory(t) { return new (t || ChatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_1__.ChatService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store)); };
ChatsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ChatsComponent, selectors: [["chats"]], viewQuery: function ChatsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.chatBody = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.chatMessages = _t);
    } }, decls: 4, vars: 6, consts: [[3, "urls", "id", "close", 4, "ngIf"], [1, "All-Chats", "Shadow-Right", 3, "ngClass"], ["class", "Item", 3, "routerLink", "queryParams", "click", 4, "ngFor", "ngForOf"], ["class", "Chat", 4, "ngIf"], [3, "urls", "id", "close"], [1, "Item", 3, "routerLink", "queryParams", "click"], [1, "Avatar"], ["src", "/media/icons/profile.png", "alt", ""], [1, "Main-Info"], [1, "Name"], [1, "Status"], [1, "Chat"], ["class", "Chat__Container", 4, "ngIf"], ["class", "Chat__Information Shadow-Left", 3, "ngSubmit", 4, "ngIf"], [1, "Chat__Container"], [1, "Chat__Header"], [3, "isOpen", "onchange"], [1, "Information"], [1, "Chat-Ava"], [1, "Chat-Main-Info"], ["class", "Chat-Title", 3, "click", 4, "ngIf"], ["class", "Chat-Title", 3, "routerLink", "queryParams", 4, "ngIf"], [1, "Chat-Status"], [1, "Chat__Body"], ["chatBody", ""], ["style", "padding: 0 10px;", 3, "message", "userId", "openSlider", 4, "ngFor", "ngForOf"], [1, "Chat__Form", 3, "ngSubmit"], ["chatForm", "ngForm"], [1, "Chat__Form__Fields-Container"], ["name", "body", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435", 3, "ngModel", "ngModelChange"], ["type", "file", "accept", "image/*", 2, "display", "none", 3, "change"], ["imageUpload", ""], ["type", "file", "accept", "application/msword, text/plain, application/pdf", 2, "display", "none", 3, "change"], ["fileUpload", ""], [1, "Actions"], ["type", "button", 1, "Upload-Img", 3, "click"], ["type", "button", 1, "Upload-Doc", 3, "click"], [1, "Send"], [1, "Chat__Form__Upload-Files"], ["class", "Item", 4, "ngFor", "ngForOf"], [1, "Chat-Title", 3, "click"], [1, "Chat-Title", 3, "routerLink", "queryParams"], [2, "padding", "0 10px", 3, "message", "userId", "openSlider"], ["chatMessages", ""], [1, "Item"], [1, "Icon"], [3, "progress", "progressColor"], [1, "Progress-Bar-Procents"], ["type", "button", 3, "class", "click", 4, "ngIf"], ["type", "button", 3, "click"], [1, "Chat__Information", "Shadow-Left", 3, "ngSubmit"], ["chatEditForm", "ngForm"], ["class", "Main-Info", 4, "ngIf"], ["class", "Actions Column", 4, "ngIf"], ["class", "Actions Row", 4, "ngIf"], ["class", "Users", 4, "ngIf"], [1, "Chat-Title"], [1, "Chat-Description"], ["name", "title", 1, "Chat-Title", 3, "ngModel", "ngModelChange"], ["name", "about", 1, "Chat-Description", 3, "ngModel", "ngModelChange"], [1, "Actions", "Column"], ["class", "Edit", 3, "click", 4, "ngIf"], ["class", "Bad-Chat", 4, "ngIf"], ["class", "Signout", 3, "click", 4, "ngIf"], [1, "Edit", 3, "click"], [1, "Bad-Chat"], [1, "Signout", 3, "click"], [1, "Actions", "Row"], ["type", "submit", 1, "Done"], [1, "Split"], ["type", "button", 1, "Cancel", 3, "click"], [1, "Users"], ["class", "Item", 3, "routerLink", "queryParams", 4, "ngFor", "ngForOf"], [1, "Item", 3, "routerLink", "queryParams"], ["class", "Chat-Status", 4, "ngIf"], [4, "ngIf"], [3, "value"], ["value", "user"], ["value", "moder"], ["type", "button", 1, "Ban", 3, "ngClass", "click"]], template: function ChatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, ChatsComponent_image_slider_0_Template, 1, 2, "image-slider", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ChatsComponent_a_2_Template, 8, 6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ChatsComponent_div_3_Template, 3, 2, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.imageSliderIsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c4, !ctx.chatNavIsOpen));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.chats);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.chat);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_2__.ImageSliderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _hamburger_hamburger_component__WEBPACK_IMPORTED_MODULE_3__.HamburgerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _chat_message_chat_message_component__WEBPACK_IMPORTED_MODULE_4__.ChatMessageComponent, _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_5__.ProgressBarComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgSelectMultipleOption"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.Row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.Column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.Row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.Column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.Form-Container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  position: fixed;\n  top: 100px;\n  left: calc(50% - 250px);\n  width: 500px;\n  height: auto;\n  background: white;\n  box-shadow: #00000025 0 4px 8px 0;\n  border-radius: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Title[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  font-size: 26px;\n  margin: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Warning[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  width: 100%;\n  border: var(--red) solid 2px;\n  background: #fff;\n  color: var(--red);\n  font-size: 18px;\n  padding: 10px 20px;\n  border-radius: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Warning.ok[_ngcontent-%COMP%] {\n  color: var(--green);\n  border-color: var(--green);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n  padding: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n  margin-top: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-family: \"Rubik\", sans-serif;\n  border: #00000020 solid 1px;\n  width: 100%;\n  padding: 10px;\n  font-size: 16px;\n  border-radius: 5px;\n  transition: all 0.1s;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover:not(.ng-touched.ng-invalid), .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover:not(.ng-touched.ng-invalid), .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:hover:not(.ng-touched.ng-invalid) {\n  border-color: #00000040;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus:not(.ng-touched.ng-invalid), .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus:not(.ng-touched.ng-invalid), .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus:not(.ng-touched.ng-invalid) {\n  border-color: var(--lite-blue);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input.ng-touched.ng-invalid[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select.ng-touched.ng-invalid[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border-color: var(--lite-red);\n}\n\n@media screen and (max-width: 469px) {\n  .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 5px;\n  }\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 100%;\n  color: var(--red);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 100px;\n  max-height: 800px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 10px;\n  border-top: #00000030 solid 1px;\n  border-bottom: #00000030 solid 1px;\n  width: 100%;\n  font-size: 16px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Links[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Rubik\", sans-serif;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 550;\n  color: var(--blue);\n  transition: all 0.1s;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: var(--lite-blue);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Button[_ngcontent-%COMP%] {\n  width: calc(100% - 20px);\n  background: transparent;\n  font-size: 16px;\n  font-family: \"Rubik\", sans-serif;\n  font-weight: 550;\n  padding: 7px 15px;\n  cursor: pointer;\n  border: var(--blue) solid 2px;\n  background: #fff;\n  color: var(--blue);\n  margin: 10px;\n  border-radius: 1000px;\n  transition: all 0.1s;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: #fff;\n  background: var(--blue);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Button[_ngcontent-%COMP%]:disabled {\n  color: var(--lite-blue);\n  border-color: var(--lite-blue);\n  cursor: not-allowed;\n}\n\n.Search-Container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 70px;\n  padding: 10px 15px;\n  border-bottom: #00000040 solid 2px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Query[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  width: 100%;\n  height: auto;\n  font-size: 18px;\n  font-family: Arial, Helvetica, sans-serif;\n  padding: 0 15px;\n  height: 100%;\n}\n\n.Search-Container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  flex: 0 0 30px;\n  font-size: 30px;\n  width: 30px;\n  height: 30px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Search[_ngcontent-%COMP%] {\n  content: url(\"/media/icons/search.svg\");\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  background: #fff;\n  border-radius: 5px;\n  width: 40px;\n  height: 40px;\n  padding: 5px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%]::before {\n  font-size: 30px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%]:hover {\n  box-shadow: #00000050 2px 0 8px 0;\n  cursor: pointer;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%]:focus {\n  box-shadow: inset #00000050 2px 0 8px 0;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  content: url(\"/media/icons/slider-settings.svg\");\n  fill: var(--blue);\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%] {\n  width: 600px;\n  position: absolute;\n  background: #fff;\n  border-radius: 10px;\n  padding: 10px;\n  box-shadow: #00000040 0 2px 4px 0;\n}\n\n@media screen and (max-width: 676px) {\n  .Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%] {\n    width: calc(100% - 10px);\n  }\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 10px 0;\n  width: 100%;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  margin: 10px;\n}\n\n@media screen and (max-width: 469px) {\n  .Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-family: \"Rubik\", sans-serif;\n  border: #00000020 solid 1px;\n  width: 100%;\n  padding: 10px;\n  font-size: 16px;\n  border-radius: 5px;\n  transition: all 0.1s;\n  width: 100%;\n  margin: 4px 10px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover:not(.ng-touched.ng-invalid) {\n  border-color: #00000040;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus:not(.ng-touched.ng-invalid) {\n  border-color: var(--lite-blue);\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border-color: var(--lite-red);\n}\n\n@media screen and (max-width: 469px) {\n  .Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 5px;\n  }\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Button[_ngcontent-%COMP%] {\n  width: calc(100% - 20px);\n  background: transparent;\n  font-size: 16px;\n  font-family: \"Rubik\", sans-serif;\n  font-weight: 550;\n  padding: 7px 15px;\n  cursor: pointer;\n  border: var(--blue) solid 2px;\n  background: #fff;\n  color: var(--blue);\n  margin: 10px;\n  border-radius: 1000px;\n  transition: all 0.1s;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: #fff;\n  background: var(--blue);\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Button[_ngcontent-%COMP%]:disabled {\n  color: var(--lite-blue);\n  border-color: var(--lite-blue);\n  cursor: not-allowed;\n}\n\n.Chat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  height: 100%;\n  width: 100%;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n  height: 100%;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%]   .Chat__Header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  flex: 0 0 70px;\n  border-bottom: #00000050 solid 2px;\n  padding: 0 15px;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%]   .Chat__Header[_ngcontent-%COMP%]   .Information[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%]   .Chat__Header[_ngcontent-%COMP%]   .Information[_ngcontent-%COMP%]   .Chat-Ava[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 100%;\n  border: #000 solid 1px;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%]   .Chat__Header[_ngcontent-%COMP%]   .Information[_ngcontent-%COMP%]   .Chat-Main-Info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  height: 100%;\n  font-weight: 550;\n  margin-left: 6px;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%]   .Chat__Header[_ngcontent-%COMP%]   .Information[_ngcontent-%COMP%]   .Chat-Main-Info[_ngcontent-%COMP%]   .Chat-Title[_ngcontent-%COMP%] {\n  color: var(--blue);\n  font-size: 18px;\n  margin-bottom: 5px;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%]   .Chat__Header[_ngcontent-%COMP%]   .Information[_ngcontent-%COMP%]   .Chat-Main-Info[_ngcontent-%COMP%]   .Chat-Title[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%]   .Chat__Header[_ngcontent-%COMP%]   .Information[_ngcontent-%COMP%]   .Chat-Main-Info[_ngcontent-%COMP%]   .Chat-Status[_ngcontent-%COMP%] {\n  color: #00000070;\n  font-size: 11px;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%]   .Chat__Body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  height: 100%;\n  width: 100%;\n  overflow: auto;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%]   .Chat__Body[_ngcontent-%COMP%]   chat-message[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n  margin-top: 15px;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%]   .Chat__Form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex: 0 0 auto;\n  width: 100%;\n  padding: 10px;\n  border-top: #00000050 solid 2px;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%]   .Chat__Form[_ngcontent-%COMP%]   .Chat__Form__Fields-Container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%]   .Chat__Form[_ngcontent-%COMP%]   .Chat__Form__Fields-Container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 16px;\n  padding: 12px 15px;\n  border: #00000050 solid 1px;\n  border-radius: 10px;\n  margin-right: 10px;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%]   .Chat__Form[_ngcontent-%COMP%]   .Chat__Form__Fields-Container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--lite-blue);\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%]   .Chat__Form[_ngcontent-%COMP%]   .Chat__Form__Fields-Container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 40px;\n  outline: none;\n  border: none;\n  background: #fff;\n  border-radius: 5px;\n  width: 40px;\n  height: 40px;\n  padding: 5px;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%]   .Chat__Form[_ngcontent-%COMP%]   .Chat__Form__Fields-Container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]::before {\n  font-size: 30px;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%]   .Chat__Form[_ngcontent-%COMP%]   .Chat__Form__Fields-Container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  box-shadow: #00000050 2px 0 8px 0;\n  cursor: pointer;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%]   .Chat__Form[_ngcontent-%COMP%]   .Chat__Form__Fields-Container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  box-shadow: inset #00000050 2px 0 8px 0;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%]   .Chat__Form[_ngcontent-%COMP%]   .Chat__Form__Fields-Container[_ngcontent-%COMP%]   button.Send[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 30px;\n  content: url(\"/media/icons/send-message.svg\");\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%]   .Chat__Form[_ngcontent-%COMP%]   .Chat__Form__Fields-Container[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex: 0 0 auto;\n  width: auto;\n  height: 40px;\n  margin: 0 5px;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%]   .Chat__Form[_ngcontent-%COMP%]   .Chat__Form__Fields-Container[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 5px;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%]   .Chat__Form[_ngcontent-%COMP%]   .Chat__Form__Fields-Container[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%]   button.Upload-Img[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 30px;\n  content: url(\"/media/icons/image-upload.svg\");\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%]   .Chat__Form[_ngcontent-%COMP%]   .Chat__Form__Fields-Container[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%]   button.Upload-Doc[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 30px;\n  content: url(\"/media/icons/file-upload.svg\");\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%]   .Chat__Form[_ngcontent-%COMP%]   .Chat__Form__Upload-Files[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n  height: auto;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%]   .Chat__Form[_ngcontent-%COMP%]   .Chat__Form__Upload-Files[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  height: auto;\n  padding: 10px;\n  border-top: var(--blue) solid 1px;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%]   .Chat__Form[_ngcontent-%COMP%]   .Chat__Form__Upload-Files[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Icon[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex: 0 0 50px;\n  height: 50px;\n  width: 50px;\n  padding: 10px;\n  border-radius: 100%;\n  background: var(--blue);\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%]   .Chat__Form[_ngcontent-%COMP%]   .Chat__Form__Upload-Files[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%]   .Chat__Form[_ngcontent-%COMP%]   .Chat__Form__Upload-Files[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Icon[_ngcontent-%COMP%]   .Upload-Doc[_ngcontent-%COMP%] {\n  content: url(\"/media/icons/file-upload-white.svg\");\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%]   .Chat__Form[_ngcontent-%COMP%]   .Chat__Form__Upload-Files[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Icon[_ngcontent-%COMP%]   .Upload-Img[_ngcontent-%COMP%] {\n  content: url(\"/media/icons/image-upload-white.svg\");\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%]   .Chat__Form[_ngcontent-%COMP%]   .Chat__Form__Upload-Files[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Name[_ngcontent-%COMP%] {\n  width: auto;\n  height: auto;\n  margin: 0 10px;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%]   .Chat__Form[_ngcontent-%COMP%]   .Chat__Form__Upload-Files[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%]   .Chat__Form[_ngcontent-%COMP%]   .Chat__Form__Upload-Files[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%]   .Break-Upload[_ngcontent-%COMP%], .Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%]   .Chat__Form[_ngcontent-%COMP%]   .Chat__Form__Upload-Files[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%]   .Delete-File[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  background: #fff;\n  border-radius: 5px;\n  width: 40px;\n  height: 40px;\n  padding: 5px;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%]   .Chat__Form[_ngcontent-%COMP%]   .Chat__Form__Upload-Files[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%]   .Break-Upload[_ngcontent-%COMP%]::before, .Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%]   .Chat__Form[_ngcontent-%COMP%]   .Chat__Form__Upload-Files[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%]   .Delete-File[_ngcontent-%COMP%]::before {\n  font-size: 30px;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%]   .Chat__Form[_ngcontent-%COMP%]   .Chat__Form__Upload-Files[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%]   .Break-Upload[_ngcontent-%COMP%]:hover, .Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%]   .Chat__Form[_ngcontent-%COMP%]   .Chat__Form__Upload-Files[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%]   .Delete-File[_ngcontent-%COMP%]:hover {\n  box-shadow: #00000050 2px 0 8px 0;\n  cursor: pointer;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%]   .Chat__Form[_ngcontent-%COMP%]   .Chat__Form__Upload-Files[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%]   .Break-Upload[_ngcontent-%COMP%]:focus, .Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%]   .Chat__Form[_ngcontent-%COMP%]   .Chat__Form__Upload-Files[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%]   .Delete-File[_ngcontent-%COMP%]:focus {\n  box-shadow: inset #00000050 2px 0 8px 0;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%]   .Chat__Form[_ngcontent-%COMP%]   .Chat__Form__Upload-Files[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%]   .Break-Upload[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%]   .Chat__Form[_ngcontent-%COMP%]   .Chat__Form__Upload-Files[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%]   .Delete-File[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%]   .Chat__Form[_ngcontent-%COMP%]   .Chat__Form__Upload-Files[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%]   .Break-Upload[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  content: url(\"/media/icons/red-times-circle.svg\");\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Container[_ngcontent-%COMP%]   .Chat__Form[_ngcontent-%COMP%]   .Chat__Form__Upload-Files[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%]   .Delete-File[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  content: url(\"/media/icons/trash-alt.svg\");\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%] {\n  transition: width 0.2s, flex 0.2s;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   hamburger[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Information.Close[_ngcontent-%COMP%] {\n  flex: 0 0 0;\n  width: 0;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Information.Close[_ngcontent-%COMP%]   .Main-Info[_ngcontent-%COMP%], .Chat[_ngcontent-%COMP%]   .Chat__Information.Close[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%], .Chat[_ngcontent-%COMP%]   .Chat__Information.Close[_ngcontent-%COMP%]   .Users[_ngcontent-%COMP%] {\n  opacity: 0;\n  z-index: -5;\n  width: 0;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Main-Info[_ngcontent-%COMP%], .Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%], .Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Users[_ngcontent-%COMP%] {\n  background: #fff;\n  margin-bottom: 20px;\n  width: 100%;\n  transition: opacity 0.2s, z-index 0.2s, width 0.2s;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Main-Info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Main-Info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Main-Info[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-family: \"Rubik\", sans-serif;\n  border: #00000020 solid 1px;\n  width: 100%;\n  padding: 10px;\n  font-size: 16px;\n  border-radius: 5px;\n  transition: all 0.1s;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Main-Info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover:not(.ng-touched.ng-invalid), .Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Main-Info[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:hover:not(.ng-touched.ng-invalid) {\n  border-color: #00000040;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Main-Info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus:not(.ng-touched.ng-invalid), .Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Main-Info[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus:not(.ng-touched.ng-invalid) {\n  border-color: var(--lite-blue);\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Main-Info[_ngcontent-%COMP%]   input.ng-touched.ng-invalid[_ngcontent-%COMP%], .Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Main-Info[_ngcontent-%COMP%]   textarea.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border-color: var(--lite-red);\n}\n\n@media screen and (max-width: 469px) {\n  .Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Main-Info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Main-Info[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 5px;\n  }\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Main-Info[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 100px;\n  max-height: 300px;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Main-Info[_ngcontent-%COMP%]   .Chat-Ava[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border-radius: 100%;\n  border: #000000 solid 1px;\n  margin: 10px 0;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Main-Info[_ngcontent-%COMP%]   .Chat-Title[_ngcontent-%COMP%] {\n  color: var(--blue);\n  font-size: 28px;\n  margin: 10px 0;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Main-Info[_ngcontent-%COMP%]   .Chat-Description[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 100%;\n  font-size: 16px;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%]   .Edit[_ngcontent-%COMP%], .Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%]   .Bad-Chat[_ngcontent-%COMP%], .Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%]   .Signout[_ngcontent-%COMP%], .Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%]   .Done[_ngcontent-%COMP%], .Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%]   .Cancel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  color: var(--blue);\n  font-size: 20px;\n  padding: 10px 15px;\n  width: 100%;\n  outline: none;\n  border: none;\n  background: #fff;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%]   .Edit[_ngcontent-%COMP%]::before, .Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%]   .Bad-Chat[_ngcontent-%COMP%]::before, .Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%]   .Signout[_ngcontent-%COMP%]::before, .Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%]   .Done[_ngcontent-%COMP%]::before, .Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%]   .Cancel[_ngcontent-%COMP%]::before {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n  margin-right: 10px;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%]   .Edit[_ngcontent-%COMP%]:hover, .Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%]   .Bad-Chat[_ngcontent-%COMP%]:hover, .Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%]   .Signout[_ngcontent-%COMP%]:hover, .Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%]   .Done[_ngcontent-%COMP%]:hover, .Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%]   .Cancel[_ngcontent-%COMP%]:hover {\n  background: #00000007;\n  cursor: pointer;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%]   .Edit[_ngcontent-%COMP%]::before {\n  content: url(\"/media/icons/edit-alt.svg\");\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%]   .Bad-Chat[_ngcontent-%COMP%]::before {\n  content: url(\"/media/icons/comment-exclamation.svg\");\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%]   .Signout[_ngcontent-%COMP%]::before {\n  content: url(\"/media/icons/sign-out-alt.svg\");\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%]   .Done[_ngcontent-%COMP%]::before {\n  content: url(\"/media/icons/check-circle.svg\");\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%]   .Cancel[_ngcontent-%COMP%]::before {\n  content: url(\"/media/icons/times-circle.svg\");\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%]   .Split[_ngcontent-%COMP%] {\n  flex: 0 0 2px;\n  height: 100%;\n  background: var(--blue);\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Users[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Users[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  height: 70px;\n  width: 100%;\n  border-bottom: #00000050 solid 1px;\n  padding: 0 10px;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Users[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]:hover {\n  background: #00000007;\n  cursor: pointer;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Users[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Users[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Avatar[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 50px;\n  width: 50px;\n  height: 50px;\n  border-radius: 100%;\n  margin-right: 10px;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Users[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Users[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Main-Info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  width: 100%;\n  margin: 0;\n  background: #00000000;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Users[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Main-Info[_ngcontent-%COMP%]   .Name[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 18px;\n  text-decoration: none;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Users[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Main-Info[_ngcontent-%COMP%]   .Status[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 14px;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Users[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Chat-Status[_ngcontent-%COMP%] {\n  height: 100%;\n  color: var(--red);\n  font-size: 12px;\n  padding: 5px 10px;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Users[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Ban[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex: 0 0 30px;\n  padding: 5px;\n  outline: none;\n  border: none;\n  background: #fff;\n  border-radius: 5px;\n  width: 30px;\n  height: 30px;\n  padding: 5px;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Users[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Ban[_ngcontent-%COMP%]::before {\n  font-size: 30px;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Users[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Ban[_ngcontent-%COMP%]:hover {\n  box-shadow: #00000050 2px 0 8px 0;\n  cursor: pointer;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Users[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Ban[_ngcontent-%COMP%]:focus {\n  box-shadow: inset #00000050 2px 0 8px 0;\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Users[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Ban.Not-Banned[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  content: url(\"/media/icons/unlock-alt.svg\");\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Users[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Ban.Is-Banned[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  content: url(\"/media/icons/padlock.svg\");\n}\n\n.Chat[_ngcontent-%COMP%]   .Chat__Information[_ngcontent-%COMP%]   .Users[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Ban[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n\n.Shadow-Left[_ngcontent-%COMP%] {\n  box-shadow: #00000025 -4px 0 8px 0;\n}\n\n.Shadow-Right[_ngcontent-%COMP%] {\n  box-shadow: #00000025 4px 0 8px 0;\n}\n\n.All-Chats[_ngcontent-%COMP%], .Chat__Information[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  height: 100%;\n  background: var(--bg-lite-blue);\n}\n\n@media screen and (min-width: 767px) {\n  .All-Chats[_ngcontent-%COMP%], .Chat__Information[_ngcontent-%COMP%] {\n    width: 300px;\n    flex: 0 0 300px;\n  }\n}\n\n@media screen and (max-width: 767px) {\n  .All-Chats[_ngcontent-%COMP%], .Chat__Information[_ngcontent-%COMP%] {\n    width: 100%;\n    flex: 0 0 auto;\n  }\n}\n\n.All-Chats[_ngcontent-%COMP%] {\n  color: #000;\n  transition: width 0.2s, flex 0.2s;\n}\n\n.All-Chats.Close[_ngcontent-%COMP%] {\n  flex: 0 0 0;\n  width: 0;\n}\n\n.All-Chats.Close[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%] {\n  opacity: 0;\n  z-index: -5;\n}\n\n.All-Chats[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  height: 70px;\n  width: 100%;\n  border-bottom: #00000050 solid 1px;\n  padding: 0 10px;\n  width: 100%;\n  transition: opacity 0.2s, z-index 0.2s;\n}\n\n.All-Chats[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]:hover {\n  background: #00000007;\n  cursor: pointer;\n}\n\n.All-Chats[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.All-Chats[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Avatar[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 50px;\n  width: 50px;\n  height: 50px;\n  border-radius: 100%;\n  margin-right: 10px;\n}\n\n.All-Chats[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.All-Chats[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Main-Info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  width: 100%;\n  margin: 0;\n  background: #00000000;\n}\n\n.All-Chats[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Main-Info[_ngcontent-%COMP%]   .Name[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 18px;\n  text-decoration: none;\n}\n\n.All-Chats[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Main-Info[_ngcontent-%COMP%]   .Status[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcc3R5bGVzLnNhc3MiLCJjaGF0cy5jb21wb25lbnQuc2FzcyIsIi4uXFwuLlxcc3R5bGVzLmZvcm1zLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQ0NKOztBRFNBO0VBTEksYUFBQTtFQUNBLG1CQUtnQjtFQUpoQiwyQkFIK0I7RUFJL0IsdUJBSmdEO0FDSXBEOztBREtBO0VBUkksYUFBQTtFQUNBLHNCQUZrQjtFQUdsQiwyQkFIK0I7RUFJL0IsdUJBSmdEO0FDV3BEOztBRGpCQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDb0JKOztBRFZBO0VBTEksYUFBQTtFQUNBLG1CQUtnQjtFQUpoQiwyQkFIK0I7RUFJL0IsdUJBSmdEO0FDdUJwRDs7QURkQTtFQVJJLGFBQUE7RUFDQSxzQkFGa0I7RUFHbEIsMkJBSCtCO0VBSS9CLHVCQUpnRDtBQzhCcEQ7O0FDdUJBO0VGcERJLGFBQUE7RUFDQSxzQkFGa0I7RUFHbEIsMkJBSCtCO0VBSS9CLHVCQUpnRDtFRXVEaEQsZUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0FEakJKOztBQ2tCSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FEaEJSOztBQ2lCSTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURmUjs7QUNnQlE7RUFDSSxtQkFBQTtFQUNBLDBCQUFBO0FEZFo7O0FDZUk7RUYvRUEsYUFBQTtFQUNBLHNCQUZrQjtFQUdsQiwyQkFIK0I7RUFJL0IsdUJBSmdEO0VFa0Y1QyxXQUFBO0VBQ0EsYUFBQTtBRFZSOztBQ1dRO0VGbkZKLGFBQUE7RUFDQSxzQkFGa0I7RUFHbEIsMkJBSCtCO0VBSS9CLHVCQUpnRDtFRXNG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OztBQTMwQlE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBNjBCWjs7QUE1MEJRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUE4MEJaIiwiZmlsZSI6ImNoYXRzLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keVxuICAgIG1hcmdpbjogMFxuICAgIHBhZGRpbmc6IDBcblxuJG5hdl93OjMwMHB4XG4gICAgXG49ZmxleC1jb250YWluZXIoJGRpcjogY29sdW1uLCAkamM6IGZsZXgtc3RhcnQsICRhaTogZmxleC1zdGFydClcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAgZmxleC1kaXJlY3Rpb246ICRkaXJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICRqY1xuICAgIGFsaWduLWl0ZW1zOiAkYWkgXG5cbi5Sb3dcbiAgICArZmxleC1jb250YWluZXIocm93KVxuXG4uQ29sdW1uXG4gICAgK2ZsZXgtY29udGFpbmVyKClcbiIsImh0bWwsIGJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5Sb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uQ29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuaHRtbCwgYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLlJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5Db2x1bW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uRm9ybS1Db250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTAwcHg7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMjUwcHgpO1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6ICMwMDAwMDAyNSAwIDRweCA4cHggMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX1RpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBtYXJnaW46IDEwcHg7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19XYXJuaW5nIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IHZhcigtLXJlZCkgc29saWQgMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogdmFyKC0tcmVkKTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19XYXJuaW5nLm9rIHtcbiAgY29sb3I6IHZhcigtLWdyZWVuKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ncmVlbik7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgaW5wdXQsXG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCBzZWxlY3QsXG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCB0ZXh0YXJlYSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWY7XG4gIGJvcmRlcjogIzAwMDAwMDIwIHNvbGlkIDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIGlucHV0OmhvdmVyOm5vdCgubmctdG91Y2hlZC5uZy1pbnZhbGlkKSxcbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIHNlbGVjdDpob3Zlcjpub3QoLm5nLXRvdWNoZWQubmctaW52YWxpZCksXG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCB0ZXh0YXJlYTpob3Zlcjpub3QoLm5nLXRvdWNoZWQubmctaW52YWxpZCkge1xuICBib3JkZXItY29sb3I6ICMwMDAwMDA0MDtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIGlucHV0OmZvY3VzOm5vdCgubmctdG91Y2hlZC5uZy1pbnZhbGlkKSxcbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIHNlbGVjdDpmb2N1czpub3QoLm5nLXRvdWNoZWQubmctaW52YWxpZCksXG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCB0ZXh0YXJlYTpmb2N1czpub3QoLm5nLXRvdWNoZWQubmctaW52YWxpZCkge1xuICBib3JkZXItY29sb3I6IHZhcigtLWxpdGUtYmx1ZSk7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCBpbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWQsXG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCBzZWxlY3QubmctdG91Y2hlZC5uZy1pbnZhbGlkLFxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgdGV4dGFyZWEubmctdG91Y2hlZC5uZy1pbnZhbGlkIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saXRlLXJlZCk7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjlweCkge1xuICAuRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCBpbnB1dCxcbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIHNlbGVjdCxcbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIHRleHRhcmVhIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCBzcGFuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB2YXIoLS1yZWQpO1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgdGV4dGFyZWEge1xuICByZXNpemU6IHZlcnRpY2FsO1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgbWF4LWhlaWdodDogODAwcHg7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19MaW5rcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci10b3A6ICMwMDAwMDAzMCBzb2xpZCAxcHg7XG4gIGJvcmRlci1ib3R0b206ICMwMDAwMDAzMCBzb2xpZCAxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19MaW5rcyBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZjtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0xpbmtzIGEge1xuICBmb250LXdlaWdodDogNTUwO1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzO1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fTGlua3MgYTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHZhcigtLWxpdGUtYmx1ZSk7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19CdXR0b24ge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1NTA7XG4gIHBhZGRpbmc6IDdweCAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogdmFyKC0tYmx1ZSkgc29saWQgMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0J1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKTtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0J1dHRvbjpkaXNhYmxlZCB7XG4gIGNvbG9yOiB2YXIoLS1saXRlLWJsdWUpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWxpdGUtYmx1ZSk7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5TZWFyY2gtQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogIzAwMDAwMDQwIHNvbGlkIDJweDtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5RdWVyeSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uU2VhcmNoLUNvbnRhaW5lciBpIHtcbiAgZmxleDogMCAwIDMwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZWFyY2gge1xuICBjb250ZW50OiB1cmwoXCIvbWVkaWEvaWNvbnMvc2VhcmNoLnN2Z1wiKTtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuU2V0dGluZ3MtSWNvbi1CdG4ge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogNXB4O1xufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5TZXR0aW5ncy1JY29uLUJ0bjo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5TZXR0aW5ncy1JY29uLUJ0bjpob3ZlciB7XG4gIGJveC1zaGFkb3c6ICMwMDAwMDA1MCAycHggMCA4cHggMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5TZXR0aW5ncy1JY29uLUJ0bjpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IGluc2V0ICMwMDAwMDA1MCAycHggMCA4cHggMDtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuU2V0dGluZ3MtSWNvbi1CdG4gaSB7XG4gIGNvbnRlbnQ6IHVybChcIi9tZWRpYS9pY29ucy9zbGlkZXItc2V0dGluZ3Muc3ZnXCIpO1xuICBmaWxsOiB2YXIoLS1ibHVlKTtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyB7XG4gIHdpZHRoOiA2MDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3gtc2hhZG93OiAjMDAwMDAwNDAgMCAycHggNHB4IDA7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NzZweCkge1xuICAuU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLkRldGFpbHMge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcbiAgfVxufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5EZXRhaWxzIC5UaXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMTBweCAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyAuSXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbjogMTBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2OXB4KSB7XG4gIC5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyAuSXRlbSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5EZXRhaWxzIC5JdGVtIGlucHV0IHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyOiAjMDAwMDAwMjAgc29saWQgMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiA0cHggMTBweDtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyAuSXRlbSBpbnB1dDpob3Zlcjpub3QoLm5nLXRvdWNoZWQubmctaW52YWxpZCkge1xuICBib3JkZXItY29sb3I6ICMwMDAwMDA0MDtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyAuSXRlbSBpbnB1dDpmb2N1czpub3QoLm5nLXRvdWNoZWQubmctaW52YWxpZCkge1xuICBib3JkZXItY29sb3I6IHZhcigtLWxpdGUtYmx1ZSk7XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLkRldGFpbHMgLkl0ZW0gaW5wdXQubmctdG91Y2hlZC5uZy1pbnZhbGlkIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saXRlLXJlZCk7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjlweCkge1xuICAuU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLkRldGFpbHMgLkl0ZW0gaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyAuQnV0dG9uIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTUwO1xuICBwYWRkaW5nOiA3cHggMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IHZhcigtLWJsdWUpIHNvbGlkIDJweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xuICBtYXJnaW46IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLkRldGFpbHMgLkJ1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKTtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyAuQnV0dG9uOmRpc2FibGVkIHtcbiAgY29sb3I6IHZhcigtLWxpdGUtYmx1ZSk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbGl0ZS1ibHVlKTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLkNoYXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLkNoYXQgLkNoYXRfX0NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uQ2hhdCAuQ2hhdF9fQ29udGFpbmVyIC5DaGF0X19IZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXg6IDAgMCA3MHB4O1xuICBib3JkZXItYm90dG9tOiAjMDAwMDAwNTAgc29saWQgMnB4O1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG4uQ2hhdCAuQ2hhdF9fQ29udGFpbmVyIC5DaGF0X19IZWFkZXIgLkluZm9ybWF0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uQ2hhdCAuQ2hhdF9fQ29udGFpbmVyIC5DaGF0X19IZWFkZXIgLkluZm9ybWF0aW9uIC5DaGF0LUF2YSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlcjogIzAwMCBzb2xpZCAxcHg7XG59XG4uQ2hhdCAuQ2hhdF9fQ29udGFpbmVyIC5DaGF0X19IZWFkZXIgLkluZm9ybWF0aW9uIC5DaGF0LU1haW4tSW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXdlaWdodDogNTUwO1xuICBtYXJnaW4tbGVmdDogNnB4O1xufVxuLkNoYXQgLkNoYXRfX0NvbnRhaW5lciAuQ2hhdF9fSGVhZGVyIC5JbmZvcm1hdGlvbiAuQ2hhdC1NYWluLUluZm8gLkNoYXQtVGl0bGUge1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5DaGF0IC5DaGF0X19Db250YWluZXIgLkNoYXRfX0hlYWRlciAuSW5mb3JtYXRpb24gLkNoYXQtTWFpbi1JbmZvIC5DaGF0LVRpdGxlOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uQ2hhdCAuQ2hhdF9fQ29udGFpbmVyIC5DaGF0X19IZWFkZXIgLkluZm9ybWF0aW9uIC5DaGF0LU1haW4tSW5mbyAuQ2hhdC1TdGF0dXMge1xuICBjb2xvcjogIzAwMDAwMDcwO1xuICBmb250LXNpemU6IDExcHg7XG59XG4uQ2hhdCAuQ2hhdF9fQ29udGFpbmVyIC5DaGF0X19Cb2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uQ2hhdCAuQ2hhdF9fQ29udGFpbmVyIC5DaGF0X19Cb2R5IGNoYXQtbWVzc2FnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLkNoYXQgLkNoYXRfX0NvbnRhaW5lciAuQ2hhdF9fRm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXRvcDogIzAwMDAwMDUwIHNvbGlkIDJweDtcbn1cbi5DaGF0IC5DaGF0X19Db250YWluZXIgLkNoYXRfX0Zvcm0gLkNoYXRfX0Zvcm1fX0ZpZWxkcy1Db250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uQ2hhdCAuQ2hhdF9fQ29udGFpbmVyIC5DaGF0X19Gb3JtIC5DaGF0X19Gb3JtX19GaWVsZHMtQ29udGFpbmVyIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMTJweCAxNXB4O1xuICBib3JkZXI6ICMwMDAwMDA1MCBzb2xpZCAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5DaGF0IC5DaGF0X19Db250YWluZXIgLkNoYXRfX0Zvcm0gLkNoYXRfX0Zvcm1fX0ZpZWxkcy1Db250YWluZXIgaW5wdXQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHZhcigtLWxpdGUtYmx1ZSk7XG59XG4uQ2hhdCAuQ2hhdF9fQ29udGFpbmVyIC5DaGF0X19Gb3JtIC5DaGF0X19Gb3JtX19GaWVsZHMtQ29udGFpbmVyIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDAgMCA0MHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogNXB4O1xufVxuLkNoYXQgLkNoYXRfX0NvbnRhaW5lciAuQ2hhdF9fRm9ybSAuQ2hhdF9fRm9ybV9fRmllbGRzLUNvbnRhaW5lciBidXR0b246OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5DaGF0IC5DaGF0X19Db250YWluZXIgLkNoYXRfX0Zvcm0gLkNoYXRfX0Zvcm1fX0ZpZWxkcy1Db250YWluZXIgYnV0dG9uOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogIzAwMDAwMDUwIDJweCAwIDhweCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uQ2hhdCAuQ2hhdF9fQ29udGFpbmVyIC5DaGF0X19Gb3JtIC5DaGF0X19Gb3JtX19GaWVsZHMtQ29udGFpbmVyIGJ1dHRvbjpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IGluc2V0ICMwMDAwMDA1MCAycHggMCA4cHggMDtcbn1cbi5DaGF0IC5DaGF0X19Db250YWluZXIgLkNoYXRfX0Zvcm0gLkNoYXRfX0Zvcm1fX0ZpZWxkcy1Db250YWluZXIgYnV0dG9uLlNlbmQgaSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29udGVudDogdXJsKFwiL21lZGlhL2ljb25zL3NlbmQtbWVzc2FnZS5zdmdcIik7XG59XG4uQ2hhdCAuQ2hhdF9fQ29udGFpbmVyIC5DaGF0X19Gb3JtIC5DaGF0X19Gb3JtX19GaWVsZHMtQ29udGFpbmVyIC5BY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZmxleDogMCAwIGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogMCA1cHg7XG59XG4uQ2hhdCAuQ2hhdF9fQ29udGFpbmVyIC5DaGF0X19Gb3JtIC5DaGF0X19Gb3JtX19GaWVsZHMtQ29udGFpbmVyIC5BY3Rpb25zIGJ1dHRvbiB7XG4gIG1hcmdpbjogMCA1cHg7XG59XG4uQ2hhdCAuQ2hhdF9fQ29udGFpbmVyIC5DaGF0X19Gb3JtIC5DaGF0X19Gb3JtX19GaWVsZHMtQ29udGFpbmVyIC5BY3Rpb25zIGJ1dHRvbi5VcGxvYWQtSW1nIGkge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbnRlbnQ6IHVybChcIi9tZWRpYS9pY29ucy9pbWFnZS11cGxvYWQuc3ZnXCIpO1xufVxuLkNoYXQgLkNoYXRfX0NvbnRhaW5lciAuQ2hhdF9fRm9ybSAuQ2hhdF9fRm9ybV9fRmllbGRzLUNvbnRhaW5lciAuQWN0aW9ucyBidXR0b24uVXBsb2FkLURvYyBpIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb250ZW50OiB1cmwoXCIvbWVkaWEvaWNvbnMvZmlsZS11cGxvYWQuc3ZnXCIpO1xufVxuLkNoYXQgLkNoYXRfX0NvbnRhaW5lciAuQ2hhdF9fRm9ybSAuQ2hhdF9fRm9ybV9fVXBsb2FkLUZpbGVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cbi5DaGF0IC5DaGF0X19Db250YWluZXIgLkNoYXRfX0Zvcm0gLkNoYXRfX0Zvcm1fX1VwbG9hZC1GaWxlcyAuSXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXRvcDogdmFyKC0tYmx1ZSkgc29saWQgMXB4O1xufVxuLkNoYXQgLkNoYXRfX0NvbnRhaW5lciAuQ2hhdF9fRm9ybSAuQ2hhdF9fRm9ybV9fVXBsb2FkLUZpbGVzIC5JdGVtIC5JY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZmxleDogMCAwIDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJsdWUpO1xufVxuLkNoYXQgLkNoYXRfX0NvbnRhaW5lciAuQ2hhdF9fRm9ybSAuQ2hhdF9fRm9ybV9fVXBsb2FkLUZpbGVzIC5JdGVtIC5JY29uIGkge1xuICBmb250LXNpemU6IDMwcHg7XG59XG4uQ2hhdCAuQ2hhdF9fQ29udGFpbmVyIC5DaGF0X19Gb3JtIC5DaGF0X19Gb3JtX19VcGxvYWQtRmlsZXMgLkl0ZW0gLkljb24gLlVwbG9hZC1Eb2Mge1xuICBjb250ZW50OiB1cmwoXCIvbWVkaWEvaWNvbnMvZmlsZS11cGxvYWQtd2hpdGUuc3ZnXCIpO1xufVxuLkNoYXQgLkNoYXRfX0NvbnRhaW5lciAuQ2hhdF9fRm9ybSAuQ2hhdF9fRm9ybV9fVXBsb2FkLUZpbGVzIC5JdGVtIC5JY29uIC5VcGxvYWQtSW1nIHtcbiAgY29udGVudDogdXJsKFwiL21lZGlhL2ljb25zL2ltYWdlLXVwbG9hZC13aGl0ZS5zdmdcIik7XG59XG4uQ2hhdCAuQ2hhdF9fQ29udGFpbmVyIC5DaGF0X19Gb3JtIC5DaGF0X19Gb3JtX19VcGxvYWQtRmlsZXMgLkl0ZW0gLk5hbWUge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDAgMTBweDtcbn1cbi5DaGF0IC5DaGF0X19Db250YWluZXIgLkNoYXRfX0Zvcm0gLkNoYXRfX0Zvcm1fX1VwbG9hZC1GaWxlcyAuSXRlbSAuQWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4uQ2hhdCAuQ2hhdF9fQ29udGFpbmVyIC5DaGF0X19Gb3JtIC5DaGF0X19Gb3JtX19VcGxvYWQtRmlsZXMgLkl0ZW0gLkFjdGlvbnMgLkJyZWFrLVVwbG9hZCxcbi5DaGF0IC5DaGF0X19Db250YWluZXIgLkNoYXRfX0Zvcm0gLkNoYXRfX0Zvcm1fX1VwbG9hZC1GaWxlcyAuSXRlbSAuQWN0aW9ucyAuRGVsZXRlLUZpbGUge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogNXB4O1xufVxuLkNoYXQgLkNoYXRfX0NvbnRhaW5lciAuQ2hhdF9fRm9ybSAuQ2hhdF9fRm9ybV9fVXBsb2FkLUZpbGVzIC5JdGVtIC5BY3Rpb25zIC5CcmVhay1VcGxvYWQ6OmJlZm9yZSxcbi5DaGF0IC5DaGF0X19Db250YWluZXIgLkNoYXRfX0Zvcm0gLkNoYXRfX0Zvcm1fX1VwbG9hZC1GaWxlcyAuSXRlbSAuQWN0aW9ucyAuRGVsZXRlLUZpbGU6OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5DaGF0IC5DaGF0X19Db250YWluZXIgLkNoYXRfX0Zvcm0gLkNoYXRfX0Zvcm1fX1VwbG9hZC1GaWxlcyAuSXRlbSAuQWN0aW9ucyAuQnJlYWstVXBsb2FkOmhvdmVyLFxuLkNoYXQgLkNoYXRfX0NvbnRhaW5lciAuQ2hhdF9fRm9ybSAuQ2hhdF9fRm9ybV9fVXBsb2FkLUZpbGVzIC5JdGVtIC5BY3Rpb25zIC5EZWxldGUtRmlsZTpob3ZlciB7XG4gIGJveC1zaGFkb3c6ICMwMDAwMDA1MCAycHggMCA4cHggMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLkNoYXQgLkNoYXRfX0NvbnRhaW5lciAuQ2hhdF9fRm9ybSAuQ2hhdF9fRm9ybV9fVXBsb2FkLUZpbGVzIC5JdGVtIC5BY3Rpb25zIC5CcmVhay1VcGxvYWQ6Zm9jdXMsXG4uQ2hhdCAuQ2hhdF9fQ29udGFpbmVyIC5DaGF0X19Gb3JtIC5DaGF0X19Gb3JtX19VcGxvYWQtRmlsZXMgLkl0ZW0gLkFjdGlvbnMgLkRlbGV0ZS1GaWxlOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgIzAwMDAwMDUwIDJweCAwIDhweCAwO1xufVxuLkNoYXQgLkNoYXRfX0NvbnRhaW5lciAuQ2hhdF9fRm9ybSAuQ2hhdF9fRm9ybV9fVXBsb2FkLUZpbGVzIC5JdGVtIC5BY3Rpb25zIC5CcmVhay1VcGxvYWQgaSxcbi5DaGF0IC5DaGF0X19Db250YWluZXIgLkNoYXRfX0Zvcm0gLkNoYXRfX0Zvcm1fX1VwbG9hZC1GaWxlcyAuSXRlbSAuQWN0aW9ucyAuRGVsZXRlLUZpbGUgaSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5DaGF0IC5DaGF0X19Db250YWluZXIgLkNoYXRfX0Zvcm0gLkNoYXRfX0Zvcm1fX1VwbG9hZC1GaWxlcyAuSXRlbSAuQWN0aW9ucyAuQnJlYWstVXBsb2FkIGkge1xuICBjb250ZW50OiB1cmwoXCIvbWVkaWEvaWNvbnMvcmVkLXRpbWVzLWNpcmNsZS5zdmdcIik7XG59XG4uQ2hhdCAuQ2hhdF9fQ29udGFpbmVyIC5DaGF0X19Gb3JtIC5DaGF0X19Gb3JtX19VcGxvYWQtRmlsZXMgLkl0ZW0gLkFjdGlvbnMgLkRlbGV0ZS1GaWxlIGkge1xuICBjb250ZW50OiB1cmwoXCIvbWVkaWEvaWNvbnMvdHJhc2gtYWx0LnN2Z1wiKTtcbn1cbi5DaGF0IC5DaGF0X19JbmZvcm1hdGlvbiB7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMnMsIGZsZXggMC4ycztcbn1cbi5DaGF0IC5DaGF0X19JbmZvcm1hdGlvbiBoYW1idXJnZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uQ2hhdCAuQ2hhdF9fSW5mb3JtYXRpb24uQ2xvc2Uge1xuICBmbGV4OiAwIDAgMDtcbiAgd2lkdGg6IDA7XG59XG4uQ2hhdCAuQ2hhdF9fSW5mb3JtYXRpb24uQ2xvc2UgLk1haW4tSW5mbyxcbi5DaGF0IC5DaGF0X19JbmZvcm1hdGlvbi5DbG9zZSAuQWN0aW9ucyxcbi5DaGF0IC5DaGF0X19JbmZvcm1hdGlvbi5DbG9zZSAuVXNlcnMge1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAtNTtcbiAgd2lkdGg6IDA7XG59XG4uQ2hhdCAuQ2hhdF9fSW5mb3JtYXRpb24gLk1haW4tSW5mbyxcbi5DaGF0IC5DaGF0X19JbmZvcm1hdGlvbiAuQWN0aW9ucyxcbi5DaGF0IC5DaGF0X19JbmZvcm1hdGlvbiAuVXNlcnMge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzLCB6LWluZGV4IDAuMnMsIHdpZHRoIDAuMnM7XG59XG4uQ2hhdCAuQ2hhdF9fSW5mb3JtYXRpb24gLk1haW4tSW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5DaGF0IC5DaGF0X19JbmZvcm1hdGlvbiAuTWFpbi1JbmZvIGlucHV0LFxuLkNoYXQgLkNoYXRfX0luZm9ybWF0aW9uIC5NYWluLUluZm8gdGV4dGFyZWEge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmO1xuICBib3JkZXI6ICMwMDAwMDAyMCBzb2xpZCAxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XG59XG4uQ2hhdCAuQ2hhdF9fSW5mb3JtYXRpb24gLk1haW4tSW5mbyBpbnB1dDpob3Zlcjpub3QoLm5nLXRvdWNoZWQubmctaW52YWxpZCksXG4uQ2hhdCAuQ2hhdF9fSW5mb3JtYXRpb24gLk1haW4tSW5mbyB0ZXh0YXJlYTpob3Zlcjpub3QoLm5nLXRvdWNoZWQubmctaW52YWxpZCkge1xuICBib3JkZXItY29sb3I6ICMwMDAwMDA0MDtcbn1cbi5DaGF0IC5DaGF0X19JbmZvcm1hdGlvbiAuTWFpbi1JbmZvIGlucHV0OmZvY3VzOm5vdCgubmctdG91Y2hlZC5uZy1pbnZhbGlkKSxcbi5DaGF0IC5DaGF0X19JbmZvcm1hdGlvbiAuTWFpbi1JbmZvIHRleHRhcmVhOmZvY3VzOm5vdCgubmctdG91Y2hlZC5uZy1pbnZhbGlkKSB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbGl0ZS1ibHVlKTtcbn1cbi5DaGF0IC5DaGF0X19JbmZvcm1hdGlvbiAuTWFpbi1JbmZvIGlucHV0Lm5nLXRvdWNoZWQubmctaW52YWxpZCxcbi5DaGF0IC5DaGF0X19JbmZvcm1hdGlvbiAuTWFpbi1JbmZvIHRleHRhcmVhLm5nLXRvdWNoZWQubmctaW52YWxpZCB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbGl0ZS1yZWQpO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDY5cHgpIHtcbiAgLkNoYXQgLkNoYXRfX0luZm9ybWF0aW9uIC5NYWluLUluZm8gaW5wdXQsXG4uQ2hhdCAuQ2hhdF9fSW5mb3JtYXRpb24gLk1haW4tSW5mbyB0ZXh0YXJlYSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxufVxuLkNoYXQgLkNoYXRfX0luZm9ybWF0aW9uIC5NYWluLUluZm8gdGV4dGFyZWEge1xuICByZXNpemU6IHZlcnRpY2FsO1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG59XG4uQ2hhdCAuQ2hhdF9fSW5mb3JtYXRpb24gLk1haW4tSW5mbyAuQ2hhdC1BdmEge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlcjogIzAwMDAwMCBzb2xpZCAxcHg7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuLkNoYXQgLkNoYXRfX0luZm9ybWF0aW9uIC5NYWluLUluZm8gLkNoYXQtVGl0bGUge1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG4uQ2hhdCAuQ2hhdF9fSW5mb3JtYXRpb24gLk1haW4tSW5mbyAuQ2hhdC1EZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uQ2hhdCAuQ2hhdF9fSW5mb3JtYXRpb24gLkFjdGlvbnMgLkVkaXQsXG4uQ2hhdCAuQ2hhdF9fSW5mb3JtYXRpb24gLkFjdGlvbnMgLkJhZC1DaGF0LFxuLkNoYXQgLkNoYXRfX0luZm9ybWF0aW9uIC5BY3Rpb25zIC5TaWdub3V0LFxuLkNoYXQgLkNoYXRfX0luZm9ybWF0aW9uIC5BY3Rpb25zIC5Eb25lLFxuLkNoYXQgLkNoYXRfX0luZm9ybWF0aW9uIC5BY3Rpb25zIC5DYW5jZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uQ2hhdCAuQ2hhdF9fSW5mb3JtYXRpb24gLkFjdGlvbnMgLkVkaXQ6OmJlZm9yZSxcbi5DaGF0IC5DaGF0X19JbmZvcm1hdGlvbiAuQWN0aW9ucyAuQmFkLUNoYXQ6OmJlZm9yZSxcbi5DaGF0IC5DaGF0X19JbmZvcm1hdGlvbiAuQWN0aW9ucyAuU2lnbm91dDo6YmVmb3JlLFxuLkNoYXQgLkNoYXRfX0luZm9ybWF0aW9uIC5BY3Rpb25zIC5Eb25lOjpiZWZvcmUsXG4uQ2hhdCAuQ2hhdF9fSW5mb3JtYXRpb24gLkFjdGlvbnMgLkNhbmNlbDo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uQ2hhdCAuQ2hhdF9fSW5mb3JtYXRpb24gLkFjdGlvbnMgLkVkaXQ6aG92ZXIsXG4uQ2hhdCAuQ2hhdF9fSW5mb3JtYXRpb24gLkFjdGlvbnMgLkJhZC1DaGF0OmhvdmVyLFxuLkNoYXQgLkNoYXRfX0luZm9ybWF0aW9uIC5BY3Rpb25zIC5TaWdub3V0OmhvdmVyLFxuLkNoYXQgLkNoYXRfX0luZm9ybWF0aW9uIC5BY3Rpb25zIC5Eb25lOmhvdmVyLFxuLkNoYXQgLkNoYXRfX0luZm9ybWF0aW9uIC5BY3Rpb25zIC5DYW5jZWw6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwMDc7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5DaGF0IC5DaGF0X19JbmZvcm1hdGlvbiAuQWN0aW9ucyAuRWRpdDo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKFwiL21lZGlhL2ljb25zL2VkaXQtYWx0LnN2Z1wiKTtcbn1cbi5DaGF0IC5DaGF0X19JbmZvcm1hdGlvbiAuQWN0aW9ucyAuQmFkLUNoYXQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybChcIi9tZWRpYS9pY29ucy9jb21tZW50LWV4Y2xhbWF0aW9uLnN2Z1wiKTtcbn1cbi5DaGF0IC5DaGF0X19JbmZvcm1hdGlvbiAuQWN0aW9ucyAuU2lnbm91dDo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKFwiL21lZGlhL2ljb25zL3NpZ24tb3V0LWFsdC5zdmdcIik7XG59XG4uQ2hhdCAuQ2hhdF9fSW5mb3JtYXRpb24gLkFjdGlvbnMgLkRvbmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybChcIi9tZWRpYS9pY29ucy9jaGVjay1jaXJjbGUuc3ZnXCIpO1xufVxuLkNoYXQgLkNoYXRfX0luZm9ybWF0aW9uIC5BY3Rpb25zIC5DYW5jZWw6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybChcIi9tZWRpYS9pY29ucy90aW1lcy1jaXJjbGUuc3ZnXCIpO1xufVxuLkNoYXQgLkNoYXRfX0luZm9ybWF0aW9uIC5BY3Rpb25zIC5TcGxpdCB7XG4gIGZsZXg6IDAgMCAycHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZSk7XG59XG4uQ2hhdCAuQ2hhdF9fSW5mb3JtYXRpb24gLlVzZXJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5DaGF0IC5DaGF0X19JbmZvcm1hdGlvbiAuVXNlcnMgLkl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206ICMwMDAwMDA1MCBzb2xpZCAxcHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5DaGF0IC5DaGF0X19JbmZvcm1hdGlvbiAuVXNlcnMgLkl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwMDc7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5DaGF0IC5DaGF0X19JbmZvcm1hdGlvbiAuVXNlcnMgLkl0ZW06bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4uQ2hhdCAuQ2hhdF9fSW5mb3JtYXRpb24gLlVzZXJzIC5JdGVtIC5BdmF0YXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAwIDAgNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLkNoYXQgLkNoYXRfX0luZm9ybWF0aW9uIC5Vc2VycyAuSXRlbSAuQXZhdGFyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uQ2hhdCAuQ2hhdF9fSW5mb3JtYXRpb24gLlVzZXJzIC5JdGVtIC5NYWluLUluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDAwMDtcbn1cbi5DaGF0IC5DaGF0X19JbmZvcm1hdGlvbiAuVXNlcnMgLkl0ZW0gLk1haW4tSW5mbyAuTmFtZSB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5DaGF0IC5DaGF0X19JbmZvcm1hdGlvbiAuVXNlcnMgLkl0ZW0gLk1haW4tSW5mbyAuU3RhdHVzIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5DaGF0IC5DaGF0X19JbmZvcm1hdGlvbiAuVXNlcnMgLkl0ZW0gLkNoYXQtU3RhdHVzIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogdmFyKC0tcmVkKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cbi5DaGF0IC5DaGF0X19JbmZvcm1hdGlvbiAuVXNlcnMgLkl0ZW0gLkJhbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGZsZXg6IDAgMCAzMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG4uQ2hhdCAuQ2hhdF9fSW5mb3JtYXRpb24gLlVzZXJzIC5JdGVtIC5CYW46OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5DaGF0IC5DaGF0X19JbmZvcm1hdGlvbiAuVXNlcnMgLkl0ZW0gLkJhbjpob3ZlciB7XG4gIGJveC1zaGFkb3c6ICMwMDAwMDA1MCAycHggMCA4cHggMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLkNoYXQgLkNoYXRfX0luZm9ybWF0aW9uIC5Vc2VycyAuSXRlbSAuQmFuOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgIzAwMDAwMDUwIDJweCAwIDhweCAwO1xufVxuLkNoYXQgLkNoYXRfX0luZm9ybWF0aW9uIC5Vc2VycyAuSXRlbSAuQmFuLk5vdC1CYW5uZWQgaSB7XG4gIGNvbnRlbnQ6IHVybChcIi9tZWRpYS9pY29ucy91bmxvY2stYWx0LnN2Z1wiKTtcbn1cbi5DaGF0IC5DaGF0X19JbmZvcm1hdGlvbiAuVXNlcnMgLkl0ZW0gLkJhbi5Jcy1CYW5uZWQgaSB7XG4gIGNvbnRlbnQ6IHVybChcIi9tZWRpYS9pY29ucy9wYWRsb2NrLnN2Z1wiKTtcbn1cbi5DaGF0IC5DaGF0X19JbmZvcm1hdGlvbiAuVXNlcnMgLkl0ZW0gLkJhbiBpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uU2hhZG93LUxlZnQge1xuICBib3gtc2hhZG93OiAjMDAwMDAwMjUgLTRweCAwIDhweCAwO1xufVxuXG4uU2hhZG93LVJpZ2h0IHtcbiAgYm94LXNoYWRvdzogIzAwMDAwMDI1IDRweCAwIDhweCAwO1xufVxuXG4uQWxsLUNoYXRzLFxuLkNoYXRfX0luZm9ybWF0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1saXRlLWJsdWUpO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY3cHgpIHtcbiAgLkFsbC1DaGF0cyxcbi5DaGF0X19JbmZvcm1hdGlvbiB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGZsZXg6IDAgMCAzMDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLkFsbC1DaGF0cyxcbi5DaGF0X19JbmZvcm1hdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleDogMCAwIGF1dG87XG4gIH1cbn1cblxuLkFsbC1DaGF0cyB7XG4gIGNvbG9yOiAjMDAwO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzLCBmbGV4IDAuMnM7XG59XG4uQWxsLUNoYXRzLkNsb3NlIHtcbiAgZmxleDogMCAwIDA7XG4gIHdpZHRoOiAwO1xufVxuLkFsbC1DaGF0cy5DbG9zZSAuSXRlbSB7XG4gIG9wYWNpdHk6IDA7XG4gIHotaW5kZXg6IC01O1xufVxuLkFsbC1DaGF0cyAuSXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA3MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogIzAwMDAwMDUwIHNvbGlkIDFweDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzLCB6LWluZGV4IDAuMnM7XG59XG4uQWxsLUNoYXRzIC5JdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDA3O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uQWxsLUNoYXRzIC5JdGVtOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuLkFsbC1DaGF0cyAuSXRlbSAuQXZhdGFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMCAwIDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5BbGwtQ2hhdHMgLkl0ZW0gLkF2YXRhciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLkFsbC1DaGF0cyAuSXRlbSAuTWFpbi1JbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwMDA7XG59XG4uQWxsLUNoYXRzIC5JdGVtIC5NYWluLUluZm8gLk5hbWUge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uQWxsLUNoYXRzIC5JdGVtIC5NYWluLUluZm8gLlN0YXR1cyB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDE0cHg7XG59IiwiQGltcG9ydCBcInNyYy9zdHlsZXMuc2Fzc1wiXHJcbiAgICBcclxuPWZpZWxkKClcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDBcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWZcclxuICAgIGJvcmRlcjogIzAwMDAwMDIwIHNvbGlkIDFweFxyXG4gICAgd2lkdGg6IDEwMCVcclxuICAgIHBhZGRpbmc6IDEwcHhcclxuICAgIGZvbnQtc2l6ZTogMTZweFxyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjFzXHJcbiAgICAmOmhvdmVyOm5vdCgubmctdG91Y2hlZC5uZy1pbnZhbGlkKVxyXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAwMDAwMDQwXHJcbiAgICAmOmZvY3VzOm5vdCgubmctdG91Y2hlZC5uZy1pbnZhbGlkKVxyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbGl0ZS1ibHVlKVxyXG4gICAgJi5uZy10b3VjaGVkLm5nLWludmFsaWRcclxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWxpdGUtcmVkKVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKCBtYXgtd2lkdGg6IDQ2OXB4IClcclxuICAgICAgICBmb250LXNpemU6IDE0cHhcclxuICAgICAgICBwYWRkaW5nOiA1cHhcclxuXHJcbj1idXR0b24oKVxyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpXHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudFxyXG4gICAgZm9udC1zaXplOiAxNnB4XHJcbiAgICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmXHJcbiAgICBmb250LXdlaWdodDogNTUwXHJcbiAgICBwYWRkaW5nOiA3cHggMTVweFxyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcbiAgICBib3JkZXI6IHZhcigtLWJsdWUpIHNvbGlkIDJweFxyXG4gICAgYmFja2dyb3VuZDogI2ZmZlxyXG4gICAgY29sb3I6IHZhcigtLWJsdWUpXHJcbiAgICBtYXJnaW46IDEwcHhcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMDBweFxyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4xc1xyXG4gICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKVxyXG4gICAgICAgIGNvbG9yOiAjZmZmXHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZSlcclxuICAgICY6ZGlzYWJsZWRcclxuICAgICAgICBjb2xvcjogdmFyKC0tbGl0ZS1ibHVlKVxyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbGl0ZS1ibHVlKVxyXG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWRcclxuXHJcbj1tYW5hZ2UtYnV0dG9uKCR3LCAkaClcclxuICAgIG91dGxpbmU6IG5vbmVcclxuICAgIGJvcmRlcjogbm9uZVxyXG4gICAgYmFja2dyb3VuZDogI2ZmZlxyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4XHJcbiAgICB3aWR0aDogJHdcclxuICAgIGhlaWdodDogJGhcclxuICAgIHBhZGRpbmc6IDVweFxyXG4gICAgJjo6YmVmb3JlXHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4XHJcbiAgICAmOmhvdmVyXHJcbiAgICAgICAgYm94LXNoYWRvdzogIzAwMDAwMDUwIDJweCAwIDhweCAwXHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyXHJcbiAgICAmOmZvY3VzXHJcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgIzAwMDAwMDUwIDJweCAwIDhweCAwXHJcblxyXG4uRm9ybS1Db250YWluZXJcclxuICAgICtmbGV4LWNvbnRhaW5lcigpXHJcbiAgICBwb3NpdGlvbjogZml4ZWRcclxuICAgIHRvcDogMTAwcHhcclxuICAgIGxlZnQ6IGNhbGMoIDUwJSAtIDI1MHB4IClcclxuICAgIHdpZHRoOiA1MDBweFxyXG4gICAgaGVpZ2h0OiBhdXRvXHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZVxyXG4gICAgYm94LXNoYWRvdzogIzAwMDAwMDI1IDAgNHB4IDhweCAwXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4XHJcbiAgICAuRm9ybS1Db250YWluZXJfX1RpdGxlXHJcbiAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxuICAgICAgICBmb250LXNpemU6IDI2cHhcclxuICAgICAgICBtYXJnaW46IDEwcHhcclxuICAgIC5Gb3JtLUNvbnRhaW5lcl9fV2FybmluZ1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwXHJcbiAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgICBib3JkZXI6IHZhcigtLXJlZCkgc29saWQgMnB4XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZlxyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1yZWQpXHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweFxyXG4gICAgICAgICYub2tcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWdyZWVuKVxyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWdyZWVuKVxyXG4gICAgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyXHJcbiAgICAgICAgK2ZsZXgtY29udGFpbmVyKClcclxuICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgIHBhZGRpbmc6IDEwcHhcclxuICAgICAgICAuRmllbGRcclxuICAgICAgICAgICAgK2ZsZXgtY29udGFpbmVyKClcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweFxyXG4gICAgICAgICAgICBpbnB1dCxcclxuICAgICAgICAgICAgc2VsZWN0LFxyXG4gICAgICAgICAgICB0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgK2ZpZWxkKClcclxuICAgICAgICAgICAgc3BhblxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1yZWQpXHJcbiAgICAgICAgICAgIHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICByZXNpemU6IHZlcnRpY2FsXHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDBweFxyXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogODAwcHhcclxuICAgIC5Gb3JtLUNvbnRhaW5lcl9fTGlua3NcclxuICAgICAgICArZmxleC1jb250YWluZXIocm93KVxyXG4gICAgICAgIHBhZGRpbmc6IDEwcHhcclxuICAgICAgICBib3JkZXItdG9wOiAjMDAwMDAwMzAgc29saWQgMXB4XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogIzAwMDAwMDMwIHNvbGlkIDFweFxyXG4gICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4XHJcbiAgICAgICAgc3BhblxyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmXHJcbiAgICAgICAgYVxyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTUwXHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ibHVlKVxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjFzXHJcbiAgICAgICAgICAgICY6aG92ZXJcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlclxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWxpdGUtYmx1ZSlcclxuICAgIC5Gb3JtLUNvbnRhaW5lcl9fQnV0dG9uXHJcbiAgICAgICAgK2J1dHRvbigpXHJcblxyXG5cclxuLlNlYXJjaC1Db250YWluZXJcclxuICAgICtmbGV4LWNvbnRhaW5lcihyb3csIGNlbnRlciwgY2VudGVyKVxyXG4gICAgd2lkdGg6IDEwMCVcclxuICAgIGhlaWdodDogNzBweFxyXG4gICAgcGFkZGluZzogMTBweCAxNXB4XHJcbiAgICBib3JkZXItYm90dG9tOiAjMDAwMDAwNDAgc29saWQgMnB4XHJcbiAgICAuUXVlcnlcclxuICAgICAgICBib3JkZXI6IG5vbmVcclxuICAgICAgICBvdXRsaW5lOiBub25lXHJcbiAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgICBoZWlnaHQ6IGF1dG9cclxuICAgICAgICBmb250LXNpemU6IDE4cHhcclxuICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZlxyXG4gICAgICAgIHBhZGRpbmc6IDAgMTVweFxyXG4gICAgICAgIGhlaWdodDogMTAwJVxyXG4gICAgaVxyXG4gICAgICAgIGZsZXg6IDAgMCAzMHB4XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4XHJcbiAgICAgICAgd2lkdGg6IDMwcHhcclxuICAgICAgICBoZWlnaHQ6IDMwcHhcclxuICAgIC5TZWFyY2hcclxuICAgICAgICBjb250ZW50OiB1cmwoXCIvbWVkaWEvaWNvbnMvc2VhcmNoLnN2Z1wiKVxyXG4gICAgLlNldHRpbmdzXHJcbiAgICAgICAgLlNldHRpbmdzLUljb24tQnRuXHJcbiAgICAgICAgICAgICttYW5hZ2UtYnV0dG9uKDQwcHgsIDQwcHgpXHJcbiAgICAgICAgICAgIGlcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHVybChcIi9tZWRpYS9pY29ucy9zbGlkZXItc2V0dGluZ3Muc3ZnXCIpXHJcbiAgICAgICAgICAgICAgICBmaWxsOiB2YXIoLS1ibHVlKVxyXG4gICAgICAgIC5EZXRhaWxzXHJcbiAgICAgICAgICAgIHdpZHRoOiA2MDBweFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGVcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZlxyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHhcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogIzAwMDAwMDQwIDAgMnB4IDRweCAwXHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kICggbWF4LXdpZHRoOiA2NzZweCApXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweClcclxuICAgICAgICAgICAgLlRpdGxlXHJcbiAgICAgICAgICAgICAgICArZmxleC1jb250YWluZXIocm93LCBjZW50ZXIpXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgICAgIC5JdGVtXHJcbiAgICAgICAgICAgICAgICArZmxleC1jb250YWluZXIocm93KVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKCBtYXgtd2lkdGg6IDQ2OXB4IClcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHhcclxuICAgICAgICAgICAgICAgIGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgK2ZpZWxkKClcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNHB4IDEwcHhcclxuICAgICAgICAgICAgLkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgK2J1dHRvbigpIl19 */"] });


/***/ }),

/***/ 3501:
/*!**********************************************************!*\
  !*** ./src/app/form-switcher/form-switcher.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormSwitcherComponent": () => (/* binding */ FormSwitcherComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class FormSwitcherComponent {
    constructor() { }
    ngOnInit() {
    }
}
FormSwitcherComponent.ɵfac = function FormSwitcherComponent_Factory(t) { return new (t || FormSwitcherComponent)(); };
FormSwitcherComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormSwitcherComponent, selectors: [["form-switcher"]], decls: 2, vars: 0, consts: [[1, "Form-Switcher"], [1, "Item"]], template: function FormSwitcherComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLXN3aXRjaGVyLmNvbXBvbmVudC5zYXNzIn0= */"] });


/***/ }),

/***/ 7815:
/*!**************************************************!*\
  !*** ./src/app/hamburger/hamburger.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HamburgerComponent": () => (/* binding */ HamburgerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8267);



const _c0 = function (a0) { return { "Open": a0 }; };
class HamburgerComponent {
    constructor() {
        this.isOpen = false;
        this.onchange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    change() {
        this.onchange.emit();
    }
}
HamburgerComponent.ɵfac = function HamburgerComponent_Factory(t) { return new (t || HamburgerComponent)(); };
HamburgerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HamburgerComponent, selectors: [["hamburger"]], inputs: { isOpen: "isOpen" }, outputs: { onchange: "onchange" }, decls: 4, vars: 3, consts: [[1, "Hamburger", 3, "ngClass", "click"], [1, "Item-1"], [1, "Item-2"], [1, "Item-3"]], template: function HamburgerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HamburgerComponent_Template_div_click_0_listener() { return ctx.change(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.isOpen));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.Row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.Column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.Row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.Column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.Form-Container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  position: fixed;\n  top: 100px;\n  left: calc(50% - 250px);\n  width: 500px;\n  height: auto;\n  background: white;\n  box-shadow: #00000025 0 4px 8px 0;\n  border-radius: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Title[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  font-size: 26px;\n  margin: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Warning[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  width: 100%;\n  border: var(--red) solid 2px;\n  background: #fff;\n  color: var(--red);\n  font-size: 18px;\n  padding: 10px 20px;\n  border-radius: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Warning.ok[_ngcontent-%COMP%] {\n  color: var(--green);\n  border-color: var(--green);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n  padding: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n  margin-top: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-family: \"Rubik\", sans-serif;\n  border: #00000020 solid 1px;\n  width: 100%;\n  padding: 10px;\n  font-size: 16px;\n  border-radius: 5px;\n  transition: all 0.1s;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover:not(.ng-touched.ng-invalid), .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover:not(.ng-touched.ng-invalid), .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:hover:not(.ng-touched.ng-invalid) {\n  border-color: #00000040;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus:not(.ng-touched.ng-invalid), .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus:not(.ng-touched.ng-invalid), .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus:not(.ng-touched.ng-invalid) {\n  border-color: var(--lite-blue);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input.ng-touched.ng-invalid[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select.ng-touched.ng-invalid[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border-color: var(--lite-red);\n}\n\n@media screen and (max-width: 469px) {\n  .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 5px;\n  }\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 100%;\n  color: var(--red);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 100px;\n  max-height: 800px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 10px;\n  border-top: #00000030 solid 1px;\n  border-bottom: #00000030 solid 1px;\n  width: 100%;\n  font-size: 16px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Links[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Rubik\", sans-serif;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 550;\n  color: var(--blue);\n  transition: all 0.1s;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: var(--lite-blue);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Button[_ngcontent-%COMP%] {\n  width: calc(100% - 20px);\n  background: transparent;\n  font-size: 16px;\n  font-family: \"Rubik\", sans-serif;\n  font-weight: 550;\n  padding: 7px 15px;\n  cursor: pointer;\n  border: var(--blue) solid 2px;\n  background: #fff;\n  color: var(--blue);\n  margin: 10px;\n  border-radius: 1000px;\n  transition: all 0.1s;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: #fff;\n  background: var(--blue);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Button[_ngcontent-%COMP%]:disabled {\n  color: var(--lite-blue);\n  border-color: var(--lite-blue);\n  cursor: not-allowed;\n}\n\n.Search-Container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 70px;\n  padding: 10px 15px;\n  border-bottom: #00000040 solid 2px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Query[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  width: 100%;\n  height: auto;\n  font-size: 18px;\n  font-family: Arial, Helvetica, sans-serif;\n  padding: 0 15px;\n  height: 100%;\n}\n\n.Search-Container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  flex: 0 0 30px;\n  font-size: 30px;\n  width: 30px;\n  height: 30px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Search[_ngcontent-%COMP%] {\n  content: url(\"/media/icons/search.svg\");\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  background: #fff;\n  border-radius: 5px;\n  width: 40px;\n  height: 40px;\n  padding: 5px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%]::before {\n  font-size: 30px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%]:hover {\n  box-shadow: #00000050 2px 0 8px 0;\n  cursor: pointer;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%]:focus {\n  box-shadow: inset #00000050 2px 0 8px 0;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  content: url(\"/media/icons/slider-settings.svg\");\n  fill: var(--blue);\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%] {\n  width: 600px;\n  position: absolute;\n  background: #fff;\n  border-radius: 10px;\n  padding: 10px;\n  box-shadow: #00000040 0 2px 4px 0;\n}\n\n@media screen and (max-width: 676px) {\n  .Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%] {\n    width: calc(100% - 10px);\n  }\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 10px 0;\n  width: 100%;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  margin: 10px;\n}\n\n@media screen and (max-width: 469px) {\n  .Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-family: \"Rubik\", sans-serif;\n  border: #00000020 solid 1px;\n  width: 100%;\n  padding: 10px;\n  font-size: 16px;\n  border-radius: 5px;\n  transition: all 0.1s;\n  width: 100%;\n  margin: 4px 10px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover:not(.ng-touched.ng-invalid) {\n  border-color: #00000040;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus:not(.ng-touched.ng-invalid) {\n  border-color: var(--lite-blue);\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border-color: var(--lite-red);\n}\n\n@media screen and (max-width: 469px) {\n  .Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 5px;\n  }\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Button[_ngcontent-%COMP%] {\n  width: calc(100% - 20px);\n  background: transparent;\n  font-size: 16px;\n  font-family: \"Rubik\", sans-serif;\n  font-weight: 550;\n  padding: 7px 15px;\n  cursor: pointer;\n  border: var(--blue) solid 2px;\n  background: #fff;\n  color: var(--blue);\n  margin: 10px;\n  border-radius: 1000px;\n  transition: all 0.1s;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: #fff;\n  background: var(--blue);\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Button[_ngcontent-%COMP%]:disabled {\n  color: var(--lite-blue);\n  border-color: var(--lite-blue);\n  cursor: not-allowed;\n}\n\n.Hamburger[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  flex: 0 0 60px;\n  height: 60px;\n  width: 60px;\n  border-radius: 100%;\n  background: #fff;\n  cursor: pointer;\n}\n\n.Hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 4px;\n  border-radius: 4px;\n  background: var(--blue);\n  margin: 4px 0;\n  transform-origin: 0 50%;\n  transition: transform 0.1s, margin 0.1s;\n}\n\n.Hamburger.Open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 12px 0;\n}\n\n.Hamburger.Open[_ngcontent-%COMP%]   .Item-1[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n}\n\n.Hamburger.Open[_ngcontent-%COMP%]   .Item-2[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.Hamburger.Open[_ngcontent-%COMP%]   .Item-3[_ngcontent-%COMP%] {\n  transform: rotate(-45deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcc3R5bGVzLnNhc3MiLCJoYW1idXJnZXIuY29tcG9uZW50LnNhc3MiLCIuLlxcLi5cXHN0eWxlcy5mb3Jtcy5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNDSjs7QURTQTtFQUxJLGFBQUE7RUFDQSxtQkFLZ0I7RUFKaEIsMkJBSCtCO0VBSS9CLHVCQUpnRDtBQ0lwRDs7QURLQTtFQVJJLGFBQUE7RUFDQSxzQkFGa0I7RUFHbEIsMkJBSCtCO0VBSS9CLHVCQUpnRDtBQ1dwRDs7QURqQkE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQ29CSjs7QURWQTtFQUxJLGFBQUE7RUFDQSxtQkFLZ0I7RUFKaEIsMkJBSCtCO0VBSS9CLHVCQUpnRDtBQ3VCcEQ7O0FEZEE7RUFSSSxhQUFBO0VBQ0Esc0JBRmtCO0VBR2xCLDJCQUgrQjtFQUkvQix1QkFKZ0Q7QUM4QnBEOztBQ3VCQTtFRnBESSxhQUFBO0VBQ0Esc0JBRmtCO0VBR2xCLDJCQUgrQjtFQUkvQix1QkFKZ0Q7RUV1RGhELGVBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtBRGpCSjs7QUNrQkk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBRGhCUjs7QUNpQkk7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEZlI7O0FDZ0JRO0VBQ0ksbUJBQUE7RUFDQSwwQkFBQTtBRGRaOztBQ2VJO0VGL0VBLGFBQUE7RUFDQSxzQkFGa0I7RUFHbEIsMkJBSCtCO0VBSS9CLHVCQUpnRDtFRWtGNUMsV0FBQTtFQUNBLGFBQUE7QURWUjs7QUNXUTtFRm5GSixhQUFBO0VBQ0Esc0JBRmtCO0VBR2xCLDJCQUgrQjtFQUkvQix1QkFKZ0Q7RUVzRnhDLFdBQUE7RUFDQSxnQkFBQTtBRE5aOztBQ09ZOzs7RUEzRlIsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBRHlGSjs7QUN4Rkk7OztFQUNJLHVCQUFBO0FENEZSOztBQzNGSTs7O0VBQ0ksOEJBQUE7QUQrRlI7O0FDOUZJOzs7RUFDSSw2QkFBQTtBRGtHUjs7QUNqR0k7RUE2RVE7OztJQTVFSixlQUFBO0lBQ0EsWUFBQTtFRHNHTjtBQUNGOztBQ3hCWTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBRDBCaEI7O0FDekJZO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FEMkJoQjs7QUMxQkk7RUZsR0EsYUFBQTtFQUNBLG1CRWtHb0I7RUZqR3BCLDJCQUgrQjtFQUkvQix1QkFKZ0Q7RUVxRzVDLGFBQUE7RUFDQSwrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUQrQlI7O0FDOUJRO0VBQ0ksZ0NBQUE7QURnQ1o7O0FDL0JRO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FEaUNaOztBQ2hDWTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtBRGtDaEI7O0FDakNJO0VBbkdBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0FEdUlKOztBQ3RJSTtFQUNJLFdBQUE7RUFDQSx1QkFBQTtBRHdJUjs7QUN2SUk7RUFDSSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUR5SVI7O0FDckRBO0VGdEhJLGFBQUE7RUFDQSxtQkVzSGdCO0VGckhoQix1QkVxSHFCO0VGcEhyQixtQkVvSDZCO0VBQzdCLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtBRDJESjs7QUMxREk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUQ0RFI7O0FDM0RJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBRDZEUjs7QUM1REk7RUFDSSx1Q0FBQTtBRDhEUjs7QUM1RFE7RUF4R0osYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FxR3VCO0VBcEd2QixZQW9HNkI7RUFuRzdCLFlBQUE7QUR1S0o7O0FDdEtJO0VBQ0ksZUFBQTtBRHdLUjs7QUN2S0k7RUFDSSxpQ0FBQTtFQUNBLGVBQUE7QUR5S1I7O0FDeEtJO0VBQ0ksdUNBQUE7QUQwS1I7O0FDN0VZO0VBQ0ksZ0RBQUE7RUFDQSxpQkFBQTtBRCtFaEI7O0FDOUVRO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtBRGdGWjs7QUMvRVk7RUFQSjtJQVFRLHdCQUFBO0VEa0ZkO0FBQ0Y7O0FDbEZZO0VGM0pSLGFBQUE7RUFDQSxtQkUySjRCO0VGMUo1Qix1QkUwSmlDO0VGekpqQyx1QkFKZ0Q7RUU4SnBDLGVBQUE7RUFDQSxXQUFBO0FEdUZoQjs7QUN0Rlk7RUYvSlIsYUFBQTtFQUNBLG1CRStKNEI7RUY5SjVCLDJCQUgrQjtFQUkvQix1QkFKZ0Q7RUVvS3BDLFlBQUE7QUR5RmhCOztBQzNGZ0I7RUFGSjtJQUdRLHNCQUFBO0VEOEZsQjtBQUNGOztBQzdGZ0I7RUF4S1osZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQW1LZ0IsV0FBQTtFQUNBLGdCQUFBO0FEc0dwQjs7QUN6UUk7RUFDSSx1QkFBQTtBRDJRUjs7QUMxUUk7RUFDSSw4QkFBQTtBRDRRUjs7QUMzUUk7RUFDSSw2QkFBQTtBRDZRUjs7QUM1UUk7RUEwSlk7SUF6SlIsZUFBQTtJQUNBLFlBQUE7RUQrUU47QUFDRjs7QUNwSFk7RUF6SlIsd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QURnUko7O0FDL1FJO0VBQ0ksV0FBQTtFQUNBLHVCQUFBO0FEaVJSOztBQ2hSSTtFQUNJLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBRGtSUjs7QUF4VEE7RURJSSxhQUFBO0VBQ0Esc0JDSmdCO0VES2hCLHVCQ0x3QjtFRE14QixtQkNOZ0M7RUFDaEMsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUE4VEo7O0FBN1RJO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUNBQUE7QUErVFI7O0FBN1RRO0VBQ0ksY0FBQTtBQStUWjs7QUE5VFE7RUFDSSx3QkFBQTtBQWdVWjs7QUEvVFE7RUFDSSxhQUFBO0FBaVVaOztBQWhVUTtFQUNJLHlCQUFBO0FBa1VaIiwiZmlsZSI6ImhhbWJ1cmdlci5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHlcbiAgICBtYXJnaW46IDBcbiAgICBwYWRkaW5nOiAwXG5cbiRuYXZfdzozMDBweFxuICAgIFxuPWZsZXgtY29udGFpbmVyKCRkaXI6IGNvbHVtbiwgJGpjOiBmbGV4LXN0YXJ0LCAkYWk6IGZsZXgtc3RhcnQpXG4gICAgZGlzcGxheTogZmxleFxuICAgIGZsZXgtZGlyZWN0aW9uOiAkZGlyXG4gICAganVzdGlmeS1jb250ZW50OiAkamNcbiAgICBhbGlnbi1pdGVtczogJGFpIFxuXG4uUm93XG4gICAgK2ZsZXgtY29udGFpbmVyKHJvdylcblxuLkNvbHVtblxuICAgICtmbGV4LWNvbnRhaW5lcigpXG4iLCJodG1sLCBib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uUm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLkNvbHVtbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbmh0bWwsIGJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5Sb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uQ29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLkZvcm0tQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDEwMHB4O1xuICBsZWZ0OiBjYWxjKDUwJSAtIDI1MHB4KTtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAjMDAwMDAwMjUgMCA0cHggOHB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19UaXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fV2FybmluZyB7XG4gIG1hcmdpbjogMTBweCAwO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiB2YXIoLS1yZWQpIHNvbGlkIDJweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6IHZhcigtLXJlZCk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fV2FybmluZy5vayB7XG4gIGNvbG9yOiB2YXIoLS1ncmVlbik7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZ3JlZW4pO1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIGlucHV0LFxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgc2VsZWN0LFxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgdGV4dGFyZWEge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmO1xuICBib3JkZXI6ICMwMDAwMDAyMCBzb2xpZCAxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCBpbnB1dDpob3Zlcjpub3QoLm5nLXRvdWNoZWQubmctaW52YWxpZCksXG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCBzZWxlY3Q6aG92ZXI6bm90KC5uZy10b3VjaGVkLm5nLWludmFsaWQpLFxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgdGV4dGFyZWE6aG92ZXI6bm90KC5uZy10b3VjaGVkLm5nLWludmFsaWQpIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwNDA7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCBpbnB1dDpmb2N1czpub3QoLm5nLXRvdWNoZWQubmctaW52YWxpZCksXG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCBzZWxlY3Q6Zm9jdXM6bm90KC5uZy10b3VjaGVkLm5nLWludmFsaWQpLFxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgdGV4dGFyZWE6Zm9jdXM6bm90KC5uZy10b3VjaGVkLm5nLWludmFsaWQpIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saXRlLWJsdWUpO1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgaW5wdXQubmctdG91Y2hlZC5uZy1pbnZhbGlkLFxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgc2VsZWN0Lm5nLXRvdWNoZWQubmctaW52YWxpZCxcbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIHRleHRhcmVhLm5nLXRvdWNoZWQubmctaW52YWxpZCB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbGl0ZS1yZWQpO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDY5cHgpIHtcbiAgLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgaW5wdXQsXG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCBzZWxlY3QsXG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCB0ZXh0YXJlYSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgc3BhbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogdmFyKC0tcmVkKTtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIHRleHRhcmVhIHtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIG1heC1oZWlnaHQ6IDgwMHB4O1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fTGlua3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItdG9wOiAjMDAwMDAwMzAgc29saWQgMXB4O1xuICBib3JkZXItYm90dG9tOiAjMDAwMDAwMzAgc29saWQgMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fTGlua3Mgc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWY7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19MaW5rcyBhIHtcbiAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0xpbmtzIGE6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1saXRlLWJsdWUpO1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fQnV0dG9uIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTUwO1xuICBwYWRkaW5nOiA3cHggMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IHZhcigtLWJsdWUpIHNvbGlkIDJweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xuICBtYXJnaW46IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19CdXR0b246aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZSk7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19CdXR0b246ZGlzYWJsZWQge1xuICBjb2xvcjogdmFyKC0tbGl0ZS1ibHVlKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saXRlLWJsdWUpO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uU2VhcmNoLUNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3MHB4O1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJvcmRlci1ib3R0b206ICMwMDAwMDA0MCBzb2xpZCAycHg7XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuUXVlcnkge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLlNlYXJjaC1Db250YWluZXIgaSB7XG4gIGZsZXg6IDAgMCAzMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuU2VhcmNoIHtcbiAgY29udGVudDogdXJsKFwiL21lZGlhL2ljb25zL3NlYXJjaC5zdmdcIik7XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLlNldHRpbmdzLUljb24tQnRuIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuU2V0dGluZ3MtSWNvbi1CdG46OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuU2V0dGluZ3MtSWNvbi1CdG46aG92ZXIge1xuICBib3gtc2hhZG93OiAjMDAwMDAwNTAgMnB4IDAgOHB4IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuU2V0dGluZ3MtSWNvbi1CdG46Zm9jdXMge1xuICBib3gtc2hhZG93OiBpbnNldCAjMDAwMDAwNTAgMnB4IDAgOHB4IDA7XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLlNldHRpbmdzLUljb24tQnRuIGkge1xuICBjb250ZW50OiB1cmwoXCIvbWVkaWEvaWNvbnMvc2xpZGVyLXNldHRpbmdzLnN2Z1wiKTtcbiAgZmlsbDogdmFyKC0tYmx1ZSk7XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLkRldGFpbHMge1xuICB3aWR0aDogNjAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm94LXNoYWRvdzogIzAwMDAwMDQwIDAgMnB4IDRweCAwO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjc2cHgpIHtcbiAgLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5EZXRhaWxzIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG4gIH1cbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyAuVGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLkRldGFpbHMgLkl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW46IDEwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjlweCkge1xuICAuU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLkRldGFpbHMgLkl0ZW0ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyAuSXRlbSBpbnB1dCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWY7XG4gIGJvcmRlcjogIzAwMDAwMDIwIHNvbGlkIDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogNHB4IDEwcHg7XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLkRldGFpbHMgLkl0ZW0gaW5wdXQ6aG92ZXI6bm90KC5uZy10b3VjaGVkLm5nLWludmFsaWQpIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwNDA7XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLkRldGFpbHMgLkl0ZW0gaW5wdXQ6Zm9jdXM6bm90KC5uZy10b3VjaGVkLm5nLWludmFsaWQpIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saXRlLWJsdWUpO1xufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5EZXRhaWxzIC5JdGVtIGlucHV0Lm5nLXRvdWNoZWQubmctaW52YWxpZCB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbGl0ZS1yZWQpO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDY5cHgpIHtcbiAgLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5EZXRhaWxzIC5JdGVtIGlucHV0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLkRldGFpbHMgLkJ1dHRvbiB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgcGFkZGluZzogN3B4IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiB2YXIoLS1ibHVlKSBzb2xpZCAycHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzO1xufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5EZXRhaWxzIC5CdXR0b246aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZSk7XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLkRldGFpbHMgLkJ1dHRvbjpkaXNhYmxlZCB7XG4gIGNvbG9yOiB2YXIoLS1saXRlLWJsdWUpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWxpdGUtYmx1ZSk7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5IYW1idXJnZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleDogMCAwIDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5IYW1idXJnZXIgc3BhbiB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKTtcbiAgbWFyZ2luOiA0cHggMDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCA1MCU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzLCBtYXJnaW4gMC4xcztcbn1cbi5IYW1idXJnZXIuT3BlbiBzcGFuIHtcbiAgbWFyZ2luOiAxMnB4IDA7XG59XG4uSGFtYnVyZ2VyLk9wZW4gLkl0ZW0tMSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cbi5IYW1idXJnZXIuT3BlbiAuSXRlbS0yIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5IYW1idXJnZXIuT3BlbiAuSXRlbS0zIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbn0iLCJAaW1wb3J0IFwic3JjL3N0eWxlcy5zYXNzXCJcclxuICAgIFxyXG49ZmllbGQoKVxyXG4gICAgZm9udC13ZWlnaHQ6IDUwMFxyXG4gICAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZlxyXG4gICAgYm9yZGVyOiAjMDAwMDAwMjAgc29saWQgMXB4XHJcbiAgICB3aWR0aDogMTAwJVxyXG4gICAgcGFkZGluZzogMTBweFxyXG4gICAgZm9udC1zaXplOiAxNnB4XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHhcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMXNcclxuICAgICY6aG92ZXI6bm90KC5uZy10b3VjaGVkLm5nLWludmFsaWQpXHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwNDBcclxuICAgICY6Zm9jdXM6bm90KC5uZy10b3VjaGVkLm5nLWludmFsaWQpXHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saXRlLWJsdWUpXHJcbiAgICAmLm5nLXRvdWNoZWQubmctaW52YWxpZFxyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbGl0ZS1yZWQpXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAoIG1heC13aWR0aDogNDY5cHggKVxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweFxyXG4gICAgICAgIHBhZGRpbmc6IDVweFxyXG5cclxuPWJ1dHRvbigpXHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweClcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50XHJcbiAgICBmb250LXNpemU6IDE2cHhcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWZcclxuICAgIGZvbnQtd2VpZ2h0OiA1NTBcclxuICAgIHBhZGRpbmc6IDdweCAxNXB4XHJcbiAgICBjdXJzb3I6IHBvaW50ZXJcclxuICAgIGJvcmRlcjogdmFyKC0tYmx1ZSkgc29saWQgMnB4XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmXHJcbiAgICBjb2xvcjogdmFyKC0tYmx1ZSlcclxuICAgIG1hcmdpbjogMTBweFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwMHB4XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjFzXHJcbiAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpXHJcbiAgICAgICAgY29sb3I6ICNmZmZcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKVxyXG4gICAgJjpkaXNhYmxlZFxyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1saXRlLWJsdWUpXHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saXRlLWJsdWUpXHJcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZFxyXG5cclxuPW1hbmFnZS1idXR0b24oJHcsICRoKVxyXG4gICAgb3V0bGluZTogbm9uZVxyXG4gICAgYm9yZGVyOiBub25lXHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmXHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHhcclxuICAgIHdpZHRoOiAkd1xyXG4gICAgaGVpZ2h0OiAkaFxyXG4gICAgcGFkZGluZzogNXB4XHJcbiAgICAmOjpiZWZvcmVcclxuICAgICAgICBmb250LXNpemU6IDMwcHhcclxuICAgICY6aG92ZXJcclxuICAgICAgICBib3gtc2hhZG93OiAjMDAwMDAwNTAgMnB4IDAgOHB4IDBcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXJcclxuICAgICY6Zm9jdXNcclxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAjMDAwMDAwNTAgMnB4IDAgOHB4IDBcclxuXHJcbi5Gb3JtLUNvbnRhaW5lclxyXG4gICAgK2ZsZXgtY29udGFpbmVyKClcclxuICAgIHBvc2l0aW9uOiBmaXhlZFxyXG4gICAgdG9wOiAxMDBweFxyXG4gICAgbGVmdDogY2FsYyggNTAlIC0gMjUwcHggKVxyXG4gICAgd2lkdGg6IDUwMHB4XHJcbiAgICBoZWlnaHQ6IGF1dG9cclxuICAgIGJhY2tncm91bmQ6IHdoaXRlXHJcbiAgICBib3gtc2hhZG93OiAjMDAwMDAwMjUgMCA0cHggOHB4IDBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHhcclxuICAgIC5Gb3JtLUNvbnRhaW5lcl9fVGl0bGVcclxuICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4gICAgICAgIGZvbnQtc2l6ZTogMjZweFxyXG4gICAgICAgIG1hcmdpbjogMTBweFxyXG4gICAgLkZvcm0tQ29udGFpbmVyX19XYXJuaW5nXHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBcclxuICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgIGJvcmRlcjogdmFyKC0tcmVkKSBzb2xpZCAycHhcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmXHJcbiAgICAgICAgY29sb3I6IHZhcigtLXJlZClcclxuICAgICAgICBmb250LXNpemU6IDE4cHhcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHhcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4XHJcbiAgICAgICAgJi5va1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZ3JlZW4pXHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZ3JlZW4pXHJcbiAgICAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXJcclxuICAgICAgICArZmxleC1jb250YWluZXIoKVxyXG4gICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgcGFkZGluZzogMTBweFxyXG4gICAgICAgIC5GaWVsZFxyXG4gICAgICAgICAgICArZmxleC1jb250YWluZXIoKVxyXG4gICAgICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4XHJcbiAgICAgICAgICAgIGlucHV0LFxyXG4gICAgICAgICAgICBzZWxlY3QsXHJcbiAgICAgICAgICAgIHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICArZmllbGQoKVxyXG4gICAgICAgICAgICBzcGFuXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXJlZClcclxuICAgICAgICAgICAgdGV4dGFyZWFcclxuICAgICAgICAgICAgICAgIHJlc2l6ZTogdmVydGljYWxcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4XHJcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA4MDBweFxyXG4gICAgLkZvcm0tQ29udGFpbmVyX19MaW5rc1xyXG4gICAgICAgICtmbGV4LWNvbnRhaW5lcihyb3cpXHJcbiAgICAgICAgcGFkZGluZzogMTBweFxyXG4gICAgICAgIGJvcmRlci10b3A6ICMwMDAwMDAzMCBzb2xpZCAxcHhcclxuICAgICAgICBib3JkZXItYm90dG9tOiAjMDAwMDAwMzAgc29saWQgMXB4XHJcbiAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgICBmb250LXNpemU6IDE2cHhcclxuICAgICAgICBzcGFuXHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWZcclxuICAgICAgICBhXHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1NTBcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsdWUpXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMXNcclxuICAgICAgICAgICAgJjpob3ZlclxyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tbGl0ZS1ibHVlKVxyXG4gICAgLkZvcm0tQ29udGFpbmVyX19CdXR0b25cclxuICAgICAgICArYnV0dG9uKClcclxuXHJcblxyXG4uU2VhcmNoLUNvbnRhaW5lclxyXG4gICAgK2ZsZXgtY29udGFpbmVyKHJvdywgY2VudGVyLCBjZW50ZXIpXHJcbiAgICB3aWR0aDogMTAwJVxyXG4gICAgaGVpZ2h0OiA3MHB4XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHhcclxuICAgIGJvcmRlci1ib3R0b206ICMwMDAwMDA0MCBzb2xpZCAycHhcclxuICAgIC5RdWVyeVxyXG4gICAgICAgIGJvcmRlcjogbm9uZVxyXG4gICAgICAgIG91dGxpbmU6IG5vbmVcclxuICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgIGhlaWdodDogYXV0b1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweFxyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmXHJcbiAgICAgICAgcGFkZGluZzogMCAxNXB4XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlXHJcbiAgICBpXHJcbiAgICAgICAgZmxleDogMCAwIDMwcHhcclxuICAgICAgICBmb250LXNpemU6IDMwcHhcclxuICAgICAgICB3aWR0aDogMzBweFxyXG4gICAgICAgIGhlaWdodDogMzBweFxyXG4gICAgLlNlYXJjaFxyXG4gICAgICAgIGNvbnRlbnQ6IHVybChcIi9tZWRpYS9pY29ucy9zZWFyY2guc3ZnXCIpXHJcbiAgICAuU2V0dGluZ3NcclxuICAgICAgICAuU2V0dGluZ3MtSWNvbi1CdG5cclxuICAgICAgICAgICAgK21hbmFnZS1idXR0b24oNDBweCwgNDBweClcclxuICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICAgICAgY29udGVudDogdXJsKFwiL21lZGlhL2ljb25zL3NsaWRlci1zZXR0aW5ncy5zdmdcIilcclxuICAgICAgICAgICAgICAgIGZpbGw6IHZhcigtLWJsdWUpXHJcbiAgICAgICAgLkRldGFpbHNcclxuICAgICAgICAgICAgd2lkdGg6IDYwMHB4XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHhcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweFxyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAjMDAwMDAwNDAgMCAycHggNHB4IDBcclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKCBtYXgtd2lkdGg6IDY3NnB4IClcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KVxyXG4gICAgICAgICAgICAuVGl0bGVcclxuICAgICAgICAgICAgICAgICtmbGV4LWNvbnRhaW5lcihyb3csIGNlbnRlcilcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgICAgICAgLkl0ZW1cclxuICAgICAgICAgICAgICAgICtmbGV4LWNvbnRhaW5lcihyb3cpXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAoIG1heC13aWR0aDogNDY5cHggKVxyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweFxyXG4gICAgICAgICAgICAgICAgaW5wdXRcclxuICAgICAgICAgICAgICAgICAgICArZmllbGQoKVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA0cHggMTBweFxyXG4gICAgICAgICAgICAuQnV0dG9uXHJcbiAgICAgICAgICAgICAgICArYnV0dG9uKCkiXX0= */"] });


/***/ }),

/***/ 3414:
/*!****************************************!*\
  !*** ./src/app/head/head.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeadComponent": () => (/* binding */ HeadComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);




function HeadComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0412\u044B\u0439\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeadComponent {
    constructor(_store) {
        this._store = _store;
        this.submenuIsOpen = false;
        this._store.subscribe(data => {
            this.user = data.account.user;
        });
    }
    ngOnInit() {
    }
    openS() {
        this.submenuIsOpen = true;
    }
    closeS() {
        this.submenuIsOpen = false;
    }
}
HeadComponent.ɵfac = function HeadComponent_Factory(t) { return new (t || HeadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Store)); };
HeadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeadComponent, selectors: [["headerbar"]], decls: 14, vars: 3, consts: [[1, "Header"], [1, "Header__Title"], [1, "Header__Title__Text"], [1, "Header__Title__Text", 2, "font-size", "26px", "font-weight", "500"], [1, "Header__Auth-Container", 3, "mouseenter", "mouseleave"], [1, "Header__Auth-Container__User-Info"], [1, "Header__Auth-Container__User-Info__Ava"], ["alt", "", 3, "src"], [1, "Header__Auth-Container__User-Info__Username"], ["class", "Header__Auth-Container__Submenu", 4, "ngIf"], [1, "Header__Auth-Container__Submenu"], ["routerLink", "/profile", 1, "Header__Auth-Container__Submenu__Item", "LK"], ["routerLink", "/logout", 1, "Header__Auth-Container__Submenu__Item", "LogOut"]], template: function HeadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "IBLS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u0414\u0435\u0442\u0438 \u0434\u0435\u0442\u044F\u043C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function HeadComponent_Template_div_mouseenter_7_listener() { return ctx.openS(); })("mouseleave", function HeadComponent_Template_div_mouseleave_7_listener() { return ctx.closeS(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HeadComponent_div_13_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "/media/icons/profile.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submenuIsOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.Row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.Column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.Header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  background: #fff;\n  height: 90px;\n}\n\n@media screen and (max-width: 1470px) {\n  .Header[_ngcontent-%COMP%] {\n    justify-content: flex-end;\n  }\n}\n\n.Header[_ngcontent-%COMP%]   .Header__Title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n@media screen and (max-width: 1470px) {\n  .Header[_ngcontent-%COMP%]   .Header__Title[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.Header[_ngcontent-%COMP%]   .Header__Title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 50px;\n  background: var(--blue);\n  margin: 0 10px;\n}\n\n.Header[_ngcontent-%COMP%]   .Header__Title[_ngcontent-%COMP%]   .Header__Title__Text[_ngcontent-%COMP%] {\n  color: var(--blue);\n  font-size: 30px;\n  font-family: \"Roboto\", Arial, sans-serif;\n  line-height: 1.55;\n  font-weight: 700;\n  background-position: center center;\n  border-color: transparent;\n  border-style: solid;\n}\n\n.Header[_ngcontent-%COMP%]   .Header__Auth-Container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  margin-right: 10px;\n  height: 100%;\n}\n\n.Header[_ngcontent-%COMP%]   .Header__Auth-Container[_ngcontent-%COMP%]   .Header__Auth-Container__User-Info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  color: #000;\n}\n\n.Header[_ngcontent-%COMP%]   .Header__Auth-Container[_ngcontent-%COMP%]   .Header__Auth-Container__User-Info[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.Header[_ngcontent-%COMP%]   .Header__Auth-Container[_ngcontent-%COMP%]   .Header__Auth-Container__User-Info[_ngcontent-%COMP%]:hover   .Header__Auth-Container__User-Info__Username[_ngcontent-%COMP%] {\n  color: #6765FF;\n}\n\n.Header[_ngcontent-%COMP%]   .Header__Auth-Container[_ngcontent-%COMP%]   .Header__Auth-Container__User-Info[_ngcontent-%COMP%]   .Header__Auth-Container__User-Info__Ava[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 100%;\n  margin-right: 10px;\n}\n\n.Header[_ngcontent-%COMP%]   .Header__Auth-Container[_ngcontent-%COMP%]   .Header__Auth-Container__User-Info[_ngcontent-%COMP%]   .Header__Auth-Container__User-Info__Ava[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n}\n\n.Header[_ngcontent-%COMP%]   .Header__Auth-Container[_ngcontent-%COMP%]   .Header__Auth-Container__User-Info[_ngcontent-%COMP%]   .Header__Auth-Container__User-Info__Username[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #000000;\n}\n\n.Header[_ngcontent-%COMP%]   .Header__Auth-Container[_ngcontent-%COMP%]   .Header__Auth-Container__Submenu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 90px;\n  right: 0;\n  background: #fff;\n  box-shadow: #00000025 0 2px 4px 0;\n  border-radius: 10px;\n  padding: 10px 0;\n  width: 200px;\n  color: #000;\n}\n\n.Header[_ngcontent-%COMP%]   .Header__Auth-Container[_ngcontent-%COMP%]   .Header__Auth-Container__Submenu[_ngcontent-%COMP%]   .Header__Auth-Container__Submenu__Item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 0;\n  border-bottom: #000 solid 1px;\n  width: 100%;\n  cursor: pointer;\n  font-size: 16px;\n}\n\n.Header[_ngcontent-%COMP%]   .Header__Auth-Container[_ngcontent-%COMP%]   .Header__Auth-Container__Submenu[_ngcontent-%COMP%]   .Header__Auth-Container__Submenu__Item.LK[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.Header[_ngcontent-%COMP%]   .Header__Auth-Container[_ngcontent-%COMP%]   .Header__Auth-Container__Submenu[_ngcontent-%COMP%]   .Header__Auth-Container__Submenu__Item.LK[_ngcontent-%COMP%]::before {\n  height: 24px;\n  width: 24px;\n  font-size: 24px;\n  margin-right: 5px;\n  content: url(\"/media/icons/user-circle.svg\");\n}\n\n.Header[_ngcontent-%COMP%]   .Header__Auth-Container[_ngcontent-%COMP%]   .Header__Auth-Container__Submenu[_ngcontent-%COMP%]   .Header__Auth-Container__Submenu__Item.LogOut[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.Header[_ngcontent-%COMP%]   .Header__Auth-Container[_ngcontent-%COMP%]   .Header__Auth-Container__Submenu[_ngcontent-%COMP%]   .Header__Auth-Container__Submenu__Item.LogOut[_ngcontent-%COMP%]::before {\n  height: 24px;\n  width: 24px;\n  font-size: 24px;\n  margin-right: 5px;\n  content: url(\"/media/icons/sign-out-alt.svg\");\n}\n\n.Header[_ngcontent-%COMP%]   .Header__Auth-Container[_ngcontent-%COMP%]   .Header__Auth-Container__Submenu[_ngcontent-%COMP%]   .Header__Auth-Container__Submenu__Item[_ngcontent-%COMP%]:hover {\n  color: var(--blue);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcc3R5bGVzLnNhc3MiLCJoZWFkLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNDSjs7QURTQTtFQUxJLGFBQUE7RUFDQSxtQkFLZ0I7RUFKaEIsMkJBSCtCO0VBSS9CLHVCQUpnRDtBQ0lwRDs7QURLQTtFQVJJLGFBQUE7RUFDQSxzQkFGa0I7RUFHbEIsMkJBSCtCO0VBSS9CLHVCQUpnRDtBQ1dwRDs7QUFFQTtFRFpJLGFBQUE7RUFDQSxtQkNZZ0I7RURYaEIsOEJDV3FCO0VEVnJCLG1CQ1VvQztFQUNwQyxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBSUo7O0FBSEk7RUFMSjtJQU1RLHlCQUFBO0VBTU47QUFDRjs7QUFOSTtFRG5CQSxhQUFBO0VBQ0EsbUJDbUJvQjtFRGxCcEIsMkJDa0J5QjtFRGpCekIsbUJDaUJxQztBQVd6Qzs7QUFWUTtFQUZKO0lBR1EsYUFBQTtFQWFWO0FBQ0Y7O0FBYlE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQWVaOztBQWRRO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBZ0JaOztBQWZJO0VEckNBLGFBQUE7RUFDQSxtQkNxQ29CO0VEcENwQiwyQkNvQ3lCO0VEbkN6QixtQkNtQ3FDO0VBQ2pDLGtCQUFBO0VBQ0EsWUFBQTtBQW9CUjs7QUFuQlE7RUR6Q0osYUFBQTtFQUNBLG1CQ3lDd0I7RUR4Q3hCLDJCQ3dDNkI7RUR2QzdCLG1CQ3VDeUM7RUFDakMsV0FBQTtBQXdCWjs7QUF2Qlk7RUFDSSxlQUFBO0FBeUJoQjs7QUF4QmdCO0VBQ0ksY0FBQTtBQTBCcEI7O0FBekJZO0VEaERSLGFBQUE7RUFDQSxtQkNMZ0I7RURNaEIsdUJDTnFCO0VET3JCLG1CQ1A2QjtFQUM3QixXQW9Ec0I7RUFuRHRCLFlBbURzQjtFQWxEdEIsbUJBQUE7RUFDQSxrQkFBQTtBQW1GSjs7QUFsRkk7RUFDSSxXQStDa0I7RUE5Q2xCLFlBOENrQjtBQXNDMUI7O0FBckNZO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUF1Q2hCOztBQXRDUTtFRHJESixhQUFBO0VBQ0Esc0JDcUR3QjtFRHBEeEIsdUJDb0RnQztFRG5EaEMsbUJDbUR3QztFQUNoQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBMkNaOztBQTFDWTtFRGhFUixhQUFBO0VBQ0EsbUJDZ0U0QjtFRC9ENUIsdUJDK0RpQztFRDlEakMsbUJDOER5QztFQUM3QixlQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUErQ2hCOztBQTlDZ0I7RUFDSSxXQUFBO0FBZ0RwQjs7QUEvQ29CO0VBbkVoQixZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRDQUFBO0FBcUhKOztBQXBEZ0I7RUFDSSxXQUFBO0FBc0RwQjs7QUFyRG9CO0VBdkVoQixZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDZDQUFBO0FBK0hKOztBQTFEZ0I7RUFDSSxrQkFBQTtBQTREcEIiLCJmaWxlIjoiaGVhZC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHlcbiAgICBtYXJnaW46IDBcbiAgICBwYWRkaW5nOiAwXG5cbiRuYXZfdzozMDBweFxuICAgIFxuPWZsZXgtY29udGFpbmVyKCRkaXI6IGNvbHVtbiwgJGpjOiBmbGV4LXN0YXJ0LCAkYWk6IGZsZXgtc3RhcnQpXG4gICAgZGlzcGxheTogZmxleFxuICAgIGZsZXgtZGlyZWN0aW9uOiAkZGlyXG4gICAganVzdGlmeS1jb250ZW50OiAkamNcbiAgICBhbGlnbi1pdGVtczogJGFpIFxuXG4uUm93XG4gICAgK2ZsZXgtY29udGFpbmVyKHJvdylcblxuLkNvbHVtblxuICAgICtmbGV4LWNvbnRhaW5lcigpXG4iLCJodG1sLCBib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uUm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLkNvbHVtbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5IZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBoZWlnaHQ6IDkwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDcwcHgpIHtcbiAgLkhlYWRlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxufVxuLkhlYWRlciAuSGVhZGVyX19UaXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NzBweCkge1xuICAuSGVhZGVyIC5IZWFkZXJfX1RpdGxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uSGVhZGVyIC5IZWFkZXJfX1RpdGxlIHNwYW4ge1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJsdWUpO1xuICBtYXJnaW46IDAgMTBweDtcbn1cbi5IZWFkZXIgLkhlYWRlcl9fVGl0bGUgLkhlYWRlcl9fVGl0bGVfX1RleHQge1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS41NTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cbi5IZWFkZXIgLkhlYWRlcl9fQXV0aC1Db250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLkhlYWRlciAuSGVhZGVyX19BdXRoLUNvbnRhaW5lciAuSGVhZGVyX19BdXRoLUNvbnRhaW5lcl9fVXNlci1JbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzAwMDtcbn1cbi5IZWFkZXIgLkhlYWRlcl9fQXV0aC1Db250YWluZXIgLkhlYWRlcl9fQXV0aC1Db250YWluZXJfX1VzZXItSW5mbzpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5IZWFkZXIgLkhlYWRlcl9fQXV0aC1Db250YWluZXIgLkhlYWRlcl9fQXV0aC1Db250YWluZXJfX1VzZXItSW5mbzpob3ZlciAuSGVhZGVyX19BdXRoLUNvbnRhaW5lcl9fVXNlci1JbmZvX19Vc2VybmFtZSB7XG4gIGNvbG9yOiAjNjc2NUZGO1xufVxuLkhlYWRlciAuSGVhZGVyX19BdXRoLUNvbnRhaW5lciAuSGVhZGVyX19BdXRoLUNvbnRhaW5lcl9fVXNlci1JbmZvIC5IZWFkZXJfX0F1dGgtQ29udGFpbmVyX19Vc2VyLUluZm9fX0F2YSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uSGVhZGVyIC5IZWFkZXJfX0F1dGgtQ29udGFpbmVyIC5IZWFkZXJfX0F1dGgtQ29udGFpbmVyX19Vc2VyLUluZm8gLkhlYWRlcl9fQXV0aC1Db250YWluZXJfX1VzZXItSW5mb19fQXZhIGltZyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG4uSGVhZGVyIC5IZWFkZXJfX0F1dGgtQ29udGFpbmVyIC5IZWFkZXJfX0F1dGgtQ29udGFpbmVyX19Vc2VyLUluZm8gLkhlYWRlcl9fQXV0aC1Db250YWluZXJfX1VzZXItSW5mb19fVXNlcm5hbWUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLkhlYWRlciAuSGVhZGVyX19BdXRoLUNvbnRhaW5lciAuSGVhZGVyX19BdXRoLUNvbnRhaW5lcl9fU3VibWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOTBweDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6ICMwMDAwMDAyNSAwIDJweCA0cHggMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTBweCAwO1xuICB3aWR0aDogMjAwcHg7XG4gIGNvbG9yOiAjMDAwO1xufVxuLkhlYWRlciAuSGVhZGVyX19BdXRoLUNvbnRhaW5lciAuSGVhZGVyX19BdXRoLUNvbnRhaW5lcl9fU3VibWVudSAuSGVhZGVyX19BdXRoLUNvbnRhaW5lcl9fU3VibWVudV9fSXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGJvcmRlci1ib3R0b206ICMwMDAgc29saWQgMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uSGVhZGVyIC5IZWFkZXJfX0F1dGgtQ29udGFpbmVyIC5IZWFkZXJfX0F1dGgtQ29udGFpbmVyX19TdWJtZW51IC5IZWFkZXJfX0F1dGgtQ29udGFpbmVyX19TdWJtZW51X19JdGVtLkxLIHtcbiAgY29sb3I6ICMwMDA7XG59XG4uSGVhZGVyIC5IZWFkZXJfX0F1dGgtQ29udGFpbmVyIC5IZWFkZXJfX0F1dGgtQ29udGFpbmVyX19TdWJtZW51IC5IZWFkZXJfX0F1dGgtQ29udGFpbmVyX19TdWJtZW51X19JdGVtLkxLOjpiZWZvcmUge1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBjb250ZW50OiB1cmwoXCIvbWVkaWEvaWNvbnMvdXNlci1jaXJjbGUuc3ZnXCIpO1xufVxuLkhlYWRlciAuSGVhZGVyX19BdXRoLUNvbnRhaW5lciAuSGVhZGVyX19BdXRoLUNvbnRhaW5lcl9fU3VibWVudSAuSGVhZGVyX19BdXRoLUNvbnRhaW5lcl9fU3VibWVudV9fSXRlbS5Mb2dPdXQge1xuICBjb2xvcjogIzAwMDtcbn1cbi5IZWFkZXIgLkhlYWRlcl9fQXV0aC1Db250YWluZXIgLkhlYWRlcl9fQXV0aC1Db250YWluZXJfX1N1Ym1lbnUgLkhlYWRlcl9fQXV0aC1Db250YWluZXJfX1N1Ym1lbnVfX0l0ZW0uTG9nT3V0OjpiZWZvcmUge1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBjb250ZW50OiB1cmwoXCIvbWVkaWEvaWNvbnMvc2lnbi1vdXQtYWx0LnN2Z1wiKTtcbn1cbi5IZWFkZXIgLkhlYWRlcl9fQXV0aC1Db250YWluZXIgLkhlYWRlcl9fQXV0aC1Db250YWluZXJfX1N1Ym1lbnUgLkhlYWRlcl9fQXV0aC1Db250YWluZXJfX1N1Ym1lbnVfX0l0ZW06aG92ZXIge1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG59Il19 */"] });


/***/ }),

/***/ 4018:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);



class HomeComponent {
    constructor(_router) {
        this._router = _router;
        _router.events.subscribe(e => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.NavigationEnd) {
                let elID = e.url.split("#")[1];
                let el = document.getElementById(elID);
                if (el) {
                    el.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__.Router)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["home"]], decls: 27, vars: 3, consts: [[1, "Content"], [1, "About", 3, "id"], [1, "Title"], [1, "About__Content"], [1, "Content__Text"], [1, "Content__Images"], [1, "Pluses", 3, "id"], [1, "Pluses__Content"], [1, "Pluses__Content__List"], [1, "Item"], [1, "Instruction", 3, "id"], [1, "Instruction__Content"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u041E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " \u0422\u0435\u043A\u0441\u0442... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u041F\u043B\u044E\u0441\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u0422\u0435\u043A\u0441\u0442 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\u0422\u0435\u043A\u0441\u0442 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\u0422\u0435\u043A\u0441\u0442 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "\u0422\u0435\u043A\u0441\u0442 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " \u0418\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " \u0422\u0435\u043A\u0441\u0442... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "Pluses");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "Instruction");
    } }, styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.Row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.Column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.About[_ngcontent-%COMP%], .Pluses[_ngcontent-%COMP%], .Instruction[_ngcontent-%COMP%] {\n  height: auto;\n  background: #fff;\n  border-radius: 10px;\n  margin-top: 20px;\n  width: 80%;\n  padding: 10px;\n}\n\n.Content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  height: 100%;\n  background: var(--bg-lite-blue);\n}\n\n.Content[_ngcontent-%COMP%]   .About[_ngcontent-%COMP%]   .About__Content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n  height: 100%;\n}\n\n.Content[_ngcontent-%COMP%]   .About[_ngcontent-%COMP%]   .About__Content[_ngcontent-%COMP%]   .Content__Images[_ngcontent-%COMP%] {\n  width: 400px;\n}\n\n.Content[_ngcontent-%COMP%]   .Pluses[_ngcontent-%COMP%]   .Pluses__Content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0;\n}\n\n.Content[_ngcontent-%COMP%]   .Pluses[_ngcontent-%COMP%]   .Pluses__Content[_ngcontent-%COMP%]   .Pluses__Content__List[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  width: 100%;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  flex-wrap: wrap;\n}\n\n@media screen and (max-width: 820px) {\n  .Content[_ngcontent-%COMP%]   .Pluses[_ngcontent-%COMP%]   .Pluses__Content[_ngcontent-%COMP%]   .Pluses__Content__List[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n\n.Content[_ngcontent-%COMP%]   .Pluses[_ngcontent-%COMP%]   .Pluses__Content[_ngcontent-%COMP%]   .Pluses__Content__List[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin: 20px;\n  width: 200px;\n}\n\n.Content[_ngcontent-%COMP%]   .Pluses[_ngcontent-%COMP%]   .Pluses__Content[_ngcontent-%COMP%]   .Pluses__Content__List[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]::before {\n  content: url(\"/media/icons/pluse.png\");\n  margin-right: 10px;\n}\n\n@media screen and (max-width: 820px) {\n  .Content[_ngcontent-%COMP%]   .Pluses[_ngcontent-%COMP%]   .Pluses__Content[_ngcontent-%COMP%]   .Pluses__Content__List[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.Content[_ngcontent-%COMP%]   .Instruction__Content[_ngcontent-%COMP%], .Content[_ngcontent-%COMP%]   .Content__Text[_ngcontent-%COMP%], .Content[_ngcontent-%COMP%]   .Content__Images[_ngcontent-%COMP%], .Content[_ngcontent-%COMP%]   .Pluses__Content[_ngcontent-%COMP%] {\n  display: inline;\n  width: 100%;\n  height: 100%;\n  padding: 10px;\n  word-wrap: break-word;\n  white-space: normal;\n}\n\n.Content[_ngcontent-%COMP%]   .Title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  font-size: 26px;\n  margin: 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcc3R5bGVzLnNhc3MiLCJob21lLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNDSjs7QURTQTtFQUxJLGFBQUE7RUFDQSxtQkFLZ0I7RUFKaEIsMkJBSCtCO0VBSS9CLHVCQUpnRDtBQ0lwRDs7QURLQTtFQVJJLGFBQUE7RUFDQSxzQkFGa0I7RUFHbEIsMkJBSCtCO0VBSS9CLHVCQUpnRDtBQ1dwRDs7QUFQQTs7O0VBR0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FBVUo7O0FBUEE7RURkSSxhQUFBO0VBQ0Esc0JDY2dCO0VEYmhCLDJCQ2F3QjtFRFp4QixtQkNZb0M7RUFDcEMsWUFBQTtFQUNBLCtCQUFBO0FBYUo7O0FBWFE7RURuQkosYUFBQTtFQUNBLG1CQ21Cd0I7RURsQnhCLDJCQUgrQjtFQUkvQix1QkFKZ0Q7RUNzQnhDLFdBQUE7RUFDQSxZQUFBO0FBZ0JaOztBQWZZO0VBQ0ksWUFBQTtBQWlCaEI7O0FBZlE7RUQxQkosYUFBQTtFQUNBLHNCQzBCd0I7RUR6QnhCLHVCQ3lCZ0M7RUR4QmhDLG1CQ3dCd0M7RUFDaEMsVUFBQTtBQW9CWjs7QUFuQlk7RUQ3QlIsYUFBQTtFQUNBLG1CQzZCNEI7RUQ1QjVCLHVCQzRCaUM7RUQzQmpDLHVCQUpnRDtFQ2dDcEMsV0FBQTtFQUdBLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBc0JoQjs7QUEzQmdCO0VBSEo7SUFJUSxzQkFBQTtFQThCbEI7QUFDRjs7QUExQmdCO0VEdENaLGFBQUE7RUFDQSxtQkNzQ2dDO0VEckNoQyx1QkNxQ3FDO0VEcENyQyxtQkNvQzZDO0VBQzdCLFlBQUE7RUFDQSxZQUFBO0FBK0JwQjs7QUE5Qm9CO0VBQ0ksc0NBQUE7RUFDQSxrQkFBQTtBQWdDeEI7O0FBL0JvQjtFQVBKO0lBUVEsV0FBQTtFQWtDdEI7QUFDRjs7QUFsQ0k7Ozs7RUFJSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQW9DUjs7QUFuQ0k7RUR6REEsYUFBQTtFQUNBLHNCQ0hnQjtFREloQix1QkNKd0I7RURLeEIsbUJDTGdDO0VBQ2hDLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQW9HSiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keVxuICAgIG1hcmdpbjogMFxuICAgIHBhZGRpbmc6IDBcblxuJG5hdl93OjMwMHB4XG4gICAgXG49ZmxleC1jb250YWluZXIoJGRpcjogY29sdW1uLCAkamM6IGZsZXgtc3RhcnQsICRhaTogZmxleC1zdGFydClcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAgZmxleC1kaXJlY3Rpb246ICRkaXJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICRqY1xuICAgIGFsaWduLWl0ZW1zOiAkYWkgXG5cbi5Sb3dcbiAgICArZmxleC1jb250YWluZXIocm93KVxuXG4uQ29sdW1uXG4gICAgK2ZsZXgtY29udGFpbmVyKClcbiIsImh0bWwsIGJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5Sb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uQ29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLkFib3V0LFxuLlBsdXNlcyxcbi5JbnN0cnVjdGlvbiB7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLkNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctbGl0ZS1ibHVlKTtcbn1cbi5Db250ZW50IC5BYm91dCAuQWJvdXRfX0NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLkNvbnRlbnQgLkFib3V0IC5BYm91dF9fQ29udGVudCAuQ29udGVudF9fSW1hZ2VzIHtcbiAgd2lkdGg6IDQwMHB4O1xufVxuLkNvbnRlbnQgLlBsdXNlcyAuUGx1c2VzX19Db250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG59XG4uQ29udGVudCAuUGx1c2VzIC5QbHVzZXNfX0NvbnRlbnQgLlBsdXNlc19fQ29udGVudF9fTGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjBweCkge1xuICAuQ29udGVudCAuUGx1c2VzIC5QbHVzZXNfX0NvbnRlbnQgLlBsdXNlc19fQ29udGVudF9fTGlzdCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuLkNvbnRlbnQgLlBsdXNlcyAuUGx1c2VzX19Db250ZW50IC5QbHVzZXNfX0NvbnRlbnRfX0xpc3QgLkl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAyMHB4O1xuICB3aWR0aDogMjAwcHg7XG59XG4uQ29udGVudCAuUGx1c2VzIC5QbHVzZXNfX0NvbnRlbnQgLlBsdXNlc19fQ29udGVudF9fTGlzdCAuSXRlbTo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKFwiL21lZGlhL2ljb25zL3BsdXNlLnBuZ1wiKTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODIwcHgpIHtcbiAgLkNvbnRlbnQgLlBsdXNlcyAuUGx1c2VzX19Db250ZW50IC5QbHVzZXNfX0NvbnRlbnRfX0xpc3QgLkl0ZW0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4uQ29udGVudCAuSW5zdHJ1Y3Rpb25fX0NvbnRlbnQsXG4uQ29udGVudCAuQ29udGVudF9fVGV4dCxcbi5Db250ZW50IC5Db250ZW50X19JbWFnZXMsXG4uQ29udGVudCAuUGx1c2VzX19Db250ZW50IHtcbiAgZGlzcGxheTogaW5saW5lO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG4uQ29udGVudCAuVGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgbWFyZ2luOiAxMHB4IDA7XG59Il19 */"] });


/***/ }),

/***/ 1914:
/*!********************************************************!*\
  !*** ./src/app/image-slider/image-slider.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageSliderComponent": () => (/* binding */ ImageSliderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);


class ImageSliderComponent {
    constructor() {
        this.urls = [];
        this.id = 0;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
        window.addEventListener("keydown", e => {
            if (e.key === "Escape")
                this.closeSlider();
            if (e.key === "ArrowRight")
                this.next();
            if (e.key === "ArrowLeft")
                this.previous();
        });
    }
    next() {
        this.urls.length - 1 > this.id ? this.id += 1 : this.id = 0;
    }
    previous() {
        0 < this.id ? this.id -= 1 : this.id = this.urls.length - 1;
    }
    closeSlider() {
        this.close.emit();
    }
}
ImageSliderComponent.ɵfac = function ImageSliderComponent_Factory(t) { return new (t || ImageSliderComponent)(); };
ImageSliderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageSliderComponent, selectors: [["image-slider"]], inputs: { urls: "urls", id: "id" }, outputs: { close: "close" }, decls: 6, vars: 2, consts: [[1, "Blackout-Container"], [1, "Image-Slider"], [1, "Arrow-Left", 3, "click"], [1, "Column"], [1, "Close", 3, "click"], [1, "Arrow-Right", 3, "click"]], template: function ImageSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageSliderComponent_Template_div_click_2_listener() { return ctx.previous(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageSliderComponent_Template_div_click_4_listener() { return ctx.closeSlider(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageSliderComponent_Template_div_click_5_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx.urls[ctx.id] + ")");
    } }, styles: ["@charset \"UTF-8\";\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.Row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n.Column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n.Image-Slider[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n  width: 100%;\n  height: 100vh;\n  background-repeat: no-repeat;\n  background-size: 1024px auto;\n  background-position: center;\n  background-color: #251db3b2;\n  z-index: 2000;\n}\n.Image-Slider[_ngcontent-%COMP%]   .Column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  height: 100%;\n}\n.Image-Slider[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:not(.Column) {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  width: auto;\n  height: 100%;\n  color: #fff;\n  font-size: 70px;\n  cursor: pointer;\n}\n.Image-Slider[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:not(.Column):hover {\n  background-color: #00000030;\n}\n.Image-Slider[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:not(.Column).Arrow-Left {\n  padding: 10px;\n}\n.Image-Slider[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:not(.Column).Arrow-Left::before {\n  content: \"\u21D0\";\n}\n.Image-Slider[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:not(.Column).Close {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 90px;\n  height: 90px;\n  flex: 0 0 90px;\n  padding: 10px;\n  font-size: 55px;\n}\n.Image-Slider[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:not(.Column).Close::before {\n  content: \"\u2718\";\n}\n.Image-Slider[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:not(.Column).Arrow-Right {\n  width: 100%;\n  padding: 10px;\n}\n.Image-Slider[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:not(.Column).Arrow-Right::before {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  height: 100%;\n  content: \"\u21D2\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLXNsaWRlci5jb21wb25lbnQuc2FzcyIsIi4uXFwuLlxcc3R5bGVzLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QURFSjtBQ1FBO0VBTEksYUFBQTtFQUNBLG1CQUtnQjtFQUpoQiwyQkFIK0I7RUFJL0IsdUJBSmdEO0FES3BEO0FDSUE7RUFSSSxhQUFBO0VBQ0Esc0JBRmtCO0VBR2xCLDJCQUgrQjtFQUkvQix1QkFKZ0Q7QURZcEQ7QUFqQkE7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUNHQSxhQUFBO0VBQ0EsbUJESGdCO0VDSWhCLDhCREpxQjtFQ0tyQix1QkFKZ0Q7RURBaEQsV0FBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7QUF1Qko7QUF0Qkk7RUNOQSxhQUFBO0VBQ0Esc0JETW9CO0VDTHBCLHVCREs0QjtFQ0o1Qix1QkFKZ0Q7RURTNUMsWUFBQTtBQTJCUjtBQTFCSTtFQ1RBLGFBQUE7RUFDQSxzQkRTb0I7RUNScEIsdUJEUTRCO0VDUDVCLHVCQUpnRDtFRFk1QyxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQStCUjtBQTlCUTtFQUNJLDJCQUFBO0FBZ0NaO0FBL0JRO0VBQ0ksYUFBQTtBQWlDWjtBQWhDWTtFQUNJLFlBQUE7QUFrQ2hCO0FBakNRO0VDdEJKLGFBQUE7RUFDQSxtQkRzQndCO0VDckJ4Qix1QkRxQjZCO0VDcEI3QixtQkRvQnFDO0VBQzdCLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBc0NaO0FBckNZO0VBQ0ksWUFBQTtBQXVDaEI7QUF0Q1E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQXdDWjtBQXZDWTtFQ2xDUixhQUFBO0VBQ0Esc0JEa0M0QjtFQ2pDNUIsdUJEaUNvQztFQ2hDcEMsdUJBSmdEO0VEcUNwQyxZQUFBO0VBQ0EsWUFBQTtBQTRDaEIiLCJmaWxlIjoiaW1hZ2Utc2xpZGVyLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuaHRtbCwgYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLlJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5Db2x1bW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uSW1hZ2UtU2xpZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMjRweCBhdXRvO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTFkYjNiMjtcbiAgei1pbmRleDogMjAwMDtcbn1cbi5JbWFnZS1TbGlkZXIgLkNvbHVtbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLkltYWdlLVNsaWRlciBkaXY6bm90KC5Db2x1bW4pIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiA3MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uSW1hZ2UtU2xpZGVyIGRpdjpub3QoLkNvbHVtbik6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMzA7XG59XG4uSW1hZ2UtU2xpZGVyIGRpdjpub3QoLkNvbHVtbikuQXJyb3ctTGVmdCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uSW1hZ2UtU2xpZGVyIGRpdjpub3QoLkNvbHVtbikuQXJyb3ctTGVmdDo6YmVmb3JlIHtcbiAgY29udGVudDogXCLih5BcIjtcbn1cbi5JbWFnZS1TbGlkZXIgZGl2Om5vdCguQ29sdW1uKS5DbG9zZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBmbGV4OiAwIDAgOTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiA1NXB4O1xufVxuLkltYWdlLVNsaWRlciBkaXY6bm90KC5Db2x1bW4pLkNsb3NlOjpiZWZvcmUge1xuICBjb250ZW50OiBcIuKcmFwiO1xufVxuLkltYWdlLVNsaWRlciBkaXY6bm90KC5Db2x1bW4pLkFycm93LVJpZ2h0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uSW1hZ2UtU2xpZGVyIGRpdjpub3QoLkNvbHVtbikuQXJyb3ctUmlnaHQ6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb250ZW50OiBcIuKHklwiO1xufSIsImh0bWwsIGJvZHlcbiAgICBtYXJnaW46IDBcbiAgICBwYWRkaW5nOiAwXG5cbiRuYXZfdzozMDBweFxuICAgIFxuPWZsZXgtY29udGFpbmVyKCRkaXI6IGNvbHVtbiwgJGpjOiBmbGV4LXN0YXJ0LCAkYWk6IGZsZXgtc3RhcnQpXG4gICAgZGlzcGxheTogZmxleFxuICAgIGZsZXgtZGlyZWN0aW9uOiAkZGlyXG4gICAganVzdGlmeS1jb250ZW50OiAkamNcbiAgICBhbGlnbi1pdGVtczogJGFpIFxuXG4uUm93XG4gICAgK2ZsZXgtY29udGFpbmVyKHJvdylcblxuLkNvbHVtblxuICAgICtmbGV4LWNvbnRhaW5lcigpXG4iXX0= */"] });


/***/ }),

/***/ 5639:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1384);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/account.service */ 5921);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _account_nav_account_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../account-nav/account-nav.component */ 9803);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8267);








function LoginComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.warning);
} }
function LoginComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D \u043D\u0438\u043A. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D \u043F\u0430\u0440\u043E\u043B\u044C. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(_account, _router, _store) {
        this._account = _account;
        this._router = _router;
        this._store = _store;
        this.loginFormGroup = {
            username: "",
            password: ""
        };
        this.isLoading = false;
    }
    ngOnInit() {
    }
    login(form) {
        this.isLoading = true;
        this._account.login(form.value).subscribe(data => {
            this.isLoading = false;
            if (data.data.user) {
                this._router.navigateByUrl("home");
            }
            else {
                this.warning = data.message;
                (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.interval)(10000).subscribe(() => {
                    this.warning = undefined;
                });
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["login"]], decls: 23, vars: 12, consts: [["src", "/media/logo.png", "alt", ""], [1, "Form-Container", "Login-Form", 3, "ngSubmit"], ["loginForm", "ngForm"], [2, "width", "100%"], [1, "Form-Container__Title"], ["class", "Form-Container__Warning", 4, "ngIf"], [1, "Form-Container__Fields-Container"], [1, "Field"], ["required", "", 3, "name", "placeholder", "ngModel", "ngModelChange"], ["username", "ngModel"], [4, "ngIf"], ["required", "", 3, "name", "placeholder", "type", "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "Form-Container__Links"], ["routerLink", "/reset-password"], [1, "Form-Container__Button", 3, "disabled"], [1, "Form-Container__Warning"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return ctx.login(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "account-nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, LoginComponent_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_9_listener($event) { return ctx.loginFormGroup.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, LoginComponent_span_11_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) { return ctx.loginFormGroup.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, LoginComponent_span_15_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.warning);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", "username")("placeholder", "\u041D\u0438\u043A")("ngModel", ctx.loginFormGroup.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r2.invalid && _r2.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", "password")("placeholder", "\u041F\u0430\u0440\u043E\u043B\u044C")("type", "password")("ngModel", ctx.loginFormGroup.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r4.invalid && _r4.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.isLoading ? "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..." : "\u0412\u043E\u0439\u0442\u0438");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _account_nav_account_nav_component__WEBPACK_IMPORTED_MODULE_1__.AccountNavComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.Row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.Column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.Form-Container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  position: fixed;\n  top: 100px;\n  left: calc(50% - 250px);\n  width: 500px;\n  height: auto;\n  background: white;\n  box-shadow: #00000025 0 4px 8px 0;\n  border-radius: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Title[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  font-size: 26px;\n  margin: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Warning[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  width: 100%;\n  border: var(--red) solid 2px;\n  background: #fff;\n  color: var(--red);\n  font-size: 18px;\n  padding: 10px 20px;\n  border-radius: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Warning.ok[_ngcontent-%COMP%] {\n  color: var(--green);\n  border-color: var(--green);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n  padding: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n  margin-top: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-family: \"Rubik\", sans-serif;\n  border: #00000020 solid 1px;\n  width: 100%;\n  padding: 10px;\n  font-size: 16px;\n  border-radius: 5px;\n  transition: all 0.1s;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover:not(.ng-touched.ng-invalid), .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover:not(.ng-touched.ng-invalid), .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:hover:not(.ng-touched.ng-invalid) {\n  border-color: #00000040;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus:not(.ng-touched.ng-invalid), .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus:not(.ng-touched.ng-invalid), .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus:not(.ng-touched.ng-invalid) {\n  border-color: var(--lite-blue);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input.ng-touched.ng-invalid[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select.ng-touched.ng-invalid[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border-color: var(--lite-red);\n}\n\n@media screen and (max-width: 469px) {\n  .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 5px;\n  }\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 100%;\n  color: var(--red);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 100px;\n  max-height: 800px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 10px;\n  border-top: #00000030 solid 1px;\n  border-bottom: #00000030 solid 1px;\n  width: 100%;\n  font-size: 16px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Links[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Rubik\", sans-serif;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 550;\n  color: var(--blue);\n  transition: all 0.1s;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: var(--lite-blue);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Button[_ngcontent-%COMP%] {\n  width: calc(100% - 20px);\n  background: transparent;\n  font-size: 16px;\n  font-family: \"Rubik\", sans-serif;\n  font-weight: 550;\n  padding: 7px 15px;\n  cursor: pointer;\n  border: var(--blue) solid 2px;\n  background: #fff;\n  color: var(--blue);\n  margin: 10px;\n  border-radius: 1000px;\n  transition: all 0.1s;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: #fff;\n  background: var(--blue);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Button[_ngcontent-%COMP%]:disabled {\n  color: var(--lite-blue);\n  border-color: var(--lite-blue);\n  cursor: not-allowed;\n}\n\n.Search-Container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 70px;\n  padding: 10px 15px;\n  border-bottom: #00000040 solid 2px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Query[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  width: 100%;\n  height: auto;\n  font-size: 18px;\n  font-family: Arial, Helvetica, sans-serif;\n  padding: 0 15px;\n  height: 100%;\n}\n\n.Search-Container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  flex: 0 0 30px;\n  font-size: 30px;\n  width: 30px;\n  height: 30px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Search[_ngcontent-%COMP%] {\n  content: url(\"/media/icons/search.svg\");\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  background: #fff;\n  border-radius: 5px;\n  width: 40px;\n  height: 40px;\n  padding: 5px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%]::before {\n  font-size: 30px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%]:hover {\n  box-shadow: #00000050 2px 0 8px 0;\n  cursor: pointer;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%]:focus {\n  box-shadow: inset #00000050 2px 0 8px 0;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  content: url(\"/media/icons/slider-settings.svg\");\n  fill: var(--blue);\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%] {\n  width: 600px;\n  position: absolute;\n  background: #fff;\n  border-radius: 10px;\n  padding: 10px;\n  box-shadow: #00000040 0 2px 4px 0;\n}\n\n@media screen and (max-width: 676px) {\n  .Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%] {\n    width: calc(100% - 10px);\n  }\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 10px 0;\n  width: 100%;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  margin: 10px;\n}\n\n@media screen and (max-width: 469px) {\n  .Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-family: \"Rubik\", sans-serif;\n  border: #00000020 solid 1px;\n  width: 100%;\n  padding: 10px;\n  font-size: 16px;\n  border-radius: 5px;\n  transition: all 0.1s;\n  width: 100%;\n  margin: 4px 10px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover:not(.ng-touched.ng-invalid) {\n  border-color: #00000040;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus:not(.ng-touched.ng-invalid) {\n  border-color: var(--lite-blue);\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border-color: var(--lite-red);\n}\n\n@media screen and (max-width: 469px) {\n  .Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 5px;\n  }\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Button[_ngcontent-%COMP%] {\n  width: calc(100% - 20px);\n  background: transparent;\n  font-size: 16px;\n  font-family: \"Rubik\", sans-serif;\n  font-weight: 550;\n  padding: 7px 15px;\n  cursor: pointer;\n  border: var(--blue) solid 2px;\n  background: #fff;\n  color: var(--blue);\n  margin: 10px;\n  border-radius: 1000px;\n  transition: all 0.1s;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: #fff;\n  background: var(--blue);\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Button[_ngcontent-%COMP%]:disabled {\n  color: var(--lite-blue);\n  border-color: var(--lite-blue);\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcc3R5bGVzLnNhc3MiLCJsb2dpbi5jb21wb25lbnQuc2FzcyIsIi4uXFwuLlxcc3R5bGVzLmZvcm1zLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQ0NKOztBRFNBO0VBTEksYUFBQTtFQUNBLG1CQUtnQjtFQUpoQiwyQkFIK0I7RUFJL0IsdUJBSmdEO0FDSXBEOztBREtBO0VBUkksYUFBQTtFQUNBLHNCQUZrQjtFQUdsQiwyQkFIK0I7RUFJL0IsdUJBSmdEO0FDV3BEOztBQzBDQTtFRnBESSxhQUFBO0VBQ0Esc0JBRmtCO0VBR2xCLDJCQUgrQjtFQUkvQix1QkFKZ0Q7RUV1RGhELGVBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtBRHBDSjs7QUNxQ0k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBRG5DUjs7QUNvQ0k7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEbENSOztBQ21DUTtFQUNJLG1CQUFBO0VBQ0EsMEJBQUE7QURqQ1o7O0FDa0NJO0VGL0VBLGFBQUE7RUFDQSxzQkFGa0I7RUFHbEIsMkJBSCtCO0VBSS9CLHVCQUpnRDtFRWtGNUMsV0FBQTtFQUNBLGFBQUE7QUQ3QlI7O0FDOEJRO0VGbkZKLGFBQUE7RUFDQSxzQkFGa0I7RUFHbEIsMkJBSCtCO0VBSS9CLHVCQUpnRDtFRXNGeEMsV0FBQTtFQUNBLGdCQUFBO0FEekJaOztBQzBCWTs7O0VBM0ZSLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QURzRUo7O0FDckVJOzs7RUFDSSx1QkFBQTtBRHlF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QUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUQ2UEo7O0FDNVBJO0VBQ0ksV0FBQTtFQUNBLHVCQUFBO0FEOFBSOztBQzdQSTtFQUNJLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBRCtQUiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHlcbiAgICBtYXJnaW46IDBcbiAgICBwYWRkaW5nOiAwXG5cbiRuYXZfdzozMDBweFxuICAgIFxuPWZsZXgtY29udGFpbmVyKCRkaXI6IGNvbHVtbiwgJGpjOiBmbGV4LXN0YXJ0LCAkYWk6IGZsZXgtc3RhcnQpXG4gICAgZGlzcGxheTogZmxleFxuICAgIGZsZXgtZGlyZWN0aW9uOiAkZGlyXG4gICAganVzdGlmeS1jb250ZW50OiAkamNcbiAgICBhbGlnbi1pdGVtczogJGFpIFxuXG4uUm93XG4gICAgK2ZsZXgtY29udGFpbmVyKHJvdylcblxuLkNvbHVtblxuICAgICtmbGV4LWNvbnRhaW5lcigpXG4iLCJodG1sLCBib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uUm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLkNvbHVtbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5Gb3JtLUNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxMDBweDtcbiAgbGVmdDogY2FsYyg1MCUgLSAyNTBweCk7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogIzAwMDAwMDI1IDAgNHB4IDhweCAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fVGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI2cHg7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX1dhcm5pbmcge1xuICBtYXJnaW46IDEwcHggMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogdmFyKC0tcmVkKSBzb2xpZCAycHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiB2YXIoLS1yZWQpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX1dhcm5pbmcub2sge1xuICBjb2xvcjogdmFyKC0tZ3JlZW4pO1xuICBib3JkZXItY29sb3I6IHZhcigtLWdyZWVuKTtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCBpbnB1dCxcbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIHNlbGVjdCxcbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIHRleHRhcmVhIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyOiAjMDAwMDAwMjAgc29saWQgMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzO1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgaW5wdXQ6aG92ZXI6bm90KC5uZy10b3VjaGVkLm5nLWludmFsaWQpLFxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgc2VsZWN0OmhvdmVyOm5vdCgubmctdG91Y2hlZC5uZy1pbnZhbGlkKSxcbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIHRleHRhcmVhOmhvdmVyOm5vdCgubmctdG91Y2hlZC5uZy1pbnZhbGlkKSB7XG4gIGJvcmRlci1jb2xvcjogIzAwMDAwMDQwO1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgaW5wdXQ6Zm9jdXM6bm90KC5uZy10b3VjaGVkLm5nLWludmFsaWQpLFxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgc2VsZWN0OmZvY3VzOm5vdCgubmctdG91Y2hlZC5uZy1pbnZhbGlkKSxcbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIHRleHRhcmVhOmZvY3VzOm5vdCgubmctdG91Y2hlZC5uZy1pbnZhbGlkKSB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbGl0ZS1ibHVlKTtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIGlucHV0Lm5nLXRvdWNoZWQubmctaW52YWxpZCxcbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIHNlbGVjdC5uZy10b3VjaGVkLm5nLWludmFsaWQsXG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCB0ZXh0YXJlYS5uZy10b3VjaGVkLm5nLWludmFsaWQge1xuICBib3JkZXItY29sb3I6IHZhcigtLWxpdGUtcmVkKTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2OXB4KSB7XG4gIC5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIGlucHV0LFxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgc2VsZWN0LFxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgdGV4dGFyZWEge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIHNwYW4ge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHZhcigtLXJlZCk7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCB0ZXh0YXJlYSB7XG4gIHJlc2l6ZTogdmVydGljYWw7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBtYXgtaGVpZ2h0OiA4MDBweDtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0xpbmtzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXRvcDogIzAwMDAwMDMwIHNvbGlkIDFweDtcbiAgYm9yZGVyLWJvdHRvbTogIzAwMDAwMDMwIHNvbGlkIDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0xpbmtzIHNwYW4ge1xuICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmO1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fTGlua3MgYSB7XG4gIGZvbnQtd2VpZ2h0OiA1NTA7XG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19MaW5rcyBhOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogdmFyKC0tbGl0ZS1ibHVlKTtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0J1dHRvbiB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgcGFkZGluZzogN3B4IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiB2YXIoLS1ibHVlKSBzb2xpZCAycHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzO1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fQnV0dG9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJsdWUpO1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fQnV0dG9uOmRpc2FibGVkIHtcbiAgY29sb3I6IHZhcigtLWxpdGUtYmx1ZSk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbGl0ZS1ibHVlKTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLlNlYXJjaC1Db250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzBweDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBib3JkZXItYm90dG9tOiAjMDAwMDAwNDAgc29saWQgMnB4O1xufVxuLlNlYXJjaC1Db250YWluZXIgLlF1ZXJ5IHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIGkge1xuICBmbGV4OiAwIDAgMzBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuLlNlYXJjaC1Db250YWluZXIgLlNlYXJjaCB7XG4gIGNvbnRlbnQ6IHVybChcIi9tZWRpYS9pY29ucy9zZWFyY2guc3ZnXCIpO1xufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5TZXR0aW5ncy1JY29uLUJ0biB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLlNldHRpbmdzLUljb24tQnRuOjpiZWZvcmUge1xuICBmb250LXNpemU6IDMwcHg7XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLlNldHRpbmdzLUljb24tQnRuOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogIzAwMDAwMDUwIDJweCAwIDhweCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLlNldHRpbmdzLUljb24tQnRuOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgIzAwMDAwMDUwIDJweCAwIDhweCAwO1xufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5TZXR0aW5ncy1JY29uLUJ0biBpIHtcbiAgY29udGVudDogdXJsKFwiL21lZGlhL2ljb25zL3NsaWRlci1zZXR0aW5ncy5zdmdcIik7XG4gIGZpbGw6IHZhcigtLWJsdWUpO1xufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5EZXRhaWxzIHtcbiAgd2lkdGg6IDYwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJveC1zaGFkb3c6ICMwMDAwMDA0MCAwIDJweCA0cHggMDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY3NnB4KSB7XG4gIC5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICB9XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLkRldGFpbHMgLlRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5EZXRhaWxzIC5JdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDY5cHgpIHtcbiAgLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5EZXRhaWxzIC5JdGVtIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLkRldGFpbHMgLkl0ZW0gaW5wdXQge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmO1xuICBib3JkZXI6ICMwMDAwMDAyMCBzb2xpZCAxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDRweCAxMHB4O1xufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5EZXRhaWxzIC5JdGVtIGlucHV0OmhvdmVyOm5vdCgubmctdG91Y2hlZC5uZy1pbnZhbGlkKSB7XG4gIGJvcmRlci1jb2xvcjogIzAwMDAwMDQwO1xufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5EZXRhaWxzIC5JdGVtIGlucHV0OmZvY3VzOm5vdCgubmctdG91Y2hlZC5uZy1pbnZhbGlkKSB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbGl0ZS1ibHVlKTtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyAuSXRlbSBpbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWQge1xuICBib3JkZXItY29sb3I6IHZhcigtLWxpdGUtcmVkKTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2OXB4KSB7XG4gIC5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyAuSXRlbSBpbnB1dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5EZXRhaWxzIC5CdXR0b24ge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1NTA7XG4gIHBhZGRpbmc6IDdweCAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogdmFyKC0tYmx1ZSkgc29saWQgMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyAuQnV0dG9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJsdWUpO1xufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5EZXRhaWxzIC5CdXR0b246ZGlzYWJsZWQge1xuICBjb2xvcjogdmFyKC0tbGl0ZS1ibHVlKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saXRlLWJsdWUpO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufSIsIkBpbXBvcnQgXCJzcmMvc3R5bGVzLnNhc3NcIlxyXG4gICAgXHJcbj1maWVsZCgpXHJcbiAgICBmb250LXdlaWdodDogNTAwXHJcbiAgICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmXHJcbiAgICBib3JkZXI6ICMwMDAwMDAyMCBzb2xpZCAxcHhcclxuICAgIHdpZHRoOiAxMDAlXHJcbiAgICBwYWRkaW5nOiAxMHB4XHJcbiAgICBmb250LXNpemU6IDE2cHhcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweFxyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4xc1xyXG4gICAgJjpob3Zlcjpub3QoLm5nLXRvdWNoZWQubmctaW52YWxpZClcclxuICAgICAgICBib3JkZXItY29sb3I6ICMwMDAwMDA0MFxyXG4gICAgJjpmb2N1czpub3QoLm5nLXRvdWNoZWQubmctaW52YWxpZClcclxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWxpdGUtYmx1ZSlcclxuICAgICYubmctdG91Y2hlZC5uZy1pbnZhbGlkXHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saXRlLXJlZClcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kICggbWF4LXdpZHRoOiA0NjlweCApXHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4XHJcbiAgICAgICAgcGFkZGluZzogNXB4XHJcblxyXG49YnV0dG9uKClcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KVxyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnRcclxuICAgIGZvbnQtc2l6ZTogMTZweFxyXG4gICAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZlxyXG4gICAgZm9udC13ZWlnaHQ6IDU1MFxyXG4gICAgcGFkZGluZzogN3B4IDE1cHhcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG4gICAgYm9yZGVyOiB2YXIoLS1ibHVlKSBzb2xpZCAycHhcclxuICAgIGJhY2tncm91bmQ6ICNmZmZcclxuICAgIGNvbG9yOiB2YXIoLS1ibHVlKVxyXG4gICAgbWFyZ2luOiAxMHB4XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAwcHhcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMXNcclxuICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZClcclxuICAgICAgICBjb2xvcjogI2ZmZlxyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJsdWUpXHJcbiAgICAmOmRpc2FibGVkXHJcbiAgICAgICAgY29sb3I6IHZhcigtLWxpdGUtYmx1ZSlcclxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWxpdGUtYmx1ZSlcclxuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkXHJcblxyXG49bWFuYWdlLWJ1dHRvbigkdywgJGgpXHJcbiAgICBvdXRsaW5lOiBub25lXHJcbiAgICBib3JkZXI6IG5vbmVcclxuICAgIGJhY2tncm91bmQ6ICNmZmZcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweFxyXG4gICAgd2lkdGg6ICR3XHJcbiAgICBoZWlnaHQ6ICRoXHJcbiAgICBwYWRkaW5nOiA1cHhcclxuICAgICY6OmJlZm9yZVxyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweFxyXG4gICAgJjpob3ZlclxyXG4gICAgICAgIGJveC1zaGFkb3c6ICMwMDAwMDA1MCAycHggMCA4cHggMFxyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlclxyXG4gICAgJjpmb2N1c1xyXG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0ICMwMDAwMDA1MCAycHggMCA4cHggMFxyXG5cclxuLkZvcm0tQ29udGFpbmVyXHJcbiAgICArZmxleC1jb250YWluZXIoKVxyXG4gICAgcG9zaXRpb246IGZpeGVkXHJcbiAgICB0b3A6IDEwMHB4XHJcbiAgICBsZWZ0OiBjYWxjKCA1MCUgLSAyNTBweCApXHJcbiAgICB3aWR0aDogNTAwcHhcclxuICAgIGhlaWdodDogYXV0b1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGVcclxuICAgIGJveC1zaGFkb3c6ICMwMDAwMDAyNSAwIDRweCA4cHggMFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweFxyXG4gICAgLkZvcm0tQ29udGFpbmVyX19UaXRsZVxyXG4gICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgICAgICAgZm9udC1zaXplOiAyNnB4XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4XHJcbiAgICAuRm9ybS1Db250YWluZXJfX1dhcm5pbmdcclxuICAgICAgICBtYXJnaW46IDEwcHggMFxyXG4gICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgYm9yZGVyOiB2YXIoLS1yZWQpIHNvbGlkIDJweFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZcclxuICAgICAgICBjb2xvcjogdmFyKC0tcmVkKVxyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweFxyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweFxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHhcclxuICAgICAgICAmLm9rXHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ncmVlbilcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ncmVlbilcclxuICAgIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lclxyXG4gICAgICAgICtmbGV4LWNvbnRhaW5lcigpXHJcbiAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgICBwYWRkaW5nOiAxMHB4XHJcbiAgICAgICAgLkZpZWxkXHJcbiAgICAgICAgICAgICtmbGV4LWNvbnRhaW5lcigpXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHhcclxuICAgICAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgICAgIHNlbGVjdCxcclxuICAgICAgICAgICAgdGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICtmaWVsZCgpXHJcbiAgICAgICAgICAgIHNwYW5cclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcmVkKVxyXG4gICAgICAgICAgICB0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgcmVzaXplOiB2ZXJ0aWNhbFxyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTAwcHhcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDgwMHB4XHJcbiAgICAuRm9ybS1Db250YWluZXJfX0xpbmtzXHJcbiAgICAgICAgK2ZsZXgtY29udGFpbmVyKHJvdylcclxuICAgICAgICBwYWRkaW5nOiAxMHB4XHJcbiAgICAgICAgYm9yZGVyLXRvcDogIzAwMDAwMDMwIHNvbGlkIDFweFxyXG4gICAgICAgIGJvcmRlci1ib3R0b206ICMwMDAwMDAzMCBzb2xpZCAxcHhcclxuICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweFxyXG4gICAgICAgIHNwYW5cclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZlxyXG4gICAgICAgIGFcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDU1MFxyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYmx1ZSlcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4xc1xyXG4gICAgICAgICAgICAmOmhvdmVyXHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXJcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1saXRlLWJsdWUpXHJcbiAgICAuRm9ybS1Db250YWluZXJfX0J1dHRvblxyXG4gICAgICAgICtidXR0b24oKVxyXG5cclxuXHJcbi5TZWFyY2gtQ29udGFpbmVyXHJcbiAgICArZmxleC1jb250YWluZXIocm93LCBjZW50ZXIsIGNlbnRlcilcclxuICAgIHdpZHRoOiAxMDAlXHJcbiAgICBoZWlnaHQ6IDcwcHhcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweFxyXG4gICAgYm9yZGVyLWJvdHRvbTogIzAwMDAwMDQwIHNvbGlkIDJweFxyXG4gICAgLlF1ZXJ5XHJcbiAgICAgICAgYm9yZGVyOiBub25lXHJcbiAgICAgICAgb3V0bGluZTogbm9uZVxyXG4gICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvXHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWZcclxuICAgICAgICBwYWRkaW5nOiAwIDE1cHhcclxuICAgICAgICBoZWlnaHQ6IDEwMCVcclxuICAgIGlcclxuICAgICAgICBmbGV4OiAwIDAgMzBweFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweFxyXG4gICAgICAgIHdpZHRoOiAzMHB4XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4XHJcbiAgICAuU2VhcmNoXHJcbiAgICAgICAgY29udGVudDogdXJsKFwiL21lZGlhL2ljb25zL3NlYXJjaC5zdmdcIilcclxuICAgIC5TZXR0aW5nc1xyXG4gICAgICAgIC5TZXR0aW5ncy1JY29uLUJ0blxyXG4gICAgICAgICAgICArbWFuYWdlLWJ1dHRvbig0MHB4LCA0MHB4KVxyXG4gICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiB1cmwoXCIvbWVkaWEvaWNvbnMvc2xpZGVyLXNldHRpbmdzLnN2Z1wiKVxyXG4gICAgICAgICAgICAgICAgZmlsbDogdmFyKC0tYmx1ZSlcclxuICAgICAgICAuRGV0YWlsc1xyXG4gICAgICAgICAgICB3aWR0aDogNjAwcHhcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6ICMwMDAwMDA0MCAwIDJweCA0cHggMFxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAoIG1heC13aWR0aDogNjc2cHggKVxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpXHJcbiAgICAgICAgICAgIC5UaXRsZVxyXG4gICAgICAgICAgICAgICAgK2ZsZXgtY29udGFpbmVyKHJvdywgY2VudGVyKVxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgICAgICAuSXRlbVxyXG4gICAgICAgICAgICAgICAgK2ZsZXgtY29udGFpbmVyKHJvdylcclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kICggbWF4LXdpZHRoOiA0NjlweCApXHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4XHJcbiAgICAgICAgICAgICAgICBpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICtmaWVsZCgpXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDRweCAxMHB4XHJcbiAgICAgICAgICAgIC5CdXR0b25cclxuICAgICAgICAgICAgICAgICtidXR0b24oKSJdfQ== */"] });


/***/ }),

/***/ 5716:
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoutComponent": () => (/* binding */ LogoutComponent)
/* harmony export */ });
/* harmony import */ var _business_actions_account_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../business/actions/account.actions */ 7786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/account.service */ 5921);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);





class LogoutComponent {
    constructor(_accountService, _store, _router) {
        this._accountService = _accountService;
        this._store = _store;
        this._router = _router;
    }
    ngOnInit() {
        this._accountService.logout().subscribe((data) => {
            this._store.dispatch(new _business_actions_account_actions__WEBPACK_IMPORTED_MODULE_0__.SetUser(undefined));
            this._router.navigateByUrl("login");
        });
    }
}
LogoutComponent.ɵfac = function LogoutComponent_Factory(t) { return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_1__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
LogoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LogoutComponent, selectors: [["logout"]], decls: 2, vars: 0, template: function LogoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Logout successful!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvdXQuY29tcG9uZW50LnNhc3MifQ== */"] });


/***/ }),

/***/ 1133:
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User),
/* harmony export */   "Profile": () => (/* binding */ Profile)
/* harmony export */ });
class User {
    constructor(_id, _username, _email, _first_name, _last_name, _profile) {
        this._id = _id;
        this._username = _username;
        this._email = _email;
        this._first_name = _first_name;
        this._last_name = _last_name;
        this._profile = _profile;
    }
    get id() {
        return this._id;
    }
    get username() {
        return this._username;
    }
    set username(username) {
        this._username = username;
    }
    get email() {
        return this._email;
    }
    set email(email) {
        this._email = email;
    }
    get firstName() {
        return this._first_name;
    }
    set firstName(firstName) {
        this._first_name = firstName;
    }
    get lastName() {
        return this._last_name;
    }
    set lastName(lastName) {
        this._last_name = lastName;
    }
    get fullName() {
        return this._first_name + " " + this._last_name;
    }
    get profile() {
        return this._profile;
    }
    set profile(profile) {
        this._profile = profile;
    }
    toJSON() {
        let { id, username, email, firstName, lastName, profile } = this;
        let { userId, patronymic, phone, age, status, user_in_school_status, city, country, about_me, district } = profile;
        let JSONUser = {
            id,
            username,
            email,
            first_name: firstName,
            last_name: lastName,
            profile: {
                id: profile.id,
                user: userId,
                patronymic,
                phone,
                age,
                status,
                user_in_school_status,
                city,
                country,
                about_me,
                district
            }
        };
        return JSONUser;
    }
    copy() {
        return Object.assign({}, this);
    }
}
class Profile {
    constructor(_id, _user, _phone, _patronymic, _age, _user_in_school_status, _status, _country, _city, _about_me, _district) {
        this._id = _id;
        this._user = _user;
        this._phone = _phone;
        this._patronymic = _patronymic;
        this._age = _age;
        this._user_in_school_status = _user_in_school_status;
        this._status = _status;
        this._country = _country;
        this._city = _city;
        this._about_me = _about_me;
        this._district = _district;
    }
    get id() {
        return this._id;
    }
    get userId() {
        return this._user;
    }
    get phone() {
        return this._phone;
    }
    set phone(phone) {
        this._phone = phone;
    }
    get patronymic() {
        return this._patronymic;
    }
    set patronymic(patronymic) {
        this._patronymic = patronymic;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        this._age = age;
    }
    get status() {
        return this._status;
    }
    set status(status) {
        this._status = status;
    }
    get user_in_school_status() {
        return this._user_in_school_status;
    }
    set user_in_school_status(user_in_school_status) {
        this._user_in_school_status = user_in_school_status;
    }
    get country() {
        return this._country;
    }
    set country(country) {
        this._country = country;
    }
    get city() {
        return this._city;
    }
    set city(city) {
        this._city = city;
    }
    get district() {
        return this._district;
    }
    set district(district) {
        this._district = district;
    }
    get about_me() {
        return this._about_me;
    }
    set about_me(about_me) {
        this._about_me = about_me;
    }
}


/***/ }),

/***/ 21:
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _hamburger_hamburger_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hamburger/hamburger.component */ 7815);





function NavbarComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.setIsOpen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "active": a0 }; };
function NavbarComponent_ul_8_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_ul_8_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.hash = "#About"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " \u041E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_ul_8_Template_li_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.hash = "#Pluses"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " \u041F\u043B\u044E\u0441\u044B ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_ul_8_Template_li_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.hash = "#Instruction"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " \u0418\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c0, ctx_r2.hash === "#About"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/home")("fragment", "About")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c0, ctx_r2.hash === "#About"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](16, _c0, ctx_r2.hash === "#Pluses"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/home")("fragment", "Pluses")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](18, _c0, ctx_r2.hash === "#Pluses"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](20, _c0, ctx_r2.hash === "#Instruction"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/home")("fragment", "Instruction")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](22, _c0, ctx_r2.hash === "#Instruction"));
} }
function NavbarComponent_ul_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ul", 18);
} }
function NavbarComponent_ul_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ul", 18);
} }
function NavbarComponent_ul_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ul", 18);
} }
function NavbarComponent_ul_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ul", 18);
} }
function NavbarComponent_span_33_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "hamburger", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onchange", function NavbarComponent_span_33_Template_hamburger_onchange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.setIsOpen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isOpen", ctx_r7.navbarIsOpen());
} }
const _c1 = function (a0) { return { "Close": a0 }; };
const _c2 = function (a0) { return { "Rotated": a0 }; };
class NavbarComponent {
    constructor(_router) {
        this._router = _router;
        this.openLinks = JSON.parse(localStorage.getItem("openLinks") || "[]");
        this.location = window.location;
        this.hash = "";
        this.windowWidth = window.innerWidth;
        this.isOpen = false;
        _router.events.subscribe(e => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd) {
                this.location = window.location;
                this.hash = window.location.hash;
            }
        });
    }
    ngOnInit() {
        if (this.Content) {
            if (this.windowWidth < 1450)
                this.Content.style.marginLeft = "0";
        }
        window.onresize = e => {
            this.windowWidth = window.innerWidth;
            if (this.Content) {
                if (this.windowWidth < 1450)
                    this.Content.style.marginLeft = "0";
                else
                    this.Content.style.marginLeft = "320px";
            }
        };
    }
    openLink(n) {
        let ol = JSON.parse(localStorage.getItem("openLinks") || "[]");
        ol ? localStorage.setItem("openLinks", JSON.stringify([...ol, n])) : localStorage.setItem("openLinks", JSON.stringify([n]));
        this.openLinks = JSON.parse(localStorage.getItem("openLinks") || "[]");
    }
    closeLink(n) {
        let ol = JSON.parse(localStorage.getItem("openLinks") || "[]");
        if (ol) {
            let olCopy = [...ol];
            olCopy.splice(olCopy.indexOf(n), 1);
            localStorage.setItem("openLinks", JSON.stringify(olCopy));
        }
        else {
            throw new Error("Open links is undefined");
        }
        this.openLinks = JSON.parse(localStorage.getItem("openLinks") || "[]");
    }
    checkLinkIsOpen(n) {
        return this.openLinks.indexOf(n) !== -1;
    }
    navbarIsOpen() {
        if (this.windowWidth > 1450)
            return true;
        else
            return this.isOpen;
    }
    setIsOpen() {
        this.isOpen = !this.isOpen;
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["navbar"]], inputs: { Content: "Content" }, decls: 34, vars: 29, consts: [["class", "Blackout", 3, "click", 4, "ngIf"], [1, "Navbar", 3, "ngClass"], ["navbar", ""], [1, "Navbar__Item"], [1, "Main-Link", "Home-Main-Link"], ["routerLink", "/home", "routerLinkActive", "active", 1, "Main-Link__Text", 3, "fragment", "click"], [1, "Main-Link__OpenClose-Arrow", 3, "ngClass", "click"], ["class", "Links-Container", 4, "ngIf"], [1, "Main-Link", "News-Main-Link"], ["routerLinkActive", "active", 1, "Main-Link__Text"], [1, "Main-Link", "Ads-Main-Link"], ["routerLinkActive", "active", "routerLink", "/offers", 1, "Main-Link__Text", 3, "click"], [1, "Main-Link", "Users-Main-Link"], ["routerLinkActive", "active", "routerLink", "/users", 1, "Main-Link__Text", 3, "click"], [1, "Main-Link", "Chats-Main-Link"], ["routerLinkActive", "active", "routerLink", "/chats", 1, "Main-Link__Text", 3, "click"], ["class", "Hanburger-Container", 4, "ngIf"], [1, "Blackout", 3, "click"], [1, "Links-Container"], [1, "Item", 3, "ngClass", "click"], [3, "routerLink", "fragment", "ngClass"], [1, "Hanburger-Container"], [3, "isOpen", "onchange"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, NavbarComponent_div_0_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_5_listener() { return ctx.setIsOpen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_i_click_7_listener() { return ctx.location.pathname.split("/")[1] === "home" ? undefined : ctx.checkLinkIsOpen("home") ? ctx.closeLink("home") : ctx.openLink("home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, NavbarComponent_ul_8_Template, 10, 24, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u041D\u043E\u0432\u043E\u0441\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_i_click_13_listener() { return ctx.location.pathname.split("/")[1] === "news" ? undefined : ctx.checkLinkIsOpen("news") ? ctx.closeLink("news") : ctx.openLink("news"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, NavbarComponent_ul_14_Template, 1, 0, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_17_listener() { return ctx.setIsOpen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "\u041F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_i_click_19_listener() { return ctx.location.pathname.split("/")[1] === "ads" ? undefined : ctx.checkLinkIsOpen("ads") ? ctx.closeLink("ads") : ctx.openLink("ads"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, NavbarComponent_ul_20_Template, 1, 0, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_23_listener() { return ctx.setIsOpen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_i_click_25_listener() { return ctx.location.pathname.split("/")[1] === "chats" ? undefined : ctx.checkLinkIsOpen("chats") ? ctx.closeLink("chats") : ctx.openLink("chats"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, NavbarComponent_ul_26_Template, 1, 0, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_29_listener() { return ctx.setIsOpen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "\u0427\u0430\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_i_click_31_listener() { return ctx.location.pathname.split("/")[1] === "chats" ? undefined : ctx.checkLinkIsOpen("chats") ? ctx.closeLink("chats") : ctx.openLink("chats"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, NavbarComponent_ul_32_Template, 1, 0, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, NavbarComponent_span_33_Template, 2, 1, "span", 16);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.navbarIsOpen() && ctx.windowWidth <= 1450);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c1, ctx.navbarIsOpen()))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c1, !ctx.navbarIsOpen()));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fragment", "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](19, _c2, ctx.checkLinkIsOpen("home") || ctx.location.pathname.split("/")[1] === "home"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkLinkIsOpen("home") || ctx.location.pathname.split("/")[1] === "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](21, _c2, ctx.checkLinkIsOpen("news") || ctx.location.pathname.split("/")[1] === "news"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkLinkIsOpen("home") || ctx.location.pathname.split("/")[1] === "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](23, _c2, ctx.checkLinkIsOpen("ads") || ctx.location.pathname.split("/")[1] === "ads"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkLinkIsOpen("home") || ctx.location.pathname.split("/")[1] === "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](25, _c2, ctx.checkLinkIsOpen("chats") || ctx.location.pathname.split("/")[1] === "chats"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkLinkIsOpen("home") || ctx.location.pathname.split("/")[1] === "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](27, _c2, ctx.checkLinkIsOpen("chats") || ctx.location.pathname.split("/")[1] === "chats"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkLinkIsOpen("home") || ctx.location.pathname.split("/")[1] === "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.windowWidth <= 1450);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _hamburger_hamburger_component__WEBPACK_IMPORTED_MODULE_0__.HamburgerComponent], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.Row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.Column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.Blackout[_ngcontent-%COMP%] {\n  background: #00000050;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  z-index: 100;\n}\n\n.Hanburger-Container[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 0 5px 5px 0;\n  background: #fff;\n  padding: 5px 0;\n  box-shadow: #00000025 4px 0 4px 0;\n  top: 0;\n  left: 0;\n}\n\n.Navbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  position: fixed;\n  top: 0;\n  left: 0;\n  font-family: \"Rubik\", Verdana, Geneva, Tahoma, sans-serif;\n  margin: 0;\n  box-shadow: #00000025 2px 0 8px 0;\n  height: 100%;\n  padding: 0 0 0 10px;\n  width: 300px;\n  list-style-type: none;\n  background: #fff;\n  z-index: 1000;\n  transition: left 0.2s, width 0.2s;\n}\n\n.Navbar.Close[_ngcontent-%COMP%] {\n  width: 0;\n  left: -300px;\n}\n\n.Navbar[_ngcontent-%COMP%]   .Navbar__Item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  margin-top: 10px;\n  width: 100%;\n}\n\n.Navbar[_ngcontent-%COMP%]   .Navbar__Item[_ngcontent-%COMP%]   .Main-Link[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n}\n\n.Navbar[_ngcontent-%COMP%]   .Navbar__Item[_ngcontent-%COMP%]   .Main-Link.Home-Main-Link[_ngcontent-%COMP%]::before {\n  width: 30px;\n  height: 30px;\n  font-size: 30px;\n  content: url(\"/media/icons/home.svg\");\n}\n\n.Navbar[_ngcontent-%COMP%]   .Navbar__Item[_ngcontent-%COMP%]   .Main-Link.News-Main-Link[_ngcontent-%COMP%]::before {\n  width: 30px;\n  height: 30px;\n  font-size: 30px;\n  content: url(\"/media/icons/info.svg\");\n}\n\n.Navbar[_ngcontent-%COMP%]   .Navbar__Item[_ngcontent-%COMP%]   .Main-Link.Ads-Main-Link[_ngcontent-%COMP%]::before {\n  width: 30px;\n  height: 30px;\n  font-size: 30px;\n  content: url(\"/media/icons/ad.svg\");\n}\n\n.Navbar[_ngcontent-%COMP%]   .Navbar__Item[_ngcontent-%COMP%]   .Main-Link.Users-Main-Link[_ngcontent-%COMP%]::before {\n  width: 30px;\n  height: 30px;\n  font-size: 30px;\n  content: url(\"/media/icons/users-alt.svg\");\n}\n\n.Navbar[_ngcontent-%COMP%]   .Navbar__Item[_ngcontent-%COMP%]   .Main-Link.Chats-Main-Link[_ngcontent-%COMP%]::before {\n  width: 30px;\n  height: 30px;\n  font-size: 30px;\n  content: url(\"/media/icons/message.svg\");\n}\n\n.Navbar[_ngcontent-%COMP%]   .Navbar__Item[_ngcontent-%COMP%]   .Main-Link[_ngcontent-%COMP%]   .Main-Link__Text[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 20px;\n  color: #00000070;\n  transition: color 0.1s;\n  cursor: pointer;\n  width: 100%;\n  margin-left: 10px;\n}\n\n.Navbar[_ngcontent-%COMP%]   .Navbar__Item[_ngcontent-%COMP%]   .Main-Link[_ngcontent-%COMP%]   .Main-Link__Text[_ngcontent-%COMP%]:hover, .Navbar[_ngcontent-%COMP%]   .Navbar__Item[_ngcontent-%COMP%]   .Main-Link[_ngcontent-%COMP%]   .Main-Link__Text.active[_ngcontent-%COMP%] {\n  color: var(--blue);\n}\n\n.Navbar[_ngcontent-%COMP%]   .Navbar__Item[_ngcontent-%COMP%]   .Main-Link[_ngcontent-%COMP%]   .Main-Link__OpenClose-Arrow[_ngcontent-%COMP%] {\n  content: url(\"/media/icons/angle-down.svg\");\n  font-size: 40px;\n  width: 40px;\n  height: 40px;\n  transform-origin: 50%;\n  cursor: pointer;\n}\n\n.Navbar[_ngcontent-%COMP%]   .Navbar__Item[_ngcontent-%COMP%]   .Main-Link[_ngcontent-%COMP%]   .Main-Link__OpenClose-Arrow.Rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\n.Navbar[_ngcontent-%COMP%]   .Navbar__Item[_ngcontent-%COMP%]   .Links-Container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: calc(100% - 20px);\n  padding-inline-start: 20px;\n}\n\n.Navbar[_ngcontent-%COMP%]   .Navbar__Item[_ngcontent-%COMP%]   .Links-Container[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n}\n\n.Navbar[_ngcontent-%COMP%]   .Navbar__Item[_ngcontent-%COMP%]   .Links-Container[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #00000070;\n  text-decoration: none;\n  width: 100%;\n  padding: 10px 0;\n}\n\n.Navbar[_ngcontent-%COMP%]   .Navbar__Item[_ngcontent-%COMP%]   .Links-Container[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], .Navbar[_ngcontent-%COMP%]   .Navbar__Item[_ngcontent-%COMP%]   .Links-Container[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--blue);\n  border-bottom: var(--blue) solid 1px;\n}\n\n.Navbar[_ngcontent-%COMP%]   .Navbar__Item[_ngcontent-%COMP%]   .Links-Container[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]:hover::before, .Navbar[_ngcontent-%COMP%]   .Navbar__Item[_ngcontent-%COMP%]   .Links-Container[_ngcontent-%COMP%]   .Item.active[_ngcontent-%COMP%]::before {\n  background: var(--blue);\n}\n\n.Navbar[_ngcontent-%COMP%]   .Navbar__Item[_ngcontent-%COMP%]   .Links-Container[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 5px;\n  height: 5px;\n  background: #00000070;\n  margin-right: 10px;\n  border-radius: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcc3R5bGVzLnNhc3MiLCJuYXZiYXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQ0NKOztBRFNBO0VBTEksYUFBQTtFQUNBLG1CQUtnQjtFQUpoQiwyQkFIK0I7RUFJL0IsdUJBSmdEO0FDSXBEOztBREtBO0VBUkksYUFBQTtFQUNBLHNCQUZrQjtFQUdsQiwyQkFIK0I7RUFJL0IsdUJBSmdEO0FDV3BEOztBQVZBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFhSjs7QUFaQTtFQUNJLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FBZUo7O0FBZEE7RURoQkksYUFBQTtFQUNBLHNCQUZrQjtFQUdsQiwyQkFIK0I7RUFJL0IsdUJBSmdEO0VDbUJoRCxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSx5REFBQTtFQUNBLFNBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlEN0JHO0VDOEJILHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7QUFvQko7O0FBbkJJO0VBQ0ksUUFBQTtFQUNBLFlBQUE7QUFxQlI7O0FBcEJJO0VEbENBLGFBQUE7RUFDQSxzQkFGa0I7RUFHbEIsMkJBSCtCO0VBSS9CLHVCQUpnRDtFQ3FDNUMsZ0JBQUE7RUFDQSxXQUFBO0FBeUJSOztBQXhCUTtFRHRDSixhQUFBO0VBQ0EsbUJDc0N3QjtFRHJDeEIsMkJDcUM2QjtFRHBDN0IsbUJDb0N5QztFQUNqQyxXQUFBO0FBNkJaOztBQTNCZ0I7RUE5Q1osV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7QUE0RUo7O0FBOUJnQjtFQWpEWixXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQ0FBQTtBQWtGSjs7QUFqQ2dCO0VBcERaLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0FBd0ZKOztBQXBDZ0I7RUF2RFosV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsMENBQUE7QUE4Rko7O0FBdkNnQjtFQTFEWixXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtBQW9HSjs7QUEzQ1k7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQTZDaEI7O0FBNUNnQjtFQUVJLGtCQUFBO0FBNkNwQjs7QUE1Q1k7RUFDSSwyQ0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQThDaEI7O0FBN0NnQjtFQUNJLHlCQUFBO0FBK0NwQjs7QUE5Q1E7RUQ1RUosYUFBQTtFQUNBLHNCQUZrQjtFQUdsQiwyQkFIK0I7RUFJL0IsdUJBSmdEO0VDK0V4Qyx3QkFBQTtFQUNBLDBCQUFBO0FBbURaOztBQWxEWTtFRGhGUixhQUFBO0VBQ0EsbUJDZ0Y0QjtFRC9FNUIsMkJDK0VpQztFRDlFakMsbUJDOEU2QztFQUNqQyxXQUFBO0FBdURoQjs7QUF0RGdCO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBd0RwQjs7QUF2RG9CO0VBRUksa0JBQUE7RUFDQSxvQ0FBQTtBQXdEeEI7O0FBckRvQjtFQUNJLHVCQUFBO0FBdUR4Qjs7QUF0RGdCO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBd0RwQiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLCBib2R5XG4gICAgbWFyZ2luOiAwXG4gICAgcGFkZGluZzogMFxuXG4kbmF2X3c6MzAwcHhcbiAgICBcbj1mbGV4LWNvbnRhaW5lcigkZGlyOiBjb2x1bW4sICRqYzogZmxleC1zdGFydCwgJGFpOiBmbGV4LXN0YXJ0KVxuICAgIGRpc3BsYXk6IGZsZXhcbiAgICBmbGV4LWRpcmVjdGlvbjogJGRpclxuICAgIGp1c3RpZnktY29udGVudDogJGpjXG4gICAgYWxpZ24taXRlbXM6ICRhaSBcblxuLlJvd1xuICAgICtmbGV4LWNvbnRhaW5lcihyb3cpXG5cbi5Db2x1bW5cbiAgICArZmxleC1jb250YWluZXIoKVxuIiwiaHRtbCwgYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLlJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5Db2x1bW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uQmxhY2tvdXQge1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwNTA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgei1pbmRleDogMTAwO1xufVxuXG4uSGFuYnVyZ2VyLUNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBib3gtc2hhZG93OiAjMDAwMDAwMjUgNHB4IDAgNHB4IDA7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLk5hdmJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2hhZG93OiAjMDAwMDAwMjUgMnB4IDAgOHB4IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMCAwIDAgMTBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHRyYW5zaXRpb246IGxlZnQgMC4ycywgd2lkdGggMC4ycztcbn1cbi5OYXZiYXIuQ2xvc2Uge1xuICB3aWR0aDogMDtcbiAgbGVmdDogLTMwMHB4O1xufVxuLk5hdmJhciAuTmF2YmFyX19JdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uTmF2YmFyIC5OYXZiYXJfX0l0ZW0gLk1haW4tTGluayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4uTmF2YmFyIC5OYXZiYXJfX0l0ZW0gLk1haW4tTGluay5Ib21lLU1haW4tTGluazo6YmVmb3JlIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb250ZW50OiB1cmwoXCIvbWVkaWEvaWNvbnMvaG9tZS5zdmdcIik7XG59XG4uTmF2YmFyIC5OYXZiYXJfX0l0ZW0gLk1haW4tTGluay5OZXdzLU1haW4tTGluazo6YmVmb3JlIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb250ZW50OiB1cmwoXCIvbWVkaWEvaWNvbnMvaW5mby5zdmdcIik7XG59XG4uTmF2YmFyIC5OYXZiYXJfX0l0ZW0gLk1haW4tTGluay5BZHMtTWFpbi1MaW5rOjpiZWZvcmUge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbnRlbnQ6IHVybChcIi9tZWRpYS9pY29ucy9hZC5zdmdcIik7XG59XG4uTmF2YmFyIC5OYXZiYXJfX0l0ZW0gLk1haW4tTGluay5Vc2Vycy1NYWluLUxpbms6OmJlZm9yZSB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29udGVudDogdXJsKFwiL21lZGlhL2ljb25zL3VzZXJzLWFsdC5zdmdcIik7XG59XG4uTmF2YmFyIC5OYXZiYXJfX0l0ZW0gLk1haW4tTGluay5DaGF0cy1NYWluLUxpbms6OmJlZm9yZSB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29udGVudDogdXJsKFwiL21lZGlhL2ljb25zL21lc3NhZ2Uuc3ZnXCIpO1xufVxuLk5hdmJhciAuTmF2YmFyX19JdGVtIC5NYWluLUxpbmsgLk1haW4tTGlua19fVGV4dCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzAwMDAwMDcwO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjFzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5OYXZiYXIgLk5hdmJhcl9fSXRlbSAuTWFpbi1MaW5rIC5NYWluLUxpbmtfX1RleHQ6aG92ZXIsIC5OYXZiYXIgLk5hdmJhcl9fSXRlbSAuTWFpbi1MaW5rIC5NYWluLUxpbmtfX1RleHQuYWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xufVxuLk5hdmJhciAuTmF2YmFyX19JdGVtIC5NYWluLUxpbmsgLk1haW4tTGlua19fT3BlbkNsb3NlLUFycm93IHtcbiAgY29udGVudDogdXJsKFwiL21lZGlhL2ljb25zL2FuZ2xlLWRvd24uc3ZnXCIpO1xuICBmb250LXNpemU6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLk5hdmJhciAuTmF2YmFyX19JdGVtIC5NYWluLUxpbmsgLk1haW4tTGlua19fT3BlbkNsb3NlLUFycm93LlJvdGF0ZWQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuLk5hdmJhciAuTmF2YmFyX19JdGVtIC5MaW5rcy1Db250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAyMHB4O1xufVxuLk5hdmJhciAuTmF2YmFyX19JdGVtIC5MaW5rcy1Db250YWluZXIgLkl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuLk5hdmJhciAuTmF2YmFyX19JdGVtIC5MaW5rcy1Db250YWluZXIgLkl0ZW0gYSB7XG4gIGNvbG9yOiAjMDAwMDAwNzA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbi5OYXZiYXIgLk5hdmJhcl9fSXRlbSAuTGlua3MtQ29udGFpbmVyIC5JdGVtIGEuYWN0aXZlLCAuTmF2YmFyIC5OYXZiYXJfX0l0ZW0gLkxpbmtzLUNvbnRhaW5lciAuSXRlbSBhOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xuICBib3JkZXItYm90dG9tOiB2YXIoLS1ibHVlKSBzb2xpZCAxcHg7XG59XG4uTmF2YmFyIC5OYXZiYXJfX0l0ZW0gLkxpbmtzLUNvbnRhaW5lciAuSXRlbTpob3Zlcjo6YmVmb3JlLCAuTmF2YmFyIC5OYXZiYXJfX0l0ZW0gLkxpbmtzLUNvbnRhaW5lciAuSXRlbS5hY3RpdmU6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJsdWUpO1xufVxuLk5hdmJhciAuTmF2YmFyX19JdGVtIC5MaW5rcy1Db250YWluZXIgLkl0ZW06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwNzA7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn0iXX0= */"] });


/***/ }),

/***/ 924:
/*!********************************************!*\
  !*** ./src/app/offers/offers.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffersComponent": () => (/* binding */ OffersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8267);



function OffersComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u044B\u0439 \u043F\u043E\u0438\u0441\u043A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function OffersComponent_div_10_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.search(ctx_r5.qDetails); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041F\u043E\u0438\u0441\u043A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", _r1.getClientRects()[0]["y"] + 30 + "px")("left", _r1.getClientRects()[0]["x"] - _r3.getClientRects()[0]["width"] + 30 + "px");
} }
class OffersComponent {
    constructor() {
        this.detailsIsOpen = false;
        this.q = "";
        this.qDetails = {};
    }
    ngOnInit() {
    }
    search(q) {
    }
}
OffersComponent.ɵfac = function OffersComponent_Factory(t) { return new (t || OffersComponent)(); };
OffersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OffersComponent, selectors: [["offers"]], decls: 17, vars: 2, consts: [[1, "Offers__Container"], [1, "Offers__Filter-Add-New-Offer"], [1, "Search-Container", "Offers__Filter"], ["searchForm", "ngForm"], [1, "Search"], ["name", "q", "placeholder", "\u041F\u043E\u0438\u0441\u043A...", 1, "Query", 3, "ngModel", "ngModelChange"], [1, "Settings"], ["settingsIcon", ""], ["type", "button", 1, "Settings-Icon-Btn", 3, "click"], ["class", "Details", 3, "top", "left", 4, "ngIf"], [1, "Add-New-Offer"], [1, "Offers"], [1, "Offers__Offers"], [1, "Offers__Requests"], [1, "Details"], ["details", ""], [1, "Title"], [1, "Items-Container", 3, "ngSubmit"], ["detailsSearchForm", "ngForm"], [1, "Item"], ["name", "username", "placeholder", "\u041D\u0438\u043A"], [1, "Button"]], template: function OffersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OffersComponent_Template_input_ngModelChange_5_listener($event) { return ctx.q = $event; })("ngModelChange", function OffersComponent_Template_input_ngModelChange_5_listener() { return ctx.search(ctx.q); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OffersComponent_Template_button_click_8_listener() { return ctx.detailsIsOpen = !ctx.detailsIsOpen; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, OffersComponent_div_10_Template, 10, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.q);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detailsIsOpen);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.Row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.Column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.Row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.Column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.Form-Container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  position: fixed;\n  top: 100px;\n  left: calc(50% - 250px);\n  width: 500px;\n  height: auto;\n  background: white;\n  box-shadow: #00000025 0 4px 8px 0;\n  border-radius: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Title[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  font-size: 26px;\n  margin: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Warning[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  width: 100%;\n  border: var(--red) solid 2px;\n  background: #fff;\n  color: var(--red);\n  font-size: 18px;\n  padding: 10px 20px;\n  border-radius: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Warning.ok[_ngcontent-%COMP%] {\n  color: var(--green);\n  border-color: var(--green);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n  padding: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n  margin-top: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-family: \"Rubik\", sans-serif;\n  border: #00000020 solid 1px;\n  width: 100%;\n  padding: 10px;\n  font-size: 16px;\n  border-radius: 5px;\n  transition: all 0.1s;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover:not(.ng-touched.ng-invalid), .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover:not(.ng-touched.ng-invalid), .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:hover:not(.ng-touched.ng-invalid) {\n  border-color: #00000040;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus:not(.ng-touched.ng-invalid), .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus:not(.ng-touched.ng-invalid), .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus:not(.ng-touched.ng-invalid) {\n  border-color: var(--lite-blue);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input.ng-touched.ng-invalid[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select.ng-touched.ng-invalid[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border-color: var(--lite-red);\n}\n\n@media screen and (max-width: 469px) {\n  .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 5px;\n  }\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 100%;\n  color: var(--red);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 100px;\n  max-height: 800px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 10px;\n  border-top: #00000030 solid 1px;\n  border-bottom: #00000030 solid 1px;\n  width: 100%;\n  font-size: 16px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Links[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Rubik\", sans-serif;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 550;\n  color: var(--blue);\n  transition: all 0.1s;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: var(--lite-blue);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Button[_ngcontent-%COMP%] {\n  width: calc(100% - 20px);\n  background: transparent;\n  font-size: 16px;\n  font-family: \"Rubik\", sans-serif;\n  font-weight: 550;\n  padding: 7px 15px;\n  cursor: pointer;\n  border: var(--blue) solid 2px;\n  background: #fff;\n  color: var(--blue);\n  margin: 10px;\n  border-radius: 1000px;\n  transition: all 0.1s;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: #fff;\n  background: var(--blue);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Button[_ngcontent-%COMP%]:disabled {\n  color: var(--lite-blue);\n  border-color: var(--lite-blue);\n  cursor: not-allowed;\n}\n\n.Search-Container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 70px;\n  padding: 10px 15px;\n  border-bottom: #00000040 solid 2px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Query[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  width: 100%;\n  height: auto;\n  font-size: 18px;\n  font-family: Arial, Helvetica, sans-serif;\n  padding: 0 15px;\n  height: 100%;\n}\n\n.Search-Container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  flex: 0 0 30px;\n  font-size: 30px;\n  width: 30px;\n  height: 30px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Search[_ngcontent-%COMP%] {\n  content: url(\"/media/icons/search.svg\");\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  background: #fff;\n  border-radius: 5px;\n  width: 40px;\n  height: 40px;\n  padding: 5px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%]::before {\n  font-size: 30px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%]:hover {\n  box-shadow: #00000050 2px 0 8px 0;\n  cursor: pointer;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%]:focus {\n  box-shadow: inset #00000050 2px 0 8px 0;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  content: url(\"/media/icons/slider-settings.svg\");\n  fill: var(--blue);\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%] {\n  width: 600px;\n  position: absolute;\n  background: #fff;\n  border-radius: 10px;\n  padding: 10px;\n  box-shadow: #00000040 0 2px 4px 0;\n}\n\n@media screen and (max-width: 676px) {\n  .Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%] {\n    width: calc(100% - 10px);\n  }\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 10px 0;\n  width: 100%;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  margin: 10px;\n}\n\n@media screen and (max-width: 469px) {\n  .Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-family: \"Rubik\", sans-serif;\n  border: #00000020 solid 1px;\n  width: 100%;\n  padding: 10px;\n  font-size: 16px;\n  border-radius: 5px;\n  transition: all 0.1s;\n  width: 100%;\n  margin: 4px 10px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover:not(.ng-touched.ng-invalid) {\n  border-color: #00000040;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus:not(.ng-touched.ng-invalid) {\n  border-color: var(--lite-blue);\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border-color: var(--lite-red);\n}\n\n@media screen and (max-width: 469px) {\n  .Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 5px;\n  }\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Button[_ngcontent-%COMP%] {\n  width: calc(100% - 20px);\n  background: transparent;\n  font-size: 16px;\n  font-family: \"Rubik\", sans-serif;\n  font-weight: 550;\n  padding: 7px 15px;\n  cursor: pointer;\n  border: var(--blue) solid 2px;\n  background: #fff;\n  color: var(--blue);\n  margin: 10px;\n  border-radius: 1000px;\n  transition: all 0.1s;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: #fff;\n  background: var(--blue);\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Button[_ngcontent-%COMP%]:disabled {\n  color: var(--lite-blue);\n  border-color: var(--lite-blue);\n  cursor: not-allowed;\n}\n\n.Offers__Filter-Add-New-Offer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.Offers__Filter-Add-New-Offer[_ngcontent-%COMP%]   .Offers__Filter[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  width: 1200px;\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.35) 0 1px 2px 0;\n}\n\n@media screen and (max-width: 1700px) {\n  .Offers__Filter-Add-New-Offer[_ngcontent-%COMP%]   .Offers__Filter[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.Offers__Filter-Add-New-Offer[_ngcontent-%COMP%]   .Offers__Filter.Search-Container[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.Offers__Filter-Add-New-Offer[_ngcontent-%COMP%]   .Add-New-Offer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  height: 70px;\n  width: 70px;\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.35) 0 1px 2px 0;\n  color: var(--blue);\n  font-size: 18px;\n  margin-left: 10px;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.Offers__Filter-Add-New-Offer[_ngcontent-%COMP%]   .Add-New-Offer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 40px;\n  flex: 0 0 40px;\n  width: 40px;\n  height: 40px;\n  content: url(\"/media/icons/plus-square.svg\");\n}\n\n.Offers__Filter-Add-New-Offer[_ngcontent-%COMP%]   .Add-New-Offer[_ngcontent-%COMP%]:hover {\n  box-shadow: rgba(0, 0, 0, 0.5) 0 2px 8px 2px;\n}\n\n.Offers__Filter-Add-New-Offer[_ngcontent-%COMP%]   .Add-New-Offer[_ngcontent-%COMP%]:focus {\n  box-shadow: rgba(0, 0, 0, 0.35) 0 1px 2px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcc3R5bGVzLnNhc3MiLCJvZmZlcnMuY29tcG9uZW50LnNhc3MiLCIuLlxcLi5cXHN0eWxlcy5mb3Jtcy5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNDSjs7QURTQTtFQUxJLGFBQUE7RUFDQSxtQkFLZ0I7RUFKaEIsMkJBSCtCO0VBSS9CLHVCQUpnRDtBQ0lwRDs7QURLQTtFQVJJLGFBQUE7RUFDQSxzQkFGa0I7RUFHbEIsMkJBSCtCO0VBSS9CLHVCQUpnRDtBQ1dwRDs7QURqQkE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQ29CSjs7QURWQTtFQUxJLGFBQUE7RUFDQSxtQkFLZ0I7RUFKaEIsMkJBSCtCO0VBSS9CLHVCQUpnRDtBQ3VCcEQ7O0FEZEE7RUFSSSxhQUFBO0VBQ0Esc0JBRmtCO0VBR2xCLDJCQUgrQjtFQUkvQix1QkFKZ0Q7QUM4QnBEOztBQ3VCQTtFRnBESSxhQUFBO0VBQ0Esc0JBRmtCO0VBR2xCLDJCQUgrQjtFQUkvQix1QkFKZ0Q7RUV1RGhELGVBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtBRGpCSjs7QUNrQkk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBRGhCUjs7QUNpQkk7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEZlI7O0FDZ0JRO0VBQ0ksbUJBQUE7RUFDQSwwQkFBQTtBRGRaOztBQ2VJO0VGL0VBLGFBQUE7RUFDQSxzQkFGa0I7RUFHbEIsMkJBSCtCO0VBSS9CLHVCQUpnRDtFRWtGNUMsV0FBQTtFQUNBLGFBQUE7QURWUjs7QUNXUTtFRm5GSixhQUFBO0VBQ0Esc0JBRmtCO0VBR2xCLDJCQUgrQjtFQUkvQix1QkFKZ0Q7RUVz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ICAgIG1hcmdpbjogMFxuICAgIHBhZGRpbmc6IDBcblxuJG5hdl93OjMwMHB4XG4gICAgXG49ZmxleC1jb250YWluZXIoJGRpcjogY29sdW1uLCAkamM6IGZsZXgtc3RhcnQsICRhaTogZmxleC1zdGFydClcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAgZmxleC1kaXJlY3Rpb246ICRkaXJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICRqY1xuICAgIGFsaWduLWl0ZW1zOiAkYWkgXG5cbi5Sb3dcbiAgICArZmxleC1jb250YWluZXIocm93KVxuXG4uQ29sdW1uXG4gICAgK2ZsZXgtY29udGFpbmVyKClcbiIsImh0bWwsIGJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5Sb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uQ29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuaHRtbCwgYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLlJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5Db2x1bW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uRm9ybS1Db250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTAwcHg7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMjUwcHgpO1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6ICMwMDAwMDAyNSAwIDRweCA4cHggMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX1RpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBtYXJnaW46IDEwcHg7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19XYXJuaW5nIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IHZhcigtLXJlZCkgc29saWQgMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogdmFyKC0tcmVkKTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19XYXJuaW5nLm9rIHtcbiAgY29sb3I6IHZhcigtLWdyZWVuKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ncmVlbik7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgaW5wdXQsXG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCBzZWxlY3QsXG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCB0ZXh0YXJlYSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWY7XG4gIGJvcmRlcjogIzAwMDAwMDIwIHNvbGlkIDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIGlucHV0OmhvdmVyOm5vdCgubmctdG91Y2hlZC5uZy1pbnZhbGlkKSxcbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIHNlbGVjdDpob3Zlcjpub3QoLm5nLXRvdWNoZWQubmctaW52YWxpZCksXG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCB0ZXh0YXJlYTpob3Zlcjpub3QoLm5nLXRvdWNoZWQubmctaW52YWxpZCkge1xuICBib3JkZXItY29sb3I6ICMwMDAwMDA0MDtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIGlucHV0OmZvY3VzOm5vdCgubmctdG91Y2hlZC5uZy1pbnZhbGlkKSxcbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIHNlbGVjdDpmb2N1czpub3QoLm5nLXRvdWNoZWQubmctaW52YWxpZCksXG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCB0ZXh0YXJlYTpmb2N1czpub3QoLm5nLXRvdWNoZWQubmctaW52YWxpZCkge1xuICBib3JkZXItY29sb3I6IHZhcigtLWxpdGUtYmx1ZSk7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCBpbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWQsXG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCBzZWxlY3QubmctdG91Y2hlZC5uZy1pbnZhbGlkLFxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgdGV4dGFyZWEubmctdG91Y2hlZC5uZy1pbnZhbGlkIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saXRlLXJlZCk7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjlweCkge1xuICAuRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCBpbnB1dCxcbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIHNlbGVjdCxcbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIHRleHRhcmVhIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCBzcGFuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB2YXIoLS1yZWQpO1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgdGV4dGFyZWEge1xuICByZXNpemU6IHZlcnRpY2FsO1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgbWF4LWhlaWdodDogODAwcHg7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19MaW5rcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci10b3A6ICMwMDAwMDAzMCBzb2xpZCAxcHg7XG4gIGJvcmRlci1ib3R0b206ICMwMDAwMDAzMCBzb2xpZCAxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19MaW5rcyBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZjtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0xpbmtzIGEge1xuICBmb250LXdlaWdodDogNTUwO1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzO1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fTGlua3MgYTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHZhcigtLWxpdGUtYmx1ZSk7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19CdXR0b24ge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1NTA7XG4gIHBhZGRpbmc6IDdweCAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogdmFyKC0tYmx1ZSkgc29saWQgMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0J1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKTtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0J1dHRvbjpkaXNhYmxlZCB7XG4gIGNvbG9yOiB2YXIoLS1saXRlLWJsdWUpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWxpdGUtYmx1ZSk7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5TZWFyY2gtQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogIzAwMDAwMDQwIHNvbGlkIDJweDtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5RdWVyeSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uU2VhcmNoLUNvbnRhaW5lciBpIHtcbiAgZmxleDogMCAwIDMwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZWFyY2gge1xuICBjb250ZW50OiB1cmwoXCIvbWVkaWEvaWNvbnMvc2VhcmNoLnN2Z1wiKTtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuU2V0dGluZ3MtSWNvbi1CdG4ge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogNXB4O1xufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5TZXR0aW5ncy1JY29uLUJ0bjo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5TZXR0aW5ncy1JY29uLUJ0bjpob3ZlciB7XG4gIGJveC1zaGFkb3c6ICMwMDAwMDA1MCAycHggMCA4cHggMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5TZXR0aW5ncy1JY29uLUJ0bjpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IGluc2V0ICMwMDAwMDA1MCAycHggMCA4cHggMDtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuU2V0dGluZ3MtSWNvbi1CdG4gaSB7XG4gIGNvbnRlbnQ6IHVybChcIi9tZWRpYS9pY29ucy9zbGlkZXItc2V0dGluZ3Muc3ZnXCIpO1xuICBmaWxsOiB2YXIoLS1ibHVlKTtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyB7XG4gIHdpZHRoOiA2MDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3gtc2hhZG93OiAjMDAwMDAwNDAgMCAycHggNHB4IDA7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NzZweCkge1xuICAuU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLkRldGFpbHMge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcbiAgfVxufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5EZXRhaWxzIC5UaXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMTBweCAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyAuSXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbjogMTBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2OXB4KSB7XG4gIC5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyAuSXRlbSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5EZXRhaWxzIC5JdGVtIGlucHV0IHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyOiAjMDAwMDAwMjAgc29saWQgMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiA0cHggMTBweDtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyAuSXRlbSBpbnB1dDpob3Zlcjpub3QoLm5nLXRvdWNoZWQubmctaW52YWxpZCkge1xuICBib3JkZXItY29sb3I6ICMwMDAwMDA0MDtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyAuSXRlbSBpbnB1dDpmb2N1czpub3QoLm5nLXRvdWNoZWQubmctaW52YWxpZCkge1xuICBib3JkZXItY29sb3I6IHZhcigtLWxpdGUtYmx1ZSk7XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLkRldGFpbHMgLkl0ZW0gaW5wdXQubmctdG91Y2hlZC5uZy1pbnZhbGlkIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saXRlLXJlZCk7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjlweCkge1xuICAuU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLkRldGFpbHMgLkl0ZW0gaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyAuQnV0dG9uIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTUwO1xuICBwYWRkaW5nOiA3cHggMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IHZhcigtLWJsdWUpIHNvbGlkIDJweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xuICBtYXJnaW46IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLkRldGFpbHMgLkJ1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKTtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyAuQnV0dG9uOmRpc2FibGVkIHtcbiAgY29sb3I6IHZhcigtLWxpdGUtYmx1ZSk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbGl0ZS1ibHVlKTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLk9mZmVyc19fRmlsdGVyLUFkZC1OZXctT2ZmZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLk9mZmVyc19fRmlsdGVyLUFkZC1OZXctT2ZmZXIgLk9mZmVyc19fRmlsdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAxMjAwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMCAxcHggMnB4IDA7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNzAwcHgpIHtcbiAgLk9mZmVyc19fRmlsdGVyLUFkZC1OZXctT2ZmZXIgLk9mZmVyc19fRmlsdGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLk9mZmVyc19fRmlsdGVyLUFkZC1OZXctT2ZmZXIgLk9mZmVyc19fRmlsdGVyLlNlYXJjaC1Db250YWluZXIge1xuICBib3JkZXI6IG5vbmU7XG59XG4uT2ZmZXJzX19GaWx0ZXItQWRkLU5ldy1PZmZlciAuQWRkLU5ldy1PZmZlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiA3MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDAgMXB4IDJweCAwO1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG4uT2ZmZXJzX19GaWx0ZXItQWRkLU5ldy1PZmZlciAuQWRkLU5ldy1PZmZlciBpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZmxleDogMCAwIDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGNvbnRlbnQ6IHVybChcIi9tZWRpYS9pY29ucy9wbHVzLXNxdWFyZS5zdmdcIik7XG59XG4uT2ZmZXJzX19GaWx0ZXItQWRkLU5ldy1PZmZlciAuQWRkLU5ldy1PZmZlcjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC41KSAwIDJweCA4cHggMnB4O1xufVxuLk9mZmVyc19fRmlsdGVyLUFkZC1OZXctT2ZmZXIgLkFkZC1OZXctT2ZmZXI6Zm9jdXMge1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDAgMXB4IDJweCAwO1xufSIsIkBpbXBvcnQgXCJzcmMvc3R5bGVzLnNhc3NcIlxyXG4gICAgXHJcbj1maWVsZCgpXHJcbiAgICBmb250LXdlaWdodDogNTAwXHJcbiAgICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmXHJcbiAgICBib3JkZXI6ICMwMDAwMDAyMCBzb2xpZCAxcHhcclxuICAgIHdpZHRoOiAxMDAlXHJcbiAgICBwYWRkaW5nOiAxMHB4XHJcbiAgICBmb250LXNpemU6IDE2cHhcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweFxyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4xc1xyXG4gICAgJjpob3Zlcjpub3QoLm5nLXRvdWNoZWQubmctaW52YWxpZClcclxuICAgICAgICBib3JkZXItY29sb3I6ICMwMDAwMDA0MFxyXG4gICAgJjpmb2N1czpub3QoLm5nLXRvdWNoZWQubmctaW52YWxpZClcclxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWxpdGUtYmx1ZSlcclxuICAgICYubmctdG91Y2hlZC5uZy1pbnZhbGlkXHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saXRlLXJlZClcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kICggbWF4LXdpZHRoOiA0NjlweCApXHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4XHJcbiAgICAgICAgcGFkZGluZzogNXB4XHJcblxyXG49YnV0dG9uKClcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KVxyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnRcclxuICAgIGZvbnQtc2l6ZTogMTZweFxyXG4gICAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZlxyXG4gICAgZm9udC13ZWlnaHQ6IDU1MFxyXG4gICAgcGFkZGluZzogN3B4IDE1cHhcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG4gICAgYm9yZGVyOiB2YXIoLS1ibHVlKSBzb2xpZCAycHhcclxuICAgIGJhY2tncm91bmQ6ICNmZmZcclxuICAgIGNvbG9yOiB2YXIoLS1ibHVlKVxyXG4gICAgbWFyZ2luOiAxMHB4XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAwcHhcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMXNcclxuICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZClcclxuICAgICAgICBjb2xvcjogI2ZmZlxyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJsdWUpXHJcbiAgICAmOmRpc2FibGVkXHJcbiAgICAgICAgY29sb3I6IHZhcigtLWxpdGUtYmx1ZSlcclxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWxpdGUtYmx1ZSlcclxuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkXHJcblxyXG49bWFuYWdlLWJ1dHRvbigkdywgJGgpXHJcbiAgICBvdXRsaW5lOiBub25lXHJcbiAgICBib3JkZXI6IG5vbmVcclxuICAgIGJhY2tncm91bmQ6ICNmZmZcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweFxyXG4gICAgd2lkdGg6ICR3XHJcbiAgICBoZWlnaHQ6ICRoXHJcbiAgICBwYWRkaW5nOiA1cHhcclxuICAgICY6OmJlZm9yZVxyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweFxyXG4gICAgJjpob3ZlclxyXG4gICAgICAgIGJveC1zaGFkb3c6ICMwMDAwMDA1MCAycHggMCA4cHggMFxyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlclxyXG4gICAgJjpmb2N1c1xyXG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0ICMwMDAwMDA1MCAycHggMCA4cHggMFxyXG5cclxuLkZvcm0tQ29udGFpbmVyXHJcbiAgICArZmxleC1jb250YWluZXIoKVxyXG4gICAgcG9zaXRpb246IGZpeGVkXHJcbiAgICB0b3A6IDEwMHB4XHJcbiAgICBsZWZ0OiBjYWxjKCA1MCUgLSAyNTBweCApXHJcbiAgICB3aWR0aDogNTAwcHhcclxuICAgIGhlaWdodDogYXV0b1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGVcclxuICAgIGJveC1zaGFkb3c6ICMwMDAwMDAyNSAwIDRweCA4cHggMFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweFxyXG4gICAgLkZvcm0tQ29udGFpbmVyX19UaXRsZVxyXG4gICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgICAgICAgZm9udC1zaXplOiAyNnB4XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4XHJcbiAgICAuRm9ybS1Db250YWluZXJfX1dhcm5pbmdcclxuICAgICAgICBtYXJnaW46IDEwcHggMFxyXG4gICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgYm9yZGVyOiB2YXIoLS1yZWQpIHNvbGlkIDJweFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZcclxuICAgICAgICBjb2xvcjogdmFyKC0tcmVkKVxyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweFxyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweFxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHhcclxuICAgICAgICAmLm9rXHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ncmVlbilcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ncmVlbilcclxuICAgIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lclxyXG4gICAgICAgICtmbGV4LWNvbnRhaW5lcigpXHJcbiAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgICBwYWRkaW5nOiAxMHB4XHJcbiAgICAgICAgLkZpZWxkXHJcbiAgICAgICAgICAgICtmbGV4LWNvbnRhaW5lcigpXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHhcclxuICAgICAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgICAgIHNlbGVjdCxcclxuICAgICAgICAgICAgdGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICtmaWVsZCgpXHJcbiAgICAgICAgICAgIHNwYW5cclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcmVkKVxyXG4gICAgICAgICAgICB0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgcmVzaXplOiB2ZXJ0aWNhbFxyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTAwcHhcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDgwMHB4XHJcbiAgICAuRm9ybS1Db250YWluZXJfX0xpbmtzXHJcbiAgICAgICAgK2ZsZXgtY29udGFpbmVyKHJvdylcclxuICAgICAgICBwYWRkaW5nOiAxMHB4XHJcbiAgICAgICAgYm9yZGVyLXRvcDogIzAwMDAwMDMwIHNvbGlkIDFweFxyXG4gICAgICAgIGJvcmRlci1ib3R0b206ICMwMDAwMDAzMCBzb2xpZCAxcHhcclxuICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweFxyXG4gICAgICAgIHNwYW5cclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZlxyXG4gICAgICAgIGFcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDU1MFxyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYmx1ZSlcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4xc1xyXG4gICAgICAgICAgICAmOmhvdmVyXHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXJcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1saXRlLWJsdWUpXHJcbiAgICAuRm9ybS1Db250YWluZXJfX0J1dHRvblxyXG4gICAgICAgICtidXR0b24oKVxyXG5cclxuXHJcbi5TZWFyY2gtQ29udGFpbmVyXHJcbiAgICArZmxleC1jb250YWluZXIocm93LCBjZW50ZXIsIGNlbnRlcilcclxuICAgIHdpZHRoOiAxMDAlXHJcbiAgICBoZWlnaHQ6IDcwcHhcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweFxyXG4gICAgYm9yZGVyLWJvdHRvbTogIzAwMDAwMDQwIHNvbGlkIDJweFxyXG4gICAgLlF1ZXJ5XHJcbiAgICAgICAgYm9yZGVyOiBub25lXHJcbiAgICAgICAgb3V0bGluZTogbm9uZVxyXG4gICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvXHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWZcclxuICAgICAgICBwYWRkaW5nOiAwIDE1cHhcclxuICAgICAgICBoZWlnaHQ6IDEwMCVcclxuICAgIGlcclxuICAgICAgICBmbGV4OiAwIDAgMzBweFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweFxyXG4gICAgICAgIHdpZHRoOiAzMHB4XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4XHJcbiAgICAuU2VhcmNoXHJcbiAgICAgICAgY29udGVudDogdXJsKFwiL21lZGlhL2ljb25zL3NlYXJjaC5zdmdcIilcclxuICAgIC5TZXR0aW5nc1xyXG4gICAgICAgIC5TZXR0aW5ncy1JY29uLUJ0blxyXG4gICAgICAgICAgICArbWFuYWdlLWJ1dHRvbig0MHB4LCA0MHB4KVxyXG4gICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiB1cmwoXCIvbWVkaWEvaWNvbnMvc2xpZGVyLXNldHRpbmdzLnN2Z1wiKVxyXG4gICAgICAgICAgICAgICAgZmlsbDogdmFyKC0tYmx1ZSlcclxuICAgICAgICAuRGV0YWlsc1xyXG4gICAgICAgICAgICB3aWR0aDogNjAwcHhcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6ICMwMDAwMDA0MCAwIDJweCA0cHggMFxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAoIG1heC13aWR0aDogNjc2cHggKVxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpXHJcbiAgICAgICAgICAgIC5UaXRsZVxyXG4gICAgICAgICAgICAgICAgK2ZsZXgtY29udGFpbmVyKHJvdywgY2VudGVyKVxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgICAgICAuSXRlbVxyXG4gICAgICAgICAgICAgICAgK2ZsZXgtY29udGFpbmVyKHJvdylcclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kICggbWF4LXdpZHRoOiA0NjlweCApXHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4XHJcbiAgICAgICAgICAgICAgICBpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICtmaWVsZCgpXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDRweCAxMHB4XHJcbiAgICAgICAgICAgIC5CdXR0b25cclxuICAgICAgICAgICAgICAgICtidXR0b24oKSJdfQ== */"] });


/***/ }),

/***/ 9967:
/*!**********************************************************!*\
  !*** ./src/app/personal-area/personal-area.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalAreaComponent": () => (/* binding */ PersonalAreaComponent)
/* harmony export */ });
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ 1133);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/account.service */ 5921);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);







function PersonalAreaComponent_form_0_span_3_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PersonalAreaComponent_form_0_span_3_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r27.startEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PersonalAreaComponent_form_0_span_3_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "button", 31);
} }
function PersonalAreaComponent_form_0_span_3_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PersonalAreaComponent_form_0_span_3_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r29.endEdit(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PersonalAreaComponent_form_0_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PersonalAreaComponent_form_0_span_3_button_1_Template, 1, 0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PersonalAreaComponent_form_0_span_3_button_2_Template, 1, 0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PersonalAreaComponent_form_0_span_3_button_3_Template, 1, 0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.isEditing);
} }
function PersonalAreaComponent_form_0_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PersonalAreaComponent_form_0_span_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r31.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PersonalAreaComponent_form_0_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.user.firstName);
} }
function PersonalAreaComponent_form_0_div_28_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PersonalAreaComponent_form_0_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PersonalAreaComponent_form_0_div_28_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r35.user.firstName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PersonalAreaComponent_form_0_div_28_span_3_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r5.user.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r33.errors == null ? null : _r33.errors.required);
} }
function PersonalAreaComponent_form_0_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.user.lastName);
} }
function PersonalAreaComponent_form_0_div_33_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PersonalAreaComponent_form_0_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 41, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PersonalAreaComponent_form_0_div_33_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r39.user.lastName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PersonalAreaComponent_form_0_div_33_span_3_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r7.user.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r37.errors == null ? null : _r37.errors.required);
} }
function PersonalAreaComponent_form_0_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r8.user.profile.patronymic || "\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u043E.");
} }
function PersonalAreaComponent_form_0_div_38_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PersonalAreaComponent_form_0_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 43, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PersonalAreaComponent_form_0_div_38_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r43.user.profile.patronymic = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PersonalAreaComponent_form_0_div_38_span_3_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r9.user.profile.patronymic);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r41.errors == null ? null : _r41.errors.required);
} }
function PersonalAreaComponent_form_0_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10.user.profile.age + " \u043B\u0435\u0442");
} }
function PersonalAreaComponent_form_0_div_43_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PersonalAreaComponent_form_0_div_43_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PersonalAreaComponent_form_0_div_43_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r47.user.profile.age = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PersonalAreaComponent_form_0_div_43_span_3_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r11.user.profile.age);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r45.errors == null ? null : _r45.errors.required);
} }
function PersonalAreaComponent_form_0_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx_r12.user.profile == null ? null : ctx_r12.user.profile.country) || "\u0421\u0442\u0440\u0430\u043D\u0430 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u0430.");
} }
function PersonalAreaComponent_form_0_div_48_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 - 128 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PersonalAreaComponent_form_0_div_48_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PersonalAreaComponent_form_0_div_48_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r51.user.profile.country = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PersonalAreaComponent_form_0_div_48_span_3_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r13.user.profile.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r49.errors == null ? null : _r49.errors.maxlength);
} }
function PersonalAreaComponent_form_0_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx_r14.user.profile == null ? null : ctx_r14.user.profile.city) || "\u0413\u043E\u0440\u043E\u0434 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D.");
} }
function PersonalAreaComponent_form_0_div_53_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 - 128 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PersonalAreaComponent_form_0_div_53_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 49, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PersonalAreaComponent_form_0_div_53_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r55.user.profile.city = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PersonalAreaComponent_form_0_div_53_span_3_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r15.user.profile.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r53.errors == null ? null : _r53.errors.maxlength);
} }
function PersonalAreaComponent_form_0_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx_r16.user.profile == null ? null : ctx_r16.user.profile.district) || "\u0420\u0430\u0439\u043E\u043D/\u0423\u043B\u0438\u0446\u0430 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u044B.");
} }
function PersonalAreaComponent_form_0_div_58_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 - 128 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PersonalAreaComponent_form_0_div_58_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 51, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PersonalAreaComponent_form_0_div_58_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r60); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r59.user.profile.district = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PersonalAreaComponent_form_0_div_58_span_3_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r17.user.profile.district);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r57.errors == null ? null : _r57.errors.maxlength);
} }
function PersonalAreaComponent_form_0_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx_r18.user.profile == null ? null : ctx_r18.user.profile.about_me) || "\u041E \u0441\u0435\u0431\u0435 \u043D\u0435 \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u043E.");
} }
function PersonalAreaComponent_form_0_div_63_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "textarea", 53, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PersonalAreaComponent_form_0_div_63_Template_textarea_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r63); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r62.user.profile.about_me = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r19.user.profile.about_me);
} }
function PersonalAreaComponent_form_0_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r20.user.email);
} }
function PersonalAreaComponent_form_0_div_72_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PersonalAreaComponent_form_0_div_72_Template(rf, ctx) { if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 55, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PersonalAreaComponent_form_0_div_72_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r67); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r66.user.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PersonalAreaComponent_form_0_div_72_span_3_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r21.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r64.errors == null ? null : _r64.errors.required);
} }
function PersonalAreaComponent_form_0_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx_r22.user.profile == null ? null : ctx_r22.user.profile.phone) || "\u0422\u0435\u043B\u0435\u0444\u043E\u043D \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D.");
} }
function PersonalAreaComponent_form_0_div_77_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PersonalAreaComponent_form_0_div_77_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 57, 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PersonalAreaComponent_form_0_div_77_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r71); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r70.user.profile.phone = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PersonalAreaComponent_form_0_div_77_span_3_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r23.user.profile.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r68.errors == null ? null : _r68.errors.required);
} }
function PersonalAreaComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function PersonalAreaComponent_form_0_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r73); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r72.endEdit(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PersonalAreaComponent_form_0_span_3_Template, 4, 3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, PersonalAreaComponent_form_0_span_4_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "main", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "online");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "\u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "\u0418\u043C\u044F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, PersonalAreaComponent_form_0_div_27_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, PersonalAreaComponent_form_0_div_28_Template, 4, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, PersonalAreaComponent_form_0_div_32_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, PersonalAreaComponent_form_0_div_33_Template, 4, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, PersonalAreaComponent_form_0_div_37_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, PersonalAreaComponent_form_0_div_38_Template, 4, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "\u0412\u043E\u0437\u0440\u0430\u0441\u0442:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, PersonalAreaComponent_form_0_div_42_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, PersonalAreaComponent_form_0_div_43_Template, 4, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "\u0421\u0442\u0440\u0430\u043D\u0430:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, PersonalAreaComponent_form_0_div_47_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, PersonalAreaComponent_form_0_div_48_Template, 4, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "\u0413\u043E\u0440\u043E\u0434:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, PersonalAreaComponent_form_0_div_52_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, PersonalAreaComponent_form_0_div_53_Template, 4, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "\u0420\u0430\u0439\u043E\u043D/\u0423\u043B\u0438\u0446\u0430:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, PersonalAreaComponent_form_0_div_57_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](58, PersonalAreaComponent_form_0_div_58_Template, 4, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "\u041E \u0441\u0435\u0431\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](62, PersonalAreaComponent_form_0_div_62_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](63, PersonalAreaComponent_form_0_div_63_Template, 3, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](71, PersonalAreaComponent_form_0_div_71_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](72, PersonalAreaComponent_form_0_div_72_Template, 4, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](76, PersonalAreaComponent_form_0_div_76_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](77, PersonalAreaComponent_form_0_div_77_Template, 4, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](78, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.checkUser());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.checkUser());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.user.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx_r0.user.profile == null ? null : ctx_r0.user.profile.status) || "\u0421\u0442\u0430\u0442\u0443\u0441 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.checkUserInSchoolStatus(ctx_r0.user.profile.user_in_school_status));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.isEditing && ctx_r0.checkUser());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.isEditing && ctx_r0.checkUser());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.isEditing && ctx_r0.checkUser());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.isEditing && ctx_r0.checkUser());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.isEditing && ctx_r0.checkUser());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.isEditing && ctx_r0.checkUser());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.isEditing && ctx_r0.checkUser());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.isEditing && ctx_r0.checkUser());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.isEditing && ctx_r0.checkUser());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.isEditing && ctx_r0.checkUser());
} }
class PersonalAreaComponent {
    constructor(_router, _route, _store, _account) {
        this._router = _router;
        this._route = _route;
        this._store = _store;
        this._account = _account;
        this.isEditing = false;
    }
    ngOnInit() {
        this._route.queryParams.subscribe(p => {
            this._store.subscribe(data => {
                this.currentUser = data.account.user;
            });
            this._account.getUser({ id: p["id"] }).subscribe(data => {
                if (data.result && data.data.user) {
                    let { id, username, email, first_name, last_name, profile } = data.data.user;
                    let { patronymic, phone, age, status, user_in_school_status, city, country, about_me, district } = profile;
                    let p = new _models_user_model__WEBPACK_IMPORTED_MODULE_0__.Profile(profile.id, profile.user, phone, patronymic, age, user_in_school_status, status, country, city, about_me, district);
                    this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_0__.User(id, username, email, first_name, last_name, p);
                }
            });
        });
    }
    startEdit() {
        if (this.checkUser())
            this.isEditing = true;
    }
    endEdit(ok) {
        if (ok && this.user && this.checkUser()) {
            let user = this.user.toJSON();
            this._account.editProfile(user).subscribe(data => {
                if (data.result) {
                    console.log(data.message);
                }
                else {
                    console.error(data.message);
                }
            });
        }
        this.isEditing = false;
    }
    checkUserInSchoolStatus(status) {
        if (status === "student")
            return "Ученик";
        else if (status === "admin")
            return "Админ";
        else if (status === "teacher")
            return "Учитель";
        else if (status === "parent")
            return "Родитель";
        else if (status === "moderator")
            return "Модератор";
        else
            return "";
    }
    checkUser() {
        var _a, _b;
        return ((_a = this.user) === null || _a === void 0 ? void 0 : _a.id) === ((_b = this.currentUser) === null || _b === void 0 ? void 0 : _b.id);
    }
    logout() {
        this._account.logout().subscribe(data => {
            if (data.result)
                this._router.navigateByUrl("/login");
        });
    }
}
PersonalAreaComponent.ɵfac = function PersonalAreaComponent_Factory(t) { return new (t || PersonalAreaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_1__.AccountService)); };
PersonalAreaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PersonalAreaComponent, selectors: [["personal-area"]], decls: 1, vars: 1, consts: [["class", "Profile", 3, "ngSubmit", 4, "ngIf"], [1, "Profile", 3, "ngSubmit"], ["editProfileForm", "ngForm"], [1, "Profile__Tools-Nav"], ["class", "Item-1", 4, "ngIf"], ["class", "Item-2", "type", "button", 4, "ngIf"], [1, "Profile__Content"], [1, "Profile__Content__Status-User-Information"], [1, "Item-1"], [1, "Avatar"], ["src", "/media/icons/profile.png", "alt", ""], [1, "Username-Status"], [1, "Username"], [1, "Status"], [1, "Item-2"], [1, "User-In-School-Status"], [1, "Online-Status"], [1, "Profile__Content__Main-User-Information"], [1, "Title"], [1, "Content"], [1, "Item"], [1, "Key"], ["class", "Description", 4, "ngIf"], ["class", "Field", 4, "ngIf"], [1, "Profile__Content__Contacts-User-Information"], [1, "Profile__Content__Projects-User-Information"], [1, "Profile__Content__Password-Change"], ["type", "button", "class", "Edit-Btn", 3, "click", 4, "ngIf"], ["type", "submit", "class", "Ok-Edit-Btn", 4, "ngIf"], ["type", "button", "class", "Not-Edit-Btn", 3, "click", 4, "ngIf"], ["type", "button", 1, "Edit-Btn", 3, "click"], ["type", "submit", 1, "Ok-Edit-Btn"], ["type", "button", 1, "Not-Edit-Btn", 3, "click"], ["type", "button", 1, "Item-2"], [3, "click"], [1, "Description"], [1, "Field"], ["name", "firstName", "required", "", "maxlength", "64", 1, "Edit-Description", 3, "ngModel", "ngModelChange"], ["firstName", "ngModel"], ["class", "Validator", 4, "ngIf"], [1, "Validator"], ["name", "lastName", "required", "", "maxlength", "64", 1, "Edit-Description", 3, "ngModel", "ngModelChange"], ["lastName", "ngModel"], ["name", "patronymic", "required", "", "maxlength", "64", 1, "Edit-Description", 3, "ngModel", "ngModelChange"], ["patronymic", "ngModel"], ["name", "age", "required", "", "type", "number", "max", "128", 1, "Edit-Description", 3, "ngModel", "ngModelChange"], ["age", "ngModel"], ["name", "country", "maxlength", "128", 1, "Edit-Description", 3, "ngModel", "ngModelChange"], ["country", "ngModel"], ["name", "city", "maxlength", "64", "maxlength", "128", 1, "Edit-Description", 3, "ngModel", "ngModelChange"], ["city", "ngModel"], ["name", "district", "maxlength", "64", "maxlength", "128", 1, "Edit-Description", 3, "ngModel", "ngModelChange"], ["district", "ngModel"], ["name", "about_me", "maxlength", "64", 1, "Edit-Description", 3, "ngModel", "ngModelChange"], ["about_me", "ngModel"], ["name", "email", "required", "", "maxlength", "64", 1, "Edit-Description", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["name", "phone", "required", "", "maxlength", "16", 1, "Edit-Description", 3, "ngModel", "ngModelChange"], ["phone", "ngModel"]], template: function PersonalAreaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PersonalAreaComponent_form_0_Template, 80, 25, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.Row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.Column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.Row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.Column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.Form-Container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  position: fixed;\n  top: 100px;\n  left: calc(50% - 250px);\n  width: 500px;\n  height: auto;\n  background: white;\n  box-shadow: #00000025 0 4px 8px 0;\n  border-radius: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Title[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  font-size: 26px;\n  margin: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Warning[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  width: 100%;\n  border: var(--red) solid 2px;\n  background: #fff;\n  color: var(--red);\n  font-size: 18px;\n  padding: 10px 20px;\n  border-radius: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Warning.ok[_ngcontent-%COMP%] {\n  color: var(--green);\n  border-color: var(--green);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n  padding: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n  margin-top: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-family: \"Rubik\", sans-serif;\n  border: #00000020 solid 1px;\n  width: 100%;\n  padding: 10px;\n  font-size: 16px;\n  border-radius: 5px;\n  transition: all 0.1s;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover:not(.ng-touched.ng-invalid), .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover:not(.ng-touched.ng-invalid), .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:hover:not(.ng-touched.ng-invalid) {\n  border-color: #00000040;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus:not(.ng-touched.ng-invalid), .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus:not(.ng-touched.ng-invalid), .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus:not(.ng-touched.ng-invalid) {\n  border-color: var(--lite-blue);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input.ng-touched.ng-invalid[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select.ng-touched.ng-invalid[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border-color: var(--lite-red);\n}\n\n@media screen and (max-width: 469px) {\n  .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 5px;\n  }\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 100%;\n  color: var(--red);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 100px;\n  max-height: 800px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 10px;\n  border-top: #00000030 solid 1px;\n  border-bottom: #00000030 solid 1px;\n  width: 100%;\n  font-size: 16px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Links[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Rubik\", sans-serif;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 550;\n  color: var(--blue);\n  transition: all 0.1s;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: var(--lite-blue);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Button[_ngcontent-%COMP%] {\n  width: calc(100% - 20px);\n  background: transparent;\n  font-size: 16px;\n  font-family: \"Rubik\", sans-serif;\n  font-weight: 550;\n  padding: 7px 15px;\n  cursor: pointer;\n  border: var(--blue) solid 2px;\n  background: #fff;\n  color: var(--blue);\n  margin: 10px;\n  border-radius: 1000px;\n  transition: all 0.1s;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: #fff;\n  background: var(--blue);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Button[_ngcontent-%COMP%]:disabled {\n  color: var(--lite-blue);\n  border-color: var(--lite-blue);\n  cursor: not-allowed;\n}\n\n.Search-Container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 70px;\n  padding: 10px 15px;\n  border-bottom: #00000040 solid 2px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Query[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  width: 100%;\n  height: auto;\n  font-size: 18px;\n  font-family: Arial, Helvetica, sans-serif;\n  padding: 0 15px;\n  height: 100%;\n}\n\n.Search-Container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  flex: 0 0 30px;\n  font-size: 30px;\n  width: 30px;\n  height: 30px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Search[_ngcontent-%COMP%] {\n  content: url(\"/media/icons/search.svg\");\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  background: #fff;\n  border-radius: 5px;\n  width: 40px;\n  height: 40px;\n  padding: 5px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%]::before {\n  font-size: 30px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%]:hover {\n  box-shadow: #00000050 2px 0 8px 0;\n  cursor: pointer;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%]:focus {\n  box-shadow: inset #00000050 2px 0 8px 0;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  content: url(\"/media/icons/slider-settings.svg\");\n  fill: var(--blue);\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%] {\n  width: 600px;\n  position: absolute;\n  background: #fff;\n  border-radius: 10px;\n  padding: 10px;\n  box-shadow: #00000040 0 2px 4px 0;\n}\n\n@media screen and (max-width: 676px) {\n  .Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%] {\n    width: calc(100% - 10px);\n  }\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 10px 0;\n  width: 100%;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  margin: 10px;\n}\n\n@media screen and (max-width: 469px) {\n  .Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-family: \"Rubik\", sans-serif;\n  border: #00000020 solid 1px;\n  width: 100%;\n  padding: 10px;\n  font-size: 16px;\n  border-radius: 5px;\n  transition: all 0.1s;\n  width: 100%;\n  margin: 4px 10px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover:not(.ng-touched.ng-invalid) {\n  border-color: #00000040;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus:not(.ng-touched.ng-invalid) {\n  border-color: var(--lite-blue);\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border-color: var(--lite-red);\n}\n\n@media screen and (max-width: 469px) {\n  .Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 5px;\n  }\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Button[_ngcontent-%COMP%] {\n  width: calc(100% - 20px);\n  background: transparent;\n  font-size: 16px;\n  font-family: \"Rubik\", sans-serif;\n  font-weight: 550;\n  padding: 7px 15px;\n  cursor: pointer;\n  border: var(--blue) solid 2px;\n  background: #fff;\n  color: var(--blue);\n  margin: 10px;\n  border-radius: 1000px;\n  transition: all 0.1s;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: #fff;\n  background: var(--blue);\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Button[_ngcontent-%COMP%]:disabled {\n  color: var(--lite-blue);\n  border-color: var(--lite-blue);\n  cursor: not-allowed;\n}\n\n.Profile[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n  padding: 0 30px;\n}\n\n.Profile[_ngcontent-%COMP%]   .Profile__Tools-Nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: auto;\n  padding: 15px 15px 0 0;\n}\n\n.Profile[_ngcontent-%COMP%]   .Profile__Tools-Nav[_ngcontent-%COMP%]   .Item-1[_ngcontent-%COMP%] {\n  border-right: var(--blue) solid 2px;\n}\n\n.Profile[_ngcontent-%COMP%]   .Profile__Tools-Nav[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-right: 7px;\n  margin-right: 7px;\n}\n\n.Profile[_ngcontent-%COMP%]   .Profile__Tools-Nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  background: #fff;\n  border-radius: 5px;\n  width: 40px;\n  height: 40px;\n  padding: 5px;\n}\n\n.Profile[_ngcontent-%COMP%]   .Profile__Tools-Nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]::before {\n  font-size: 30px;\n}\n\n.Profile[_ngcontent-%COMP%]   .Profile__Tools-Nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  box-shadow: #00000050 2px 0 8px 0;\n  cursor: pointer;\n}\n\n.Profile[_ngcontent-%COMP%]   .Profile__Tools-Nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  box-shadow: inset #00000050 2px 0 8px 0;\n}\n\n.Profile[_ngcontent-%COMP%]   .Profile__Tools-Nav[_ngcontent-%COMP%]   .Item-1[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.Profile[_ngcontent-%COMP%]   .Profile__Tools-Nav[_ngcontent-%COMP%]   .Item-1[_ngcontent-%COMP%]   .Edit-Btn[_ngcontent-%COMP%]::before {\n  content: url(\"/media/icons/edit-alt.svg\");\n}\n\n.Profile[_ngcontent-%COMP%]   .Profile__Tools-Nav[_ngcontent-%COMP%]   .Item-1[_ngcontent-%COMP%]   .Ok-Edit-Btn[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.Profile[_ngcontent-%COMP%]   .Profile__Tools-Nav[_ngcontent-%COMP%]   .Item-1[_ngcontent-%COMP%]   .Ok-Edit-Btn[_ngcontent-%COMP%]::before {\n  content: url(\"/media/icons/check-circle.svg\");\n}\n\n.Profile[_ngcontent-%COMP%]   .Profile__Tools-Nav[_ngcontent-%COMP%]   .Item-1[_ngcontent-%COMP%]   .Not-Edit-Btn[_ngcontent-%COMP%]::before {\n  content: url(\"/media/icons/times-circle.svg\");\n}\n\n.Profile[_ngcontent-%COMP%]   .Profile__Tools-Nav[_ngcontent-%COMP%]   .Item-2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]::before {\n  content: url(\"/media/icons/sign-out-alt.svg\");\n}\n\n.Profile[_ngcontent-%COMP%]   .Profile__Content[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n\n.Profile[_ngcontent-%COMP%]   .Profile__Content[_ngcontent-%COMP%]   span.Validator[_ngcontent-%COMP%] {\n  color: var(--red);\n  font-size: 15px;\n  padding: 5px;\n}\n\n.Profile[_ngcontent-%COMP%]   .Profile__Content[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.Profile[_ngcontent-%COMP%]   .Profile__Content[_ngcontent-%COMP%]   .Profile__Content__Status-User-Information[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  height: auto;\n  width: 100%;\n  padding: 0 0 15px 0;\n  border-bottom: var(--blue) solid 1px;\n}\n\n.Profile[_ngcontent-%COMP%]   .Profile__Content[_ngcontent-%COMP%]   .Profile__Content__Status-User-Information[_ngcontent-%COMP%]   .Item-1[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  height: auto;\n}\n\n.Profile[_ngcontent-%COMP%]   .Profile__Content[_ngcontent-%COMP%]   .Profile__Content__Status-User-Information[_ngcontent-%COMP%]   .Item-1[_ngcontent-%COMP%]   .Avatar[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.Profile[_ngcontent-%COMP%]   .Profile__Content[_ngcontent-%COMP%]   .Profile__Content__Status-User-Information[_ngcontent-%COMP%]   .Item-1[_ngcontent-%COMP%]   .Avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100px;\n  height: 100px;\n  border-radius: 100%;\n}\n\n.Profile[_ngcontent-%COMP%]   .Profile__Content[_ngcontent-%COMP%]   .Profile__Content__Status-User-Information[_ngcontent-%COMP%]   .Item-1[_ngcontent-%COMP%]   .Username-Status[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-start;\n  height: 50px;\n  margin-left: 15px;\n}\n\n.Profile[_ngcontent-%COMP%]   .Profile__Content[_ngcontent-%COMP%]   .Profile__Content__Status-User-Information[_ngcontent-%COMP%]   .Item-1[_ngcontent-%COMP%]   .Username-Status[_ngcontent-%COMP%]   .Username[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.Profile[_ngcontent-%COMP%]   .Profile__Content[_ngcontent-%COMP%]   .Profile__Content__Status-User-Information[_ngcontent-%COMP%]   .Item-1[_ngcontent-%COMP%]   .Username-Status[_ngcontent-%COMP%]   .Status[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n\n.Profile[_ngcontent-%COMP%]   .Profile__Content[_ngcontent-%COMP%]   .Profile__Content__Status-User-Information[_ngcontent-%COMP%]   .Item-2[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-end;\n  height: 50px;\n}\n\n.Profile[_ngcontent-%COMP%]   .Profile__Content[_ngcontent-%COMP%]   .Profile__Content__Status-User-Information[_ngcontent-%COMP%]   .Item-2[_ngcontent-%COMP%]   .User-In-School-Status[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #00000090;\n}\n\n.Profile[_ngcontent-%COMP%]   .Profile__Content[_ngcontent-%COMP%]   .Profile__Content__Status-User-Information[_ngcontent-%COMP%]   .Item-2[_ngcontent-%COMP%]   .Online-Status[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #00000090;\n}\n\n.Profile[_ngcontent-%COMP%]   .Title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  width: 100%;\n  font-size: 26px;\n  margin-bottom: 10px;\n}\n\n.Profile[_ngcontent-%COMP%]   .Content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n}\n\n.Profile[_ngcontent-%COMP%]   .Content[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n  font-size: 18px;\n  margin-top: 10px;\n}\n\n.Profile[_ngcontent-%COMP%]   .Content[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Key[_ngcontent-%COMP%] {\n  width: 150px;\n  min-width: 150px;\n}\n\n.Profile[_ngcontent-%COMP%]   .Content[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Description[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.Profile[_ngcontent-%COMP%]   .Content[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Edit-Description[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-family: \"Rubik\", sans-serif;\n  border: #00000020 solid 1px;\n  width: 100%;\n  padding: 10px;\n  font-size: 16px;\n  border-radius: 5px;\n  transition: all 0.1s;\n  width: 400px;\n}\n\n.Profile[_ngcontent-%COMP%]   .Content[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Edit-Description[_ngcontent-%COMP%]:hover:not(.ng-touched.ng-invalid) {\n  border-color: #00000040;\n}\n\n.Profile[_ngcontent-%COMP%]   .Content[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Edit-Description[_ngcontent-%COMP%]:focus:not(.ng-touched.ng-invalid) {\n  border-color: var(--lite-blue);\n}\n\n.Profile[_ngcontent-%COMP%]   .Content[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Edit-Description.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border-color: var(--lite-red);\n}\n\n@media screen and (max-width: 469px) {\n  .Profile[_ngcontent-%COMP%]   .Content[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Edit-Description[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 5px;\n  }\n}\n\n.Profile__Content[_ngcontent-%COMP%], .Profile__Content__Main-User-Information[_ngcontent-%COMP%], .Profile__Content__Contacts-User-Information[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 15px 0;\n  border-bottom: var(--blue) solid 1px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcc3R5bGVzLnNhc3MiLCJwZXJzb25hbC1hcmVhLmNvbXBvbmVudC5zYXNzIiwiLi5cXC4uXFxzdHlsZXMuZm9ybXMuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDQ0o7O0FEU0E7RUFMSSxhQUFBO0VBQ0EsbUJBS2dCO0VBSmhCLDJCQUgrQjtFQUkvQix1QkFKZ0Q7QUNJcEQ7O0FES0E7RUFSSSxhQUFBO0VBQ0Esc0JBRmtCO0VBR2xCLDJCQUgrQjtFQUkvQix1QkFKZ0Q7QUNXcEQ7O0FEakJBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNvQko7O0FEVkE7RUFMSSxhQUFBO0VBQ0EsbUJBS2dCO0VBSmhCLDJCQUgrQjtFQUkvQix1QkFKZ0Q7QUN1QnBEOztBRGRBO0VBUkksYUFBQTtFQUNBLHNCQUZrQjtFQUdsQiwyQkFIK0I7RUFJL0IsdUJBSmdEO0FDOEJwRDs7QUN1QkE7RUZwREksYUFBQTtFQUNBLHNCQUZrQjtFQUdsQiwyQkFIK0I7RUFJL0IsdUJBSmdEO0VFdURoRCxlQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7QURqQko7O0FDa0JJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QURoQlI7O0FDaUJJO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBRGZSOztBQ2dCUTtFQUNJLG1CQUFBO0VBQ0EsMEJBQUE7QURkWjs7QUNlSTtFRi9FQSxhQUFBO0VBQ0Esc0JBRmtCO0VBR2xCLDJCQUgrQjtFQUkvQix1QkFKZ0Q7RUVrRjVDLFdBQUE7RUFDQSxhQUFBO0FEVlI7O0FDV1E7RUZuRkosYUFBQTtFQUNBLHNCQUZrQjtFQUdsQiwyQkFIK0I7RUFJL0IsdUJB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QTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQStYWjs7QUE5WFk7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUFnWWhCOztBQS9YWTtFQUNJLFdBQUE7QUFpWWhCOztBQWhZWTtFQzdGUixnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VEd0ZZLFlBQUE7QUF5WWhCOztBQ2hlSTtFQUNJLHVCQUFBO0FEa2VSOztBQ2plSTtFQUNJLDhCQUFBO0FEbWVSOztBQ2xlSTtFQUNJLDZCQUFBO0FEb2VSOztBQ25lSTtFRCtFUTtJQzlFSixlQUFBO0lBQ0EsWUFBQTtFRHNlTjtBQUNGOztBQXZaQTs7O0VENUZJLGFBQUE7RUFDQSxzQkFGa0I7RUFHbEIsMkJBSCtCO0VBSS9CLHVCQUpnRDtFQ2lHaEQsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtBQTZaSiIsImZpbGUiOiJwZXJzb25hbC1hcmVhLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keVxuICAgIG1hcmdpbjogMFxuICAgIHBhZGRpbmc6IDBcblxuJG5hdl93OjMwMHB4XG4gICAgXG49ZmxleC1jb250YWluZXIoJGRpcjogY29sdW1uLCAkamM6IGZsZXgtc3RhcnQsICRhaTogZmxleC1zdGFydClcbiAgICBkaXNwbGF5OiBmbGV4XG4gICAgZmxleC1kaXJlY3Rpb246ICRkaXJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICRqY1xuICAgIGFsaWduLWl0ZW1zOiAkYWkgXG5cbi5Sb3dcbiAgICArZmxleC1jb250YWluZXIocm93KVxuXG4uQ29sdW1uXG4gICAgK2ZsZXgtY29udGFpbmVyKClcbiIsImh0bWwsIGJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5Sb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uQ29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuaHRtbCwgYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLlJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5Db2x1bW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uRm9ybS1Db250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTAwcHg7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMjUwcHgpO1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6ICMwMDAwMDAyNSAwIDRweCA4cHggMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX1RpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBtYXJnaW46IDEwcHg7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19XYXJuaW5nIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IHZhcigtLXJlZCkgc29saWQgMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogdmFyKC0tcmVkKTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19XYXJuaW5nLm9rIHtcbiAgY29sb3I6IHZhcigtLWdyZWVuKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ncmVlbik7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgaW5wdXQsXG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCBzZWxlY3QsXG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCB0ZXh0YXJlYSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWY7XG4gIGJvcmRlcjogIzAwMDAwMDIwIHNvbGlkIDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIGlucHV0OmhvdmVyOm5vdCgubmctdG91Y2hlZC5uZy1pbnZhbGlkKSxcbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIHNlbGVjdDpob3Zlcjpub3QoLm5nLXRvdWNoZWQubmctaW52YWxpZCksXG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCB0ZXh0YXJlYTpob3Zlcjpub3QoLm5nLXRvdWNoZWQubmctaW52YWxpZCkge1xuICBib3JkZXItY29sb3I6ICMwMDAwMDA0MDtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIGlucHV0OmZvY3VzOm5vdCgubmctdG91Y2hlZC5uZy1pbnZhbGlkKSxcbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIHNlbGVjdDpmb2N1czpub3QoLm5nLXRvdWNoZWQubmctaW52YWxpZCksXG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCB0ZXh0YXJlYTpmb2N1czpub3QoLm5nLXRvdWNoZWQubmctaW52YWxpZCkge1xuICBib3JkZXItY29sb3I6IHZhcigtLWxpdGUtYmx1ZSk7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCBpbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWQsXG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCBzZWxlY3QubmctdG91Y2hlZC5uZy1pbnZhbGlkLFxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgdGV4dGFyZWEubmctdG91Y2hlZC5uZy1pbnZhbGlkIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saXRlLXJlZCk7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjlweCkge1xuICAuRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCBpbnB1dCxcbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIHNlbGVjdCxcbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIHRleHRhcmVhIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCBzcGFuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB2YXIoLS1yZWQpO1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgdGV4dGFyZWEge1xuICByZXNpemU6IHZlcnRpY2FsO1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgbWF4LWhlaWdodDogODAwcHg7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19MaW5rcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci10b3A6ICMwMDAwMDAzMCBzb2xpZCAxcHg7XG4gIGJvcmRlci1ib3R0b206ICMwMDAwMDAzMCBzb2xpZCAxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19MaW5rcyBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZjtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0xpbmtzIGEge1xuICBmb250LXdlaWdodDogNTUwO1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzO1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fTGlua3MgYTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHZhcigtLWxpdGUtYmx1ZSk7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19CdXR0b24ge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1NTA7XG4gIHBhZGRpbmc6IDdweCAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogdmFyKC0tYmx1ZSkgc29saWQgMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0J1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKTtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0J1dHRvbjpkaXNhYmxlZCB7XG4gIGNvbG9yOiB2YXIoLS1saXRlLWJsdWUpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWxpdGUtYmx1ZSk7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5TZWFyY2gtQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogIzAwMDAwMDQwIHNvbGlkIDJweDtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5RdWVyeSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uU2VhcmNoLUNvbnRhaW5lciBpIHtcbiAgZmxleDogMCAwIDMwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZWFyY2gge1xuICBjb250ZW50OiB1cmwoXCIvbWVkaWEvaWNvbnMvc2VhcmNoLnN2Z1wiKTtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuU2V0dGluZ3MtSWNvbi1CdG4ge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogNXB4O1xufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5TZXR0aW5ncy1JY29uLUJ0bjo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5TZXR0aW5ncy1JY29uLUJ0bjpob3ZlciB7XG4gIGJveC1zaGFkb3c6ICMwMDAwMDA1MCAycHggMCA4cHggMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5TZXR0aW5ncy1JY29uLUJ0bjpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IGluc2V0ICMwMDAwMDA1MCAycHggMCA4cHggMDtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuU2V0dGluZ3MtSWNvbi1CdG4gaSB7XG4gIGNvbnRlbnQ6IHVybChcIi9tZWRpYS9pY29ucy9zbGlkZXItc2V0dGluZ3Muc3ZnXCIpO1xuICBmaWxsOiB2YXIoLS1ibHVlKTtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyB7XG4gIHdpZHRoOiA2MDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3gtc2hhZG93OiAjMDAwMDAwNDAgMCAycHggNHB4IDA7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NzZweCkge1xuICAuU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLkRldGFpbHMge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcbiAgfVxufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5EZXRhaWxzIC5UaXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMTBweCAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyAuSXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbjogMTBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2OXB4KSB7XG4gIC5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyAuSXRlbSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5EZXRhaWxzIC5JdGVtIGlucHV0IHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyOiAjMDAwMDAwMjAgc29saWQgMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiA0cHggMTBweDtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyAuSXRlbSBpbnB1dDpob3Zlcjpub3QoLm5nLXRvdWNoZWQubmctaW52YWxpZCkge1xuICBib3JkZXItY29sb3I6ICMwMDAwMDA0MDtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyAuSXRlbSBpbnB1dDpmb2N1czpub3QoLm5nLXRvdWNoZWQubmctaW52YWxpZCkge1xuICBib3JkZXItY29sb3I6IHZhcigtLWxpdGUtYmx1ZSk7XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLkRldGFpbHMgLkl0ZW0gaW5wdXQubmctdG91Y2hlZC5uZy1pbnZhbGlkIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saXRlLXJlZCk7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjlweCkge1xuICAuU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLkRldGFpbHMgLkl0ZW0gaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyAuQnV0dG9uIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTUwO1xuICBwYWRkaW5nOiA3cHggMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IHZhcigtLWJsdWUpIHNvbGlkIDJweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xuICBtYXJnaW46IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLkRldGFpbHMgLkJ1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKTtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyAuQnV0dG9uOmRpc2FibGVkIHtcbiAgY29sb3I6IHZhcigtLWxpdGUtYmx1ZSk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbGl0ZS1ibHVlKTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLlByb2ZpbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAzMHB4O1xufVxuLlByb2ZpbGUgLlByb2ZpbGVfX1Rvb2xzLU5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nOiAxNXB4IDE1cHggMCAwO1xufVxuLlByb2ZpbGUgLlByb2ZpbGVfX1Rvb2xzLU5hdiAuSXRlbS0xIHtcbiAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1ibHVlKSBzb2xpZCAycHg7XG59XG4uUHJvZmlsZSAuUHJvZmlsZV9fVG9vbHMtTmF2IHNwYW4ge1xuICBwYWRkaW5nLXJpZ2h0OiA3cHg7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xufVxuLlByb2ZpbGUgLlByb2ZpbGVfX1Rvb2xzLU5hdiBidXR0b24ge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogNXB4O1xufVxuLlByb2ZpbGUgLlByb2ZpbGVfX1Rvb2xzLU5hdiBidXR0b246OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5Qcm9maWxlIC5Qcm9maWxlX19Ub29scy1OYXYgYnV0dG9uOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogIzAwMDAwMDUwIDJweCAwIDhweCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uUHJvZmlsZSAuUHJvZmlsZV9fVG9vbHMtTmF2IGJ1dHRvbjpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IGluc2V0ICMwMDAwMDA1MCAycHggMCA4cHggMDtcbn1cbi5Qcm9maWxlIC5Qcm9maWxlX19Ub29scy1OYXYgLkl0ZW0tMSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4uUHJvZmlsZSAuUHJvZmlsZV9fVG9vbHMtTmF2IC5JdGVtLTEgLkVkaXQtQnRuOjpiZWZvcmUge1xuICBjb250ZW50OiB1cmwoXCIvbWVkaWEvaWNvbnMvZWRpdC1hbHQuc3ZnXCIpO1xufVxuLlByb2ZpbGUgLlByb2ZpbGVfX1Rvb2xzLU5hdiAuSXRlbS0xIC5Pay1FZGl0LUJ0biB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5Qcm9maWxlIC5Qcm9maWxlX19Ub29scy1OYXYgLkl0ZW0tMSAuT2stRWRpdC1CdG46OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybChcIi9tZWRpYS9pY29ucy9jaGVjay1jaXJjbGUuc3ZnXCIpO1xufVxuLlByb2ZpbGUgLlByb2ZpbGVfX1Rvb2xzLU5hdiAuSXRlbS0xIC5Ob3QtRWRpdC1CdG46OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IHVybChcIi9tZWRpYS9pY29ucy90aW1lcy1jaXJjbGUuc3ZnXCIpO1xufVxuLlByb2ZpbGUgLlByb2ZpbGVfX1Rvb2xzLU5hdiAuSXRlbS0yIGJ1dHRvbjo6YmVmb3JlIHtcbiAgY29udGVudDogdXJsKFwiL21lZGlhL2ljb25zL3NpZ24tb3V0LWFsdC5zdmdcIik7XG59XG4uUHJvZmlsZSAuUHJvZmlsZV9fQ29udGVudCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4uUHJvZmlsZSAuUHJvZmlsZV9fQ29udGVudCBzcGFuLlZhbGlkYXRvciB7XG4gIGNvbG9yOiB2YXIoLS1yZWQpO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5Qcm9maWxlIC5Qcm9maWxlX19Db250ZW50IC5GaWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4uUHJvZmlsZSAuUHJvZmlsZV9fQ29udGVudCAuUHJvZmlsZV9fQ29udGVudF9fU3RhdHVzLVVzZXItSW5mb3JtYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMCAxNXB4IDA7XG4gIGJvcmRlci1ib3R0b206IHZhcigtLWJsdWUpIHNvbGlkIDFweDtcbn1cbi5Qcm9maWxlIC5Qcm9maWxlX19Db250ZW50IC5Qcm9maWxlX19Db250ZW50X19TdGF0dXMtVXNlci1JbmZvcm1hdGlvbiAuSXRlbS0xIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IGF1dG87XG59XG4uUHJvZmlsZSAuUHJvZmlsZV9fQ29udGVudCAuUHJvZmlsZV9fQ29udGVudF9fU3RhdHVzLVVzZXItSW5mb3JtYXRpb24gLkl0ZW0tMSAuQXZhdGFyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLlByb2ZpbGUgLlByb2ZpbGVfX0NvbnRlbnQgLlByb2ZpbGVfX0NvbnRlbnRfX1N0YXR1cy1Vc2VyLUluZm9ybWF0aW9uIC5JdGVtLTEgLkF2YXRhciBpbWcge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cbi5Qcm9maWxlIC5Qcm9maWxlX19Db250ZW50IC5Qcm9maWxlX19Db250ZW50X19TdGF0dXMtVXNlci1JbmZvcm1hdGlvbiAuSXRlbS0xIC5Vc2VybmFtZS1TdGF0dXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuLlByb2ZpbGUgLlByb2ZpbGVfX0NvbnRlbnQgLlByb2ZpbGVfX0NvbnRlbnRfX1N0YXR1cy1Vc2VyLUluZm9ybWF0aW9uIC5JdGVtLTEgLlVzZXJuYW1lLVN0YXR1cyAuVXNlcm5hbWUge1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uUHJvZmlsZSAuUHJvZmlsZV9fQ29udGVudCAuUHJvZmlsZV9fQ29udGVudF9fU3RhdHVzLVVzZXItSW5mb3JtYXRpb24gLkl0ZW0tMSAuVXNlcm5hbWUtU3RhdHVzIC5TdGF0dXMge1xuICBmb250LXNpemU6IDE1cHg7XG59XG4uUHJvZmlsZSAuUHJvZmlsZV9fQ29udGVudCAuUHJvZmlsZV9fQ29udGVudF9fU3RhdHVzLVVzZXItSW5mb3JtYXRpb24gLkl0ZW0tMiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBoZWlnaHQ6IDUwcHg7XG59XG4uUHJvZmlsZSAuUHJvZmlsZV9fQ29udGVudCAuUHJvZmlsZV9fQ29udGVudF9fU3RhdHVzLVVzZXItSW5mb3JtYXRpb24gLkl0ZW0tMiAuVXNlci1Jbi1TY2hvb2wtU3RhdHVzIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzAwMDAwMDkwO1xufVxuLlByb2ZpbGUgLlByb2ZpbGVfX0NvbnRlbnQgLlByb2ZpbGVfX0NvbnRlbnRfX1N0YXR1cy1Vc2VyLUluZm9ybWF0aW9uIC5JdGVtLTIgLk9ubGluZS1TdGF0dXMge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAwMDAwOTA7XG59XG4uUHJvZmlsZSAuVGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDI2cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uUHJvZmlsZSAuQ29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuLlByb2ZpbGUgLkNvbnRlbnQgLkl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLlByb2ZpbGUgLkNvbnRlbnQgLkl0ZW0gLktleSB7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWluLXdpZHRoOiAxNTBweDtcbn1cbi5Qcm9maWxlIC5Db250ZW50IC5JdGVtIC5EZXNjcmlwdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLlByb2ZpbGUgLkNvbnRlbnQgLkl0ZW0gLkVkaXQtRGVzY3JpcHRpb24ge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmO1xuICBib3JkZXI6ICMwMDAwMDAyMCBzb2xpZCAxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XG4gIHdpZHRoOiA0MDBweDtcbn1cbi5Qcm9maWxlIC5Db250ZW50IC5JdGVtIC5FZGl0LURlc2NyaXB0aW9uOmhvdmVyOm5vdCgubmctdG91Y2hlZC5uZy1pbnZhbGlkKSB7XG4gIGJvcmRlci1jb2xvcjogIzAwMDAwMDQwO1xufVxuLlByb2ZpbGUgLkNvbnRlbnQgLkl0ZW0gLkVkaXQtRGVzY3JpcHRpb246Zm9jdXM6bm90KC5uZy10b3VjaGVkLm5nLWludmFsaWQpIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saXRlLWJsdWUpO1xufVxuLlByb2ZpbGUgLkNvbnRlbnQgLkl0ZW0gLkVkaXQtRGVzY3JpcHRpb24ubmctdG91Y2hlZC5uZy1pbnZhbGlkIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saXRlLXJlZCk7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjlweCkge1xuICAuUHJvZmlsZSAuQ29udGVudCAuSXRlbSAuRWRpdC1EZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxufVxuXG4uUHJvZmlsZV9fQ29udGVudCxcbi5Qcm9maWxlX19Db250ZW50X19NYWluLVVzZXItSW5mb3JtYXRpb24sXG4uUHJvZmlsZV9fQ29udGVudF9fQ29udGFjdHMtVXNlci1JbmZvcm1hdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYmx1ZSkgc29saWQgMXB4O1xuICB3aWR0aDogMTAwJTtcbn0iLCJAaW1wb3J0IFwic3JjL3N0eWxlcy5zYXNzXCJcclxuICAgIFxyXG49ZmllbGQoKVxyXG4gICAgZm9udC13ZWlnaHQ6IDUwMFxyXG4gICAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZlxyXG4gICAgYm9yZGVyOiAjMDAwMDAwMjAgc29saWQgMXB4XHJcbiAgICB3aWR0aDogMTAwJVxyXG4gICAgcGFkZGluZzogMTBweFxyXG4gICAgZm9udC1zaXplOiAxNnB4XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHhcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMXNcclxuICAgICY6aG92ZXI6bm90KC5uZy10b3VjaGVkLm5nLWludmFsaWQpXHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwNDBcclxuICAgICY6Zm9jdXM6bm90KC5uZy10b3VjaGVkLm5nLWludmFsaWQpXHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saXRlLWJsdWUpXHJcbiAgICAmLm5nLXRvdWNoZWQubmctaW52YWxpZFxyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbGl0ZS1yZWQpXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAoIG1heC13aWR0aDogNDY5cHggKVxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweFxyXG4gICAgICAgIHBhZGRpbmc6IDVweFxyXG5cclxuPWJ1dHRvbigpXHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweClcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50XHJcbiAgICBmb250LXNpemU6IDE2cHhcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWZcclxuICAgIGZvbnQtd2VpZ2h0OiA1NTBcclxuICAgIHBhZGRpbmc6IDdweCAxNXB4XHJcbiAgICBjdXJzb3I6IHBvaW50ZXJcclxuICAgIGJvcmRlcjogdmFyKC0tYmx1ZSkgc29saWQgMnB4XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmXHJcbiAgICBjb2xvcjogdmFyKC0tYmx1ZSlcclxuICAgIG1hcmdpbjogMTBweFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwMHB4XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjFzXHJcbiAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpXHJcbiAgICAgICAgY29sb3I6ICNmZmZcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKVxyXG4gICAgJjpkaXNhYmxlZFxyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1saXRlLWJsdWUpXHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saXRlLWJsdWUpXHJcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZFxyXG5cclxuPW1hbmFnZS1idXR0b24oJHcsICRoKVxyXG4gICAgb3V0bGluZTogbm9uZVxyXG4gICAgYm9yZGVyOiBub25lXHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmXHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHhcclxuICAgIHdpZHRoOiAkd1xyXG4gICAgaGVpZ2h0OiAkaFxyXG4gICAgcGFkZGluZzogNXB4XHJcbiAgICAmOjpiZWZvcmVcclxuICAgICAgICBmb250LXNpemU6IDMwcHhcclxuICAgICY6aG92ZXJcclxuICAgICAgICBib3gtc2hhZG93OiAjMDAwMDAwNTAgMnB4IDAgOHB4IDBcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXJcclxuICAgICY6Zm9jdXNcclxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAjMDAwMDAwNTAgMnB4IDAgOHB4IDBcclxuXHJcbi5Gb3JtLUNvbnRhaW5lclxyXG4gICAgK2ZsZXgtY29udGFpbmVyKClcclxuICAgIHBvc2l0aW9uOiBmaXhlZFxyXG4gICAgdG9wOiAxMDBweFxyXG4gICAgbGVmdDogY2FsYyggNTAlIC0gMjUwcHggKVxyXG4gICAgd2lkdGg6IDUwMHB4XHJcbiAgICBoZWlnaHQ6IGF1dG9cclxuICAgIGJhY2tncm91bmQ6IHdoaXRlXHJcbiAgICBib3gtc2hhZG93OiAjMDAwMDAwMjUgMCA0cHggOHB4IDBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHhcclxuICAgIC5Gb3JtLUNvbnRhaW5lcl9fVGl0bGVcclxuICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4gICAgICAgIGZvbnQtc2l6ZTogMjZweFxyXG4gICAgICAgIG1hcmdpbjogMTBweFxyXG4gICAgLkZvcm0tQ29udGFpbmVyX19XYXJuaW5nXHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBcclxuICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgIGJvcmRlcjogdmFyKC0tcmVkKSBzb2xpZCAycHhcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmXHJcbiAgICAgICAgY29sb3I6IHZhcigtLXJlZClcclxuICAgICAgICBmb250LXNpemU6IDE4cHhcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHhcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4XHJcbiAgICAgICAgJi5va1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZ3JlZW4pXHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZ3JlZW4pXHJcbiAgICAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXJcclxuICAgICAgICArZmxleC1jb250YWluZXIoKVxyXG4gICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgcGFkZGluZzogMTBweFxyXG4gICAgICAgIC5GaWVsZFxyXG4gICAgICAgICAgICArZmxleC1jb250YWluZXIoKVxyXG4gICAgICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4XHJcbiAgICAgICAgICAgIGlucHV0LFxyXG4gICAgICAgICAgICBzZWxlY3QsXHJcbiAgICAgICAgICAgIHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICArZmllbGQoKVxyXG4gICAgICAgICAgICBzcGFuXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXJlZClcclxuICAgICAgICAgICAgdGV4dGFyZWFcclxuICAgICAgICAgICAgICAgIHJlc2l6ZTogdmVydGljYWxcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4XHJcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA4MDBweFxyXG4gICAgLkZvcm0tQ29udGFpbmVyX19MaW5rc1xyXG4gICAgICAgICtmbGV4LWNvbnRhaW5lcihyb3cpXHJcbiAgICAgICAgcGFkZGluZzogMTBweFxyXG4gICAgICAgIGJvcmRlci10b3A6ICMwMDAwMDAzMCBzb2xpZCAxcHhcclxuICAgICAgICBib3JkZXItYm90dG9tOiAjMDAwMDAwMzAgc29saWQgMXB4XHJcbiAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgICBmb250LXNpemU6IDE2cHhcclxuICAgICAgICBzcGFuXHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWZcclxuICAgICAgICBhXHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1NTBcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsdWUpXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMXNcclxuICAgICAgICAgICAgJjpob3ZlclxyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tbGl0ZS1ibHVlKVxyXG4gICAgLkZvcm0tQ29udGFpbmVyX19CdXR0b25cclxuICAgICAgICArYnV0dG9uKClcclxuXHJcblxyXG4uU2VhcmNoLUNvbnRhaW5lclxyXG4gICAgK2ZsZXgtY29udGFpbmVyKHJvdywgY2VudGVyLCBjZW50ZXIpXHJcbiAgICB3aWR0aDogMTAwJVxyXG4gICAgaGVpZ2h0OiA3MHB4XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHhcclxuICAgIGJvcmRlci1ib3R0b206ICMwMDAwMDA0MCBzb2xpZCAycHhcclxuICAgIC5RdWVyeVxyXG4gICAgICAgIGJvcmRlcjogbm9uZVxyXG4gICAgICAgIG91dGxpbmU6IG5vbmVcclxuICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgIGhlaWdodDogYXV0b1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweFxyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmXHJcbiAgICAgICAgcGFkZGluZzogMCAxNXB4XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlXHJcbiAgICBpXHJcbiAgICAgICAgZmxleDogMCAwIDMwcHhcclxuICAgICAgICBmb250LXNpemU6IDMwcHhcclxuICAgICAgICB3aWR0aDogMzBweFxyXG4gICAgICAgIGhlaWdodDogMzBweFxyXG4gICAgLlNlYXJjaFxyXG4gICAgICAgIGNvbnRlbnQ6IHVybChcIi9tZWRpYS9pY29ucy9zZWFyY2guc3ZnXCIpXHJcbiAgICAuU2V0dGluZ3NcclxuICAgICAgICAuU2V0dGluZ3MtSWNvbi1CdG5cclxuICAgICAgICAgICAgK21hbmFnZS1idXR0b24oNDBweCwgNDBweClcclxuICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICAgICAgY29udGVudDogdXJsKFwiL21lZGlhL2ljb25zL3NsaWRlci1zZXR0aW5ncy5zdmdcIilcclxuICAgICAgICAgICAgICAgIGZpbGw6IHZhcigtLWJsdWUpXHJcbiAgICAgICAgLkRldGFpbHNcclxuICAgICAgICAgICAgd2lkdGg6IDYwMHB4XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHhcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweFxyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAjMDAwMDAwNDAgMCAycHggNHB4IDBcclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKCBtYXgtd2lkdGg6IDY3NnB4IClcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KVxyXG4gICAgICAgICAgICAuVGl0bGVcclxuICAgICAgICAgICAgICAgICtmbGV4LWNvbnRhaW5lcihyb3csIGNlbnRlcilcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgICAgICAgLkl0ZW1cclxuICAgICAgICAgICAgICAgICtmbGV4LWNvbnRhaW5lcihyb3cpXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAoIG1heC13aWR0aDogNDY5cHggKVxyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweFxyXG4gICAgICAgICAgICAgICAgaW5wdXRcclxuICAgICAgICAgICAgICAgICAgICArZmllbGQoKVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA0cHggMTBweFxyXG4gICAgICAgICAgICAuQnV0dG9uXHJcbiAgICAgICAgICAgICAgICArYnV0dG9uKCkiXX0= */"] });


/***/ }),

/***/ 5936:
/*!********************************************************!*\
  !*** ./src/app/progress-bar/progress-bar.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressBarComponent": () => (/* binding */ ProgressBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class ProgressBarComponent {
    constructor() {
        this.progress = 0;
    }
    ngOnInit() {
    }
}
ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) { return new (t || ProgressBarComponent)(); };
ProgressBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgressBarComponent, selectors: [["progress-bar"]], inputs: { progress: "progress", progressColor: "progressColor" }, decls: 2, vars: 6, consts: [[1, "Progress-Bar"], [1, "Progress-Bar-Fill"]], template: function ProgressBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border-color", ctx.progressColor || "var(--blue)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.progress.toString() + "%")("background", ctx.progressColor || "var(--blue)");
    } }, styles: [".Progress-Bar[_ngcontent-%COMP%] {\n  width: 100%;\n  background: #fff;\n  height: 10px;\n  border-radius: 100px;\n  border: var(--blue) solid 1px;\n}\n.Progress-Bar[_ngcontent-%COMP%]   .Progress-Bar-Fill[_ngcontent-%COMP%] {\n  background: var(--blue);\n  transition: width 0.1s;\n  height: 100%;\n  border-radius: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2dyZXNzLWJhci5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0FBQ0o7QUFBSTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFFUiIsImZpbGUiOiJwcm9ncmVzcy1iYXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuUHJvZ3Jlc3MtQmFyXHJcbiAgICB3aWR0aDogMTAwJVxyXG4gICAgYmFja2dyb3VuZDogI2ZmZlxyXG4gICAgaGVpZ2h0OiAxMHB4XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweFxyXG4gICAgYm9yZGVyOiB2YXIoLS1ibHVlKSBzb2xpZCAxcHhcclxuICAgIC5Qcm9ncmVzcy1CYXItRmlsbFxyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJsdWUpXHJcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggLjFzXHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHgiXX0= */"] });


/***/ }),

/***/ 5068:
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/account.service */ 5921);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _account_nav_account_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../account-nav/account-nav.component */ 9803);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);






function RegisterComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.warning);
} }
function RegisterComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 - 64 \u0441\u0438\u043C\u0432\u043E\u043B\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 - 64 \u0441\u0438\u043C\u0432\u043E\u043B\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435\u043E. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 - 64 \u0441\u0438\u043C\u0432\u043E\u043B\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435\u0430. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 - 64 \u0441\u0438\u043C\u0432\u043E\u043B\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435\u0430. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 - 64 \u0441\u0438\u043C\u0432\u043E\u043B\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 - 16 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_select_46_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "select", 33, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegisterComponent_select_46_Template_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r41.registerFormGroup.user_in_school_status = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " \u0423\u0447\u0435\u043D\u0438\u043A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " \u0423\u0447\u0438\u0442\u0435\u043B\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " \u0420\u043E\u0434\u0438\u0442\u0435\u043B\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", "user_in_school_status")("ngModel", ctx_r23.registerFormGroup.user_in_school_status);
} }
function RegisterComponent_span_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 - 128 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 - 128 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 - 128 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043D\u0435 \u043A\u043E\u0440\u043E\u0447\u0435 8 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0432\u043A\u043B\u044E\u0447\u0430\u0442\u044C \u0432 \u0441\u0435\u0431\u044F \u0431\u0443\u043A\u0432\u044B, \u0446\u0438\u0444\u0440\u044B \u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u0437\u043D\u0430\u043A\u0438. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043D\u0435 \u043A\u043E\u0440\u043E\u0447\u0435 8 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " \u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0432\u043A\u043B\u044E\u0447\u0430\u0442\u044C \u0432 \u0441\u0435\u0431\u044F \u0431\u0443\u043A\u0432\u044B, \u0446\u0438\u0444\u0440\u044B \u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u0437\u043D\u0430\u043A\u0438. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_span_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u041F\u0430\u0440\u043E\u043B\u0438 \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class RegisterComponent {
    constructor(_account, _router) {
        this._account = _account;
        this._router = _router;
        this.registerFormGroup = {
            username: "",
            email: "",
            first_name: "",
            last_name: "",
            phone: "",
            patronymic: "",
            age: undefined,
            status: undefined,
            user_in_school_status: "student",
            country: undefined,
            city: undefined,
            about_me: undefined,
            password: "",
            password2: "",
        };
        this.isLoading = false;
        this.user_in_school_status_options = [
            { key: "student", value: "Ученик" },
            { key: "teacher", value: "Учитель" },
            { key: "parent", value: "Родитель" },
        ];
    }
    ngOnInit() {
    }
    register() {
        this.isLoading = true;
        this._account.register(this.registerFormGroup).subscribe(data => {
            this.isLoading = false;
            if (data.result) {
                this._router.navigateByUrl("login");
            }
            else {
                this.warning = data.message;
            }
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
RegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["register"]], decls: 77, vars: 79, consts: [["src", "/media/logo.png", "alt", ""], [1, "Form-Container", "Login-Form", 3, "ngSubmit"], ["registerForm", "ngForm"], [2, "width", "100%"], [1, "Form-Container__Title"], ["class", "Form-Container__Warning", 4, "ngIf"], [1, "Form-Container__Fields-Container"], [1, "Field"], ["required", "", 3, "name", "placeholder", "maxLength", "ngModel", "ngModelChange"], ["username", "ngModel"], [4, "ngIf"], ["required", "", 3, "name", "placeholder", "maxLength", "ngModel", "type", "ngModelChange"], ["email", "ngModel"], ["first_name", "ngModel"], ["last_name", "ngModel"], ["patronymic", "ngModel"], ["phone", "ngModel"], ["required", "", 3, "name", "placeholder", "ngModel", "type", "ngModelChange"], ["age", "ngModel"], [3, "name", "placeholder", "ngModel", "ngModelChange"], ["status", "ngModel"], [3, "name", "ngModel", "ngModelChange", 4, "ngIf"], ["maxlength", "128", 3, "name", "placeholder", "ngModel", "ngModelChange"], ["country", "ngModel"], ["city", "ngModel"], ["district", "ngModel"], ["about_me", "ngModel"], ["required", "", "pattern", "\\S*\\d+\\S*", 3, "name", "placeholder", "type", "ngModel", "ngModelChange"], ["password", "ngModel"], ["password2", "ngModel"], ["class", "register-form__validation_block", 4, "ngIf"], [1, "Form-Container__Button", 3, "disabled"], [1, "Form-Container__Warning"], [3, "name", "ngModel", "ngModelChange"], ["user_in_school_status_options", "ngModel"], ["value", "student"], ["value", "teacher"], ["value", "parent"], [1, "register-form__validation_block"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_1_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "account-nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, RegisterComponent_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_9_listener($event) { return ctx.registerFormGroup.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, RegisterComponent_span_11_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, RegisterComponent_span_12_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_14_listener($event) { return ctx.registerFormGroup.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, RegisterComponent_span_16_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, RegisterComponent_span_17_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "input", 8, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_19_listener($event) { return ctx.registerFormGroup.first_name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, RegisterComponent_span_21_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, RegisterComponent_span_22_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "input", 8, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_24_listener($event) { return ctx.registerFormGroup.last_name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, RegisterComponent_span_26_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, RegisterComponent_span_27_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "input", 8, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_29_listener($event) { return ctx.registerFormGroup.patronymic = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, RegisterComponent_span_31_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, RegisterComponent_span_32_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "input", 8, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_34_listener($event) { return ctx.registerFormGroup.phone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, RegisterComponent_span_36_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, RegisterComponent_span_37_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_39_listener($event) { return ctx.registerFormGroup.age = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, RegisterComponent_span_41_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "input", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_43_listener($event) { return ctx.registerFormGroup.status = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, RegisterComponent_select_46_Template, 8, 2, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_48_listener($event) { return ctx.registerFormGroup.country = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, RegisterComponent_span_50_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "input", 22, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_52_listener($event) { return ctx.registerFormGroup.city = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, RegisterComponent_span_54_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "input", 22, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_56_listener($event) { return ctx.registerFormGroup.district = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](58, RegisterComponent_span_58_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "textarea", 19, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_textarea_ngModelChange_60_listener($event) { return ctx.registerFormGroup.about_me = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "input", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_63_listener($event) { return ctx.registerFormGroup.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](65, RegisterComponent_span_65_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, RegisterComponent_span_66_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](67, RegisterComponent_span_67_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "input", 27, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_69_listener($event) { return ctx.registerFormGroup.password2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](71, RegisterComponent_span_71_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](72, RegisterComponent_span_72_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](73, RegisterComponent_span_73_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](74, RegisterComponent_span_74_Template, 2, 0, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](15);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](20);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](25);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](30);
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](35);
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](40);
        const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](49);
        const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](53);
        const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](57);
        const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](64);
        const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.warning);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", "username")("placeholder", "\u041D\u0438\u043A")("maxLength", 64)("ngModel", ctx.registerFormGroup.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (_r2.errors == null ? null : _r2.errors.required) && _r2.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (_r5.errors == null ? null : _r5.errors.maxlength) && _r5.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", "email")("placeholder", "Email")("maxLength", 64)("ngModel", ctx.registerFormGroup.email)("type", "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (_r5.errors == null ? null : _r5.errors.required) && _r5.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (_r5.errors == null ? null : _r5.errors.maxlength) && _r5.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", "first_name")("placeholder", "\u0418\u043C\u044F")("maxLength", 64)("ngModel", ctx.registerFormGroup.first_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (_r8.errors == null ? null : _r8.errors.required) && _r8.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (_r8.errors == null ? null : _r8.errors.maxlength) && _r8.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", "last_name")("placeholder", "\u0424\u0430\u043C\u0438\u043B\u0438\u044F")("maxLength", 64)("ngModel", ctx.registerFormGroup.last_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (_r11.errors == null ? null : _r11.errors.required) && _r11.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (_r11.errors == null ? null : _r11.errors.maxlength) && _r11.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", "patronymic")("placeholder", "\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E")("maxLength", 64)("ngModel", ctx.registerFormGroup.patronymic);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (_r14.errors == null ? null : _r14.errors.required) && _r14.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (_r14.errors == null ? null : _r14.errors.maxlength) && _r14.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", "phone")("placeholder", "\u0422\u0435\u043B\u0435\u0444\u043E\u043D")("maxLength", 16)("ngModel", ctx.registerFormGroup.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (_r17.errors == null ? null : _r17.errors.required) && _r17.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (_r17.errors == null ? null : _r17.errors.maxlength) && _r17.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", "age")("placeholder", "\u0412\u043E\u0437\u0440\u0430\u0441\u0442")("ngModel", ctx.registerFormGroup.age)("type", "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (_r20.errors == null ? null : _r20.errors.required) && _r20.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", "status")("placeholder", "\u0421\u0442\u0430\u0442\u0443\u0441")("ngModel", ctx.registerFormGroup.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.user_in_school_status_options);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", "country")("placeholder", "\u0421\u0442\u0440\u0430\u043D\u0430")("ngModel", ctx.registerFormGroup.country);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (_r24.errors == null ? null : _r24.errors.maxlength) && _r17.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", "city")("placeholder", "\u0413\u043E\u0440\u043E\u0434")("ngModel", ctx.registerFormGroup.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (_r26.errors == null ? null : _r26.errors.maxlength) && _r17.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", "district")("placeholder", "\u0420\u0430\u0439\u043E\u043D/\u0423\u043B\u0438\u0446\u0430")("ngModel", ctx.registerFormGroup.district);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (_r28.errors == null ? null : _r28.errors.maxlength) && _r17.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", "about_me")("placeholder", "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043D\u0435\u043C\u043D\u043E\u0433\u043E \u043E \u0441\u0435\u0431\u0435, \u0447\u0435\u043C \u0432\u044B \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442\u0435\u0441\u044C, \u0412\u0430\u0448\u0438 \u0445\u043E\u0431\u0431\u0438, \u043B\u044E\u0431\u0438\u043C\u0430\u044F \u043D\u0430\u0441\u0442\u043E\u043B\u043A\u0430 \u0438 \u0442.\u0434.")("ngModel", ctx.registerFormGroup.about_me);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", "password")("placeholder", "\u041F\u0430\u0440\u043E\u043B\u044C")("type", "password")("ngModel", ctx.registerFormGroup.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (_r31.errors == null ? null : _r31.errors.required) && _r31.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (_r31.errors == null ? null : _r31.errors.minlength) && _r31.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (_r31.errors == null ? null : _r31.errors.pattern) && _r31.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", "password2")("placeholder", "\u041F\u043E\u0432\u0442\u043E\u0440 \u043F\u0430\u0440\u043E\u043B\u044F")("type", "password")("ngModel", ctx.registerFormGroup.password2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (_r35.errors == null ? null : _r35.errors.required) && _r35.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (_r35.errors == null ? null : _r35.errors.minlength) && _r35.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (_r35.errors == null ? null : _r35.errors.pattern) && _r35.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r31.touched && _r35.touched && _r31.value != _r35.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", _r0.invalid || _r31.value != _r35.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.isLoading ? "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..." : "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _account_nav_account_nav_component__WEBPACK_IMPORTED_MODULE_1__.AccountNavComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.Row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.Column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.Form-Container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  position: fixed;\n  top: 100px;\n  left: calc(50% - 250px);\n  width: 500px;\n  height: auto;\n  background: white;\n  box-shadow: #00000025 0 4px 8px 0;\n  border-radius: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Title[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  font-size: 26px;\n  margin: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Warning[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  width: 100%;\n  border: var(--red) solid 2px;\n  background: #fff;\n  color: var(--red);\n  font-size: 18px;\n  padding: 10px 20px;\n  border-radius: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Warning.ok[_ngcontent-%COMP%] {\n  color: var(--green);\n  border-color: var(--green);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n  padding: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n  margin-top: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-family: \"Rubik\", sans-serif;\n  border: #00000020 solid 1px;\n  width: 100%;\n  padding: 10px;\n  font-size: 16px;\n  border-radius: 5px;\n  transition: all 0.1s;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover:not(.ng-touched.ng-invalid), .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover:not(.ng-touched.ng-invalid), .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:hover:not(.ng-touched.ng-invalid) {\n  border-color: #00000040;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus:not(.ng-touched.ng-invalid), .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus:not(.ng-touched.ng-invalid), .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus:not(.ng-touched.ng-invalid) {\n  border-color: var(--lite-blue);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input.ng-touched.ng-invalid[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select.ng-touched.ng-invalid[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border-color: var(--lite-red);\n}\n\n@media screen and (max-width: 469px) {\n  .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 5px;\n  }\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 100%;\n  color: var(--red);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 100px;\n  max-height: 800px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 10px;\n  border-top: #00000030 solid 1px;\n  border-bottom: #00000030 solid 1px;\n  width: 100%;\n  font-size: 16px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Links[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Rubik\", sans-serif;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 550;\n  color: var(--blue);\n  transition: all 0.1s;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: var(--lite-blue);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Button[_ngcontent-%COMP%] {\n  width: calc(100% - 20px);\n  background: transparent;\n  font-size: 16px;\n  font-family: \"Rubik\", sans-serif;\n  font-weight: 550;\n  padding: 7px 15px;\n  cursor: pointer;\n  border: var(--blue) solid 2px;\n  background: #fff;\n  color: var(--blue);\n  margin: 10px;\n  border-radius: 1000px;\n  transition: all 0.1s;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: #fff;\n  background: var(--blue);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Button[_ngcontent-%COMP%]:disabled {\n  color: var(--lite-blue);\n  border-color: var(--lite-blue);\n  cursor: not-allowed;\n}\n\n.Search-Container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 70px;\n  padding: 10px 15px;\n  border-bottom: #00000040 solid 2px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Query[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  width: 100%;\n  height: auto;\n  font-size: 18px;\n  font-family: Arial, Helvetica, sans-serif;\n  padding: 0 15px;\n  height: 100%;\n}\n\n.Search-Container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  flex: 0 0 30px;\n  font-size: 30px;\n  width: 30px;\n  height: 30px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Search[_ngcontent-%COMP%] {\n  content: url(\"/media/icons/search.svg\");\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  background: #fff;\n  border-radius: 5px;\n  width: 40px;\n  height: 40px;\n  padding: 5px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%]::before {\n  font-size: 30px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%]:hover {\n  box-shadow: #00000050 2px 0 8px 0;\n  cursor: pointer;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%]:focus {\n  box-shadow: inset #00000050 2px 0 8px 0;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  content: url(\"/media/icons/slider-settings.svg\");\n  fill: var(--blue);\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%] {\n  width: 600px;\n  position: absolute;\n  background: #fff;\n  border-radius: 10px;\n  padding: 10px;\n  box-shadow: #00000040 0 2px 4px 0;\n}\n\n@media screen and (max-width: 676px) {\n  .Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%] {\n    width: calc(100% - 10px);\n  }\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 10px 0;\n  width: 100%;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  margin: 10px;\n}\n\n@media screen and (max-width: 469px) {\n  .Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-family: \"Rubik\", sans-serif;\n  border: #00000020 solid 1px;\n  width: 100%;\n  padding: 10px;\n  font-size: 16px;\n  border-radius: 5px;\n  transition: all 0.1s;\n  width: 100%;\n  margin: 4px 10px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover:not(.ng-touched.ng-invalid) {\n  border-color: #00000040;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus:not(.ng-touched.ng-invalid) {\n  border-color: var(--lite-blue);\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border-color: var(--lite-red);\n}\n\n@media screen and (max-width: 469px) {\n  .Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 5px;\n  }\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Button[_ngcontent-%COMP%] {\n  width: calc(100% - 20px);\n  background: transparent;\n  font-size: 16px;\n  font-family: \"Rubik\", sans-serif;\n  font-weight: 550;\n  padding: 7px 15px;\n  cursor: pointer;\n  border: var(--blue) solid 2px;\n  background: #fff;\n  color: var(--blue);\n  margin: 10px;\n  border-radius: 1000px;\n  transition: all 0.1s;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: #fff;\n  background: var(--blue);\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Button[_ngcontent-%COMP%]:disabled {\n  color: var(--lite-blue);\n  border-color: var(--lite-blue);\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcc3R5bGVzLnNhc3MiLCJyZWdpc3Rlci5jb21wb25lbnQuc2FzcyIsIi4uXFwuLlxcc3R5bGVzLmZvcm1zLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQ0NKOztBRFNBO0VBTEksYUFBQTtFQUNBLG1CQUtnQjtFQUpoQiwyQkFIK0I7RUFJL0IsdUJBSmdEO0FDSXBEOztBREtBO0VBUkksYUFBQTtFQUNBLHNCQUZrQjtFQUdsQiwyQkFIK0I7RUFJL0IsdUJBSmdEO0FDV3BEOztBQzBDQTtFRnBESSxhQUFBO0VBQ0Esc0JBRmtCO0VBR2xCLDJCQUgrQjtFQUkvQix1QkFKZ0Q7RUV1RGhELGVBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtBRHBDSjs7QUNxQ0k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBRG5DUjs7QUNvQ0k7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEbENSOztBQ21DUTtFQUNJLG1CQUFBO0VBQ0EsMEJBQUE7QURqQ1o7O0FDa0NJO0VGL0VBLGFBQUE7RUFDQSxzQkFGa0I7RUFHbEIsMkJBSCtCO0VBSS9CLHVCQUpnRDtFRWtGNUMsV0FBQTtFQUNBLGFBQUE7QUQ3QlI7O0FDOEJRO0VGbkZKLGFBQUE7RUFDQSxzQkFGa0I7RUFHbEIsMkJBSCtCO0VBSS9CLHVCQUpnRDtFRXNGeEMsV0FBQTtFQUNBLGdCQUFBO0FEekJaOztBQzBCWTs7O0VBM0ZSLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QURzRUo7O0FDckVJOzs7RUFDSSx1QkFBQTtB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QTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUQ2UEo7O0FDNVBJO0VBQ0ksV0FBQTtFQUNBLHVCQUFBO0FEOFBSOztBQzdQSTtFQUNJLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBRCtQUiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHlcbiAgICBtYXJnaW46IDBcbiAgICBwYWRkaW5nOiAwXG5cbiRuYXZfdzozMDBweFxuICAgIFxuPWZsZXgtY29udGFpbmVyKCRkaXI6IGNvbHVtbiwgJGpjOiBmbGV4LXN0YXJ0LCAkYWk6IGZsZXgtc3RhcnQpXG4gICAgZGlzcGxheTogZmxleFxuICAgIGZsZXgtZGlyZWN0aW9uOiAkZGlyXG4gICAganVzdGlmeS1jb250ZW50OiAkamNcbiAgICBhbGlnbi1pdGVtczogJGFpIFxuXG4uUm93XG4gICAgK2ZsZXgtY29udGFpbmVyKHJvdylcblxuLkNvbHVtblxuICAgICtmbGV4LWNvbnRhaW5lcigpXG4iLCJodG1sLCBib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uUm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLkNvbHVtbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5Gb3JtLUNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxMDBweDtcbiAgbGVmdDogY2FsYyg1MCUgLSAyNTBweCk7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogIzAwMDAwMDI1IDAgNHB4IDhweCAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fVGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI2cHg7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX1dhcm5pbmcge1xuICBtYXJnaW46IDEwcHggMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogdmFyKC0tcmVkKSBzb2xpZCAycHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiB2YXIoLS1yZWQpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX1dhcm5pbmcub2sge1xuICBjb2xvcjogdmFyKC0tZ3JlZW4pO1xuICBib3JkZXItY29sb3I6IHZhcigtLWdyZWVuKTtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCBpbnB1dCxcbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIHNlbGVjdCxcbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIHRleHRhcmVhIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyOiAjMDAwMDAwMjAgc29saWQgMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzO1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgaW5wdXQ6aG92ZXI6bm90KC5uZy10b3VjaGVkLm5nLWludmFsaWQpLFxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgc2VsZWN0OmhvdmVyOm5vdCgubmctdG91Y2hlZC5uZy1pbnZhbGlkKSxcbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIHRleHRhcmVhOmhvdmVyOm5vdCgubmctdG91Y2hlZC5uZy1pbnZhbGlkKSB7XG4gIGJvcmRlci1jb2xvcjogIzAwMDAwMDQwO1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgaW5wdXQ6Zm9jdXM6bm90KC5uZy10b3VjaGVkLm5nLWludmFsaWQpLFxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgc2VsZWN0OmZvY3VzOm5vdCgubmctdG91Y2hlZC5uZy1pbnZhbGlkKSxcbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIHRleHRhcmVhOmZvY3VzOm5vdCgubmctdG91Y2hlZC5uZy1pbnZhbGlkKSB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbGl0ZS1ibHVlKTtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIGlucHV0Lm5nLXRvdWNoZWQubmctaW52YWxpZCxcbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIHNlbGVjdC5uZy10b3VjaGVkLm5nLWludmFsaWQsXG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCB0ZXh0YXJlYS5uZy10b3VjaGVkLm5nLWludmFsaWQge1xuICBib3JkZXItY29sb3I6IHZhcigtLWxpdGUtcmVkKTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2OXB4KSB7XG4gIC5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIGlucHV0LFxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgc2VsZWN0LFxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgdGV4dGFyZWEge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIHNwYW4ge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHZhcigtLXJlZCk7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCB0ZXh0YXJlYSB7XG4gIHJlc2l6ZTogdmVydGljYWw7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBtYXgtaGVpZ2h0OiA4MDBweDtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0xpbmtzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXRvcDogIzAwMDAwMDMwIHNvbGlkIDFweDtcbiAgYm9yZGVyLWJvdHRvbTogIzAwMDAwMDMwIHNvbGlkIDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0xpbmtzIHNwYW4ge1xuICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmO1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fTGlua3MgYSB7XG4gIGZvbnQtd2VpZ2h0OiA1NTA7XG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19MaW5rcyBhOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogdmFyKC0tbGl0ZS1ibHVlKTtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0J1dHRvbiB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgcGFkZGluZzogN3B4IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiB2YXIoLS1ibHVlKSBzb2xpZCAycHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzO1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fQnV0dG9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJsdWUpO1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fQnV0dG9uOmRpc2FibGVkIHtcbiAgY29sb3I6IHZhcigtLWxpdGUtYmx1ZSk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbGl0ZS1ibHVlKTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLlNlYXJjaC1Db250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzBweDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBib3JkZXItYm90dG9tOiAjMDAwMDAwNDAgc29saWQgMnB4O1xufVxuLlNlYXJjaC1Db250YWluZXIgLlF1ZXJ5IHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIGkge1xuICBmbGV4OiAwIDAgMzBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuLlNlYXJjaC1Db250YWluZXIgLlNlYXJjaCB7XG4gIGNvbnRlbnQ6IHVybChcIi9tZWRpYS9pY29ucy9zZWFyY2guc3ZnXCIpO1xufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5TZXR0aW5ncy1JY29uLUJ0biB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLlNldHRpbmdzLUljb24tQnRuOjpiZWZvcmUge1xuICBmb250LXNpemU6IDMwcHg7XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLlNldHRpbmdzLUljb24tQnRuOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogIzAwMDAwMDUwIDJweCAwIDhweCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLlNldHRpbmdzLUljb24tQnRuOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgIzAwMDAwMDUwIDJweCAwIDhweCAwO1xufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5TZXR0aW5ncy1JY29uLUJ0biBpIHtcbiAgY29udGVudDogdXJsKFwiL21lZGlhL2ljb25zL3NsaWRlci1zZXR0aW5ncy5zdmdcIik7XG4gIGZpbGw6IHZhcigtLWJsdWUpO1xufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5EZXRhaWxzIHtcbiAgd2lkdGg6IDYwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJveC1zaGFkb3c6ICMwMDAwMDA0MCAwIDJweCA0cHggMDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY3NnB4KSB7XG4gIC5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICB9XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLkRldGFpbHMgLlRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5EZXRhaWxzIC5JdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDY5cHgpIHtcbiAgLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5EZXRhaWxzIC5JdGVtIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLkRldGFpbHMgLkl0ZW0gaW5wdXQge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmO1xuICBib3JkZXI6ICMwMDAwMDAyMCBzb2xpZCAxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDRweCAxMHB4O1xufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5EZXRhaWxzIC5JdGVtIGlucHV0OmhvdmVyOm5vdCgubmctdG91Y2hlZC5uZy1pbnZhbGlkKSB7XG4gIGJvcmRlci1jb2xvcjogIzAwMDAwMDQwO1xufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5EZXRhaWxzIC5JdGVtIGlucHV0OmZvY3VzOm5vdCgubmctdG91Y2hlZC5uZy1pbnZhbGlkKSB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbGl0ZS1ibHVlKTtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyAuSXRlbSBpbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWQge1xuICBib3JkZXItY29sb3I6IHZhcigtLWxpdGUtcmVkKTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2OXB4KSB7XG4gIC5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyAuSXRlbSBpbnB1dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5EZXRhaWxzIC5CdXR0b24ge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1NTA7XG4gIHBhZGRpbmc6IDdweCAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogdmFyKC0tYmx1ZSkgc29saWQgMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyAuQnV0dG9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJsdWUpO1xufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5EZXRhaWxzIC5CdXR0b246ZGlzYWJsZWQge1xuICBjb2xvcjogdmFyKC0tbGl0ZS1ibHVlKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saXRlLWJsdWUpO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufSIsIkBpbXBvcnQgXCJzcmMvc3R5bGVzLnNhc3NcIlxyXG4gICAgXHJcbj1maWVsZCgpXHJcbiAgICBmb250LXdlaWdodDogNTAwXHJcbiAgICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmXHJcbiAgICBib3JkZXI6ICMwMDAwMDAyMCBzb2xpZCAxcHhcclxuICAgIHdpZHRoOiAxMDAlXHJcbiAgICBwYWRkaW5nOiAxMHB4XHJcbiAgICBmb250LXNpemU6IDE2cHhcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweFxyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4xc1xyXG4gICAgJjpob3Zlcjpub3QoLm5nLXRvdWNoZWQubmctaW52YWxpZClcclxuICAgICAgICBib3JkZXItY29sb3I6ICMwMDAwMDA0MFxyXG4gICAgJjpmb2N1czpub3QoLm5nLXRvdWNoZWQubmctaW52YWxpZClcclxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWxpdGUtYmx1ZSlcclxuICAgICYubmctdG91Y2hlZC5uZy1pbnZhbGlkXHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saXRlLXJlZClcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kICggbWF4LXdpZHRoOiA0NjlweCApXHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4XHJcbiAgICAgICAgcGFkZGluZzogNXB4XHJcblxyXG49YnV0dG9uKClcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KVxyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnRcclxuICAgIGZvbnQtc2l6ZTogMTZweFxyXG4gICAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZlxyXG4gICAgZm9udC13ZWlnaHQ6IDU1MFxyXG4gICAgcGFkZGluZzogN3B4IDE1cHhcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG4gICAgYm9yZGVyOiB2YXIoLS1ibHVlKSBzb2xpZCAycHhcclxuICAgIGJhY2tncm91bmQ6ICNmZmZcclxuICAgIGNvbG9yOiB2YXIoLS1ibHVlKVxyXG4gICAgbWFyZ2luOiAxMHB4XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAwcHhcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMXNcclxuICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZClcclxuICAgICAgICBjb2xvcjogI2ZmZlxyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJsdWUpXHJcbiAgICAmOmRpc2FibGVkXHJcbiAgICAgICAgY29sb3I6IHZhcigtLWxpdGUtYmx1ZSlcclxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWxpdGUtYmx1ZSlcclxuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkXHJcblxyXG49bWFuYWdlLWJ1dHRvbigkdywgJGgpXHJcbiAgICBvdXRsaW5lOiBub25lXHJcbiAgICBib3JkZXI6IG5vbmVcclxuICAgIGJhY2tncm91bmQ6ICNmZmZcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweFxyXG4gICAgd2lkdGg6ICR3XHJcbiAgICBoZWlnaHQ6ICRoXHJcbiAgICBwYWRkaW5nOiA1cHhcclxuICAgICY6OmJlZm9yZVxyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweFxyXG4gICAgJjpob3ZlclxyXG4gICAgICAgIGJveC1zaGFkb3c6ICMwMDAwMDA1MCAycHggMCA4cHggMFxyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlclxyXG4gICAgJjpmb2N1c1xyXG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0ICMwMDAwMDA1MCAycHggMCA4cHggMFxyXG5cclxuLkZvcm0tQ29udGFpbmVyXHJcbiAgICArZmxleC1jb250YWluZXIoKVxyXG4gICAgcG9zaXRpb246IGZpeGVkXHJcbiAgICB0b3A6IDEwMHB4XHJcbiAgICBsZWZ0OiBjYWxjKCA1MCUgLSAyNTBweCApXHJcbiAgICB3aWR0aDogNTAwcHhcclxuICAgIGhlaWdodDogYXV0b1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGVcclxuICAgIGJveC1zaGFkb3c6ICMwMDAwMDAyNSAwIDRweCA4cHggMFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweFxyXG4gICAgLkZvcm0tQ29udGFpbmVyX19UaXRsZVxyXG4gICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgICAgICAgZm9udC1zaXplOiAyNnB4XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4XHJcbiAgICAuRm9ybS1Db250YWluZXJfX1dhcm5pbmdcclxuICAgICAgICBtYXJnaW46IDEwcHggMFxyXG4gICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgYm9yZGVyOiB2YXIoLS1yZWQpIHNvbGlkIDJweFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZcclxuICAgICAgICBjb2xvcjogdmFyKC0tcmVkKVxyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweFxyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweFxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHhcclxuICAgICAgICAmLm9rXHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ncmVlbilcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ncmVlbilcclxuICAgIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lclxyXG4gICAgICAgICtmbGV4LWNvbnRhaW5lcigpXHJcbiAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgICBwYWRkaW5nOiAxMHB4XHJcbiAgICAgICAgLkZpZWxkXHJcbiAgICAgICAgICAgICtmbGV4LWNvbnRhaW5lcigpXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHhcclxuICAgICAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgICAgIHNlbGVjdCxcclxuICAgICAgICAgICAgdGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICtmaWVsZCgpXHJcbiAgICAgICAgICAgIHNwYW5cclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcmVkKVxyXG4gICAgICAgICAgICB0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgcmVzaXplOiB2ZXJ0aWNhbFxyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTAwcHhcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDgwMHB4XHJcbiAgICAuRm9ybS1Db250YWluZXJfX0xpbmtzXHJcbiAgICAgICAgK2ZsZXgtY29udGFpbmVyKHJvdylcclxuICAgICAgICBwYWRkaW5nOiAxMHB4XHJcbiAgICAgICAgYm9yZGVyLXRvcDogIzAwMDAwMDMwIHNvbGlkIDFweFxyXG4gICAgICAgIGJvcmRlci1ib3R0b206ICMwMDAwMDAzMCBzb2xpZCAxcHhcclxuICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweFxyXG4gICAgICAgIHNwYW5cclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZlxyXG4gICAgICAgIGFcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDU1MFxyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYmx1ZSlcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4xc1xyXG4gICAgICAgICAgICAmOmhvdmVyXHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXJcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1saXRlLWJsdWUpXHJcbiAgICAuRm9ybS1Db250YWluZXJfX0J1dHRvblxyXG4gICAgICAgICtidXR0b24oKVxyXG5cclxuXHJcbi5TZWFyY2gtQ29udGFpbmVyXHJcbiAgICArZmxleC1jb250YWluZXIocm93LCBjZW50ZXIsIGNlbnRlcilcclxuICAgIHdpZHRoOiAxMDAlXHJcbiAgICBoZWlnaHQ6IDcwcHhcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweFxyXG4gICAgYm9yZGVyLWJvdHRvbTogIzAwMDAwMDQwIHNvbGlkIDJweFxyXG4gICAgLlF1ZXJ5XHJcbiAgICAgICAgYm9yZGVyOiBub25lXHJcbiAgICAgICAgb3V0bGluZTogbm9uZVxyXG4gICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvXHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWZcclxuICAgICAgICBwYWRkaW5nOiAwIDE1cHhcclxuICAgICAgICBoZWlnaHQ6IDEwMCVcclxuICAgIGlcclxuICAgICAgICBmbGV4OiAwIDAgMzBweFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweFxyXG4gICAgICAgIHdpZHRoOiAzMHB4XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4XHJcbiAgICAuU2VhcmNoXHJcbiAgICAgICAgY29udGVudDogdXJsKFwiL21lZGlhL2ljb25zL3NlYXJjaC5zdmdcIilcclxuICAgIC5TZXR0aW5nc1xyXG4gICAgICAgIC5TZXR0aW5ncy1JY29uLUJ0blxyXG4gICAgICAgICAgICArbWFuYWdlLWJ1dHRvbig0MHB4LCA0MHB4KVxyXG4gICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiB1cmwoXCIvbWVkaWEvaWNvbnMvc2xpZGVyLXNldHRpbmdzLnN2Z1wiKVxyXG4gICAgICAgICAgICAgICAgZmlsbDogdmFyKC0tYmx1ZSlcclxuICAgICAgICAuRGV0YWlsc1xyXG4gICAgICAgICAgICB3aWR0aDogNjAwcHhcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6ICMwMDAwMDA0MCAwIDJweCA0cHggMFxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAoIG1heC13aWR0aDogNjc2cHggKVxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpXHJcbiAgICAgICAgICAgIC5UaXRsZVxyXG4gICAgICAgICAgICAgICAgK2ZsZXgtY29udGFpbmVyKHJvdywgY2VudGVyKVxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgICAgICAuSXRlbVxyXG4gICAgICAgICAgICAgICAgK2ZsZXgtY29udGFpbmVyKHJvdylcclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kICggbWF4LXdpZHRoOiA0NjlweCApXHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4XHJcbiAgICAgICAgICAgICAgICBpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICtmaWVsZCgpXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDRweCAxMHB4XHJcbiAgICAgICAgICAgIC5CdXR0b25cclxuICAgICAgICAgICAgICAgICtidXR0b24oKSJdfQ== */"] });


/***/ }),

/***/ 9566:
/*!****************************************************************************!*\
  !*** ./src/app/reset-password-confirm/reset-password-confirm.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordConfirmComponent": () => (/* binding */ ResetPasswordConfirmComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/account.service */ 5921);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);





function ResetPasswordConfirmComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r1.warning["class"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.warning["text"]);
} }
function ResetPasswordConfirmComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ResetPasswordConfirmComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043D\u0435 \u043A\u043E\u0440\u043E\u0447\u0435 8 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ResetPasswordConfirmComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0432\u043A\u043B\u044E\u0447\u0430\u0442\u044C \u0432 \u0441\u0435\u0431\u044F \u0431\u0443\u043A\u0432\u044B, \u0446\u0438\u0444\u0440\u044B \u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u0437\u043D\u0430\u043A\u0438. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ResetPasswordConfirmComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ResetPasswordConfirmComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043D\u0435 \u043A\u043E\u0440\u043E\u0447\u0435 8 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ResetPasswordConfirmComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0432\u043A\u043B\u044E\u0447\u0430\u0442\u044C \u0432 \u0441\u0435\u0431\u044F \u0431\u0443\u043A\u0432\u044B, \u0446\u0438\u0444\u0440\u044B \u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u0437\u043D\u0430\u043A\u0438. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ResetPasswordConfirmComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u041F\u0430\u0440\u043E\u043B\u0438 \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ResetPasswordConfirmComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u0423\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u0412\u043E\u0439\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ResetPasswordConfirmComponent {
    constructor(_route, _router, _account) {
        this._route = _route;
        this._router = _router;
        this._account = _account;
        this.resetPasswordConfirmFormGroup = {
            new_password1: "",
            new_password2: "",
            uid: "",
            token: ""
        };
        this.isLoading = false;
        this.result = false;
    }
    ngOnInit() {
        this._route.params.subscribe((p) => {
            this.resetPasswordConfirmFormGroup["uid"] = p["uid"];
            this.resetPasswordConfirmFormGroup["token"] = p["token"];
        });
    }
    resetPasswordConfirm() {
        this.isLoading = true;
        this._account.resetPasswordConfirm(this.resetPasswordConfirmFormGroup).subscribe(data => {
            this.result = data.result;
            this.isLoading = false;
            if (data.result) {
                this.warning = { text: data.message, class: "ok" };
            }
            else {
                console.error(data.message);
            }
        });
    }
}
ResetPasswordConfirmComponent.ɵfac = function ResetPasswordConfirmComponent_Factory(t) { return new (t || ResetPasswordConfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService)); };
ResetPasswordConfirmComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ResetPasswordConfirmComponent, selectors: [["reset-password-confirm"]], decls: 23, vars: 17, consts: [["src", "/media/logo.png", "alt", ""], [1, "Form-Container", "Login-Form", 3, "ngSubmit"], ["resetPasswordForm", "ngForm"], [1, "Form-Container__Title"], ["class", "Form-Container__Warning", 3, "ngClass", 4, "ngIf"], [1, "Form-Container__Fields-Container"], [1, "Field"], ["type", "password", "minlength", "8", "pattern", "\\S*\\d+\\S*", "required", "", 3, "name", "placeholder", "ngModel", "ngModelChange"], ["new_password1", "ngModel"], [4, "ngIf"], ["new_password2", "ngModel"], ["class", "register-form__validation_block", 4, "ngIf"], ["class", "Form-Container__Links", 4, "ngIf"], [1, "Form-Container__Button", 3, "disabled"], [1, "Form-Container__Warning", 3, "ngClass"], [1, "register-form__validation_block"], [1, "Form-Container__Links"], ["routerLink", "/login"]], template: function ResetPasswordConfirmComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ResetPasswordConfirmComponent_Template_form_ngSubmit_1_listener() { return ctx.resetPasswordConfirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u0421\u0431\u0440\u043E\u0441 \u043F\u0430\u0440\u043E\u043B\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ResetPasswordConfirmComponent_div_5_Template, 2, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ResetPasswordConfirmComponent_Template_input_ngModelChange_8_listener($event) { return ctx.resetPasswordConfirmFormGroup.new_password1 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ResetPasswordConfirmComponent_span_10_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ResetPasswordConfirmComponent_span_11_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ResetPasswordConfirmComponent_span_12_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 7, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ResetPasswordConfirmComponent_Template_input_ngModelChange_14_listener($event) { return ctx.resetPasswordConfirmFormGroup.new_password2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ResetPasswordConfirmComponent_span_16_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ResetPasswordConfirmComponent_span_17_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ResetPasswordConfirmComponent_span_18_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ResetPasswordConfirmComponent_span_19_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ResetPasswordConfirmComponent_div_20_Template, 5, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.warning);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", "new_password1")("placeholder", "\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C")("ngModel", ctx.resetPasswordConfirmFormGroup.new_password1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (_r2.errors == null ? null : _r2.errors.required) && _r2.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (_r2.errors == null ? null : _r2.errors.minlength) && _r2.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (_r2.errors == null ? null : _r2.errors.pattern) && _r2.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", "new_password2")("placeholder", "\u041F\u043E\u0432\u0442\u043E\u0440 \u043D\u043E\u0432\u043E\u0433\u043E \u043F\u0430\u0440\u043E\u043B\u044F")("ngModel", ctx.resetPasswordConfirmFormGroup.new_password2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (_r6.errors == null ? null : _r6.errors.required) && _r6.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (_r6.errors == null ? null : _r6.errors.minlength) && _r6.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (_r6.errors == null ? null : _r6.errors.pattern) && _r6.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r2.touched && _r6.touched && _r2.value != _r6.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.result);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r0.invalid || _r2.value != _r6.value || ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.isLoading ? "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..." : "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.Row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.Column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.Form-Container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  position: fixed;\n  top: 100px;\n  left: calc(50% - 250px);\n  width: 500px;\n  height: auto;\n  background: white;\n  box-shadow: #00000025 0 4px 8px 0;\n  border-radius: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Title[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  font-size: 26px;\n  margin: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Warning[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  width: 100%;\n  border: var(--red) solid 2px;\n  background: #fff;\n  color: var(--red);\n  font-size: 18px;\n  padding: 10px 20px;\n  border-radius: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Warning.ok[_ngcontent-%COMP%] {\n  color: var(--green);\n  border-color: var(--green);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n  padding: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n  margin-top: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-family: \"Rubik\", sans-serif;\n  border: #00000020 solid 1px;\n  width: 100%;\n  padding: 10px;\n  font-size: 16px;\n  border-radius: 5px;\n  transition: all 0.1s;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover:not(.ng-touched.ng-invalid), .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover:not(.ng-touched.ng-invalid), .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:hover:not(.ng-touched.ng-invalid) {\n  border-color: #00000040;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus:not(.ng-touched.ng-invalid), .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus:not(.ng-touched.ng-invalid), .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus:not(.ng-touched.ng-invalid) {\n  border-color: var(--lite-blue);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input.ng-touched.ng-invalid[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select.ng-touched.ng-invalid[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border-color: var(--lite-red);\n}\n\n@media screen and (max-width: 469px) {\n  .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 5px;\n  }\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 100%;\n  color: var(--red);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 100px;\n  max-height: 800px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 10px;\n  border-top: #00000030 solid 1px;\n  border-bottom: #00000030 solid 1px;\n  width: 100%;\n  font-size: 16px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Links[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Rubik\", sans-serif;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 550;\n  color: var(--blue);\n  transition: all 0.1s;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: var(--lite-blue);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Button[_ngcontent-%COMP%] {\n  width: calc(100% - 20px);\n  background: transparent;\n  font-size: 16px;\n  font-family: \"Rubik\", sans-serif;\n  font-weight: 550;\n  padding: 7px 15px;\n  cursor: pointer;\n  border: var(--blue) solid 2px;\n  background: #fff;\n  color: var(--blue);\n  margin: 10px;\n  border-radius: 1000px;\n  transition: all 0.1s;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: #fff;\n  background: var(--blue);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Button[_ngcontent-%COMP%]:disabled {\n  color: var(--lite-blue);\n  border-color: var(--lite-blue);\n  cursor: not-allowed;\n}\n\n.Search-Container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 70px;\n  padding: 10px 15px;\n  border-bottom: #00000040 solid 2px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Query[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  width: 100%;\n  height: auto;\n  font-size: 18px;\n  font-family: Arial, Helvetica, sans-serif;\n  padding: 0 15px;\n  height: 100%;\n}\n\n.Search-Container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  flex: 0 0 30px;\n  font-size: 30px;\n  width: 30px;\n  height: 30px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Search[_ngcontent-%COMP%] {\n  content: url(\"/media/icons/search.svg\");\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  background: #fff;\n  border-radius: 5px;\n  width: 40px;\n  height: 40px;\n  padding: 5px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%]::before {\n  font-size: 30px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%]:hover {\n  box-shadow: #00000050 2px 0 8px 0;\n  cursor: pointer;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%]:focus {\n  box-shadow: inset #00000050 2px 0 8px 0;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  content: url(\"/media/icons/slider-settings.svg\");\n  fill: var(--blue);\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%] {\n  width: 600px;\n  position: absolute;\n  background: #fff;\n  border-radius: 10px;\n  padding: 10px;\n  box-shadow: #00000040 0 2px 4px 0;\n}\n\n@media screen and (max-width: 676px) {\n  .Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%] {\n    width: calc(100% - 10px);\n  }\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 10px 0;\n  width: 100%;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  margin: 10px;\n}\n\n@media screen and (max-width: 469px) {\n  .Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-family: \"Rubik\", sans-serif;\n  border: #00000020 solid 1px;\n  width: 100%;\n  padding: 10px;\n  font-size: 16px;\n  border-radius: 5px;\n  transition: all 0.1s;\n  width: 100%;\n  margin: 4px 10px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover:not(.ng-touched.ng-invalid) {\n  border-color: #00000040;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus:not(.ng-touched.ng-invalid) {\n  border-color: var(--lite-blue);\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border-color: var(--lite-red);\n}\n\n@media screen and (max-width: 469px) {\n  .Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 5px;\n  }\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Button[_ngcontent-%COMP%] {\n  width: calc(100% - 20px);\n  background: transparent;\n  font-size: 16px;\n  font-family: \"Rubik\", sans-serif;\n  font-weight: 550;\n  padding: 7px 15px;\n  cursor: pointer;\n  border: var(--blue) solid 2px;\n  background: #fff;\n  color: var(--blue);\n  margin: 10px;\n  border-radius: 1000px;\n  transition: all 0.1s;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: #fff;\n  background: var(--blue);\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Button[_ngcontent-%COMP%]:disabled {\n  color: var(--lite-blue);\n  border-color: var(--lite-blue);\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcc3R5bGVzLnNhc3MiLCJyZXNldC1wYXNzd29yZC1jb25maXJtLmNvbXBvbmVudC5zYXNzIiwiLi5cXC4uXFxzdHlsZXMuZm9ybXMuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDQ0o7O0FEU0E7RUFMSSxhQUFBO0VBQ0EsbUJBS2dCO0VBSmhCLDJCQUgrQjtFQUkvQix1QkFKZ0Q7QUNJcEQ7O0FES0E7RUFSSSxhQUFBO0VBQ0Esc0JBRmtCO0VBR2xCLDJCQUgrQjtFQUkvQix1QkFKZ0Q7QUNXcEQ7O0FDMENBO0VGcERJLGFBQUE7RUFDQSxzQkFGa0I7RUFHbEIsMkJBSCtCO0VBSS9CLHVCQUpnRDtFRXVEaEQsZUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0FEcENKOztBQ3FDSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FEbkNSOztBQ29DSTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURsQ1I7O0FDbUNRO0VBQ0ksbUJBQUE7RUFDQSwwQkFBQTtBRGpDWjs7QUNrQ0k7RUYvRUEsYUFBQTtFQUNBLHNCQUZrQjtFQUdsQiwyQkFIK0I7RUFJL0IsdUJBSmdEO0VFa0Y1QyxXQUFBO0VBQ0EsYUFBQTtBRDdCUjs7QUM4QlE7RUZuRkosYUFBQTtFQUNBLHNCQUZrQjtFQUdsQiwyQkFIK0I7RUFJL0IsdUJBSmdEO0VFc0Z4QyxXQUFBO0VBQ0EsZ0JBQUE7QUR6Qlo7O0FDMEJZOzs7RUEzRlIsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBRHNFSjs7QUNyRUk7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a0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBRDZQSjs7QUM1UEk7RUFDSSxXQUFBO0VBQ0EsdUJBQUE7QUQ4UFI7O0FDN1BJO0VBQ0ksdUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FEK1BSIiwiZmlsZSI6InJlc2V0LXBhc3N3b3JkLWNvbmZpcm0uY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLCBib2R5XG4gICAgbWFyZ2luOiAwXG4gICAgcGFkZGluZzogMFxuXG4kbmF2X3c6MzAwcHhcbiAgICBcbj1mbGV4LWNvbnRhaW5lcigkZGlyOiBjb2x1bW4sICRqYzogZmxleC1zdGFydCwgJGFpOiBmbGV4LXN0YXJ0KVxuICAgIGRpc3BsYXk6IGZsZXhcbiAgICBmbGV4LWRpcmVjdGlvbjogJGRpclxuICAgIGp1c3RpZnktY29udGVudDogJGpjXG4gICAgYWxpZ24taXRlbXM6ICRhaSBcblxuLlJvd1xuICAgICtmbGV4LWNvbnRhaW5lcihyb3cpXG5cbi5Db2x1bW5cbiAgICArZmxleC1jb250YWluZXIoKVxuIiwiaHRtbCwgYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLlJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5Db2x1bW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uRm9ybS1Db250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTAwcHg7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMjUwcHgpO1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6ICMwMDAwMDAyNSAwIDRweCA4cHggMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX1RpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBtYXJnaW46IDEwcHg7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19XYXJuaW5nIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IHZhcigtLXJlZCkgc29saWQgMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogdmFyKC0tcmVkKTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19XYXJuaW5nLm9rIHtcbiAgY29sb3I6IHZhcigtLWdyZWVuKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ncmVlbik7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgaW5wdXQsXG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCBzZWxlY3QsXG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCB0ZXh0YXJlYSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWY7XG4gIGJvcmRlcjogIzAwMDAwMDIwIHNvbGlkIDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIGlucHV0OmhvdmVyOm5vdCgubmctdG91Y2hlZC5uZy1pbnZhbGlkKSxcbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIHNlbGVjdDpob3Zlcjpub3QoLm5nLXRvdWNoZWQubmctaW52YWxpZCksXG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCB0ZXh0YXJlYTpob3Zlcjpub3QoLm5nLXRvdWNoZWQubmctaW52YWxpZCkge1xuICBib3JkZXItY29sb3I6ICMwMDAwMDA0MDtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIGlucHV0OmZvY3VzOm5vdCgubmctdG91Y2hlZC5uZy1pbnZhbGlkKSxcbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIHNlbGVjdDpmb2N1czpub3QoLm5nLXRvdWNoZWQubmctaW52YWxpZCksXG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCB0ZXh0YXJlYTpmb2N1czpub3QoLm5nLXRvdWNoZWQubmctaW52YWxpZCkge1xuICBib3JkZXItY29sb3I6IHZhcigtLWxpdGUtYmx1ZSk7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCBpbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWQsXG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCBzZWxlY3QubmctdG91Y2hlZC5uZy1pbnZhbGlkLFxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgdGV4dGFyZWEubmctdG91Y2hlZC5uZy1pbnZhbGlkIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saXRlLXJlZCk7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjlweCkge1xuICAuRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCBpbnB1dCxcbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIHNlbGVjdCxcbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIHRleHRhcmVhIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCBzcGFuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB2YXIoLS1yZWQpO1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgdGV4dGFyZWEge1xuICByZXNpemU6IHZlcnRpY2FsO1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgbWF4LWhlaWdodDogODAwcHg7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19MaW5rcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci10b3A6ICMwMDAwMDAzMCBzb2xpZCAxcHg7XG4gIGJvcmRlci1ib3R0b206ICMwMDAwMDAzMCBzb2xpZCAxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19MaW5rcyBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZjtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0xpbmtzIGEge1xuICBmb250LXdlaWdodDogNTUwO1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzO1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fTGlua3MgYTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHZhcigtLWxpdGUtYmx1ZSk7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19CdXR0b24ge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1NTA7XG4gIHBhZGRpbmc6IDdweCAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogdmFyKC0tYmx1ZSkgc29saWQgMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0J1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKTtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0J1dHRvbjpkaXNhYmxlZCB7XG4gIGNvbG9yOiB2YXIoLS1saXRlLWJsdWUpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWxpdGUtYmx1ZSk7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5TZWFyY2gtQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDcwcHg7XG4gIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogIzAwMDAwMDQwIHNvbGlkIDJweDtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5RdWVyeSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uU2VhcmNoLUNvbnRhaW5lciBpIHtcbiAgZmxleDogMCAwIDMwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZWFyY2gge1xuICBjb250ZW50OiB1cmwoXCIvbWVkaWEvaWNvbnMvc2VhcmNoLnN2Z1wiKTtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuU2V0dGluZ3MtSWNvbi1CdG4ge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogNXB4O1xufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5TZXR0aW5ncy1JY29uLUJ0bjo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5TZXR0aW5ncy1JY29uLUJ0bjpob3ZlciB7XG4gIGJveC1zaGFkb3c6ICMwMDAwMDA1MCAycHggMCA4cHggMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5TZXR0aW5ncy1JY29uLUJ0bjpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IGluc2V0ICMwMDAwMDA1MCAycHggMCA4cHggMDtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuU2V0dGluZ3MtSWNvbi1CdG4gaSB7XG4gIGNvbnRlbnQ6IHVybChcIi9tZWRpYS9pY29ucy9zbGlkZXItc2V0dGluZ3Muc3ZnXCIpO1xuICBmaWxsOiB2YXIoLS1ibHVlKTtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyB7XG4gIHdpZHRoOiA2MDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3gtc2hhZG93OiAjMDAwMDAwNDAgMCAycHggNHB4IDA7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NzZweCkge1xuICAuU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLkRldGFpbHMge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcbiAgfVxufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5EZXRhaWxzIC5UaXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMTBweCAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyAuSXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbjogMTBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2OXB4KSB7XG4gIC5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyAuSXRlbSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5EZXRhaWxzIC5JdGVtIGlucHV0IHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyOiAjMDAwMDAwMjAgc29saWQgMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiA0cHggMTBweDtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyAuSXRlbSBpbnB1dDpob3Zlcjpub3QoLm5nLXRvdWNoZWQubmctaW52YWxpZCkge1xuICBib3JkZXItY29sb3I6ICMwMDAwMDA0MDtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyAuSXRlbSBpbnB1dDpmb2N1czpub3QoLm5nLXRvdWNoZWQubmctaW52YWxpZCkge1xuICBib3JkZXItY29sb3I6IHZhcigtLWxpdGUtYmx1ZSk7XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLkRldGFpbHMgLkl0ZW0gaW5wdXQubmctdG91Y2hlZC5uZy1pbnZhbGlkIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saXRlLXJlZCk7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjlweCkge1xuICAuU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLkRldGFpbHMgLkl0ZW0gaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyAuQnV0dG9uIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTUwO1xuICBwYWRkaW5nOiA3cHggMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IHZhcigtLWJsdWUpIHNvbGlkIDJweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xuICBtYXJnaW46IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLkRldGFpbHMgLkJ1dHRvbjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKTtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyAuQnV0dG9uOmRpc2FibGVkIHtcbiAgY29sb3I6IHZhcigtLWxpdGUtYmx1ZSk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbGl0ZS1ibHVlKTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn0iLCJAaW1wb3J0IFwic3JjL3N0eWxlcy5zYXNzXCJcclxuICAgIFxyXG49ZmllbGQoKVxyXG4gICAgZm9udC13ZWlnaHQ6IDUwMFxyXG4gICAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZlxyXG4gICAgYm9yZGVyOiAjMDAwMDAwMjAgc29saWQgMXB4XHJcbiAgICB3aWR0aDogMTAwJVxyXG4gICAgcGFkZGluZzogMTBweFxyXG4gICAgZm9udC1zaXplOiAxNnB4XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHhcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMXNcclxuICAgICY6aG92ZXI6bm90KC5uZy10b3VjaGVkLm5nLWludmFsaWQpXHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwNDBcclxuICAgICY6Zm9jdXM6bm90KC5uZy10b3VjaGVkLm5nLWludmFsaWQpXHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saXRlLWJsdWUpXHJcbiAgICAmLm5nLXRvdWNoZWQubmctaW52YWxpZFxyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbGl0ZS1yZWQpXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAoIG1heC13aWR0aDogNDY5cHggKVxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweFxyXG4gICAgICAgIHBhZGRpbmc6IDVweFxyXG5cclxuPWJ1dHRvbigpXHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweClcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50XHJcbiAgICBmb250LXNpemU6IDE2cHhcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWZcclxuICAgIGZvbnQtd2VpZ2h0OiA1NTBcclxuICAgIHBhZGRpbmc6IDdweCAxNXB4XHJcbiAgICBjdXJzb3I6IHBvaW50ZXJcclxuICAgIGJvcmRlcjogdmFyKC0tYmx1ZSkgc29saWQgMnB4XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmXHJcbiAgICBjb2xvcjogdmFyKC0tYmx1ZSlcclxuICAgIG1hcmdpbjogMTBweFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwMHB4XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjFzXHJcbiAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpXHJcbiAgICAgICAgY29sb3I6ICNmZmZcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKVxyXG4gICAgJjpkaXNhYmxlZFxyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1saXRlLWJsdWUpXHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saXRlLWJsdWUpXHJcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZFxyXG5cclxuPW1hbmFnZS1idXR0b24oJHcsICRoKVxyXG4gICAgb3V0bGluZTogbm9uZVxyXG4gICAgYm9yZGVyOiBub25lXHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmXHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHhcclxuICAgIHdpZHRoOiAkd1xyXG4gICAgaGVpZ2h0OiAkaFxyXG4gICAgcGFkZGluZzogNXB4XHJcbiAgICAmOjpiZWZvcmVcclxuICAgICAgICBmb250LXNpemU6IDMwcHhcclxuICAgICY6aG92ZXJcclxuICAgICAgICBib3gtc2hhZG93OiAjMDAwMDAwNTAgMnB4IDAgOHB4IDBcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXJcclxuICAgICY6Zm9jdXNcclxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAjMDAwMDAwNTAgMnB4IDAgOHB4IDBcclxuXHJcbi5Gb3JtLUNvbnRhaW5lclxyXG4gICAgK2ZsZXgtY29udGFpbmVyKClcclxuICAgIHBvc2l0aW9uOiBmaXhlZFxyXG4gICAgdG9wOiAxMDBweFxyXG4gICAgbGVmdDogY2FsYyggNTAlIC0gMjUwcHggKVxyXG4gICAgd2lkdGg6IDUwMHB4XHJcbiAgICBoZWlnaHQ6IGF1dG9cclxuICAgIGJhY2tncm91bmQ6IHdoaXRlXHJcbiAgICBib3gtc2hhZG93OiAjMDAwMDAwMjUgMCA0cHggOHB4IDBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHhcclxuICAgIC5Gb3JtLUNvbnRhaW5lcl9fVGl0bGVcclxuICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4gICAgICAgIGZvbnQtc2l6ZTogMjZweFxyXG4gICAgICAgIG1hcmdpbjogMTBweFxyXG4gICAgLkZvcm0tQ29udGFpbmVyX19XYXJuaW5nXHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBcclxuICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgIGJvcmRlcjogdmFyKC0tcmVkKSBzb2xpZCAycHhcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmXHJcbiAgICAgICAgY29sb3I6IHZhcigtLXJlZClcclxuICAgICAgICBmb250LXNpemU6IDE4cHhcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHhcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4XHJcbiAgICAgICAgJi5va1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZ3JlZW4pXHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZ3JlZW4pXHJcbiAgICAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXJcclxuICAgICAgICArZmxleC1jb250YWluZXIoKVxyXG4gICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgcGFkZGluZzogMTBweFxyXG4gICAgICAgIC5GaWVsZFxyXG4gICAgICAgICAgICArZmxleC1jb250YWluZXIoKVxyXG4gICAgICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4XHJcbiAgICAgICAgICAgIGlucHV0LFxyXG4gICAgICAgICAgICBzZWxlY3QsXHJcbiAgICAgICAgICAgIHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICArZmllbGQoKVxyXG4gICAgICAgICAgICBzcGFuXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXJlZClcclxuICAgICAgICAgICAgdGV4dGFyZWFcclxuICAgICAgICAgICAgICAgIHJlc2l6ZTogdmVydGljYWxcclxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4XHJcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA4MDBweFxyXG4gICAgLkZvcm0tQ29udGFpbmVyX19MaW5rc1xyXG4gICAgICAgICtmbGV4LWNvbnRhaW5lcihyb3cpXHJcbiAgICAgICAgcGFkZGluZzogMTBweFxyXG4gICAgICAgIGJvcmRlci10b3A6ICMwMDAwMDAzMCBzb2xpZCAxcHhcclxuICAgICAgICBib3JkZXItYm90dG9tOiAjMDAwMDAwMzAgc29saWQgMXB4XHJcbiAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgICBmb250LXNpemU6IDE2cHhcclxuICAgICAgICBzcGFuXHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWZcclxuICAgICAgICBhXHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1NTBcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsdWUpXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMXNcclxuICAgICAgICAgICAgJjpob3ZlclxyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tbGl0ZS1ibHVlKVxyXG4gICAgLkZvcm0tQ29udGFpbmVyX19CdXR0b25cclxuICAgICAgICArYnV0dG9uKClcclxuXHJcblxyXG4uU2VhcmNoLUNvbnRhaW5lclxyXG4gICAgK2ZsZXgtY29udGFpbmVyKHJvdywgY2VudGVyLCBjZW50ZXIpXHJcbiAgICB3aWR0aDogMTAwJVxyXG4gICAgaGVpZ2h0OiA3MHB4XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHhcclxuICAgIGJvcmRlci1ib3R0b206ICMwMDAwMDA0MCBzb2xpZCAycHhcclxuICAgIC5RdWVyeVxyXG4gICAgICAgIGJvcmRlcjogbm9uZVxyXG4gICAgICAgIG91dGxpbmU6IG5vbmVcclxuICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgIGhlaWdodDogYXV0b1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweFxyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmXHJcbiAgICAgICAgcGFkZGluZzogMCAxNXB4XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlXHJcbiAgICBpXHJcbiAgICAgICAgZmxleDogMCAwIDMwcHhcclxuICAgICAgICBmb250LXNpemU6IDMwcHhcclxuICAgICAgICB3aWR0aDogMzBweFxyXG4gICAgICAgIGhlaWdodDogMzBweFxyXG4gICAgLlNlYXJjaFxyXG4gICAgICAgIGNvbnRlbnQ6IHVybChcIi9tZWRpYS9pY29ucy9zZWFyY2guc3ZnXCIpXHJcbiAgICAuU2V0dGluZ3NcclxuICAgICAgICAuU2V0dGluZ3MtSWNvbi1CdG5cclxuICAgICAgICAgICAgK21hbmFnZS1idXR0b24oNDBweCwgNDBweClcclxuICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICAgICAgY29udGVudDogdXJsKFwiL21lZGlhL2ljb25zL3NsaWRlci1zZXR0aW5ncy5zdmdcIilcclxuICAgICAgICAgICAgICAgIGZpbGw6IHZhcigtLWJsdWUpXHJcbiAgICAgICAgLkRldGFpbHNcclxuICAgICAgICAgICAgd2lkdGg6IDYwMHB4XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHhcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweFxyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAjMDAwMDAwNDAgMCAycHggNHB4IDBcclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKCBtYXgtd2lkdGg6IDY3NnB4IClcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KVxyXG4gICAgICAgICAgICAuVGl0bGVcclxuICAgICAgICAgICAgICAgICtmbGV4LWNvbnRhaW5lcihyb3csIGNlbnRlcilcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgICAgICAgLkl0ZW1cclxuICAgICAgICAgICAgICAgICtmbGV4LWNvbnRhaW5lcihyb3cpXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAoIG1heC13aWR0aDogNDY5cHggKVxyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweFxyXG4gICAgICAgICAgICAgICAgaW5wdXRcclxuICAgICAgICAgICAgICAgICAgICArZmllbGQoKVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA0cHggMTBweFxyXG4gICAgICAgICAgICAuQnV0dG9uXHJcbiAgICAgICAgICAgICAgICArYnV0dG9uKCkiXX0= */"] });


/***/ }),

/***/ 9559:
/*!************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordComponent": () => (/* binding */ ResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/account.service */ 5921);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);




function ResetPasswordComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r1.warning["class"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.warning["text"]);
} }
function ResetPasswordComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ResetPasswordComponent {
    constructor(_account) {
        this._account = _account;
        this.resetPasswordFormGroup = {
            email: ''
        };
        this.isLoading = false;
    }
    ngOnInit() {
    }
    resetPassword() {
        this.isLoading = true;
        this._account.resetPassword(this.resetPasswordFormGroup).subscribe(data => {
            this.isLoading = false;
            if (data.result) {
                this.warning = { text: data.message, class: "ok" };
            }
            else {
                console.error(data.message);
            }
        });
    }
}
ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) { return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService)); };
ResetPasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ResetPasswordComponent, selectors: [["reset-password"]], decls: 13, vars: 7, consts: [["src", "/media/logo.png", "alt", ""], [1, "Form-Container", "Login-Form", 3, "ngSubmit"], ["resetPasswordForm", "ngForm"], [1, "Form-Container__Title"], ["class", "Form-Container__Warning", 3, "ngClass", 4, "ngIf"], [1, "Form-Container__Fields-Container"], [1, "Field"], ["required", "", 3, "name", "placeholder", "ngModel", "ngModelChange"], ["email", "ngModel"], [4, "ngIf"], [1, "Form-Container__Button", 3, "disabled"], [1, "Form-Container__Warning", 3, "ngClass"]], template: function ResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ResetPasswordComponent_Template_form_ngSubmit_1_listener() { return ctx.resetPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "\u0421\u0431\u0440\u043E\u0441 \u043F\u0430\u0440\u043E\u043B\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ResetPasswordComponent_div_5_Template, 2, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ResetPasswordComponent_Template_input_ngModelChange_8_listener($event) { return ctx.resetPasswordFormGroup.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ResetPasswordComponent_span_10_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.warning);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", "email")("placeholder", "Email")("ngModel", ctx.resetPasswordFormGroup.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r2.invalid && _r2.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.isLoading ? "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..." : "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.Row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.Column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.Form-Container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  position: fixed;\n  top: 100px;\n  left: calc(50% - 250px);\n  width: 500px;\n  height: auto;\n  background: white;\n  box-shadow: #00000025 0 4px 8px 0;\n  border-radius: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Title[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  font-size: 26px;\n  margin: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Warning[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  width: 100%;\n  border: var(--red) solid 2px;\n  background: #fff;\n  color: var(--red);\n  font-size: 18px;\n  padding: 10px 20px;\n  border-radius: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Warning.ok[_ngcontent-%COMP%] {\n  color: var(--green);\n  border-color: var(--green);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n  padding: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n  margin-top: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-family: \"Rubik\", sans-serif;\n  border: #00000020 solid 1px;\n  width: 100%;\n  padding: 10px;\n  font-size: 16px;\n  border-radius: 5px;\n  transition: all 0.1s;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover:not(.ng-touched.ng-invalid), .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover:not(.ng-touched.ng-invalid), .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:hover:not(.ng-touched.ng-invalid) {\n  border-color: #00000040;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus:not(.ng-touched.ng-invalid), .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus:not(.ng-touched.ng-invalid), .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus:not(.ng-touched.ng-invalid) {\n  border-color: var(--lite-blue);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input.ng-touched.ng-invalid[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select.ng-touched.ng-invalid[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border-color: var(--lite-red);\n}\n\n@media screen and (max-width: 469px) {\n  .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 5px;\n  }\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 100%;\n  color: var(--red);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 100px;\n  max-height: 800px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 10px;\n  border-top: #00000030 solid 1px;\n  border-bottom: #00000030 solid 1px;\n  width: 100%;\n  font-size: 16px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Links[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Rubik\", sans-serif;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 550;\n  color: var(--blue);\n  transition: all 0.1s;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: var(--lite-blue);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Button[_ngcontent-%COMP%] {\n  width: calc(100% - 20px);\n  background: transparent;\n  font-size: 16px;\n  font-family: \"Rubik\", sans-serif;\n  font-weight: 550;\n  padding: 7px 15px;\n  cursor: pointer;\n  border: var(--blue) solid 2px;\n  background: #fff;\n  color: var(--blue);\n  margin: 10px;\n  border-radius: 1000px;\n  transition: all 0.1s;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: #fff;\n  background: var(--blue);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Button[_ngcontent-%COMP%]:disabled {\n  color: var(--lite-blue);\n  border-color: var(--lite-blue);\n  cursor: not-allowed;\n}\n\n.Search-Container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 70px;\n  padding: 10px 15px;\n  border-bottom: #00000040 solid 2px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Query[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  width: 100%;\n  height: auto;\n  font-size: 18px;\n  font-family: Arial, Helvetica, sans-serif;\n  padding: 0 15px;\n  height: 100%;\n}\n\n.Search-Container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  flex: 0 0 30px;\n  font-size: 30px;\n  width: 30px;\n  height: 30px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Search[_ngcontent-%COMP%] {\n  content: url(\"/media/icons/search.svg\");\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  background: #fff;\n  border-radius: 5px;\n  width: 40px;\n  height: 40px;\n  padding: 5px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%]::before {\n  font-size: 30px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%]:hover {\n  box-shadow: #00000050 2px 0 8px 0;\n  cursor: pointer;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%]:focus {\n  box-shadow: inset #00000050 2px 0 8px 0;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  content: url(\"/media/icons/slider-settings.svg\");\n  fill: var(--blue);\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%] {\n  width: 600px;\n  position: absolute;\n  background: #fff;\n  border-radius: 10px;\n  padding: 10px;\n  box-shadow: #00000040 0 2px 4px 0;\n}\n\n@media screen and (max-width: 676px) {\n  .Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%] {\n    width: calc(100% - 10px);\n  }\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 10px 0;\n  width: 100%;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  margin: 10px;\n}\n\n@media screen and (max-width: 469px) {\n  .Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-family: \"Rubik\", sans-serif;\n  border: #00000020 solid 1px;\n  width: 100%;\n  padding: 10px;\n  font-size: 16px;\n  border-radius: 5px;\n  transition: all 0.1s;\n  width: 100%;\n  margin: 4px 10px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover:not(.ng-touched.ng-invalid) {\n  border-color: #00000040;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus:not(.ng-touched.ng-invalid) {\n  border-color: var(--lite-blue);\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border-color: var(--lite-red);\n}\n\n@media screen and (max-width: 469px) {\n  .Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 5px;\n  }\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Button[_ngcontent-%COMP%] {\n  width: calc(100% - 20px);\n  background: transparent;\n  font-size: 16px;\n  font-family: \"Rubik\", sans-serif;\n  font-weight: 550;\n  padding: 7px 15px;\n  cursor: pointer;\n  border: var(--blue) solid 2px;\n  background: #fff;\n  color: var(--blue);\n  margin: 10px;\n  border-radius: 1000px;\n  transition: all 0.1s;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: #fff;\n  background: var(--blue);\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Button[_ngcontent-%COMP%]:disabled {\n  color: var(--lite-blue);\n  border-color: var(--lite-blue);\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcc3R5bGVzLnNhc3MiLCJyZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2FzcyIsIi4uXFwuLlxcc3R5bGVzLmZvcm1zLnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQ0NKOztBRFNBO0VBTEksYUFBQTtFQUNBLG1CQUtnQjtFQUpoQiwyQkFIK0I7RUFJL0IsdUJBSmdEO0FDSXBEOztBREtBO0VBUkksYUFBQTtFQUNBLHNCQUZrQjtFQUdsQiwyQkFIK0I7RUFJL0IsdUJBSmdEO0FDV3BEOztBQzBDQTtFRnBESSxhQUFBO0VBQ0Esc0JBRmtCO0VBR2xCLDJCQUgrQjtFQUkvQix1QkFKZ0Q7RUV1RGhELGVBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtBRHBDSjs7QUNxQ0k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBRG5DUjs7QUNvQ0k7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEbENSOztBQ21DUTtFQUNJLG1CQUFBO0VBQ0EsMEJBQUE7QURqQ1o7O0FDa0NJO0VGL0VBLGFBQUE7RUFDQSxzQkFGa0I7RUFHbEIsMkJBSCtCO0VBSS9CLHVCQUpnRDtFRWtGNUMsV0FBQTtFQUNBLGFBQUE7QUQ3QlI7O0FDOEJRO0VGbkZKLGFBQUE7RUFDQSxzQkFGa0I7RUFHbEIsMkJBSCtCO0VBSS9CLHVCQUpnRDtFRXNGeEMsV0FBQTtFQUNBLGdCQUFBO0FEekJaOztBQzBCWTs7O0VBM0ZSLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QURzRUo7O0FDckVJOzs7RUFDSSx1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Q0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUQ2UEo7O0FDNVBJO0VBQ0ksV0FBQTtFQUNBLHVCQUFBO0FEOFBSOztBQzdQSTtFQUNJLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBRCtQUiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHlcbiAgICBtYXJnaW46IDBcbiAgICBwYWRkaW5nOiAwXG5cbiRuYXZfdzozMDBweFxuICAgIFxuPWZsZXgtY29udGFpbmVyKCRkaXI6IGNvbHVtbiwgJGpjOiBmbGV4LXN0YXJ0LCAkYWk6IGZsZXgtc3RhcnQpXG4gICAgZGlzcGxheTogZmxleFxuICAgIGZsZXgtZGlyZWN0aW9uOiAkZGlyXG4gICAganVzdGlmeS1jb250ZW50OiAkamNcbiAgICBhbGlnbi1pdGVtczogJGFpIFxuXG4uUm93XG4gICAgK2ZsZXgtY29udGFpbmVyKHJvdylcblxuLkNvbHVtblxuICAgICtmbGV4LWNvbnRhaW5lcigpXG4iLCJodG1sLCBib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uUm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLkNvbHVtbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5Gb3JtLUNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxMDBweDtcbiAgbGVmdDogY2FsYyg1MCUgLSAyNTBweCk7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogIzAwMDAwMDI1IDAgNHB4IDhweCAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fVGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI2cHg7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX1dhcm5pbmcge1xuICBtYXJnaW46IDEwcHggMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogdmFyKC0tcmVkKSBzb2xpZCAycHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiB2YXIoLS1yZWQpO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX1dhcm5pbmcub2sge1xuICBjb2xvcjogdmFyKC0tZ3JlZW4pO1xuICBib3JkZXItY29sb3I6IHZhcigtLWdyZWVuKTtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCBpbnB1dCxcbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIHNlbGVjdCxcbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIHRleHRhcmVhIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyOiAjMDAwMDAwMjAgc29saWQgMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzO1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgaW5wdXQ6aG92ZXI6bm90KC5uZy10b3VjaGVkLm5nLWludmFsaWQpLFxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgc2VsZWN0OmhvdmVyOm5vdCgubmctdG91Y2hlZC5uZy1pbnZhbGlkKSxcbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIHRleHRhcmVhOmhvdmVyOm5vdCgubmctdG91Y2hlZC5uZy1pbnZhbGlkKSB7XG4gIGJvcmRlci1jb2xvcjogIzAwMDAwMDQwO1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgaW5wdXQ6Zm9jdXM6bm90KC5uZy10b3VjaGVkLm5nLWludmFsaWQpLFxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgc2VsZWN0OmZvY3VzOm5vdCgubmctdG91Y2hlZC5uZy1pbnZhbGlkKSxcbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIHRleHRhcmVhOmZvY3VzOm5vdCgubmctdG91Y2hlZC5uZy1pbnZhbGlkKSB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbGl0ZS1ibHVlKTtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIGlucHV0Lm5nLXRvdWNoZWQubmctaW52YWxpZCxcbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIHNlbGVjdC5uZy10b3VjaGVkLm5nLWludmFsaWQsXG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCB0ZXh0YXJlYS5uZy10b3VjaGVkLm5nLWludmFsaWQge1xuICBib3JkZXItY29sb3I6IHZhcigtLWxpdGUtcmVkKTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2OXB4KSB7XG4gIC5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIGlucHV0LFxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgc2VsZWN0LFxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgdGV4dGFyZWEge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIHNwYW4ge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IHZhcigtLXJlZCk7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCB0ZXh0YXJlYSB7XG4gIHJlc2l6ZTogdmVydGljYWw7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBtYXgtaGVpZ2h0OiA4MDBweDtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0xpbmtzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXRvcDogIzAwMDAwMDMwIHNvbGlkIDFweDtcbiAgYm9yZGVyLWJvdHRvbTogIzAwMDAwMDMwIHNvbGlkIDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0xpbmtzIHNwYW4ge1xuICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmO1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fTGlua3MgYSB7XG4gIGZvbnQtd2VpZ2h0OiA1NTA7XG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19MaW5rcyBhOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogdmFyKC0tbGl0ZS1ibHVlKTtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0J1dHRvbiB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgcGFkZGluZzogN3B4IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiB2YXIoLS1ibHVlKSBzb2xpZCAycHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzO1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fQnV0dG9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJsdWUpO1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fQnV0dG9uOmRpc2FibGVkIHtcbiAgY29sb3I6IHZhcigtLWxpdGUtYmx1ZSk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbGl0ZS1ibHVlKTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLlNlYXJjaC1Db250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzBweDtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBib3JkZXItYm90dG9tOiAjMDAwMDAwNDAgc29saWQgMnB4O1xufVxuLlNlYXJjaC1Db250YWluZXIgLlF1ZXJ5IHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIGkge1xuICBmbGV4OiAwIDAgMzBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuLlNlYXJjaC1Db250YWluZXIgLlNlYXJjaCB7XG4gIGNvbnRlbnQ6IHVybChcIi9tZWRpYS9pY29ucy9zZWFyY2guc3ZnXCIpO1xufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5TZXR0aW5ncy1JY29uLUJ0biB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLlNldHRpbmdzLUljb24tQnRuOjpiZWZvcmUge1xuICBmb250LXNpemU6IDMwcHg7XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLlNldHRpbmdzLUljb24tQnRuOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogIzAwMDAwMDUwIDJweCAwIDhweCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLlNldHRpbmdzLUljb24tQnRuOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgIzAwMDAwMDUwIDJweCAwIDhweCAwO1xufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5TZXR0aW5ncy1JY29uLUJ0biBpIHtcbiAgY29udGVudDogdXJsKFwiL21lZGlhL2ljb25zL3NsaWRlci1zZXR0aW5ncy5zdmdcIik7XG4gIGZpbGw6IHZhcigtLWJsdWUpO1xufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5EZXRhaWxzIHtcbiAgd2lkdGg6IDYwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJveC1zaGFkb3c6ICMwMDAwMDA0MCAwIDJweCA0cHggMDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY3NnB4KSB7XG4gIC5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICB9XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLkRldGFpbHMgLlRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5EZXRhaWxzIC5JdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDY5cHgpIHtcbiAgLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5EZXRhaWxzIC5JdGVtIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLkRldGFpbHMgLkl0ZW0gaW5wdXQge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmO1xuICBib3JkZXI6ICMwMDAwMDAyMCBzb2xpZCAxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDRweCAxMHB4O1xufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5EZXRhaWxzIC5JdGVtIGlucHV0OmhvdmVyOm5vdCgubmctdG91Y2hlZC5uZy1pbnZhbGlkKSB7XG4gIGJvcmRlci1jb2xvcjogIzAwMDAwMDQwO1xufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5EZXRhaWxzIC5JdGVtIGlucHV0OmZvY3VzOm5vdCgubmctdG91Y2hlZC5uZy1pbnZhbGlkKSB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbGl0ZS1ibHVlKTtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyAuSXRlbSBpbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWQge1xuICBib3JkZXItY29sb3I6IHZhcigtLWxpdGUtcmVkKTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2OXB4KSB7XG4gIC5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyAuSXRlbSBpbnB1dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5EZXRhaWxzIC5CdXR0b24ge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1NTA7XG4gIHBhZGRpbmc6IDdweCAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogdmFyKC0tYmx1ZSkgc29saWQgMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogdmFyKC0tYmx1ZSk7XG4gIG1hcmdpbjogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyAuQnV0dG9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJsdWUpO1xufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5EZXRhaWxzIC5CdXR0b246ZGlzYWJsZWQge1xuICBjb2xvcjogdmFyKC0tbGl0ZS1ibHVlKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saXRlLWJsdWUpO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufSIsIkBpbXBvcnQgXCJzcmMvc3R5bGVzLnNhc3NcIlxyXG4gICAgXHJcbj1maWVsZCgpXHJcbiAgICBmb250LXdlaWdodDogNTAwXHJcbiAgICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmXHJcbiAgICBib3JkZXI6ICMwMDAwMDAyMCBzb2xpZCAxcHhcclxuICAgIHdpZHRoOiAxMDAlXHJcbiAgICBwYWRkaW5nOiAxMHB4XHJcbiAgICBmb250LXNpemU6IDE2cHhcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweFxyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4xc1xyXG4gICAgJjpob3Zlcjpub3QoLm5nLXRvdWNoZWQubmctaW52YWxpZClcclxuICAgICAgICBib3JkZXItY29sb3I6ICMwMDAwMDA0MFxyXG4gICAgJjpmb2N1czpub3QoLm5nLXRvdWNoZWQubmctaW52YWxpZClcclxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWxpdGUtYmx1ZSlcclxuICAgICYubmctdG91Y2hlZC5uZy1pbnZhbGlkXHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saXRlLXJlZClcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kICggbWF4LXdpZHRoOiA0NjlweCApXHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4XHJcbiAgICAgICAgcGFkZGluZzogNXB4XHJcblxyXG49YnV0dG9uKClcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KVxyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnRcclxuICAgIGZvbnQtc2l6ZTogMTZweFxyXG4gICAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZlxyXG4gICAgZm9udC13ZWlnaHQ6IDU1MFxyXG4gICAgcGFkZGluZzogN3B4IDE1cHhcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG4gICAgYm9yZGVyOiB2YXIoLS1ibHVlKSBzb2xpZCAycHhcclxuICAgIGJhY2tncm91bmQ6ICNmZmZcclxuICAgIGNvbG9yOiB2YXIoLS1ibHVlKVxyXG4gICAgbWFyZ2luOiAxMHB4XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAwcHhcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMXNcclxuICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZClcclxuICAgICAgICBjb2xvcjogI2ZmZlxyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJsdWUpXHJcbiAgICAmOmRpc2FibGVkXHJcbiAgICAgICAgY29sb3I6IHZhcigtLWxpdGUtYmx1ZSlcclxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWxpdGUtYmx1ZSlcclxuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkXHJcblxyXG49bWFuYWdlLWJ1dHRvbigkdywgJGgpXHJcbiAgICBvdXRsaW5lOiBub25lXHJcbiAgICBib3JkZXI6IG5vbmVcclxuICAgIGJhY2tncm91bmQ6ICNmZmZcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweFxyXG4gICAgd2lkdGg6ICR3XHJcbiAgICBoZWlnaHQ6ICRoXHJcbiAgICBwYWRkaW5nOiA1cHhcclxuICAgICY6OmJlZm9yZVxyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweFxyXG4gICAgJjpob3ZlclxyXG4gICAgICAgIGJveC1zaGFkb3c6ICMwMDAwMDA1MCAycHggMCA4cHggMFxyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlclxyXG4gICAgJjpmb2N1c1xyXG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0ICMwMDAwMDA1MCAycHggMCA4cHggMFxyXG5cclxuLkZvcm0tQ29udGFpbmVyXHJcbiAgICArZmxleC1jb250YWluZXIoKVxyXG4gICAgcG9zaXRpb246IGZpeGVkXHJcbiAgICB0b3A6IDEwMHB4XHJcbiAgICBsZWZ0OiBjYWxjKCA1MCUgLSAyNTBweCApXHJcbiAgICB3aWR0aDogNTAwcHhcclxuICAgIGhlaWdodDogYXV0b1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGVcclxuICAgIGJveC1zaGFkb3c6ICMwMDAwMDAyNSAwIDRweCA4cHggMFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweFxyXG4gICAgLkZvcm0tQ29udGFpbmVyX19UaXRsZVxyXG4gICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgICAgICAgZm9udC1zaXplOiAyNnB4XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4XHJcbiAgICAuRm9ybS1Db250YWluZXJfX1dhcm5pbmdcclxuICAgICAgICBtYXJnaW46IDEwcHggMFxyXG4gICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgYm9yZGVyOiB2YXIoLS1yZWQpIHNvbGlkIDJweFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZcclxuICAgICAgICBjb2xvcjogdmFyKC0tcmVkKVxyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweFxyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweFxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHhcclxuICAgICAgICAmLm9rXHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ncmVlbilcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ncmVlbilcclxuICAgIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lclxyXG4gICAgICAgICtmbGV4LWNvbnRhaW5lcigpXHJcbiAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgICBwYWRkaW5nOiAxMHB4XHJcbiAgICAgICAgLkZpZWxkXHJcbiAgICAgICAgICAgICtmbGV4LWNvbnRhaW5lcigpXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHhcclxuICAgICAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgICAgIHNlbGVjdCxcclxuICAgICAgICAgICAgdGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICtmaWVsZCgpXHJcbiAgICAgICAgICAgIHNwYW5cclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcmVkKVxyXG4gICAgICAgICAgICB0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgcmVzaXplOiB2ZXJ0aWNhbFxyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTAwcHhcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDgwMHB4XHJcbiAgICAuRm9ybS1Db250YWluZXJfX0xpbmtzXHJcbiAgICAgICAgK2ZsZXgtY29udGFpbmVyKHJvdylcclxuICAgICAgICBwYWRkaW5nOiAxMHB4XHJcbiAgICAgICAgYm9yZGVyLXRvcDogIzAwMDAwMDMwIHNvbGlkIDFweFxyXG4gICAgICAgIGJvcmRlci1ib3R0b206ICMwMDAwMDAzMCBzb2xpZCAxcHhcclxuICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweFxyXG4gICAgICAgIHNwYW5cclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZlxyXG4gICAgICAgIGFcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDU1MFxyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYmx1ZSlcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4xc1xyXG4gICAgICAgICAgICAmOmhvdmVyXHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXJcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1saXRlLWJsdWUpXHJcbiAgICAuRm9ybS1Db250YWluZXJfX0J1dHRvblxyXG4gICAgICAgICtidXR0b24oKVxyXG5cclxuXHJcbi5TZWFyY2gtQ29udGFpbmVyXHJcbiAgICArZmxleC1jb250YWluZXIocm93LCBjZW50ZXIsIGNlbnRlcilcclxuICAgIHdpZHRoOiAxMDAlXHJcbiAgICBoZWlnaHQ6IDcwcHhcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweFxyXG4gICAgYm9yZGVyLWJvdHRvbTogIzAwMDAwMDQwIHNvbGlkIDJweFxyXG4gICAgLlF1ZXJ5XHJcbiAgICAgICAgYm9yZGVyOiBub25lXHJcbiAgICAgICAgb3V0bGluZTogbm9uZVxyXG4gICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvXHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWZcclxuICAgICAgICBwYWRkaW5nOiAwIDE1cHhcclxuICAgICAgICBoZWlnaHQ6IDEwMCVcclxuICAgIGlcclxuICAgICAgICBmbGV4OiAwIDAgMzBweFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweFxyXG4gICAgICAgIHdpZHRoOiAzMHB4XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4XHJcbiAgICAuU2VhcmNoXHJcbiAgICAgICAgY29udGVudDogdXJsKFwiL21lZGlhL2ljb25zL3NlYXJjaC5zdmdcIilcclxuICAgIC5TZXR0aW5nc1xyXG4gICAgICAgIC5TZXR0aW5ncy1JY29uLUJ0blxyXG4gICAgICAgICAgICArbWFuYWdlLWJ1dHRvbig0MHB4LCA0MHB4KVxyXG4gICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiB1cmwoXCIvbWVkaWEvaWNvbnMvc2xpZGVyLXNldHRpbmdzLnN2Z1wiKVxyXG4gICAgICAgICAgICAgICAgZmlsbDogdmFyKC0tYmx1ZSlcclxuICAgICAgICAuRGV0YWlsc1xyXG4gICAgICAgICAgICB3aWR0aDogNjAwcHhcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6ICMwMDAwMDA0MCAwIDJweCA0cHggMFxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAoIG1heC13aWR0aDogNjc2cHggKVxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpXHJcbiAgICAgICAgICAgIC5UaXRsZVxyXG4gICAgICAgICAgICAgICAgK2ZsZXgtY29udGFpbmVyKHJvdywgY2VudGVyKVxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgICAgICAuSXRlbVxyXG4gICAgICAgICAgICAgICAgK2ZsZXgtY29udGFpbmVyKHJvdylcclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kICggbWF4LXdpZHRoOiA0NjlweCApXHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4XHJcbiAgICAgICAgICAgICAgICBpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICtmaWVsZCgpXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDRweCAxMHB4XHJcbiAgICAgICAgICAgIC5CdXR0b25cclxuICAgICAgICAgICAgICAgICtidXR0b24oKSJdfQ== */"] });


/***/ }),

/***/ 1320:
/*!********************************************************!*\
  !*** ./src/app/search-users/search-users.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchUsersComponent": () => (/* binding */ SearchUsersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/account.service */ 5921);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);





function SearchUsersComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u044B\u0439 \u043F\u043E\u0438\u0441\u043A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SearchUsersComponent_div_9_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.search(ctx_r6.qDetails); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchUsersComponent_div_9_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.qDetails.username = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchUsersComponent_div_9_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.qDetails.first_name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchUsersComponent_div_9_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.qDetails.last_name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchUsersComponent_div_9_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.qDetails.district = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchUsersComponent_div_9_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.qDetails.city = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchUsersComponent_div_9_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.qDetails.country = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u041F\u043E\u0438\u0441\u043A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("top", _r1.getClientRects()[0]["y"] + 30 + "px")("left", _r1.getClientRects()[0]["x"] - _r4.getClientRects()[0]["width"] + 30 + "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.qDetails.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.qDetails.first_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.qDetails.last_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.qDetails.district);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.qDetails.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.qDetails.country);
} }
const _c0 = function (a0) { return { id: a0 }; };
function SearchUsersComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r14 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/profile")("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, i_r14.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r14.first_name + " " + i_r14.last_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.getUserStatus(i_r14));
} }
class SearchUsersComponent {
    constructor(_account) {
        this._account = _account;
        this.detailsIsOpen = false;
        this.users = [];
        this.q = "";
        this.qDetails = {
            username: "",
            first_name: "",
            last_name: "",
            country: "",
            city: "",
            district: "",
        };
    }
    ngOnInit() {
        this.search("");
    }
    search(q) {
        this._account.searchUser(q).subscribe(data => {
            if (data.data.users)
                this.users = data.data.users;
            else
                console.error(data.message);
        });
    }
    getUserStatus(u) {
        let s = "";
        if (u.profile.status)
            s = u.profile.status;
        else if (u.profile.city && u.profile.country)
            s = u.profile.city + ", " + u.profile.country;
        else
            s = u.profile.phone;
        return s.substr(0, 100);
    }
}
SearchUsersComponent.ɵfac = function SearchUsersComponent_Factory(t) { return new (t || SearchUsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService)); };
SearchUsersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchUsersComponent, selectors: [["app-search-users"]], decls: 12, vars: 3, consts: [[1, "Search-Users"], [1, "Search-Container"], ["searchForm", "ngForm"], [1, "Search"], ["name", "q", "placeholder", "\u041F\u043E\u0438\u0441\u043A...", 1, "Query", 3, "ngModel", "ngModelChange"], [1, "Settings"], ["settingsIcon", ""], ["type", "button", 1, "Settings-Icon-Btn", 3, "click"], ["class", "Details", 3, "top", "left", 4, "ngIf"], [1, "Searched-Users"], ["class", "Item", 3, "routerLink", "queryParams", 4, "ngFor", "ngForOf"], [1, "Details"], ["details", ""], [1, "Title"], [1, "Items-Container", 3, "ngSubmit"], ["detailsSearchForm", "ngForm"], [1, "Item"], ["name", "username", "placeholder", "\u041D\u0438\u043A", 3, "ngModel", "ngModelChange"], ["name", "first_name", "placeholder", "\u0418\u043C\u044F", 3, "ngModel", "ngModelChange"], ["name", "last_name", "placeholder", "\u0424\u0430\u043C\u0438\u043B\u0438\u044F", 3, "ngModel", "ngModelChange"], ["name", "district", "placeholder", "\u0420\u0430\u0439\u043E\u043D/\u0423\u043B\u0438\u0446\u0430", 3, "ngModel", "ngModelChange"], ["name", "city", "placeholder", "\u0413\u043E\u0440\u043E\u0434", 3, "ngModel", "ngModelChange"], ["name", "country", "placeholder", "\u0421\u0442\u0440\u0430\u043D\u0430", 3, "ngModel", "ngModelChange"], [1, "Button"], [1, "Item", 3, "routerLink", "queryParams"], [1, "Ava"], ["src", "/media/icons/profile.png"], [1, "Main-Info"], [1, "Name"], [1, "Status"]], template: function SearchUsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchUsersComponent_Template_input_ngModelChange_4_listener($event) { return ctx.q = $event; })("ngModelChange", function SearchUsersComponent_Template_input_ngModelChange_4_listener() { return ctx.search(ctx.q); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchUsersComponent_Template_button_click_7_listener() { return ctx.detailsIsOpen = !ctx.detailsIsOpen; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SearchUsersComponent_div_9_Template, 17, 10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SearchUsersComponent_a_11_Template, 8, 6, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.q);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.detailsIsOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.users);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.Row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.Column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.Row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.Column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n.Form-Container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  position: fixed;\n  top: 100px;\n  left: calc(50% - 250px);\n  width: 500px;\n  height: auto;\n  background: white;\n  box-shadow: #00000025 0 4px 8px 0;\n  border-radius: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Title[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  font-size: 26px;\n  margin: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Warning[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  width: 100%;\n  border: var(--red) solid 2px;\n  background: #fff;\n  color: var(--red);\n  font-size: 18px;\n  padding: 10px 20px;\n  border-radius: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Warning.ok[_ngcontent-%COMP%] {\n  color: var(--green);\n  border-color: var(--green);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n  padding: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n  margin-top: 10px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-family: \"Rubik\", sans-serif;\n  border: #00000020 solid 1px;\n  width: 100%;\n  padding: 10px;\n  font-size: 16px;\n  border-radius: 5px;\n  transition: all 0.1s;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover:not(.ng-touched.ng-invalid), .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover:not(.ng-touched.ng-invalid), .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:hover:not(.ng-touched.ng-invalid) {\n  border-color: #00000040;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus:not(.ng-touched.ng-invalid), .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus:not(.ng-touched.ng-invalid), .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus:not(.ng-touched.ng-invalid) {\n  border-color: var(--lite-blue);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input.ng-touched.ng-invalid[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select.ng-touched.ng-invalid[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border-color: var(--lite-red);\n}\n\n@media screen and (max-width: 469px) {\n  .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 5px;\n  }\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 100%;\n  color: var(--red);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Fields-Container[_ngcontent-%COMP%]   .Field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 100px;\n  max-height: 800px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 10px;\n  border-top: #00000030 solid 1px;\n  border-bottom: #00000030 solid 1px;\n  width: 100%;\n  font-size: 16px;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Links[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"Rubik\", sans-serif;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 550;\n  color: var(--blue);\n  transition: all 0.1s;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: var(--lite-blue);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Button[_ngcontent-%COMP%] {\n  width: calc(100% - 20px);\n  background: transparent;\n  font-size: 16px;\n  font-family: \"Rubik\", sans-serif;\n  font-weight: 550;\n  padding: 7px 15px;\n  cursor: pointer;\n  border: var(--blue) solid 2px;\n  background: #fff;\n  color: var(--blue);\n  margin: 10px;\n  border-radius: 1000px;\n  transition: all 0.1s;\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: #fff;\n  background: var(--blue);\n}\n\n.Form-Container[_ngcontent-%COMP%]   .Form-Container__Button[_ngcontent-%COMP%]:disabled {\n  color: var(--lite-blue);\n  border-color: var(--lite-blue);\n  cursor: not-allowed;\n}\n\n.Search-Container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 70px;\n  padding: 10px 15px;\n  border-bottom: #00000040 solid 2px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Query[_ngcontent-%COMP%] {\n  border: none;\n  outline: none;\n  width: 100%;\n  height: auto;\n  font-size: 18px;\n  font-family: Arial, Helvetica, sans-serif;\n  padding: 0 15px;\n  height: 100%;\n}\n\n.Search-Container[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  flex: 0 0 30px;\n  font-size: 30px;\n  width: 30px;\n  height: 30px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Search[_ngcontent-%COMP%] {\n  content: url(\"/media/icons/search.svg\");\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  background: #fff;\n  border-radius: 5px;\n  width: 40px;\n  height: 40px;\n  padding: 5px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%]::before {\n  font-size: 30px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%]:hover {\n  box-shadow: #00000050 2px 0 8px 0;\n  cursor: pointer;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%]:focus {\n  box-shadow: inset #00000050 2px 0 8px 0;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Settings-Icon-Btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  content: url(\"/media/icons/slider-settings.svg\");\n  fill: var(--blue);\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%] {\n  width: 600px;\n  position: absolute;\n  background: #fff;\n  border-radius: 10px;\n  padding: 10px;\n  box-shadow: #00000040 0 2px 4px 0;\n}\n\n@media screen and (max-width: 676px) {\n  .Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%] {\n    width: calc(100% - 10px);\n  }\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 10px 0;\n  width: 100%;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  margin: 10px;\n}\n\n@media screen and (max-width: 469px) {\n  .Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-family: \"Rubik\", sans-serif;\n  border: #00000020 solid 1px;\n  width: 100%;\n  padding: 10px;\n  font-size: 16px;\n  border-radius: 5px;\n  transition: all 0.1s;\n  width: 100%;\n  margin: 4px 10px;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover:not(.ng-touched.ng-invalid) {\n  border-color: #00000040;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus:not(.ng-touched.ng-invalid) {\n  border-color: var(--lite-blue);\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border-color: var(--lite-red);\n}\n\n@media screen and (max-width: 469px) {\n  .Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 5px;\n  }\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Button[_ngcontent-%COMP%] {\n  width: calc(100% - 20px);\n  background: transparent;\n  font-size: 16px;\n  font-family: \"Rubik\", sans-serif;\n  font-weight: 550;\n  padding: 7px 15px;\n  cursor: pointer;\n  border: var(--blue) solid 2px;\n  background: #fff;\n  color: var(--blue);\n  margin: 10px;\n  border-radius: 1000px;\n  transition: all 0.1s;\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: #fff;\n  background: var(--blue);\n}\n\n.Search-Container[_ngcontent-%COMP%]   .Settings[_ngcontent-%COMP%]   .Details[_ngcontent-%COMP%]   .Button[_ngcontent-%COMP%]:disabled {\n  color: var(--lite-blue);\n  border-color: var(--lite-blue);\n  cursor: not-allowed;\n}\n\n.Search-Users[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 1200px;\n  background: #fff;\n  border-radius: 5px;\n  box-shadow: #00000050 0 1px 4px 0;\n}\n\n@media screen and (max-width: 1543px) {\n  .Search-Users[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.Search-Users[_ngcontent-%COMP%]   .Searched-Users[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n}\n\n.Search-Users[_ngcontent-%COMP%]   .Searched-Users[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  height: 80px;\n  color: #000;\n  text-decoration: none;\n  width: 100%;\n}\n\n.Search-Users[_ngcontent-%COMP%]   .Searched-Users[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Ava[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 100%;\n  margin: 0 10px;\n}\n\n.Search-Users[_ngcontent-%COMP%]   .Searched-Users[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Ava[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 100%;\n}\n\n.Search-Users[_ngcontent-%COMP%]   .Searched-Users[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Main-Info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n}\n\n.Search-Users[_ngcontent-%COMP%]   .Searched-Users[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Main-Info[_ngcontent-%COMP%]   .Name[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-bottom: 8px;\n}\n\n.Search-Users[_ngcontent-%COMP%]   .Searched-Users[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Main-Info[_ngcontent-%COMP%]   .Status[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.Search-Users[_ngcontent-%COMP%]   .Searched-Users[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding: 10px;\n}\n\n.Search-Users[_ngcontent-%COMP%]   .Searched-Users[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%]   .Go-To-Chat[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  background: #fff;\n  border-radius: 5px;\n  width: 40px;\n  height: 40px;\n  padding: 5px;\n}\n\n.Search-Users[_ngcontent-%COMP%]   .Searched-Users[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%]   .Go-To-Chat[_ngcontent-%COMP%]::before {\n  font-size: 30px;\n}\n\n.Search-Users[_ngcontent-%COMP%]   .Searched-Users[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%]   .Go-To-Chat[_ngcontent-%COMP%]:hover {\n  box-shadow: #00000050 2px 0 8px 0;\n  cursor: pointer;\n}\n\n.Search-Users[_ngcontent-%COMP%]   .Searched-Users[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%]   .Go-To-Chat[_ngcontent-%COMP%]:focus {\n  box-shadow: inset #00000050 2px 0 8px 0;\n}\n\n.Search-Users[_ngcontent-%COMP%]   .Searched-Users[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]   .Actions[_ngcontent-%COMP%]   .Go-To-Chat[_ngcontent-%COMP%]::before {\n  font-size: 30px;\n  content: url(\"/media/icons/message.svg\");\n}\n\n.Search-Users[_ngcontent-%COMP%]   .Searched-Users[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]:hover {\n  background: #00000020;\n}\n\n.Search-Users[_ngcontent-%COMP%]   .Searched-Users[_ngcontent-%COMP%]   .Item[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 0 5px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcc3R5bGVzLnNhc3MiLCJzZWFyY2gtdXNlcnMuY29tcG9uZW50LnNhc3MiLCIuLlxcLi5cXHN0eWxlcy5mb3Jtcy5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNDSjs7QURTQTtFQUxJLGFBQUE7RUFDQSxtQkFLZ0I7RUFKaEIsMkJBSCtCO0VBSS9CLHVCQUpnRDtBQ0lwRDs7QURLQTtFQVJJLGFBQUE7RUFDQSxzQkFGa0I7RUFHbEIsMkJBSCtCO0VBSS9CLHVCQUpnRDtBQ1dwRDs7QURqQkE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQ29CSjs7QURWQTtFQUxJLGFBQUE7RUFDQSxtQkFLZ0I7RUFKaEIsMkJBSCtCO0VBSS9CLHVCQUpnRDtBQ3VCcEQ7O0FEZEE7RUFSSSxhQUFBO0VBQ0Esc0JBRmtCO0VBR2xCLDJCQUgrQjtFQUkvQix1QkFKZ0Q7QUM4QnBEOztBQ3VCQTtFRnBESSxhQUFBO0VBQ0Esc0JBRmtCO0VBR2xCLDJCQUgrQjtFQUkvQix1QkFKZ0Q7RUV1RGhELGVBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtBRGpCSjs7QUNrQkk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBRGhCUjs7QUNpQkk7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEZlI7O0FDZ0JRO0VBQ0ksbUJBQUE7RUFDQSwwQkFBQTtBRGRaOztBQ2VJO0VGL0VBLGFBQUE7RUFDQSxzQkFGa0I7RUFHbEIsMkJBSCtCO0VBSS9CLHVCQUpnRDtFRWtGNUMsV0FBQTtFQUNBLGFBQUE7QURWUjs7QUNXUTtFRm5GSixhQUFBO0VBQ0Esc0JBRmtCO0VBR2xCLDJCQUgrQjtFQUkvQix1QkFK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Qjs7QUFwVmdCO0VDSVosYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0RQK0I7RUNRL0IsWURScUM7RUNTckMsWUFBQTtBRG1WSjs7QUNsVkk7RUFDSSxlQUFBO0FEb1ZSOztBQ25WSTtFQUNJLGlDQUFBO0VBQ0EsZUFBQTtBRHFWUjs7QUNwVkk7RUFDSSx1Q0FBQTtBRHNWUjs7QUFyV29CO0VBQ0ksZUFBQTtFQUNBLHdDQUFBO0FBdVd4Qjs7QUF0V1k7RUFDSSxxQkFBQTtBQXdXaEI7O0FBdldZO0VBQ0ksMEJBQUE7QUF5V2hCIiwiZmlsZSI6InNlYXJjaC11c2Vycy5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHlcbiAgICBtYXJnaW46IDBcbiAgICBwYWRkaW5nOiAwXG5cbiRuYXZfdzozMDBweFxuICAgIFxuPWZsZXgtY29udGFpbmVyKCRkaXI6IGNvbHVtbiwgJGpjOiBmbGV4LXN0YXJ0LCAkYWk6IGZsZXgtc3RhcnQpXG4gICAgZGlzcGxheTogZmxleFxuICAgIGZsZXgtZGlyZWN0aW9uOiAkZGlyXG4gICAganVzdGlmeS1jb250ZW50OiAkamNcbiAgICBhbGlnbi1pdGVtczogJGFpIFxuXG4uUm93XG4gICAgK2ZsZXgtY29udGFpbmVyKHJvdylcblxuLkNvbHVtblxuICAgICtmbGV4LWNvbnRhaW5lcigpXG4iLCJodG1sLCBib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uUm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLkNvbHVtbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbmh0bWwsIGJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5Sb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uQ29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLkZvcm0tQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDEwMHB4O1xuICBsZWZ0OiBjYWxjKDUwJSAtIDI1MHB4KTtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAjMDAwMDAwMjUgMCA0cHggOHB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19UaXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fV2FybmluZyB7XG4gIG1hcmdpbjogMTBweCAwO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiB2YXIoLS1yZWQpIHNvbGlkIDJweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6IHZhcigtLXJlZCk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fV2FybmluZy5vayB7XG4gIGNvbG9yOiB2YXIoLS1ncmVlbik7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZ3JlZW4pO1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIGlucHV0LFxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgc2VsZWN0LFxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgdGV4dGFyZWEge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmO1xuICBib3JkZXI6ICMwMDAwMDAyMCBzb2xpZCAxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCBpbnB1dDpob3Zlcjpub3QoLm5nLXRvdWNoZWQubmctaW52YWxpZCksXG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCBzZWxlY3Q6aG92ZXI6bm90KC5uZy10b3VjaGVkLm5nLWludmFsaWQpLFxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgdGV4dGFyZWE6aG92ZXI6bm90KC5uZy10b3VjaGVkLm5nLWludmFsaWQpIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwNDA7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCBpbnB1dDpmb2N1czpub3QoLm5nLXRvdWNoZWQubmctaW52YWxpZCksXG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCBzZWxlY3Q6Zm9jdXM6bm90KC5uZy10b3VjaGVkLm5nLWludmFsaWQpLFxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgdGV4dGFyZWE6Zm9jdXM6bm90KC5uZy10b3VjaGVkLm5nLWludmFsaWQpIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saXRlLWJsdWUpO1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgaW5wdXQubmctdG91Y2hlZC5uZy1pbnZhbGlkLFxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgc2VsZWN0Lm5nLXRvdWNoZWQubmctaW52YWxpZCxcbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIHRleHRhcmVhLm5nLXRvdWNoZWQubmctaW52YWxpZCB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbGl0ZS1yZWQpO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDY5cHgpIHtcbiAgLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgaW5wdXQsXG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCBzZWxlY3QsXG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19GaWVsZHMtQ29udGFpbmVyIC5GaWVsZCB0ZXh0YXJlYSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lciAuRmllbGQgc3BhbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogdmFyKC0tcmVkKTtcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0ZpZWxkcy1Db250YWluZXIgLkZpZWxkIHRleHRhcmVhIHtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIG1heC1oZWlnaHQ6IDgwMHB4O1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fTGlua3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItdG9wOiAjMDAwMDAwMzAgc29saWQgMXB4O1xuICBib3JkZXItYm90dG9tOiAjMDAwMDAwMzAgc29saWQgMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fTGlua3Mgc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWY7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19MaW5rcyBhIHtcbiAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcbn1cbi5Gb3JtLUNvbnRhaW5lciAuRm9ybS1Db250YWluZXJfX0xpbmtzIGE6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1saXRlLWJsdWUpO1xufVxuLkZvcm0tQ29udGFpbmVyIC5Gb3JtLUNvbnRhaW5lcl9fQnV0dG9uIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTUwO1xuICBwYWRkaW5nOiA3cHggMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IHZhcigtLWJsdWUpIHNvbGlkIDJweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xuICBtYXJnaW46IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXM7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19CdXR0b246aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZSk7XG59XG4uRm9ybS1Db250YWluZXIgLkZvcm0tQ29udGFpbmVyX19CdXR0b246ZGlzYWJsZWQge1xuICBjb2xvcjogdmFyKC0tbGl0ZS1ibHVlKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saXRlLWJsdWUpO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uU2VhcmNoLUNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3MHB4O1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJvcmRlci1ib3R0b206ICMwMDAwMDA0MCBzb2xpZCAycHg7XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuUXVlcnkge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLlNlYXJjaC1Db250YWluZXIgaSB7XG4gIGZsZXg6IDAgMCAzMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuU2VhcmNoIHtcbiAgY29udGVudDogdXJsKFwiL21lZGlhL2ljb25zL3NlYXJjaC5zdmdcIik7XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLlNldHRpbmdzLUljb24tQnRuIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuU2V0dGluZ3MtSWNvbi1CdG46OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuU2V0dGluZ3MtSWNvbi1CdG46aG92ZXIge1xuICBib3gtc2hhZG93OiAjMDAwMDAwNTAgMnB4IDAgOHB4IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuU2V0dGluZ3MtSWNvbi1CdG46Zm9jdXMge1xuICBib3gtc2hhZG93OiBpbnNldCAjMDAwMDAwNTAgMnB4IDAgOHB4IDA7XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLlNldHRpbmdzLUljb24tQnRuIGkge1xuICBjb250ZW50OiB1cmwoXCIvbWVkaWEvaWNvbnMvc2xpZGVyLXNldHRpbmdzLnN2Z1wiKTtcbiAgZmlsbDogdmFyKC0tYmx1ZSk7XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLkRldGFpbHMge1xuICB3aWR0aDogNjAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm94LXNoYWRvdzogIzAwMDAwMDQwIDAgMnB4IDRweCAwO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjc2cHgpIHtcbiAgLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5EZXRhaWxzIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG4gIH1cbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyAuVGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLkRldGFpbHMgLkl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW46IDEwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjlweCkge1xuICAuU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLkRldGFpbHMgLkl0ZW0ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbi5TZWFyY2gtQ29udGFpbmVyIC5TZXR0aW5ncyAuRGV0YWlscyAuSXRlbSBpbnB1dCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtZmFtaWx5OiBcIlJ1YmlrXCIsIHNhbnMtc2VyaWY7XG4gIGJvcmRlcjogIzAwMDAwMDIwIHNvbGlkIDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogNHB4IDEwcHg7XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLkRldGFpbHMgLkl0ZW0gaW5wdXQ6aG92ZXI6bm90KC5uZy10b3VjaGVkLm5nLWludmFsaWQpIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDAwMDAwNDA7XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLkRldGFpbHMgLkl0ZW0gaW5wdXQ6Zm9jdXM6bm90KC5uZy10b3VjaGVkLm5nLWludmFsaWQpIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saXRlLWJsdWUpO1xufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5EZXRhaWxzIC5JdGVtIGlucHV0Lm5nLXRvdWNoZWQubmctaW52YWxpZCB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbGl0ZS1yZWQpO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDY5cHgpIHtcbiAgLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5EZXRhaWxzIC5JdGVtIGlucHV0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLkRldGFpbHMgLkJ1dHRvbiB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgcGFkZGluZzogN3B4IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiB2YXIoLS1ibHVlKSBzb2xpZCAycHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzO1xufVxuLlNlYXJjaC1Db250YWluZXIgLlNldHRpbmdzIC5EZXRhaWxzIC5CdXR0b246aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZSk7XG59XG4uU2VhcmNoLUNvbnRhaW5lciAuU2V0dGluZ3MgLkRldGFpbHMgLkJ1dHRvbjpkaXNhYmxlZCB7XG4gIGNvbG9yOiB2YXIoLS1saXRlLWJsdWUpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWxpdGUtYmx1ZSk7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5TZWFyY2gtVXNlcnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogMTIwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6ICMwMDAwMDA1MCAwIDFweCA0cHggMDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE1NDNweCkge1xuICAuU2VhcmNoLVVzZXJzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLlNlYXJjaC1Vc2VycyAuU2VhcmNoZWQtVXNlcnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogMTAwJTtcbn1cbi5TZWFyY2gtVXNlcnMgLlNlYXJjaGVkLVVzZXJzIC5JdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDgwcHg7XG4gIGNvbG9yOiAjMDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLlNlYXJjaC1Vc2VycyAuU2VhcmNoZWQtVXNlcnMgLkl0ZW0gLkF2YSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuLlNlYXJjaC1Vc2VycyAuU2VhcmNoZWQtVXNlcnMgLkl0ZW0gLkF2YSBpbWcge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuLlNlYXJjaC1Vc2VycyAuU2VhcmNoZWQtVXNlcnMgLkl0ZW0gLk1haW4tSW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuLlNlYXJjaC1Vc2VycyAuU2VhcmNoZWQtVXNlcnMgLkl0ZW0gLk1haW4tSW5mbyAuTmFtZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLlNlYXJjaC1Vc2VycyAuU2VhcmNoZWQtVXNlcnMgLkl0ZW0gLk1haW4tSW5mbyAuU3RhdHVzIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLlNlYXJjaC1Vc2VycyAuU2VhcmNoZWQtVXNlcnMgLkl0ZW0gLkFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLlNlYXJjaC1Vc2VycyAuU2VhcmNoZWQtVXNlcnMgLkl0ZW0gLkFjdGlvbnMgLkdvLVRvLUNoYXQge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogNXB4O1xufVxuLlNlYXJjaC1Vc2VycyAuU2VhcmNoZWQtVXNlcnMgLkl0ZW0gLkFjdGlvbnMgLkdvLVRvLUNoYXQ6OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5TZWFyY2gtVXNlcnMgLlNlYXJjaGVkLVVzZXJzIC5JdGVtIC5BY3Rpb25zIC5Hby1Uby1DaGF0OmhvdmVyIHtcbiAgYm94LXNoYWRvdzogIzAwMDAwMDUwIDJweCAwIDhweCAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uU2VhcmNoLVVzZXJzIC5TZWFyY2hlZC1Vc2VycyAuSXRlbSAuQWN0aW9ucyAuR28tVG8tQ2hhdDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IGluc2V0ICMwMDAwMDA1MCAycHggMCA4cHggMDtcbn1cbi5TZWFyY2gtVXNlcnMgLlNlYXJjaGVkLVVzZXJzIC5JdGVtIC5BY3Rpb25zIC5Hby1Uby1DaGF0OjpiZWZvcmUge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbnRlbnQ6IHVybChcIi9tZWRpYS9pY29ucy9tZXNzYWdlLnN2Z1wiKTtcbn1cbi5TZWFyY2gtVXNlcnMgLlNlYXJjaGVkLVVzZXJzIC5JdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDIwO1xufVxuLlNlYXJjaC1Vc2VycyAuU2VhcmNoZWQtVXNlcnMgLkl0ZW06bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xufSIsIkBpbXBvcnQgXCJzcmMvc3R5bGVzLnNhc3NcIlxyXG4gICAgXHJcbj1maWVsZCgpXHJcbiAgICBmb250LXdlaWdodDogNTAwXHJcbiAgICBmb250LWZhbWlseTogXCJSdWJpa1wiLCBzYW5zLXNlcmlmXHJcbiAgICBib3JkZXI6ICMwMDAwMDAyMCBzb2xpZCAxcHhcclxuICAgIHdpZHRoOiAxMDAlXHJcbiAgICBwYWRkaW5nOiAxMHB4XHJcbiAgICBmb250LXNpemU6IDE2cHhcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweFxyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4xc1xyXG4gICAgJjpob3Zlcjpub3QoLm5nLXRvdWNoZWQubmctaW52YWxpZClcclxuICAgICAgICBib3JkZXItY29sb3I6ICMwMDAwMDA0MFxyXG4gICAgJjpmb2N1czpub3QoLm5nLXRvdWNoZWQubmctaW52YWxpZClcclxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWxpdGUtYmx1ZSlcclxuICAgICYubmctdG91Y2hlZC5uZy1pbnZhbGlkXHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1saXRlLXJlZClcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kICggbWF4LXdpZHRoOiA0NjlweCApXHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4XHJcbiAgICAgICAgcGFkZGluZzogNXB4XHJcblxyXG49YnV0dG9uKClcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KVxyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnRcclxuICAgIGZvbnQtc2l6ZTogMTZweFxyXG4gICAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZlxyXG4gICAgZm9udC13ZWlnaHQ6IDU1MFxyXG4gICAgcGFkZGluZzogN3B4IDE1cHhcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG4gICAgYm9yZGVyOiB2YXIoLS1ibHVlKSBzb2xpZCAycHhcclxuICAgIGJhY2tncm91bmQ6ICNmZmZcclxuICAgIGNvbG9yOiB2YXIoLS1ibHVlKVxyXG4gICAgbWFyZ2luOiAxMHB4XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAwcHhcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMXNcclxuICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZClcclxuICAgICAgICBjb2xvcjogI2ZmZlxyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJsdWUpXHJcbiAgICAmOmRpc2FibGVkXHJcbiAgICAgICAgY29sb3I6IHZhcigtLWxpdGUtYmx1ZSlcclxuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWxpdGUtYmx1ZSlcclxuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkXHJcblxyXG49bWFuYWdlLWJ1dHRvbigkdywgJGgpXHJcbiAgICBvdXRsaW5lOiBub25lXHJcbiAgICBib3JkZXI6IG5vbmVcclxuICAgIGJhY2tncm91bmQ6ICNmZmZcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweFxyXG4gICAgd2lkdGg6ICR3XHJcbiAgICBoZWlnaHQ6ICRoXHJcbiAgICBwYWRkaW5nOiA1cHhcclxuICAgICY6OmJlZm9yZVxyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweFxyXG4gICAgJjpob3ZlclxyXG4gICAgICAgIGJveC1zaGFkb3c6ICMwMDAwMDA1MCAycHggMCA4cHggMFxyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlclxyXG4gICAgJjpmb2N1c1xyXG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0ICMwMDAwMDA1MCAycHggMCA4cHggMFxyXG5cclxuLkZvcm0tQ29udGFpbmVyXHJcbiAgICArZmxleC1jb250YWluZXIoKVxyXG4gICAgcG9zaXRpb246IGZpeGVkXHJcbiAgICB0b3A6IDEwMHB4XHJcbiAgICBsZWZ0OiBjYWxjKCA1MCUgLSAyNTBweCApXHJcbiAgICB3aWR0aDogNTAwcHhcclxuICAgIGhlaWdodDogYXV0b1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGVcclxuICAgIGJveC1zaGFkb3c6ICMwMDAwMDAyNSAwIDRweCA4cHggMFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweFxyXG4gICAgLkZvcm0tQ29udGFpbmVyX19UaXRsZVxyXG4gICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgICAgICAgZm9udC1zaXplOiAyNnB4XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4XHJcbiAgICAuRm9ybS1Db250YWluZXJfX1dhcm5pbmdcclxuICAgICAgICBtYXJnaW46IDEwcHggMFxyXG4gICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgYm9yZGVyOiB2YXIoLS1yZWQpIHNvbGlkIDJweFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZcclxuICAgICAgICBjb2xvcjogdmFyKC0tcmVkKVxyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweFxyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweFxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHhcclxuICAgICAgICAmLm9rXHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ncmVlbilcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ncmVlbilcclxuICAgIC5Gb3JtLUNvbnRhaW5lcl9fRmllbGRzLUNvbnRhaW5lclxyXG4gICAgICAgICtmbGV4LWNvbnRhaW5lcigpXHJcbiAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgICBwYWRkaW5nOiAxMHB4XHJcbiAgICAgICAgLkZpZWxkXHJcbiAgICAgICAgICAgICtmbGV4LWNvbnRhaW5lcigpXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHhcclxuICAgICAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgICAgIHNlbGVjdCxcclxuICAgICAgICAgICAgdGV4dGFyZWFcclxuICAgICAgICAgICAgICAgICtmaWVsZCgpXHJcbiAgICAgICAgICAgIHNwYW5cclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcmVkKVxyXG4gICAgICAgICAgICB0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgcmVzaXplOiB2ZXJ0aWNhbFxyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTAwcHhcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDgwMHB4XHJcbiAgICAuRm9ybS1Db250YWluZXJfX0xpbmtzXHJcbiAgICAgICAgK2ZsZXgtY29udGFpbmVyKHJvdylcclxuICAgICAgICBwYWRkaW5nOiAxMHB4XHJcbiAgICAgICAgYm9yZGVyLXRvcDogIzAwMDAwMDMwIHNvbGlkIDFweFxyXG4gICAgICAgIGJvcmRlci1ib3R0b206ICMwMDAwMDAzMCBzb2xpZCAxcHhcclxuICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweFxyXG4gICAgICAgIHNwYW5cclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUnViaWtcIiwgc2Fucy1zZXJpZlxyXG4gICAgICAgIGFcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDU1MFxyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYmx1ZSlcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4xc1xyXG4gICAgICAgICAgICAmOmhvdmVyXHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXJcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1saXRlLWJsdWUpXHJcbiAgICAuRm9ybS1Db250YWluZXJfX0J1dHRvblxyXG4gICAgICAgICtidXR0b24oKVxyXG5cclxuXHJcbi5TZWFyY2gtQ29udGFpbmVyXHJcbiAgICArZmxleC1jb250YWluZXIocm93LCBjZW50ZXIsIGNlbnRlcilcclxuICAgIHdpZHRoOiAxMDAlXHJcbiAgICBoZWlnaHQ6IDcwcHhcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweFxyXG4gICAgYm9yZGVyLWJvdHRvbTogIzAwMDAwMDQwIHNvbGlkIDJweFxyXG4gICAgLlF1ZXJ5XHJcbiAgICAgICAgYm9yZGVyOiBub25lXHJcbiAgICAgICAgb3V0bGluZTogbm9uZVxyXG4gICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvXHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWZcclxuICAgICAgICBwYWRkaW5nOiAwIDE1cHhcclxuICAgICAgICBoZWlnaHQ6IDEwMCVcclxuICAgIGlcclxuICAgICAgICBmbGV4OiAwIDAgMzBweFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweFxyXG4gICAgICAgIHdpZHRoOiAzMHB4XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4XHJcbiAgICAuU2VhcmNoXHJcbiAgICAgICAgY29udGVudDogdXJsKFwiL21lZGlhL2ljb25zL3NlYXJjaC5zdmdcIilcclxuICAgIC5TZXR0aW5nc1xyXG4gICAgICAgIC5TZXR0aW5ncy1JY29uLUJ0blxyXG4gICAgICAgICAgICArbWFuYWdlLWJ1dHRvbig0MHB4LCA0MHB4KVxyXG4gICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiB1cmwoXCIvbWVkaWEvaWNvbnMvc2xpZGVyLXNldHRpbmdzLnN2Z1wiKVxyXG4gICAgICAgICAgICAgICAgZmlsbDogdmFyKC0tYmx1ZSlcclxuICAgICAgICAuRGV0YWlsc1xyXG4gICAgICAgICAgICB3aWR0aDogNjAwcHhcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6ICMwMDAwMDA0MCAwIDJweCA0cHggMFxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAoIG1heC13aWR0aDogNjc2cHggKVxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpXHJcbiAgICAgICAgICAgIC5UaXRsZVxyXG4gICAgICAgICAgICAgICAgK2ZsZXgtY29udGFpbmVyKHJvdywgY2VudGVyKVxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgICAgICAuSXRlbVxyXG4gICAgICAgICAgICAgICAgK2ZsZXgtY29udGFpbmVyKHJvdylcclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kICggbWF4LXdpZHRoOiA0NjlweCApXHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4XHJcbiAgICAgICAgICAgICAgICBpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICtmaWVsZCgpXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCVcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDRweCAxMHB4XHJcbiAgICAgICAgICAgIC5CdXR0b25cclxuICAgICAgICAgICAgICAgICtidXR0b24oKSJdfQ== */"] });


/***/ }),

/***/ 5921:
/*!*********************************************!*\
  !*** ./src/app/services/account.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountService": () => (/* binding */ AccountService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3981);


class AccountService {
    constructor(_http) {
        this._http = _http;
    }
    getUser(query) {
        let token = this._getCookie("csrftoken");
        return this._http.get(`/api/v1/account/${(query === null || query === void 0 ? void 0 : query.id) ? "?id=" + (query === null || query === void 0 ? void 0 : query.id) : ""}`, {
            headers: { "XCSRF-Token": token }
        });
    }
    logout() {
        let token = this._getCookie("csrftoken");
        return this._http.post("/api/v1/account/logout/", { csrfmiddlewaretoken: token }, {
            headers: { "X-CSRFToken": token }
        });
    }
    login(data) {
        let token = this._getCookie("csrftoken");
        return this._http.post("/api/v1/account/login/", Object.assign({ csrfmiddlewaretoken: token }, data), {
            headers: { "X-CSRFToken": token }
        });
    }
    register(data) {
        let token = this._getCookie("csrftoken");
        return this._http.post("/api/v1/account/register/", Object.assign({ csrfmiddlewaretoken: token }, data), {
            headers: { "X-CSRFToken": token }
        });
    }
    editProfile(data) {
        let token = this._getCookie("csrftoken");
        return this._http.put("/api/v1/account/", Object.assign({ csrfmiddlewaretoken: token }, data), {
            headers: { "X-CSRFToken": token }
        });
    }
    resetPassword(data) {
        let token = this._getCookie("csrftoken");
        return this._http.post("/api/v1/account/password/reset/", Object.assign({ csrfmiddlewaretoken: token }, data), {
            headers: { "X-CSRFToken": token }
        });
    }
    resetPasswordConfirm(data) {
        let token = this._getCookie("csrftoken");
        return this._http.post(`/api/v1/account/password/reset/confirm/${data.uid}/${data.token}/`, Object.assign({ csrfmiddlewaretoken: token }, data), {
            headers: { "X-CSRFToken": token }
        });
    }
    searchUser(q) {
        let token = this._getCookie("csrftoken");
        return this._http.post(`/api/v1/account/search/`, { csrfmiddlewaretoken: token, q }, {
            headers: { "X-CSRFToken": token }
        });
    }
    _getCookie(name) {
        let ca = document.cookie.split(';');
        let caLen = ca.length;
        let cookieName = `${name}=`;
        let c;
        for (let i = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, '');
            if (c.indexOf(cookieName) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return '';
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
AccountService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5292:
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChatService": () => (/* binding */ ChatService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4008);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./websocket.service */ 4911);




class ChatService {
    constructor(_messages, _http, _ws) {
        this._messages = _messages;
        this._http = _http;
        this._ws = _ws;
    }
    connectToMessages(id) {
        this._messages = this._ws.connect(`ws://127.0.0.1:8000/chat/${id}/`);
    }
    getUserChats() {
        return this._http.get(`/api/v1/chats/`, {
            headers: { "X-CSRFToken": this._getCookie("csrftoken") }
        });
    }
    getChatById(id) {
        return this._http.get(`/api/v1/chats/?id=${id}`, {
            headers: { "X-CSRFToken": this._getCookie("csrftoken") }
        });
    }
    editChat(chat, chatId, action) {
        return this._http.put(`/api/v1/chats/?id=${chatId}&action=${action}`, Object.assign({ csrfmiddlewaretoken: this._getCookie("csrftoken") }, chat), {
            headers: { "X-CSRFToken": this._getCookie("csrftoken") }
        });
    }
    signout(id) {
        return this._http.put(`/api/v1/chats/?id=${id}&action=remove_user`, { csrfmiddlewaretoken: this._getCookie("csrftoken"), id }, {
            headers: { "X-CSRFToken": this._getCookie("csrftoken") }
        });
    }
    ban(id, userId) {
        return this._http.put(`/api/v1/chats/?id=${id}&userId=${userId}&action=ban_user`, { csrfmiddlewaretoken: this._getCookie("csrftoken"), id }, {
            headers: { "X-CSRFToken": this._getCookie("csrftoken") }
        });
    }
    uploadFile(fd, type) {
        return this._http.post(`/api/v1/chats/messages/upload/?type=${type}`, fd, {
            headers: { "X-CSRFToken": this._getCookie("csrftoken") },
            reportProgress: true,
            observe: 'events'
        });
    }
    deleteUploadedFile(id, type) {
        return this._http.delete(`/api/v1/chats/messages/upload/?type=${type}&id=${id}`, {
            headers: { "X-CSRFToken": this._getCookie("csrftoken") }
        });
    }
    sendMessage(message) {
        this._messages.next({ "action": "send_message", message });
    }
    writingMessage(user) {
        this._messages.next({ "action": "writing_message", user });
    }
    readMessage(chat) {
        this._messages.next({ "action": "read_messages", chat });
    }
    subscribeToMessages() {
        return this._messages;
    }
    _getCookie(name) {
        let ca = document.cookie.split(';');
        let caLen = ca.length;
        let cookieName = `${name}=`;
        let c;
        for (let i = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, '');
            if (c.indexOf(cookieName) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return '';
    }
}
ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_websocket_service__WEBPACK_IMPORTED_MODULE_0__.WebsocketService)); };
ChatService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4911:
/*!***********************************************!*\
  !*** ./src/app/services/websocket.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebsocketService": () => (/* binding */ WebsocketService)
/* harmony export */ });
/* harmony import */ var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/webSocket */ 7106);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4008);



class WebsocketService {
    constructor(_subject) {
        this._subject = _subject;
        this._reconnectedCount = 0;
    }
    connect(url) {
        this._subject = (0,rxjs_webSocket__WEBPACK_IMPORTED_MODULE_0__.webSocket)(url);
        return this._subject;
    }
}
WebsocketService.ɵfac = function WebsocketService_Factory(t) { return new (t || WebsocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject)); };
WebsocketService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: WebsocketService, factory: WebsocketService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map