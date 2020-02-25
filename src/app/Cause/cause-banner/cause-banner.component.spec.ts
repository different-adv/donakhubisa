import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CauseBannerComponent } from './cause-banner.component';

describe('CauseBannerComponent', () => {
  let component: CauseBannerComponent;
  let fixture: ComponentFixture<CauseBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CauseBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CauseBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
