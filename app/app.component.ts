import {Component} from 'angular2/core';
import { UserService } from './userService'

@Component({
    selector: 'my-app',
    styles:[`
        .error {
            color: red;
            font-size: 11px;
        }
    `],
    template: `
        <h1>My First Angular 2 App</h1>
        
        <hr>
        <p>Hello {{ name }}</p>
        <hr>
        <form #searchForm="ngForm">
            <input type="text" required [(ngModel)]="model.search" ngControl="search" #inputSearch="ngForm">
            <p class="error" [hidden]="inputSearch.valid">This input is required</p>
            
            <button type="submit" [disabled]="!searchForm.valid">SEND</button>
        </form>
    `,
    directive: [],
    providers: [UserService]
})
export class AppComponent {
    public model = {
        search: ""
    }

    constructor(private userService:UserService){
        var user = userService.getUser();

        this.name = user.firstName;

    }

}
