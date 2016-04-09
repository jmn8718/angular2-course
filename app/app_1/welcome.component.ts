import {Component} from 'angular2/core';
import {RouterLink , RouteParams} from 'angular2/router';

@Component({
    selector: 'welcome-component',
    template: `
        <h2>Welcome</h2>
        <a [routerLink]="['Login']">Login</a>
        <a [routerLink]="['User', {id:3, name:'JM'}]">User</a>
    `,
    directives:[RouterLink]
})
export class WelcomeComponent {

}
