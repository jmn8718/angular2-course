import {Component} from 'angular2/core';

import { Weather } from 'classes/weather';
import {WeatherService} from "./services/WeatherService";

@Component({
    selector: 'my-app',
    styles:[`
        ul{
            list-style-type:none;
            margin: 0;
            padding: 0;
        }
        header h1{
            padding: 10px;
            background: green;
            color: white;
            text-shadow: 1px 1px 4px black;
        }
        .content{
            padding: 10px;
        }
        input{
            font-size: 16px;
            padding: 4px;
            width: 400px;
        }
        .weather-card{
            border-bottom: 1px solid #D3D3D3;
        }
        .error-message{
            color: red;
            font-size: 8px;
        }
    `],
    template: `
        <header>
            <h1>Weather App</h1>
        </header>
        <div class="content">
            <input [(ngModel)]="city" (keyup)="addCity(city,$event)" placeholder="Search wather for the city">
            <p *ngIf="errorMessage" class="error-message">{{errorMessage}}</p>
            <ul *ngFor="#weather of weatherOfCities">
                <li class="weather-card">
                    <h2>{{weather.id}} - Weather forecast in {{ weather.city }}:</h2>
                    <ul>
                        <li>Weather Type: {{ weather.main}}</li>
                        <li>Weather Description: {{ weather.description}}</li>
                    </ul>
                </li>
            </ul>
        </div>
    `,
    providers:[WeatherService]
})
export class AppComponent {
    city:string;
    cities:Array<string>;
    weatherOfCities:Array<Weather>;
    errorMessage:string;

    constructor(private _weatherService:WeatherService){
        this.city = '';
        this.weatherOfCities = new Array<Weather>();
    }

    addCity(city:string, $event) {
        console.log($event.keyCode);
        if($event.keyCode == 13 && city.length>0){
            this._weatherService.getWeather(city)
                .subscribe( weather=> {
                    if (weather) {
                        this.weatherOfCities.push(weather);
                        this.errorMessage = undefined;
                    } else {
                        this.errorMessage = "*There is no weather data for : " + city;
                    }
                    this.city = '';
                }, error=>{
                    this.city = '';
                    this.errorMessage =error;
                })
        }
    }

    
}
