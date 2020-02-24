import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesPostedComponent } from './stories-posted.component';

describe('StoriesPostedComponent', () => {
  let component: StoriesPostedComponent;
  let fixture: ComponentFixture<StoriesPostedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoriesPostedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesPostedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
