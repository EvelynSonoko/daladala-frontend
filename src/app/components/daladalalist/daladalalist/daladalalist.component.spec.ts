import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaladalalistComponent } from './daladalalist.component';

describe('DaladalalistComponent', () => {
  let component: DaladalalistComponent;
  let fixture: ComponentFixture<DaladalalistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaladalalistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaladalalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
