import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddEquipamentMachineryComponent } from './modal-add-equipament-machinery.component';

describe('ModalAddEquipamentMachineryComponent', () => {
  let component: ModalAddEquipamentMachineryComponent;
  let fixture: ComponentFixture<ModalAddEquipamentMachineryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddEquipamentMachineryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddEquipamentMachineryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
