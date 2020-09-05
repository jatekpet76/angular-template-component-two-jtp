import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'list',
  template: `
<ul>
  <ng-container *ngFor="let item of items">
    <li>
      <ng-container 
        [ngTemplateOutlet]="itemTemplate"
        [ngTemplateOutletContext]="{item: item}"
      ></ng-container>
    </li>
  </ng-container>
</ul>
  `
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