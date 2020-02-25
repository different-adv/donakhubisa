import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesspostComponent } from './successpost.component';

describe('SuccesspostComponent', () => {
  let component: SuccesspostComponent;
  let fixture: ComponentFixture<SuccesspostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccesspostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesspostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
