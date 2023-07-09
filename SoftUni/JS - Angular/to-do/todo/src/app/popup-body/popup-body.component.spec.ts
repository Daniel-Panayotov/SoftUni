import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupBodyComponent } from './popup-body.component';

describe('PopupBodyComponent', () => {
  let component: PopupBodyComponent;
  let fixture: ComponentFixture<PopupBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupBodyComponent]
    });
    fixture = TestBed.createComponent(PopupBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
