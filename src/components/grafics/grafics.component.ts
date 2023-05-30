import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

export interface ILabelsPieChart {
  Vendas: string;
}



@Component({
  selector: 'app-grafics',
  templateUrl: './grafics.component.html',
  styleUrls: ['./grafics.component.scss'],
})

// REFERÊNCIA QUE ME AJUDOU: https://edupala.com/how-to-use-angular-chartjs/
export class GraficsComponent implements OnInit {
  public canvas: any;
  public ctx: any;
  public pieChart: any;
  public labelsChartPie = ['Apple', 'Google', 'Facebook', 'Infosys', 'Hp', 'Accenture'];

  @ViewChild('pieCanvas') pieCanvas: { nativeElement: any };

  constructor() {}

  ngAfterViewInit(): void {
    this.pieChartBrowser();
  }

  ngOnInit(): void {}

  public pieChartBrowser(): void {
    this.canvas = this.pieCanvas.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    this.pieChart = new Chart(this.ctx, {
      type: 'pie',
      data: {
        // Trocar depois por chamadas do back
        labels: this.labelsChartPie,
        // labels: ['Apple', 'Google', 'Facebook', 'Infosys', 'Hp', 'Accenture'],
        datasets: [
          {
            backgroundColor: [
              '#2ecc71',
              '#3498db',
              '#95a5a6',
              '#9b59b6',
              '#f1c40f',
              '#e74c3c',
            ],
            // Trocar depois por chamadas do back
            data: [12, 19, 3, 17, 28, 24],
          },
        ],
      },
    });
  }
}
