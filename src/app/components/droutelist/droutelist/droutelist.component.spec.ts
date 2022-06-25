import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroutelistComponent } from './droutelist.component';

describe('DroutelistComponent', () => {
  let component: DroutelistComponent;
  let fixture: ComponentFixture<DroutelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroutelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DroutelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
