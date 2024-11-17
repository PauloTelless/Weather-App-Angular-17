import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private httpClient = inject(HttpClient);

  private API_KEY: string = '75dc4a0ea59d5ccaebe604bf041d1f7f';

  getWeatherDatas(city_name: string): Observable<any>{
    return this.httpClient.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${this.API_KEY}&lang=pt_br`)
  }

}
