import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaladalaComponent } from './daladala.component';

describe('DaladalaComponent', () => {
  let component: DaladalaComponent;
  let fixture: ComponentFixture<DaladalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaladalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaladalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
