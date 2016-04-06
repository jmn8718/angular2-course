System.register(['angular2/core', './userService', 'angular2/http', './ellipsisPipe', './highlightDirective'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, userService_1, http_1, ellipsisPipe_1, highlightDirective_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (userService_1_1) {
                userService_1 = userService_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (ellipsisPipe_1_1) {
                ellipsisPipe_1 = ellipsisPipe_1_1;
            },
            function (highlightDirective_1_1) {
                highlightDirective_1 = highlightDirective_1_1;
            }],
        execute: function() {
            // import { ForRangeDirective } from './forRangeDirective';
            AppComponent = (function () {
                function AppComponent(userService, http) {
                    this.userService = userService;
                    this.http = http;
                    this.model = {
                        search: ""
                    };
                    this.range = 10;
                    var user = userService.getUser();
                    this.name = user.firstName;
                }
                AppComponent.prototype.getData = function () {
                    var _this = this;
                    this.http.get('http://pokeapi.co/api/v2/pokemon/1/')
                        .subscribe(function (res) {
                        res = res.json();
                        _this.data = res;
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        styles: ["\n        .error {\n            color: red;\n            font-size: 11px;\n        }\n    "],
                        template: "\n        <h1 >My First Angular 2 App</h1>\n        \n        <hr>\n        <p>Hello {{ name }}</p>\n        <hr>\n        <form #searchForm=\"ngForm\">\n            <input type=\"text\" required [(ngModel)]=\"model.search\" ngControl=\"search\" #inputSearch=\"ngForm\">\n            <p class=\"error\" [hidden]=\"inputSearch.valid\">This input is required</p>\n            <p>{{ model.search  | ellipsis:5}}</p>\n            <button type=\"submit\" [disabled]=\"!searchForm.valid\">SEND</button>\n            <p highlight [hoverColor]=\"'red'\">{{ inputSearch.value }}</p>\n        </form>\n        <hr>\n        <!--<ul>-->\n            <!--<li *forRange=\"range; #i=index\">{{ i }}</li>-->\n        <!--</ul>-->\n        <hr>\n        <p *ngIf=\"data\">{{ data | json }}</p>\n        <button (click)=\"getData()\">GET</button>\n    ",
                        directives: [highlightDirective_1.HighlightDirective,],
                        providers: [userService_1.UserService, http_1.HTTP_PROVIDERS],
                        pipes: [ellipsisPipe_1.EllipsisFilter]
                    }), 
                    __metadata('design:paramtypes', [userService_1.UserService, http_1.Http])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map