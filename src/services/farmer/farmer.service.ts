import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProductsFarmer } from 'src/app/models/list-farmer.model';
import { BehaviorSubject, Observable, take, tap } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FarmerService {
  public product$: BehaviorSubject<IProductsFarmer[]> = new BehaviorSubject<
    IProductsFarmer[]
  >([]);
  constructor(private http: HttpClient) {}

  getProductsObservable(): Observable<IProductsFarmer[]> {
    return this.product$.asObservable();
  }

  public getProductsList(): Observable<IProductsFarmer[]> {
    return this.http.get<IProductsFarmer[]>(`http://localhost:3000/produtos`);
  }

  public getProductsById(productId: number): Observable<IProductsFarmer[]> {
    return this.http.get<IProductsFarmer[]>(
      `http://localhost:3000/produtos/${productId}`
    );
  }

  public createNewProduct(
    productFarmer: IProductsFarmer
  ): Observable<IProductsFarmer[]> {
    return this.http.post<IProductsFarmer[]>(
      `http://localhost:3000/produtos`,
      productFarmer
    );
  }

  public updateProductList(products: IProductsFarmer[]): void {
    this.product$.next(products);
  }

  public updateProduct(
    productId: number,
    product: IProductsFarmer
  ): Observable<IProductsFarmer> {
    const url = `http://localhost:3000/produtos/${productId}`;
    return this.http.put<IProductsFarmer>(url, product);
  }

  public deleteProduct(productId: number): Observable<IProductsFarmer> {
    return this.http.delete<IProductsFarmer>(
      `http://localhost:3000/produtos/${productId}`
    );
    // .pipe(
    //   // O uso do operador tap permite
    //   // executar uma ação secundária após a exclusão bem-sucedida.
    //   tap(() => {
    //     const updatedProducts = this.product$.value.filter(
    //       (product) => product.id !== productId
    //     );
    //     this.updateProductList(updatedProducts);
    //   })
    // );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    // return throwError(error);
  }
}
