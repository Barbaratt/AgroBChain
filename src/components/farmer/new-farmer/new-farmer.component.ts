import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { CdkStep } from '@angular/cdk/stepper';
import { FarmerService } from 'src/services/farmer/farmer.service';
import { IDataNewFarmer } from 'src/app/interfaces/new-farmer.model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalAddCultivationTypeComponent } from '../modal-add-cultivation-type/modal-add-cultivation-type/modal-add-cultivation-type.component';
import { TypesService } from 'src/services/types.service';
import { ModalAddCultivationMethodComponent } from '../modal-add-cultivation-method/modal-add-cultivation-method/modal-add-cultivation-method.component';
import { ModalAddEquipamentMachineryComponent } from '../modal-add-equipament-machinery/modal-add-equipament-machinery/modal-add-equipament-machinery.component';
import { ModalAddNourishmentComponent } from '../modal-add-nourishment/modal-add-nourishment/modal-add-nourishment.component';
import { ZipCodeService } from 'src/services/searchZipCode/zip-code.service';

@Component({
  selector: 'app-new-farmer',
  templateUrl: './new-farmer.component.html',
  styleUrls: ['./new-farmer.component.scss'],
})
export class NewFarmerComponent {
  @ViewChild('stepper') stepper: MatStepper;
  @ViewChild('select') select: MatSelect;

  public form: FormGroup;
  public farmerDetails: IDataNewFarmer;
  public selectedStep: CdkStep;
  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  public thirdFormGroup: FormGroup;
  public isLinear = false;
  public allSelected = false;

  //* Dados do serviço do CEP
  public zipCode: string;
  public addressStreet?: string;
  public addressDistrict?: string;
  public addressCity?: string;
  public addressState?: string;

  //* Dados do serviço do tipos
  public cultivationTypes = this.typesService.getCultivationTypes();
  public cultivationMethods = this.typesService.getCultivationMethods();
  public equipmentOrMachinerys = this.typesService.getEquipmentOrMachinerys();
  public nourishments = this.typesService.getNourishments();

  constructor(
    public dialog: MatDialog,
    public typesService: TypesService,
    private farmerService: FarmerService,
    private zipCodeService: ZipCodeService,
    private router: Router,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.firstFormGroup = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      documentId: ['', Validators.required],
      email: ['', (Validators.required, Validators.email)],
      telephoneNumber: ['', Validators.required],
    });

    this.secondFormGroup = this.fb.group({
      addressZipCode: ['', Validators.required],
      addressStreet: ['', Validators.required],
      addressNumber: ['', Validators.required],
      addressComplement: [''],
      addressDistrict: ['', Validators.required],
      addressCity: ['', Validators.required],
      addressState: ['', Validators.required],
    });

    this.thirdFormGroup = this.fb.group({
      propertySize: ['', Validators.required],
      cultivitationType: ['', Validators.required],
      nourishment: ['', Validators.required],
      cultivationMethod: ['', Validators.required],
      equipmentOrMachinery: ['', Validators.required],
    });
  }

  public ngOnInit(): void {
    // ! Talvez se for inválido..., colocar aquele erros personalizados sabe
    this.firstFormGroup.get('gender')?.valueChanges.subscribe((res) => {
      if (this.firstFormGroup.get('gender')?.invalid) {
        // Lançar o erro
      }
    });
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

  public toggleAllSelection() {
    if (this.allSelected) {
      this.select.options.forEach((item: MatOption) => item.select());
    } else {
      this.select.options.forEach((item: MatOption) => item.deselect());
    }
  }

  public optionClick() {
    let newStatus = true;
    this.select.options.forEach((item: MatOption) => {
      if (!item.selected) {
        newStatus = false;
      }
    });
    this.allSelected = newStatus;
  }

  public saveNewUser(): void {
    //! Tá funcionando kkkkkk
    if (
      this.firstFormGroup.invalid ||
      this.secondFormGroup.invalid ||
      this.thirdFormGroup.invalid
    ) {
      // Se o formulário não for válido, marque todos os campos como tocados
      this.firstFormGroup.markAllAsTouched();
      this.secondFormGroup.markAllAsTouched();
      this.thirdFormGroup.markAllAsTouched();
      this.snackBar.open(
        'Por favor, preencha todos os campos obrigatórios antes de prosseguir.',
        'X',
        {
          duration: 5000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
        }
      );
      return; // Saia da função se o formulário for inválido
    }

    if (
      this.firstFormGroup.valid &&
      this.secondFormGroup.valid &&
      this.thirdFormGroup.valid
    ) {
      const formFirstGroupData = this.firstFormGroup.value;
      const formSecondGroupData = this.secondFormGroup.value;
      const formThirdGroupData = this.thirdFormGroup.value;
      /**Objetivo do form.value: porque ele permite que você
       * acesse os valores preenchidos nos campos do formulário
       * de forma conveniente. Assim, você pode obter esses
       * valores e usá-los para criar um novo objeto product
       * com as informações corretas antes de enviá-lo para o serviço. */
      this.farmerDetails = {
        // * First Group
        name: formFirstGroupData.name,
        lastName: formFirstGroupData.lastName,
        gender: formFirstGroupData.gender,
        documentId: formFirstGroupData.documentId,
        email: formFirstGroupData.email,
        telephoneNumber: formFirstGroupData.telephoneNumber,
        // * Second Group
        addressZipCode: formSecondGroupData.addressZipCode,
        addressStreet: formSecondGroupData.addressStreet,
        addressNumber: formSecondGroupData.addressNumber,
        addressComplement: formSecondGroupData.addressComplement,
        addressDistrict: formSecondGroupData.addressDistrict,
        addressCity: formSecondGroupData.addressCity,
        addressState: formSecondGroupData.addressState,
        // * Third Group
        propertySize: formThirdGroupData.propertySize,
        cultivitationType: formThirdGroupData.cultivitationType,
        nourishment: formThirdGroupData.nourishment,
        cultivationMethod: formThirdGroupData.cultivationMethod,
        equipmentOrMachinery: formThirdGroupData.equipmentOrMachinery,
      };
    }

    this.farmerService.postNewFarmer(this.farmerDetails).subscribe(
      (res) => {
        if (res) {
          this.snackBar.open('Registro adicionado com sucesso !', 'X', {
            duration: 5000,
            verticalPosition: 'top',
            horizontalPosition: 'center',
          });
          // * Irá navegar para cada ID criado
          // this.router.navigate(['/dashboard']);
        }
        console.log(res);
        // ! Tratamento de erro futuro, com catchError
      },
      (error) => {
        this.snackBar.open('Houve algum erro. Tente novamente !', 'X', {
          duration: 5000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
        });
        console.error('Erro ao cadastrar:', error);
      }
    );
  }

  public addCultivationType(): void {
    const dialogRef = this.dialog.open(ModalAddCultivationTypeComponent, {
      data: {
        cultivationTypes: this.cultivationTypes,
      },
      height: '350px',
      width: '400px',
    });
  }

  public addCultivationMethod(): void {
    const dialogRef = this.dialog.open(ModalAddCultivationMethodComponent, {
      data: {
        cultivationMethods: this.cultivationMethods,
      },
      height: '350px',
      width: '400px',
    });
  }

  public addEquipamentOrMachinery(): void {
    const dialogRef = this.dialog.open(ModalAddEquipamentMachineryComponent, {
      data: {
        equipmentOrMachinerys: this.equipmentOrMachinerys,
      },
      height: '350px',
      width: '400px',
    });
  }

  public addNourishment(): void {
    const dialogRef = this.dialog.open(ModalAddNourishmentComponent, {
      data: {
        nourishments: this.nourishments,
      },
      height: '350px',
      width: '400px',
    });
  }

  public searchZipCode() {
    this.zipCodeService.getZipCode(this.zipCode).subscribe((data: any) => {
      // Acesse os campos do endereço conforme necessário
      this.addressStreet = data.logradouro;
      this.addressDistrict = data.bairro;
      this.addressCity = data.localidade;
      this.addressState = data.uf;

      // * O formulário é preenchido com os dados pesquisados do CEP digitado.
      // ! Essa é a importância do patchValue, resgatar dados de serviço.
      // * Está em português pois é onde o serviço é Brasileiro e assim que os dados são enviados
      this.secondFormGroup.patchValue({
        addressStreet: data.logradouro,
        addressDistrict: data.bairro,
        addressCity: data.localidade,
        addressState: data.uf,
      });
    });
  }

  public blur(event: any) {
    this.searchZipCode();
  }
}
