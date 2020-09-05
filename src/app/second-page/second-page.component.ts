import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { SubHandler } from '../sub-handler/sub-handler.component';

@Component({
  selector: 'second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit, SubHandler {
  items = [
    {id: 1, name: 'Joe', type: 'CRAZY'},
    {id: 2, name: 'Elena', type: 'NORMAL'},
    {id: 3, name: 'Sigfied', type: 'CRAZY'},
    {id: 4, name: 'Martell', type: 'NORMAL'},
    {id: 5, name: 'Eve', type: 'CRAZY'},
    {id: 6, name: 'Jonathan', type: 'NORMAL'},
    {id: 7, name: 'Leonora', type: 'CRAZY'},
  ];

  formArray = new FormArray([]);

  infoConfig: any = {scope: 'FirstPage'};

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
  }

  itemClick(event, item) {
    console.log({event, item});
  }

  createNewFormGroup(item: any): FormGroup{
    item['name'] = new Date().toISOString();

    return this.formBuilder.group(item);
  }

  createItemFormGroup(item: any): FormGroup{
    return this.formBuilder.group(item);
  }
}
