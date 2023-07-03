import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddCultivationTypeComponent } from './modal-add-cultivation-type.component';

describe('ModalAddCultivationTypeComponent', () => {
  let component: ModalAddCultivationTypeComponent;
  let fixture: ComponentFixture<ModalAddCultivationTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddCultivationTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddCultivationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
