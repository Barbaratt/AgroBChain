import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ModalAddProductsComponent } from '../modal-add-products/modal-add-products.component';
import { IProductsFarmer } from 'src/app/interfaces/list-farmer.model';
import { FarmerService } from 'src/services/farmer/farmer.service';
import { ModalDeleteComponent } from '../modal-delete/modal-delete.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  public farmerProduct: IProductsFarmer;

  displayedColumns: string[] = [
    // 'position',
    'name',
    'amount',
    'price',
    'actions',
  ];

  dataSource = new MatTableDataSource<IProductsFarmer>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private farmerService: FarmerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProductsList();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  public addProduct(): void {
    const dialogRef = this.dialog.open(ModalAddProductsComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      // To Update the list, mesmo que coloque algo,
      // somente com a função de salvar que irá
      // Para futuros rascunho, isso será super útil.
      this.getProductsList();
    });
  }

  public getProductsList(): void {
    this.farmerService.getProductsList().subscribe((res) => {
      this.dataSource.data = res;
    });
  }

  public editProduct(id: IProductsFarmer): void {
    this.router.navigate([`/dashboard/edit-products-farmer/${id}`]);
  }

  public deleteProduct(farmerProduct: IProductsFarmer): void {
    const dialogRef = this.dialog.open(ModalDeleteComponent, {
      data: {
        // CUIDADO COM AQUI
        // SE TIVER MAIS NA INTERFACE, TEM QUE POR AQUI PARA OUTRAS MODAIS
        // PRECISA DO ID PARA O SERVIÇO SABER QUAL ID ESTÁ SENDO DELETADO
        id: farmerProduct.id,
        name: farmerProduct.name,
        price: farmerProduct.price,
        amount: farmerProduct.amount,
      },
      height: '350px',
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getProductsList();
    });
  }
}
