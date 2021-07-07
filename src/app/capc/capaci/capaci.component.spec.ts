import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapaciComponent } from './capaci.component';

describe('CapaciComponent', () => {
  let component: CapaciComponent;
  let fixture: ComponentFixture<CapaciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapaciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapaciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
