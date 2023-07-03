import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ModalAddProductsComponent } from '../modal-add-products/modal-add-products.component';
import { IProductsFarmer } from 'src/app/interfaces/list-farmer.model';
import { FarmerService } from 'src/services/farmer/farmer.service';
import { ModalDeleteComponent } from '../modal-delete/modal-delete.component';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataIdService } from 'src/services/dataId/data-id.service';
import { AuthService } from 'src/app/authentification/services/auth.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  public farmerProduct: IProductsFarmer;
  public id: string;
  ids: string[] = [];

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
    private dataIdService: DataIdService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.id = this.authService.getUserId();
    this.getProductsList();
    this.ids = Object.keys(this.dataIdService['data']);
    console.log(this.farmerService.getProductsList(this.id));
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

  // Talvez eu tenha que trocar por id
  public getProductsList() {
    this.farmerService.getProductsList(this.id).subscribe((res) => {
      console.log(this.id);
      this.dataSource.data = res;
      console.log(res);
    });
    // Filtra os produtos com base no ID de usuário
    //   const filteredProducts = res.filter(
    //     (product) => product.userId === userId
    //   );

    //   console.log(filteredProducts);

    //   if (filteredProducts.length > 0) {
    //     // Se houver produtos para o ID de usuário, atualiza o dataSource
    //     this.dataSource.data = filteredProducts;
    //   } else {
    //     // Caso contrário, limpa o dataSource
    //     this.dataSource.data = [];
    //   }
    // });
  }

  public editProduct(id: IProductsFarmer): void {
    this.router.navigate([`/dashboard/edit-products-farmer/${id}`]);
  }

  public deleteProduct(farmerProduct: IProductsFarmer): void {
    const dialogRef = this.dialog.open(ModalDeleteComponent, {
      data: {
        // ! CUIDADO COM AQUI
        // ! SE TIVER MAIS NA INTERFACE, TEM QUE POR AQUI PARA OUTRAS MODAIS
        // ! PRECISA DO ID PARA O SERVIÇO SABER QUAL ID ESTÁ SENDO DELETADO
        // userId: farmerProduct.userId,
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

  private getData(id: string): string[] | undefined {
    return this.dataIdService.getData(id);
  }
}
