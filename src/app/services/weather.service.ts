import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private httpClient = inject(HttpClient);

  private API_KEY: string = 'e1d46f324e963f3d1654a81751c807cf';

  getWeatherDatas(city_name: string): Observable<any>{
    return this.httpClient.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${this.API_KEY}&lang=pt_br`)
  }

}
