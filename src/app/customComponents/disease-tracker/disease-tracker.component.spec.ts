import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseaseTrackerComponent } from './disease-tracker.component';

describe('DiseaseTrackerComponent', () => {
  let component: DiseaseTrackerComponent;
  let fixture: ComponentFixture<DiseaseTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiseaseTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseaseTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
