import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, catchError } from 'rxjs';
import { IProductsFarmer } from 'src/app/interfaces/list-farmer.model';
import { FarmerService } from 'src/services/farmer/farmer.service';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss'],
})
export class ModalDeleteComponent implements OnInit {
  public id: IProductsFarmer;
  public productFarmers: IProductsFarmer;
  public productId: number;
  public product: any;
  products: IProductsFarmer[] = [];
  products$: Observable<IProductsFarmer[]>;

  constructor(
    // To get all the informations in table component
    @Inject(MAT_DIALOG_DATA) public productFarmer: IProductsFarmer,
    public dialogRef: MatDialogRef<ModalDeleteComponent>,
    public farmerService: FarmerService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  public close(): void {
    this.dialogRef.close();
  }

  public getProductsList(): void {
    this.farmerService.getProductsList();
  }

  public deleteProduct(productId: number): void {
    this.farmerService.deleteProduct(productId).subscribe(() => {
      this.dialogRef.close();
      this.snackBar.open('Produto removido com sucesso!', 'X', {
        duration: 5000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
      });
    });
  }
}
