import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CauseFooterComponent } from './cause-footer.component';

describe('CauseFooterComponent', () => {
  let component: CauseFooterComponent;
  let fixture: ComponentFixture<CauseFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CauseFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CauseFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
