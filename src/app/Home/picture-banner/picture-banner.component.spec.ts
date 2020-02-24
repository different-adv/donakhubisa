import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureBannerComponent } from './picture-banner.component';

describe('PictureBannerComponent', () => {
  let component: PictureBannerComponent;
  let fixture: ComponentFixture<PictureBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
