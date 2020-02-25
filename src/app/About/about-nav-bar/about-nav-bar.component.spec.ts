import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutNavBarComponent } from './about-nav-bar.component';

describe('AboutNavBarComponent', () => {
  let component: AboutNavBarComponent;
  let fixture: ComponentFixture<AboutNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
