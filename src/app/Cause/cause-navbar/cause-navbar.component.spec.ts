import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CauseNavbarComponent } from './cause-navbar.component';

describe('CauseNavbarComponent', () => {
  let component: CauseNavbarComponent;
  let fixture: ComponentFixture<CauseNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CauseNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CauseNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
