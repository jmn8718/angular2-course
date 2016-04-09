import {Component, OnInit} from 'angular2/core';
import {RouterLink, RouteParams} from 'angular2/router';

@Component({
    selector: 'user-component',
    template: `
        <h2>User {{ userId }}</h2>
        <a [routerLink]="['Login']">Login</a>
        <a [routerLink]="['Welcome']">Welcome</a>
        <p>{{userName}}</p>
    `,
    directives:[RouterLink]
})
export class UserComponent implements OnInit{
    public userId: string = '';
    public userName: string = '';

    constructor(private _routeParams:RouteParams){

    }

    ngOnInit(){
        this.userId = this._routeParams.get('id');
        this.userName = this._routeParams.get('name');
    }

}
