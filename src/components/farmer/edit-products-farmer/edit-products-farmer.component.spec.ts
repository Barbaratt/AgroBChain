import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductsFarmerComponent } from './edit-products-farmer.component';

describe('EditProductsFarmerComponent', () => {
  let component: EditProductsFarmerComponent;
  let fixture: ComponentFixture<EditProductsFarmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProductsFarmerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProductsFarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
