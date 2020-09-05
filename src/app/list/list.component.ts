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

  onRemove(event, item) {
    console.log('onRemove', {event, item});

    this.items = this.items.filter(obj => obj !== item);
  }

  onAddNewItem() {
    this.items.push({id: this.items.length+1, name: new Date().toString(), type: 'NEW'});
  }
}
