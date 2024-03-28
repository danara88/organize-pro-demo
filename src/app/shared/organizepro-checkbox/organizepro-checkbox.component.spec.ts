import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizeproCheckboxComponent } from './organizepro-checkbox.component';

describe('OrganizeproCheckboxComponent', () => {
  let component: OrganizeproCheckboxComponent;
  let fixture: ComponentFixture<OrganizeproCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizeproCheckboxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrganizeproCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
