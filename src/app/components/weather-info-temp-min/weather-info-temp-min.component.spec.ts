import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherInfoTempMinComponent } from './weather-info-temp-min.component';

describe('WeatherInfoTempMinComponent', () => {
  let component: WeatherInfoTempMinComponent;
  let fixture: ComponentFixture<WeatherInfoTempMinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherInfoTempMinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherInfoTempMinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
