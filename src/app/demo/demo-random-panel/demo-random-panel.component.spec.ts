import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoRandomPanelComponent } from './demo-random-panel.component';

describe('DemoRandomPanelComponent', () => {
  let component: DemoRandomPanelComponent;
  let fixture: ComponentFixture<DemoRandomPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoRandomPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoRandomPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
