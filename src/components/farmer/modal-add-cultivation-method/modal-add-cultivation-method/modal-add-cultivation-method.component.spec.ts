import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddCultivationMethodComponent } from './modal-add-cultivation-method.component';

describe('ModalAddCultivationMethodComponent', () => {
  let component: ModalAddCultivationMethodComponent;
  let fixture: ComponentFixture<ModalAddCultivationMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddCultivationMethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddCultivationMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
