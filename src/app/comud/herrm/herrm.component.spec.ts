import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerrmComponent } from './herrm.component';

describe('HerrmComponent', () => {
  let component: HerrmComponent;
  let fixture: ComponentFixture<HerrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerrmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
