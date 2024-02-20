import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { Component, Input, Output, inject} from '@angular/core';
import { WeatherDatas } from '../../models/interfaces/WeatherData';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { WeatherInfoWindComponent } from '../weather-info-wind/weather-info-wind.component';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    WeatherInfoWindComponent
  ],
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.sass'
})
export class WeatherCardComponent{

  private dialogService = inject(MatDialog);

  @Input() public weatherDatasInput!: WeatherDatas;
  @Input() public horaAtualInput!: number;
  @Input() public condicaoClimeInput!: string;

  handleOpenModalWind(){
    this.dialogService.open(WeatherInfoWindComponent)
  }

  handleCloseModalWind(){
    this.dialogService.closeAll()
  }
}
