import { Component, OnInit, Input } from '@angular/core';
import { FetchDataFromServerService } from '../fetch-data-from-server.service';
import { WeatherData } from '../weather-data';

@Component({
  selector: 'app-show-weather-data',
  templateUrl: './show-weather-data.component.html',
  styleUrls: ['./show-weather-data.component.css']
})
export class ShowWeatherDataComponent implements OnInit {

  cityName: string;
  temperature: WeatherData;
  
  constructor(private service: FetchDataFromServerService) { }

  ngOnInit() {
  }

searchCityByname(){
  
  this.service.cityData(this.cityName);
  this.service.findWeather().subscribe(resp => this.temperature = resp);
}
}
