import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CauseBodyComponent } from './cause-body.component';

describe('CauseBodyComponent', () => {
  let component: CauseBodyComponent;
  let fixture: ComponentFixture<CauseBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CauseBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CauseBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
