import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  public bigChart() {
    return [{
          type: 'area',
          name: 'Asia',
          data: [502, 635, 809, 947, 1402, 3634, 5268]
      }, {
          type: 'area',
          name: 'Africa',
          data: [106, 107, 111, 133, 221, 767, 1766]
      }, {
          type: 'area',
          name: 'Europe',
          data: [163, 203, 276, 408, 547, 729, 628]
      }, {
          type: 'area',
          name: 'America',
          data: [18, 31, 54, 156, 339, 818, 1201]
      }, {
          type: 'area',
          name: 'Oceania',
          data: [2, 2, 2, 6, 13, 30, 46]
      }];
    }

    public cards() {
      return [30, 12, 48, 29];
    }

    public pieChart() {
      return [{
        name: 'Chrome',
        y: 61.41,
        sliced: true,
        selected: true
    }, {
        name: 'Internet Explorer',
        y: 11.84
    }, {
        name: 'Firefox',
        y: 10.85
    }, {
        name: 'Edge',
        y: 4.67
    }, {
        name: 'Safari',
        y: 4.18
    }, {
        name: 'Sogou Explorer',
        y: 1.64
    }, {
        name: 'Opera',
        y: 1.6
    }, {
        name: 'QQ',
        y: 1.2
    }, {
        name: 'Other',
        y: 2.61
    }];
  }
}
