import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { IProductsFarmer } from 'src/app/models/list-farmer.model';
import { FarmerService } from 'src/services/farmer/farmer.service';

@Component({
  selector: 'app-edit-products-farmer',
  templateUrl: './edit-products-farmer.component.html',
  styleUrls: ['./edit-products-farmer.component.scss'],
})
export class EditProductsFarmerComponent implements OnInit {
  public form: FormGroup;
  public productId: number;
  public productsFarmer: IProductsFarmer[];
  private unsubscribe$ = new Subject();

  constructor(
    public farmerService: FarmerService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      amount: ['', [Validators.required, Validators.min(1)]],
      price: ['', [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit(): void {
    // Conforme a rota que pega o id, no qual também é o parametro
    // o pipe faz a função de juntar, e o takeUntil até até que saía
    // Caso tenha realmente o parametro de id
    // Pega o serviço de cada id
    // A função patchValue() aceita um objeto que mapeia
    // as propriedades do formulário para seus respectivos valores.
    this.route.params.pipe(takeUntil(this.unsubscribe$)).subscribe((params) => {
      /**obtém o valor do parâmetro id da rota atual e o armazena
       * em uma constante chamada productId.
       * Isso assume que sua rota possui um parâmetro chamado id. */
      const productId = params.id;
      // Ele afeta o farmerService também, como o id por padrão é string,
      // precisa ser convertido para number, por isso.
      this.productId = Number(productId);
      this.farmerService.getProductsById(productId).subscribe((product) => {
        /**
         *  atribui o objeto product à propriedade productsFarmer
         * do componente. Isso pode ser útil se você precisar
         * acessar os detalhes do produto em outras partes do componente.
         */
        this.productsFarmer = product;
        // Patch: Corrigir
        // Corrige o valor do FormGroup.
        // Ele aceita um objeto com nomes de controle
        // como chaves e faz o possível para corresponder
        // os valores aos controles corretos no grupo.
        /**
         * this.form.patchValue(product); preenche o formulário (this.form)
         * com os valores do objeto product. Isso atualiza os
         * valores dos campos no formulário com os valores
         * correspondentes do objeto. Portanto, os campos do
         * formulário serão preenchidos com os detalhes
         * do produto obtidos do serviço.
         */
        this.form.patchValue(product);
      });
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next('id');
    this.unsubscribe$.complete();
  }

  public returnToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  public confirm(): void {
    this.farmerService
      /**Prestar atenção onde cada um é chamado, por exemplo, esse this.productId
       * Ele é definido lá na classe, mas ele tava sendo usado no route params
       * e ele tava como string, que tava voltando undefined pra mim
       */
      .updateProduct(this.productId, this.form.value)
      .subscribe((res) => {
        this.router.navigate(['/dashboard']);
      });
  }
}
