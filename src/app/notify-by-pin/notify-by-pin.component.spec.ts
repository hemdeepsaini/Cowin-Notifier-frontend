import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyByPinComponent } from './notify-by-pin.component';

describe('NotifyByPinComponent', () => {
  let component: NotifyByPinComponent;
  let fixture: ComponentFixture<NotifyByPinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotifyByPinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifyByPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
