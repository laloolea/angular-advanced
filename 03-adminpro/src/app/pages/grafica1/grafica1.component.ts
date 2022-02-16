import { Component } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { baseColors } from 'ng2-charts';
@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component  {
 labels1=['Download Sales','In-Store Sales','Mail-Order Sales'];
}
