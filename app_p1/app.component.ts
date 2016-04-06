import {Component} from 'angular2/core';
import { UserService } from './userService';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import { EllipsisFilter } from './ellipsisPipe';
import { HighlightDirective } from './highlightDirective';
// import { ForRangeDirective } from './forRangeDirective';

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
        <hr>
        <!--<ul>-->
            <!--<li *forRange="range; #i=index">{{ i }}</li>-->
        <!--</ul>-->
        <hr>
        <p *ngIf="data">{{ data | json }}</p>
        <button (click)="getData()">GET</button>
    `,
    directives: [HighlightDirective, /*ForRangeDirective*/],
    providers: [UserService, HTTP_PROVIDERS],
    pipes: [EllipsisFilter]
})
export class AppComponent {
    public model = {
        search: ""
    }

    public range = 10;
    public name: string;
    public data: any;

    constructor(private userService:UserService, private http:Http){
        var user = userService.getUser();

        this.name = user.firstName;

    }

    getData(){
        this.http.get('http://pokeapi.co/api/v2/pokemon/1/')
            .subscribe( res =>{
                res = res.json();
                this.data = res;
            })
    }

}
