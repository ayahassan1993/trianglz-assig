import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {


  }
  

  chartOptions = {
    responsive: true,
    scaleShowVerticalLines : true,
    scales: {
      yAxes: [{
          ticks: {
              suggestedMin: 0,
              suggestedMax: 10,
              stepSize: 2
          }
      }]
  }    
  };

  barchartLend = false;

  lineChartData: ChartDataSets[] = [
    { data: [6.5,6,7,6.5], label: ""},
    { data: [8 , 8 , 8 , 8], label: "" },
  ];
    

  chartLabels = ['Cct 20', 'Oct 27', 'Nov 03', 'Nov 10' ];
  lineChartColors = [
    {
      backgroundColor:'#f7eeff',
      borderColor: '#8139c2',
      pointBackgroundColor: '#8139c2',
      pointBorderColor: '#fff',
    },
    {
      backgroundColor:  '#fff',
      borderColor: '#4ac979',
      pointBackgroundColor: '#fff',
      pointBorderColor: '#fff',
      borderDash : [9]
    },
  ]
}
