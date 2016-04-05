import {Component} from 'angular2/core';
import { UserService } from './userService';
import { EllipsisFilter } from './ellipsisPipe';
import { HighlightDirective } from './highlightDirective';
@Component({
    selector: 'my-app',
    styles:[`
        .error {
            color: red;
            font-size: 11px;
        }
    `],
    template: `
        <h1 >My First Angular 2 App</h1>
        
        <hr>
        <p>Hello {{ name }}</p>
        <hr>
        <form #searchForm="ngForm">
            <input type="text" required [(ngModel)]="model.search" ngControl="search" #inputSearch="ngForm">
            <p class="error" [hidden]="inputSearch.valid">This input is required</p>
            <p>{{ model.search  | ellipsis:5}}</p>
            <button type="submit" [disabled]="!searchForm.valid">SEND</button>
            <p highlight [hoverColor]="'red'">{{ inputSearch.value }}</p>
        </form>
    `,
    directives: [HighlightDirective],
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
