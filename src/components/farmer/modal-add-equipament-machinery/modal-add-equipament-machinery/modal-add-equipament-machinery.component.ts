import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal-add-equipament-machinery',
  templateUrl: './modal-add-equipament-machinery.component.html',
  styleUrls: ['./modal-add-equipament-machinery.component.scss'],
})
export class ModalAddEquipamentMachineryComponent implements OnInit {
  public equipmentOrMachinerys: any[];
  public form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ModalAddEquipamentMachineryComponent>,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {
    this.equipmentOrMachinerys = data.equipmentOrMachinerys;
    this.form = this.fb.group({
      inputEquipmentOrMachinerys: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  public close(): void {
    this.dialogRef.close();
  }

  public addEquipmentOrMachinery(): void {
    // Gera um novo valor para o novo tipo de cultivo
    const newValue = `equipmentOrMachinery-${this.equipmentOrMachinerys.length}`;
    console.log(this.equipmentOrMachinerys);
    // Cria um novo objeto com o novo tipo de cultivo
    const newEquipmentOrMachinery = {
      value: newValue,
      viewValue: this.form.get('inputEquipmentOrMachinerys')?.value,
    };
    // Adiciona o novo tipo de cultivo ao array
    this.equipmentOrMachinerys.push(newEquipmentOrMachinery);

    // ! IMPORTANTE ABAIXO, SALVA OS DADOS ADICIONADOS,
    // ! PODE SER TEMPORÁRIO CASO NÃO TENHA BACKEND
    // Para salvar os dados no Local Storage
    localStorage.setItem(
      'equipmentOrMachinerys',
      JSON.stringify(this.equipmentOrMachinerys)
    );

    // Para recuperar os dados do Local Storage
    const storedEquipmentOrMachinerys = localStorage.getItem('equipmentOrMachinerys');
    if (storedEquipmentOrMachinerys) {
      this.equipmentOrMachinerys = JSON.parse(storedEquipmentOrMachinerys);
    }

    this.snackBar.open('Tipo de equipamento ou maquinário adicionado !', 'X', {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }
}
