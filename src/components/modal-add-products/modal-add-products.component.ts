import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../login/login.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FarmerService } from 'src/services/farmer/farmer.service';
import { IProductsFarmer } from 'src/app/models/list-farmer.model';

@Component({
  selector: 'app-modal-add-products',
  templateUrl: './modal-add-products.component.html',
  styleUrls: ['./modal-add-products.component.scss'],
})
export class ModalAddProductsComponent implements OnInit {
  public form: FormGroup;
  public product: IProductsFarmer;
  public products: IProductsFarmer[];

  constructor(
    public dialogRef: MatDialogRef<ModalAddProductsComponent>,
    public farmerService: FarmerService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      amount: ['', [Validators.required, Validators.min(1)]],
      price: ['', [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit(): void {
    this.farmerService.getProductsObservable().subscribe((products) => {
      this.products = products;
    });
  }

  public close(): void {
    this.dialogRef.close();
  }

  public sendInformations(): void {
    if (this.form.valid) {
      const formData = this.form.value;
      /**Objetivo do form.value: porque ele permite que você
       * acesse os valores preenchidos nos campos do formulário
       * de forma conveniente. Assim, você pode obter esses
       * valores e usá-los para criar um novo objeto product
       * com as informações corretas antes de enviá-lo para o serviço. */
      this.product = {
        name: formData.name,
        amount: formData.amount,
        price: formData.price,
      };

      this.farmerService.createNewProduct(this.product).subscribe((res) => {
        if (res) {
          this.dialogRef.close();
        } else {
          // lançar um erro, talvez um catch error futuro
        }
      });
    } else {
      // lançar erro nos formulários caso não esteja preenchido
      this.form.markAllAsTouched();
    }
  }
}