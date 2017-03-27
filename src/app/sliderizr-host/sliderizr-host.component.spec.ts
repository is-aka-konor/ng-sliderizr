import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderizrHostComponent } from './sliderizr-host.component';

describe('SliderizrHostComponent', () => {
  let component: SliderizrHostComponent;
  let fixture: ComponentFixture<SliderizrHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderizrHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderizrHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
