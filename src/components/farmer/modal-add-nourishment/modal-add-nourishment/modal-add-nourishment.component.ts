import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal-add-nourishment',
  templateUrl: './modal-add-nourishment.component.html',
  styleUrls: ['./modal-add-nourishment.component.scss'],
})
export class ModalAddNourishmentComponent implements OnInit {
  public nourishments: any[];
  public form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ModalAddNourishmentComponent>,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {
    this.nourishments = data.nourishments;
    this.form = this.fb.group({
      inputNourishment: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  public close(): void {
    this.dialogRef.close();
  }

  public addNourishment(): void {
    // Gera um novo valor para o novo tipo de cultivo
    const newValue = `nourishment-${this.nourishments.length}`;
    // Cria um novo objeto com o novo tipo de cultivo
    const newNourishment = {
      value: newValue,
      viewValue: this.form.get('inputNourishment')?.value,
    };
    // Adiciona o novo tipo de cultivo ao array
    this.nourishments.push(newNourishment);

    // ! IMPORTANTE ABAIXO, SALVA OS DADOS ADICIONADOS,
    // ! PODE SER TEMPORÁRIO CASO NÃO TENHA BACKEND
    // Para salvar os dados no Local Storage
    localStorage.setItem('nourishments', JSON.stringify(this.nourishments));

    // Para recuperar os dados do Local Storage
    const storedNourishments = localStorage.getItem('nourishments');
    if (storedNourishments) {
      this.nourishments = JSON.parse(storedNourishments);
    }

    this.snackBar.open('Alimento adicionado !', 'X', {
      duration: 5000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    });
  }
}
