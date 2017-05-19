import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderizrPanelComponent } from './sliderizr-panel.component';

describe('SliderizrPanelComponent', () => {
  let component: SliderizrPanelComponent;
  let fixture: ComponentFixture<SliderizrPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderizrPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderizrPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
