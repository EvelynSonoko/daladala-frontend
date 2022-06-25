import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteupdateComponent } from './routeupdate.component';

describe('RouteupdateComponent', () => {
  let component: RouteupdateComponent;
  let fixture: ComponentFixture<RouteupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
