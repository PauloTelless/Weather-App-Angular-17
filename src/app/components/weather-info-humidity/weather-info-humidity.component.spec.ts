import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherInfoHumidityComponent } from './weather-info-humidity.component';

describe('WeatherInfoHumidityComponent', () => {
  let component: WeatherInfoHumidityComponent;
  let fixture: ComponentFixture<WeatherInfoHumidityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherInfoHumidityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherInfoHumidityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
