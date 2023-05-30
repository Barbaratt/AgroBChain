import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { CdkStep } from '@angular/cdk/stepper';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-new-farmer',
  templateUrl: './new-farmer.component.html',
  styleUrls: ['./new-farmer.component.scss'],
})
export class NewFarmerComponent {
  @ViewChild('stepper') stepper: MatStepper;

  public selectedStep: CdkStep;
  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  public thirdFormGroup: FormGroup;
  public isLinear = false;
  public user: any;

  constructor(private fb: FormBuilder, private userService: UserService) {
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
    this.userService.criarUsuario(this.user).subscribe(
      (response) => {
        console.log('Usuário criado com sucesso', response);
        // Faça algo após a criação do usuário, como redirecionar para outra página
      },
      (error) => {
        console.error('Erro ao criar usuário', error);
        // Trate o erro de acordo com as suas necessidades
      }
    );
  }
}
