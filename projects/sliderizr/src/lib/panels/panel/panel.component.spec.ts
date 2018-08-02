import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SzPanelComponent } from './panel.component';

describe('SzPanelComponent', () => {
  let component: SzPanelComponent;
  let fixture: ComponentFixture<SzPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SzPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SzPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
