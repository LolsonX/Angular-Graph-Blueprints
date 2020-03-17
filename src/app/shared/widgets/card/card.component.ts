import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() label: string;
  @Input() total: string;
  @Input() percentage: number;
  @Input() data: [];
  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor = 'chart'; // optional string, defaults to 'chart'
  chartOptions: Highcharts.Options = {}; // required

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'area',
          backgroundColor: null,
          borderColor: '0',
          margin: [2, 2, 2, 2],
          height: 60
      },
      title: {
          text: null
      },
      subtitle: {
          text: null
      },
      yAxis: {
        labels: {
          enabled: false
        },
        title: null,
        startOnTick: false,
        endOnTick: false,
      },
      tooltip: {
          split: true,
          outside: true
      },

      legend: {
        enabled: false
      },

      credits: {
        enabled: false
      },

      exporting: {
        enabled: false
      },

      xAxis: {
        labels: {
          enabled: false
        },
        title: null,
        startOnTick: false,
        endOnTick: false
      },
      series: [{
          type: 'area',
          data: this.data
      }]
  };

    HC_exporting(this.Highcharts);

    setTimeout(() =>
  window.dispatchEvent(new Event('resize')), 300);
  }
}
