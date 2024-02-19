import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherInfoWindComponent } from './weather-info-wind.component';

describe('WeatherInfoWindComponent', () => {
  let component: WeatherInfoWindComponent;
  let fixture: ComponentFixture<WeatherInfoWindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherInfoWindComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherInfoWindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
