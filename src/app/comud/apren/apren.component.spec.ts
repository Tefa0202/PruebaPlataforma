import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprenComponent } from './apren.component';

describe('AprenComponent', () => {
  let component: AprenComponent;
  let fixture: ComponentFixture<AprenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AprenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
