import { Component, Input } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styles: [
  ]
})
export class DoughnutComponent  {

  @Input()title:string="";
  
  @Input('labels') doughnutChartLabels=['label1','label2','label3'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [10,50,150],
      //aqui se aplican los colores que va a tener la gráfica
      backgroundColor:['#9E120E','#FF5800','#FFB414']
    },
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';



}
