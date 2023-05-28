import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { CdkStep } from '@angular/cdk/stepper';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent {
  @ViewChild('stepper') stepper!: MatStepper;

  public selectedStep!: CdkStep;
  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  public thirdFormGroup: FormGroup;
  public isLinear = false;

  constructor(private fb: FormBuilder) {
    // this.form = this.fb.group({
    this.firstFormGroup = this.fb.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
    });

    this.secondFormGroup = this.fb.group({
      address: ['', Validators.required],
    });

    this.thirdFormGroup = this.fb.group({
      address: ['', Validators.required],
    });
    // });
  }
  public nextStep(): void {
    // if(!this.firstFormGroup.valid) {
    //   this.stepper.selectedIndex = 0;
    // }
    // if(!this.secondFormGroup.valid) {
    //   this.stepper.selectedIndex = 1;
    // }
    // if(!this.thirdFormGroup.valid) {
    //   this.stepper.selectedIndex = 0;
    // } else {
    //   this.stepper.next();
    // }
    switch (true) {
      case !this.firstFormGroup.valid:
        this.stepper.selectedIndex = 0;
        break;

      case !this.secondFormGroup.valid:
        this.stepper.selectedIndex = 1;
        break;

      default:
        this.stepper.next();
        break;
    }
  }

  public saveNewUser(): void {
    console.log('Salvando');
  }
}
