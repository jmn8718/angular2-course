import {Component} from 'angular2/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';

import {UserComponent } from './user.component.ts';
import {LoginComponent } from './login.component.ts';
import {WelcomeComponent } from './welcome.component.ts';


@Component({
    selector: 'my-app',
    template: `
        <h1>Your page is</h1>
        
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES, UserComponent, LoginComponent, WelcomeComponent],
    providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
    {path: '/', name:'Welcome', component: WelcomeComponent, useAsDefault: true},
    {path: '/login', name:'Login', component: LoginComponent},
    {path: '/user/:id', name:'User', component: UserComponent}
])
export class AppComponent {

}
