import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminroutelistComponent } from './adminroutelist.component';

describe('AdminroutelistComponent', () => {
  let component: AdminroutelistComponent;
  let fixture: ComponentFixture<AdminroutelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminroutelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminroutelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
