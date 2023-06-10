import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IProductsFarmer } from 'src/app/models/list-farmer.model';
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

  constructor(
    // To get all the informations in table component
    @Inject(MAT_DIALOG_DATA) public productFarmer: IProductsFarmer,
    public dialogRef: MatDialogRef<ModalDeleteComponent>,
    public farmerService: FarmerService
  ) //   private snackBar: MatSnackBar
  {
    // this.refresh();
  }

  // refresh() {
  //   this.courses$ = this.coursesService.list()
  //     .pipe(
  //       catchError(error => {
  //         this.onError('Erro ao carregar cursos.');
  //         return of([])
  //       })
  //     );
  // }

  // onError(errorMsg: string) {
  //   this.dialog.open(ErrorDialogComponent, {
  //     data: errorMsg
  //   });
  // }

  ngOnInit(): void {}

  public close(): void {
    this.dialogRef.close();
  }

  public getProductsList(): void {
    this.farmerService.getProductsList();
    // .subscribe((res) => {
    //   this.dataSource.data = res;
    // });
  }

  // ESSE DEU TÁ
  public deleteProduct(productId: number): void {
    this.farmerService.deleteProduct(productId).subscribe(
      () => {
        console.log('Produto Deletado com sucesso !');
        this.dialogRef.close();
        // PRECISO ATUALIZAR A TELA
        // E FAZER ALGUM ALERTA SACA
        /**
         *  this.refresh();
            this.snackBar.open('Curso removido com sucesso!', 'X', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          },
          () => this.onError('Erro ao tentar remover curso.')
        );
         */
      },
      (error) => {
        console.error('Erro ao deletar o produto:', error);
        // Trate o erro adequadamente
      }
    );
  }
}
