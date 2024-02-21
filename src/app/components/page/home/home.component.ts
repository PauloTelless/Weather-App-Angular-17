import { Component, DestroyRef, OnDestroy, inject } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog } from '@angular/material/dialog'

import { FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { WeatherService } from '../../../services/weather.service';
import { WeatherDatas } from '../../../models/interfaces/WeatherData';

import { WeatherCardComponent } from '../../weather-card/weather-card.component';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { NotFoundComponent } from '../../not-found/not-found.component';
import { WeatherInfoWindComponent } from '../../weather-info-wind/weather-info-wind.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    WeatherCardComponent,
    WeatherInfoWindComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent{
  private destroyedRef = inject(DestroyRef);
  private formBuilder = inject(FormBuilder);
  private weatherService = inject(WeatherService);
  private dialogService = inject(MatDialog);
  public horaAtual!: number;
  public condicaoClima!: string;
  public weatherDatas!: WeatherDatas;
  public modal!: boolean;

  searchCityForm = this.formBuilder.group({
    city_name: ['', Validators.required]
  })

  public getTimeNow(): void{
    let date = new Date()
    this.horaAtual = date.getHours() as number
  }
  public handleSearchCity(){
    this.modal = false
    if (this.searchCityForm.valid && this.searchCityForm.value) {
      this.weatherService.getWeatherDatas(this.searchCityForm.value.city_name as string).pipe(
        takeUntilDestroyed(
          this.destroyedRef
        )
      ).subscribe({
        next: (response) => {
          this.getTimeNow();
          this.weatherDatas = response;
          console.log('Pai', this.weatherDatas)
          this.weatherDatas.main.temp = Math.round(this.weatherDatas.main.temp - 273);
          this.weatherDatas.wind.speed = Math.round(this.weatherDatas.wind.speed * 3.6);
          this.weatherDatas.main.temp_max = Math.round(this.weatherDatas.main.temp_max - 273);
          this.weatherDatas.main.temp_min = Math.round(this.weatherDatas.main.temp_min - 273);
          this.condicaoClima = this.weatherDatas.weather[0].description;
          this.handleOpenModal();
          this.handleCloseModal();
        },
        error: () => {
          this.handleOpenModalError();
        }
      })
    }

    this.searchCityForm.reset();
  }

  handleOpenModal(): void{
    if (this.weatherDatas) {
      this.dialogService.open(WeatherCardComponent);
    }
  }

  handleCloseModal(): void{
    this.dialogService.closeAll();
  }

  handleOpenModalError(): void{
    this.dialogService.open(NotFoundComponent);
  }
}
