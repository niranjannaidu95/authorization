import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthuserComponent } from './authuser.component';

describe('AuthuserComponent', () => {
  let component: AuthuserComponent;
  let fixture: ComponentFixture<AuthuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
