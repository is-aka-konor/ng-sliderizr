import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoResultDetailsComponent } from './demo-result-details.component';

describe('DemoResultDetailsComponent', () => {
  let component: DemoResultDetailsComponent;
  let fixture: ComponentFixture<DemoResultDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoResultDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoResultDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
