import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityPostsComponent } from './community-posts.component';

describe('CommunityPostsComponent', () => {
  let component: CommunityPostsComponent;
  let fixture: ComponentFixture<CommunityPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
