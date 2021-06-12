import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearbyDoctorsComponent } from './nearby-doctors.component';

describe('NearbyDoctorsComponent', () => {
  let component: NearbyDoctorsComponent;
  let fixture: ComponentFixture<NearbyDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NearbyDoctorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NearbyDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
