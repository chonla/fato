import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchSelectComponent } from './touch-select.component';

describe('TouchSelectComponent', () => {
  let component: TouchSelectComponent;
  let fixture: ComponentFixture<TouchSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TouchSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TouchSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
