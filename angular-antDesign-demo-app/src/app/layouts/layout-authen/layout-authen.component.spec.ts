import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutAuthenComponent } from './layout-authen.component';

describe('LayoutAuthenComponent', () => {
  let component: LayoutAuthenComponent;
  let fixture: ComponentFixture<LayoutAuthenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutAuthenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutAuthenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
