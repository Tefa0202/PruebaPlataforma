import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecnComponent } from './recn.component';

describe('RecnComponent', () => {
  let component: RecnComponent;
  let fixture: ComponentFixture<RecnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
