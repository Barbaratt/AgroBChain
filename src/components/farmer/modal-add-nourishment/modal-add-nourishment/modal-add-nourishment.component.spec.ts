import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddNourishmentComponent } from './modal-add-nourishment.component';

describe('ModalAddNourishmentComponent', () => {
  let component: ModalAddNourishmentComponent;
  let fixture: ComponentFixture<ModalAddNourishmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddNourishmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAddNourishmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
