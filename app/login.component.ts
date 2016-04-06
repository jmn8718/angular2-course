import {Component} from 'angular2/core';
import {RouterLink , RouteParams} from 'angular2/router';

@Component({
    selector: 'login-component',
    template: `
        <h2>Login</h2>
        <a [routerLink]="['Welcome']">Welcome</a>
        <a [routerLink]="['User', {id:3, name:'JM'}]">User</a>
    `,
    directives:[RouterLink]
})
export class LoginComponent {

}
