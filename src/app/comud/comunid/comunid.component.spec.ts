import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunidComponent } from './comunid.component';

describe('ComunidComponent', () => {
  let component: ComunidComponent;
  let fixture: ComponentFixture<ComunidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComunidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
