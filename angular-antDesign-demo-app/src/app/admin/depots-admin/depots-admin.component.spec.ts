import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotsAdminComponent } from './depots-admin.component';

describe('DepotsAdminComponent', () => {
  let component: DepotsAdminComponent;
  let fixture: ComponentFixture<DepotsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepotsAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
