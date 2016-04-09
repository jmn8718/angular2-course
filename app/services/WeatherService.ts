import { Injectable } from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Weather } from '../classes/weather';

const Url = "http://api.openweathermap.org/data/2.5/weather?q=";
const AppId = "&appid=44db6a862fba0b067b1930da0d769e98";

@Injectable()
export class WeatherService{

    constructor(private _http:Http){
    }

    getWeatherUrl(city:string){
        return Url + city + AppId;
    }
    getWeather(city:string){
        return new Observable(observable=>{
            this._http.get(this.getWeatherUrl(city))
                .map( res => res.json())
                .subscribe( res=>{
                    //noinspection TypeScriptUnresolvedVariable
                    let weather:Weather = res.weather[0];
                    weather.city = city;
                    observable.next(weather);
                });
        });
    }
}