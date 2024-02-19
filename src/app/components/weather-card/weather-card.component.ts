import { Component, Input, OnInit, input } from '@angular/core';
import { WeatherDatas } from '../../models/interfaces/WeatherData';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.sass'
})
export class WeatherCardComponent{

  @Input() public weatherDatasInput!: WeatherDatas;
  @Input() public horaAtualInput!: number;
  @Input() public condicaoClimeInput!: string;



}
