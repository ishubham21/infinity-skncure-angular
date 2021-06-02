import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectDiseaseComponent } from './detect-disease.component';

describe('DetectDiseaseComponent', () => {
  let component: DetectDiseaseComponent;
  let fixture: ComponentFixture<DetectDiseaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetectDiseaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectDiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
