import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent implements OnInit {
  archiveItems: any = [
    {
      name: 'Személyek adatai',
    },
    {
      name: 'Pályák adatai',
    },
    {
      name: 'Hiánypótlás státusza',
    },
    {
      name: 'Hiánypótlási napló',
    },
    {
      name: 'Pályák statisztikája',
    },
  ];
  archiveColumns = [];
  constructor() {}

  ngOnInit(): void {}
  plugins = {
    tooltip: {
      enabled: 'false',
    },
  };
  data = {
    labels: ['teszt0', 'teszt1', 'teszt2'],
    datasets: [
      {
        backgroundColor: ['#046e02', '#74A738', '#3df03a'],
        data: [7, 4, 3],
      },
    ],
  };
  data2 = {
    labels: [],
    datasets: [
      {
        backgroundColor: ['#74A738', '#F3F3F3'],
        data: [60, 40],
      },
    ],
  };
}
