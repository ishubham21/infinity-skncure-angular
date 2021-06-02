import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeDetectionComponent } from './real-time-detection.component';

describe('RealTimeDetectionComponent', () => {
  let component: RealTimeDetectionComponent;
  let fixture: ComponentFixture<RealTimeDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealTimeDetectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealTimeDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
