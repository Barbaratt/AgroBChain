import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { map } from 'rxjs';
import { IVendas } from 'src/app/interfaces/data-grafics.model';
import { FarmerService } from 'src/services/farmer/farmer.service';

@Component({
  selector: 'app-grafics',
  templateUrl: './grafics.component.html',
  styleUrls: ['./grafics.component.scss'],
})

// REFERÊNCIA QUE ME AJUDOU: https://edupala.com/how-to-use-angular-chartjs/
export class GraficsComponent implements OnInit {
  public canvas: any;
  public ctx: any;
  public barChart: any;
  public labelNamesResult: any;
  public labelAmountsResult: any;

  @ViewChild('barCanvas') barCanvas: { nativeElement: any };

  constructor(private farmerService: FarmerService) {}

  ngAfterViewInit(): void {
    this.barChartBrowser();
  }

  ngOnInit(): void {}

  public barChartBrowser(): void {
    let chartColors = {
      color1: 'rgba(234, 237, 44)',
      color2: 'rgba(19, 101, 160)',
      color3: 'rgba(102, 47, 182)',
      color4: 'rgba(208, 23, 20)',
      color5: 'rgba(15, 135, 33)',
      color6: 'rgba(234, 237, 44)',
    };

    this.canvas = this.barCanvas.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    // O gráfico necessita estar dentro do serviço para poder pegar os dados
    this.farmerService.getDataGrafics().subscribe((res) => {
      this.labelNamesResult = res.map((item: IVendas) =>
        item.name?.toUpperCase()
      );
      this.labelAmountsResult = res.map((item: IVendas) => item.amount);

      this.barChart = new Chart(this.ctx, {
        type: 'bar',
        data: {
          labels: this.labelNamesResult,
          datasets: [
            {
              label: 'Vendas (R$)',
              backgroundColor: [
                chartColors.color1,
                chartColors.color2,
                chartColors.color3,
                chartColors.color4,
                chartColors.color5,
                chartColors.color6,
              ],
              data: this.labelAmountsResult,
            },
          ],
        },
      });
    }); //Final do serviço
  }
}
