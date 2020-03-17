import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  @Input() data = [];
  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  chartOptions: Highcharts.Options = {}; // required

  constructor() { }

  ngOnInit(): void {

    this.chartOptions = {
      chart: {
          type: 'area'
      },
      title: {
          text: 'RANDOM Data'
      },
      subtitle: {
          text: 'None'
      },
      yAxis: {
          title: {
              text: 'Billions'
          },
          labels: {
              formatter() {
                  return (this.value / 1000).toString();
              }
          }
      },
      tooltip: {
          split: true,
          valueSuffix: ' millions'
      },

      credits: {
        enabled: false
      },

      exporting: {
        enabled: true
      },

      series: this.data
  };

    HC_exporting(this.Highcharts);

    setTimeout(() =>
  window.dispatchEvent(new Event('resize')), 300);
  }

}
