import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { Component, Input, OnInit, Output, inject} from '@angular/core';
import { WeatherDatas } from '../../models/interfaces/WeatherData';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { WeatherInfoWindComponent } from '../weather-info-wind/weather-info-wind.component';
import { WeatherInfoHumidityComponent } from '../weather-info-humidity/weather-info-humidity.component';
import { WeatherInfoTempMaxComponent } from '../weather-info-temp-max/weather-info-temp-max.component';
import { WeatherInfoTempMinComponent } from '../weather-info-temp-min/weather-info-temp-min.component';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatDialogModule
  ],
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.sass'
})
export class WeatherCardComponent implements OnInit{
  ngOnInit(): void {
    console.log('Recebendo do pai', this.weatherDatasInput);
  }

  private dialogService = inject(MatDialog);

  @Input() public weatherDatasInput!: WeatherDatas;
  @Input() public horaAtualInput!: number;
  @Input() public condicaoClimeInput!: string;

  handleOpenModalWind(){
    this.dialogService.open(WeatherInfoWindComponent)
  }

  handleOpenModalTempMax(){
    this.dialogService.open(WeatherInfoTempMaxComponent)
  }

  handleOpenModalTempMin(){
    this.dialogService.open(WeatherInfoTempMinComponent)
  }

  handleOpenModalHumidity(){
    this.dialogService.open(WeatherInfoHumidityComponent)
  }
}
