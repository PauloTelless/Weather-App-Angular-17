import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/page/home/home.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    HttpClientModule,
    WeatherCardComponent
  ],
  providers:[
    HttpClient,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'weather-app';
}
