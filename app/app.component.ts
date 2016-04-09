import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';

import {WelcomeComponent} from './common/welcome.component';
import {HeaderComponent} from './common/header.component';
import {FooterComponent} from './common/footer.component';
import {LoginComponent} from './user/login.component';
import {RegistrationComponent} from './user/registration.component';
import {AlbumComponent} from './music/album.component';
import {AlbumsComponent} from './music/albums.component';
@Component({
    selector: 'my-app',
    template: `
        <header-component></header-component>
        <div class="container">
            <router-outlet></router-outlet>
            COMPONENT
        </div>
        <footer-component></footer-component>
    `,
    directives:[RouterOutlet, WelcomeComponent, HeaderComponent, FooterComponent, LoginComponent,AlbumsComponent,AlbumComponent],
})
@RouteConfig([
    { path:'/', name:'Home', component:WelcomeComponent, useAsDefault: true},
    { path:'/albums', name:'Home', component:AlbumsComponent},
    { path:'/album', name:'Home', component:AlbumComponent},
    { path:'/login', name:'Home', component:LoginComponent},
    { path:'/registration', name:'Home', component:RegistrationComponent},
])
export class AppComponent {
    constructor(){

    }
}
