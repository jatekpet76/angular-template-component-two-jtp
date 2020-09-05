import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {
  items = [
    {id: 1, name: 'Joe', type: 'CRAZY'},
    {id: 2, name: 'Elena', type: 'NORMAL'},
    {id: 3, name: 'Sigfied', type: 'CRAZY'},
    {id: 4, name: 'Martell', type: 'NORMAL'},
    {id: 5, name: 'Eve', type: 'CRAZY'},
    {id: 6, name: 'Jonathan', type: 'NORMAL'},
    {id: 7, name: 'Leonora', type: 'CRAZY'},
  ];

  infoConfig: any = {scope: 'FirstPage'};

  constructor() { }

  ngOnInit() {
  }

  itemClick(event, item) {
    console.log({event, item});
  }
}
