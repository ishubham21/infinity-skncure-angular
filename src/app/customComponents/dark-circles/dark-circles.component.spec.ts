import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkCirclesComponent } from './dark-circles.component';

describe('DarkCirclesComponent', () => {
  let component: DarkCirclesComponent;
  let fixture: ComponentFixture<DarkCirclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkCirclesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkCirclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
