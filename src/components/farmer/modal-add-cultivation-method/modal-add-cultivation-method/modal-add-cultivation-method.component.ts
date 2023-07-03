import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal-add-cultivation-method',
  templateUrl: './modal-add-cultivation-method.component.html',
  styleUrls: ['./modal-add-cultivation-method.component.scss'],
})
export class ModalAddCultivationMethodComponent implements OnInit {
  public cultivationMethods: any[];
  public form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ModalAddCultivationMethodComponent>,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {
    this.cultivationMethods = data.cultivationMethods;
    this.form = this.fb.group({
      inputCultivationMethod: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  public close(): void {
    this.dialogRef.close();
  }

  public addCultivationMethod(): void {
    // Gera um novo valor para o novo tipo de cultivo
    const newValue = `cultivationMethod-${this.cultivationMethods.length}`;
    // Cria um novo objeto com o novo tipo de cultivo
    const newCultivationMethod = {
      value: newValue,
      viewValue: this.form.get('inputCultivationMethod')?.value,
    };
    // Adiciona o novo tipo de cultivo ao array
    this.cultivationMethods.push(newCultivationMethod);

    // ! IMPORTANTE ABAIXO, SALVA OS DADOS ADICIONADOS,
    // ! PODE SER TEMPORÁRIO CASO NÃO TENHA BACKEND
    // Para salvar os dados no Local Storage
    localStorage.setItem(
      'cultivationMethods',
      JSON.stringify(this.cultivationMethods)
    );

    // Para recuperar os dados do Local Storage
    const storedCultivationMethods = localStorage.getItem('cultivationMethods');
    if (storedCultivationMethods) {
      this.cultivationMethods = JSON.parse(storedCultivationMethods);
    }

    this.snackBar.open('Tipo de cultivo adicionado!', 'X', {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }
}
