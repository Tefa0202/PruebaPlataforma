import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalComponent } from './catal.component';

describe('CatalComponent', () => {
  let component: CatalComponent;
  let fixture: ComponentFixture<CatalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
