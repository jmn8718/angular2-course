import {Component} from 'angular2/core';
import { UserService } from './userService';
import { EllipsisFilter } from './ellipsisPipe';

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
            <p>{{ model.search  | ellipsis:5}}</p>
            <p>{{ inputSearch.value }}</p>
        </form>
    `,
    directive: [],
    providers: [UserService],
    pipes: [EllipsisFilter]
})
export class AppComponent {
    public model = {
        search: ""
    }

    public name: String;

    constructor(private userService:UserService){
        var user = userService.getUser();

        this.name = user.firstName;

    }

}
