import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SzPanelHostComponent } from './panel-host.component';

describe('SliderizrHostComponent', () => {
  let component: SzPanelHostComponent;
  let fixture: ComponentFixture<SzPanelHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SzPanelHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SzPanelHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
