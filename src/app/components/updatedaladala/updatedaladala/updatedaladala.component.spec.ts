import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedaladalaComponent } from './updatedaladala.component';

describe('UpdatedaladalaComponent', () => {
  let component: UpdatedaladalaComponent;
  let fixture: ComponentFixture<UpdatedaladalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedaladalaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedaladalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
