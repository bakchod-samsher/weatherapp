import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from './weather-data';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchDataFromServerService {

  cityName: string;
  constructor(private http : HttpClient) { }

  findWeather(): Observable<WeatherData>{

    return this.http.get<WeatherData>("http://api.openweathermap.org/data/2.5/weather?q="+this.cityName+"&APPID=cc9f6f60e57645be41685af7d4cba1dc");


  }

  cityData(cityName){

    this.cityName = cityName;

  }
}
