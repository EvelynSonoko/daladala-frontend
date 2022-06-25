import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaladalarouteComponent } from './daladalaroute.component';

describe('DaladalarouteComponent', () => {
  let component: DaladalarouteComponent;
  let fixture: ComponentFixture<DaladalarouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaladalarouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaladalarouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
