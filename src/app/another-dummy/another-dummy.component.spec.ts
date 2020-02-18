import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherDummyComponent } from './another-dummy.component';

describe('AnotherDummyComponent', () => {
  let component: AnotherDummyComponent;
  let fixture: ComponentFixture<AnotherDummyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherDummyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherDummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
