import {
  Component,
  OnInit,
  Input,
  OnChanges,
  ViewChild,
  SimpleChanges,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-news-line-chart',
  templateUrl: './news-line-chart.component.html',
  styleUrls: ['./news-line-chart.component.scss'],
})
export class NewsLineChartComponent implements OnInit, OnChanges, AfterViewInit {
  @Input('y_chartData') y_chartData: any;
  @Input('x_chartData') x_chartData: any;
  @ViewChild('renderChartTarget') MyChart: ElementRef;
  constructor() {}

  ngOnInit(): void {
    // this.initChart();
  }

  ngOnChanges(event: SimpleChanges) {
    this.initChart();
  }

  ngAfterViewInit(){
    this.initChart()
  }

  initChart() {
    if (this.MyChart) {
      var myChart = new Chart(this.MyChart.nativeElement, {
        type: 'line',
        data: {
          labels: this.x_chartData,
          datasets: [
            // {
            // label:"News ID",
            // backgroundColor: ["rgb(255, 99, 132, )"],
            // borderColor: ["rgb(255, 99, 132)"],
            // data: this.x_chartData,
            // },
            {
              label: 'Votes',
              fill: false,
              backgroundColor: 'rgb(54, 162, 235, 1)',
              borderColor: 'rgb(54, 162, 235, 1)',
              data: this.y_chartData,
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          showLines: true,
          responsive: true,
          title: {
            display: false,
          },
          scales: {
            xAxes: [
              {
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'News ID',
                  fontColor: 'black',
                  fontWeight: 'bold',
                },
                ticks: {
                  min: 0,
                  beginAtZero: true,
                },
              },
            ],
            yAxes: [
              {
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'Votes',
                  fontColor: 'black',
                  fontWeight: 'bold',
                },
                ticks: {
                  // max: 10000,
                  min: 0,
                  beginAtZero: true,
                  //   stepSize: 1000
                },
              },
            ],
          },
        },
      });
    }
  }
}
