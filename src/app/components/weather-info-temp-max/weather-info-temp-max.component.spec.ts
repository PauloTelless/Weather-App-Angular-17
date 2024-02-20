import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherInfoTempMaxComponent } from './weather-info-temp-max.component';

describe('WeatherInfoTempMaxComponent', () => {
  let component: WeatherInfoTempMaxComponent;
  let fixture: ComponentFixture<WeatherInfoTempMaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherInfoTempMaxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherInfoTempMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
