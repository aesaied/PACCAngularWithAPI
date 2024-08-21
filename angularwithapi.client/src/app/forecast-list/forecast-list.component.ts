import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;

  getName: () => "name";
}
@Component({
  selector: 'app-forecast-list',
  templateUrl: './forecast-list.component.html',
  styleUrl: './forecast-list.component.css'
})
export class ForecastListComponent implements OnInit {
  public forecasts: WeatherForecast[] = [];

  private http: HttpClient;
  constructor(http1: HttpClient) {

    this.http = http1;

  }

  ngOnInit() {
    this.getForecasts();
  }

  getForecasts() {
    this.http.get<WeatherForecast[]>('/weatherforecast').subscribe(
      (result) => {
        this.forecasts = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  title = 'angularwithapi.client';
}
