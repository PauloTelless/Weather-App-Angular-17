import { Component, OnDestroy, OnInit, inject } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog, MatDialogRef } from '@angular/material/dialog'

import { FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { WeatherService } from '../../../services/weather.service';
import { WeatherDatas } from '../../../models/interfaces/WeatherData';

import { WeatherCardComponent } from '../../weather-card/weather-card.component';

import { Subject, takeUntil } from 'rxjs';

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
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent implements OnInit,OnDestroy{
  ngOnInit(): void {
    this.handleSearchCity();
  }

  private formBuilder = inject(FormBuilder);
  private weatherService = inject(WeatherService);
  private dialogService = inject(MatDialog);
  public horaAtual!: number;
  public condicaoClime!: string;
  private destroy$ = new Subject<void>;
  public weatherDatas!: WeatherDatas;

  searchCityForm = this.formBuilder.group({
    city_name: ['', Validators.required]
  })

  public getTimeNow(): void{
    let date = new Date()
    this.horaAtual = date.getHours() as number
  }
  public handleSearchCity(){
    if (this.searchCityForm.valid && this.searchCityForm.value) {
      this.weatherService.getWeatherDatas(this.searchCityForm.value.city_name as string).pipe(
        takeUntil(
          this.destroy$
        )
      ).subscribe({
        next: (response) => {
          this.weatherDatas = response
          this.weatherDatas.main.temp = Math.round(this.weatherDatas.main.temp - 273)
          this.weatherDatas.wind.speed = Math.round(this.weatherDatas.wind.speed * 3.6)
          this.weatherDatas.main.temp_max = Math.round(this.weatherDatas.main.temp_max - 273)
          this.weatherDatas.main.temp_min = Math.round(this.weatherDatas.main.temp_min - 273)
          this.condicaoClime = this.weatherDatas.weather[0].description
          this.getTimeNow()
          this.handleOpenModal()
          this.handleCloseModal()
        }
      })

      this.searchCityForm.reset();
    }
  }

  handleOpenModal(): void{
    this.dialogService.open(WeatherCardComponent)
  }

  handleCloseModal(): void{
    this.dialogService.closeAll()
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
