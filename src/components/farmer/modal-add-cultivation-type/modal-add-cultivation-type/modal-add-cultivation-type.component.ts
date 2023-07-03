import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal-add-cultivation-type',
  templateUrl: './modal-add-cultivation-type.component.html',
  styleUrls: ['./modal-add-cultivation-type.component.scss'],
})
export class ModalAddCultivationTypeComponent implements OnInit {
  public cultivationTypes: any[];
  public form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ModalAddCultivationTypeComponent>,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {
    this.cultivationTypes = data.cultivationTypes;
    this.form = this.fb.group({
      inputCultivationType: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  public close(): void {
    this.dialogRef.close();
  }

  public addCultivationType(): void {
    // Gera um novo valor para o novo tipo de cultivo
    const newValue = `cultivationType-${this.cultivationTypes.length}`;
    console.log(this.cultivationTypes);
    // Cria um novo objeto com o novo tipo de cultivo
    const newCultivationType = {
      value: newValue,
      viewValue: this.form.get('inputCultivationType')?.value,
    };
    // Adiciona o novo tipo de cultivo ao array
    this.cultivationTypes.push(newCultivationType);

    // ! IMPORTANTE ABAIXO, SALVA OS DADOS ADICIONADOS,
    // ! PODE SER TEMPORÁRIO CASO NÃO TENHA BACKEND
    // Para salvar os dados no Local Storage
    localStorage.setItem(
      'cultivationTypes',
      JSON.stringify(this.cultivationTypes)
    );

    // Para recuperar os dados do Local Storage
    const storedCultivationTypes = localStorage.getItem('cultivationTypes');
    if (storedCultivationTypes) {
      this.cultivationTypes = JSON.parse(storedCultivationTypes);
    }

    this.snackBar.open('Tipo de cultivo adicionado!', 'X', {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }
}
