import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'sub-handler',
  templateUrl: './sub-handler.component.html',
  styleUrls: ['./sub-handler.component.css']
})
export class SubHandlerComponent implements OnInit {
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
