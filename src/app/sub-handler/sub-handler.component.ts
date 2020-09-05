import { Component, OnInit, Input, TemplateRef } from '@angular/core';

export interface SubHandler {
  
}

/*
 * Parameters:
 * @Input() items - Data Source
 * @Input() itemTemplate - List Item Template
 * @Input() subHandler - Callbacks with return
 * 
 * Primary Functions:
 * - Data: Input
 * - Events: onAdd, onRemove, onSelect, onFilter... - ???
 * - Create New Item: Callback
 * - Render List Item: Input TemplateRef
 * - Render New Item Form: Input TemplateRef
 * - Handler FormGroup/FormArray: Input and Logic
 * 
 * Secondary Functions:
 * - DataSource: Input - Observable
 * - Render Filter Form: Input TemplateRef
 * - Filter: Callback ??? - Call SubHandlerComponent to filter items, or send filtered items?
 * - Remove Confirm Dialog - ??? - maybe boolean Input or Callback
 * - 
 * 
 */
@Component({
  selector: 'sub-handler',
  templateUrl: './sub-handler.component.html',
  styleUrls: ['./sub-handler.component.css']
})
export class SubHandlerComponent implements OnInit {
  @Input() items: any[];
  @Input() subHandler: SubHandler;
  @Input() itemTemplate: TemplateRef<any>;

  constructor(
  ) {}

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
