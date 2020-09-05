import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  @Input() items: any[];

  @Input()
  itemTemplate: TemplateRef<any>;

  constructor(
    
  ) { }

  ngOnInit() {
  }

}