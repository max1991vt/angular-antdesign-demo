import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorysAdminComponent } from './categorys-admin.component';

describe('CategorysAdminComponent', () => {
  let component: CategorysAdminComponent;
  let fixture: ComponentFixture<CategorysAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorysAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorysAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
