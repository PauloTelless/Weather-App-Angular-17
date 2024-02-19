import { Component, Input} from '@angular/core';
import { WeatherDatas } from '../../models/interfaces/WeatherData';

@Component({
  selector: 'app-weather-info-wind',
  standalone: true,
  imports: [],
  templateUrl: './weather-info-wind.component.html',
  styleUrl: './weather-info-wind.component.sass'
})
export class WeatherInfoWindComponent{
  @Input() public weatherInfoWindInput!: WeatherDatas;

}
