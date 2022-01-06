import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratorsAdminComponent } from './collaborators-admin.component';

describe('CollaboratorsAdminComponent', () => {
  let component: CollaboratorsAdminComponent;
  let fixture: ComponentFixture<CollaboratorsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollaboratorsAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaboratorsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
