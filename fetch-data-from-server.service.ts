import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from './weather-data';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchDataFromServerService {

  constructor(private http : HttpClient) { }

  findWeather(): Observable<WeatherData>{

    return this.http.get<WeatherData>("api.openweathermap.org/data/2.5/weather?q=London");


  }
}
