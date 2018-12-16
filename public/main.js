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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron { margin: 0; padding: 0; height: 100%; width: 100%; background-color: lightblue;  }\r\n\r\n.panel-body.chatWrap{max-width: 900px; height: 400px; overflow-y: scroll;\r\n    background-color:lightblue; }\r\n\r\ntextarea {background-color: lightyellow; border: firebrick; border-radius: 0.5em}\r\n\r\n#chatPage {background-image: url('footprint.jpg') }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsYUFBYSxVQUFVLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsNEJBQTRCLEdBQUc7O0FBRTlGLHFCQUFxQixpQkFBaUIsQ0FBQyxjQUFjLENBQUMsbUJBQW1CO0lBQ3JFLDJCQUEyQixFQUFFOztBQUNqQyxVQUFVLDhCQUE4QixDQUFDLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDOztBQUVqRixXQUFXLHNDQUFxRCxFQUFFIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVtYm90cm9uIHsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwOyBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOyBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7ICB9XHJcblxyXG4ucGFuZWwtYm9keS5jaGF0V3JhcHttYXgtd2lkdGg6IDkwMHB4OyBoZWlnaHQ6IDQwMHB4OyBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Ymx1ZTsgfVxyXG50ZXh0YXJlYSB7YmFja2dyb3VuZC1jb2xvcjogbGlnaHR5ZWxsb3c7IGJvcmRlcjogZmlyZWJyaWNrOyBib3JkZXItcmFkaXVzOiAwLjVlbX1cclxuXHJcbiNjaGF0UGFnZSB7YmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9pbWFnZXMvZm9vdHByaW50LmpwZykgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n<router-outlet></router-outlet>\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'MEANchat';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _chat_chat_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chat/chat.services */ "./src/app/chat/chat.services.ts");
/* harmony import */ var _chat_chatPage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chat/chatPage.component */ "./src/app/chat/chatPage.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_8__["chatComponent"],
                _chat_chatPage_component__WEBPACK_IMPORTED_MODULE_10__["chatPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                    { path: '', redirectTo: '/entry', pathMatch: 'full' },
                    { path: 'entry', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_8__["chatComponent"] },
                    { path: 'chat', component: _chat_chatPage_component__WEBPACK_IMPORTED_MODULE_10__["chatPageComponent"] }
                ])
            ],
            providers: [_chat_chat_services__WEBPACK_IMPORTED_MODULE_9__["chatService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>    \r\n    <title>MEAN chat</title>\r\n</head>\r\n<body id=\"mainPage\" >\r\n    <div class=\"container\" >\r\n        <div class=\"row\">\r\n            <div class=\"jumbotron\"  align=\"center\">\r\n                <h1>Have fun!!!</h1>\r\n                <img class=\"img-rectangle\" src=\"../assets/images/footprint.jpg\"><br><br>\r\n                <form #form1 = \"ngForm\" (ngSubmit) = OnSubmit(form1) style=\"display: inline-block\">\r\n                    <div class=\"form-group \">                        \r\n                        <input type=\"text\" required class=\"form-control\" name=\"Cname\" #Cname = \"ngModel\"\r\n                        [(ngModel)] = \"chatName\" placeholder=\"Enter your name\">\r\n                        <div class=\"alert alert-danger\" *ngIf=\"Cname.touched && !Cname.valid\">\r\n                            <div *ngIf=\"Cname.errors.required\">Chat name is required</div>                                                              \r\n                        </div>\r\n                    </div>\r\n                    <button style=\"display: inline-block\" class=\"btn btn-danger\" type=\"Submit\" [disabled]=\"!form1.valid\">Enter</button>                                  \r\n                </form>     \r\n                <div *ngIf = \"userCreated == false\">\r\n                    <h2>User name selected is already in use</h2>\r\n                </div>           \r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n</body>\r\n</html>"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: chatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chatComponent", function() { return chatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chat_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.services */ "./src/app/chat/chat.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var chatComponent = /** @class */ (function () {
    function chatComponent(_chatService, _router) {
        var _this = this;
        this._chatService = _chatService;
        this._router = _router;
        this.userCreated = true;
        this.userList = [];
        this._chatService.newUserJoined().subscribe(function (data) {
            console.log('user info reached the component' + data.user);
            _this.userList.push(data);
            if (_this.chatName == data.user) {
                _this._router.navigate(['/chat', { userName: data.user }]);
            }
        });
        this._chatService.newUserFailed().subscribe(function (data) {
            console.log('user name already exists');
            _this.userCreated = false;
        });
    }
    chatComponent.prototype.OnSubmit = function (form) {
        console.log('sent from component->', form.value);
        this._chatService.createUser(form.value);
    };
    chatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'chat-app',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_chat_services__WEBPACK_IMPORTED_MODULE_2__["chatService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], chatComponent);
    return chatComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat.services.ts":
/*!***************************************!*\
  !*** ./src/app/chat/chat.services.ts ***!
  \***************************************/
/*! exports provided: chatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chatService", function() { return chatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var chatService = /** @class */ (function () {
    function chatService() {
        this._url = "adduser";
        this._socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__("");
    }
    //constructor (private _socket: HttpClient){}
    chatService.prototype.createUser = function (user) {
        var body = {
            chatName: user.Cname
        };
        console.log('user name being sent -->', body);
        this._socket.emit('new user', body);
    };
    chatService.prototype.newUserJoined = function () {
        var _this = this;
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this._socket.on('user created', function (data) {
                console.log('user info reached services');
                observer.next(data);
            });
            return function () {
                this._socket.disconnect();
            };
        });
        return observable;
    };
    chatService.prototype.newUserFailed = function () {
        var _this = this;
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this._socket.on('user creation failed', function (data) {
                console.log('user fail info reached services');
                observer.next(data);
            });
            return function () {
                this._socket.disconnect();
            };
        });
        return observable;
    };
    chatService.prototype.sendMessage = function (data) {
        console.log('inside the sendmessage in services ' + data.user + ' ' + data.msg);
        this._socket.emit('send message', data);
    };
    chatService.prototype.chatMessage = function () {
        var _this = this;
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this._socket.on('chat message', function (data) {
                console.log('recieved chat message in services' + data.user);
                observer.next(data);
            });
            return function () {
                this._socket.disconnect();
            };
        });
        return observable;
    };
    chatService.prototype.onlineUsers = function () {
        var _this = this;
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this._socket.on('userList', function (data) {
                console.log('list of users' + data[0]);
                observer.next(data);
            });
            return function () {
                this._socket.disconnect();
            };
        });
        return observable;
    };
    chatService.prototype.userLeft = function (data) {
        this._socket.emit('user left', data);
    };
    chatService.prototype.privateFailed = function () {
        var _this = this;
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this._socket.on('private failed', function (data) {
                console.log('list of users' + data.user + ' ' + data.targetUser);
                observer.next(data);
            });
            return function () {
                this._socket.disconnect();
            };
        });
        return observable;
    };
    chatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], chatService);
    return chatService;
}());



/***/ }),

/***/ "./src/app/chat/chatPage.component.html":
/*!**********************************************!*\
  !*** ./src/app/chat/chatPage.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n    <title>Document</title>\r\n</head>\r\n<body id=\"chatPage\">\r\n    <div id=\"chatWindow\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6 panel panel-primary col-sm-offset-1\">\r\n                    <div class=\"panel-body chatWrap\">\r\n                        <div id=\"chatWrap\" >\r\n                            <div  id=\"chat\"  *ngFor = \"let each of chatMessages\">\r\n                                <div *ngIf = \"each.user == userName\">\r\n                                    <p align=\"right\">{{each.user}}:{{each.msg}}</p>\r\n                                </div> \r\n                                <div *ngIf  = \"each.user != userName\">\r\n                                    <p align=\"left\">{{each.user}}:{{each.msg}}</p>\r\n                                </div>                                                          \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-4 col-sm-offset-1  panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                        <h4>Currently Online</h4>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                        <div id=\"users\" *ngFor = \"let each of onlineUserList\">\r\n                            <p>{{each}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-sm-offset-2\">\r\n                    <h4 align=\"right\">Invite your friends to the chat by clicking <a href=\"#\" target=\"_blank\">Link</a></h4>\r\n                </div>                    \r\n            </div>\r\n        </div>\r\n        <br>\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4 col-md-offset-1\">\r\n                    <form #formMessage = \"ngForm\" (keydown.enter) = sendMessage(formMessage) id=\"message-box\">\r\n                        <div class=\"form-group\">\r\n                            <textarea  name=\"message\" #message = \"ngModel\" [(ngModel)]= \"userMessage\" id=\"message\" cols=\"75\" rows=\"5\" placeholder=\"enter your message\"></textarea>\r\n                        </div>                        \r\n                    </form>\r\n                    <div *ngIf = \"privateFailedBool\">\r\n                        <h3>{{privateFailed }}is not online</h3>\r\n                    </div>\r\n                    <h4>To send a personal message add '@' in before the name and give a space!</h4>\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    \r\n</body>\r\n</html>"

/***/ }),

/***/ "./src/app/chat/chatPage.component.ts":
/*!********************************************!*\
  !*** ./src/app/chat/chatPage.component.ts ***!
  \********************************************/
/*! exports provided: chatPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chatPageComponent", function() { return chatPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chat_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat.services */ "./src/app/chat/chat.services.ts");




var chatPageComponent = /** @class */ (function () {
    function chatPageComponent(_actRoute, _router, _chatSerice) {
        var _this = this;
        this._actRoute = _actRoute;
        this._router = _router;
        this._chatSerice = _chatSerice;
        this.chatMessages = [];
        this.onlineUserList = [];
        this.privateFailedBool = false;
        this._chatSerice.chatMessage().subscribe(function (data) {
            _this.chatMessages.push(data);
            _this.privateFailedBool = false;
        });
        this._chatSerice.onlineUsers().subscribe(function (data) {
            _this.onlineUserList = [];
            console.log('online users component->' + data[0]);
            for (var i = 0; i < data.length; i++) {
                console.log('online users component loop->' + data[i]);
                _this.onlineUserList.push(data[i]);
            }
        });
        this._chatSerice.privateFailed().subscribe(function (data) {
            _this.privateFailedBool = true;
            _this.privateFailed = data.targetUser;
        });
    }
    chatPageComponent.prototype.ngOnInit = function () {
        this.userName = this._actRoute.snapshot.paramMap.get('userName');
    };
    chatPageComponent.prototype.ngOnDestroy = function () {
        console.log('destroy socket');
        this._chatSerice.userLeft({ user: this.userName });
    };
    chatPageComponent.prototype.sendMessage = function (form) {
        this.privateFailedBool = false;
        console.log('message in component-->' + form.value.message);
        this._chatSerice.sendMessage({ user: this.userName, msg: this.userMessage });
        form.reset();
    };
    chatPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'chat-Page',
            template: __webpack_require__(/*! ./chatPage.component.html */ "./src/app/chat/chatPage.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _chat_services__WEBPACK_IMPORTED_MODULE_3__["chatService"]])
    ], chatPageComponent);
    return chatPageComponent;
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

module.exports = __webpack_require__(/*! C:\Users\sweety\Desktop\Aditya_Material\Edureka_FullStack\Angular_Chat_fontend\MEANchat\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map