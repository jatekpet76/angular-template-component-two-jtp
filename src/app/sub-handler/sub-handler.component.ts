import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

export interface SubHandler {
  createItemFormGroup(item: any): FormGroup;
  createNewFormGroup(item: any): FormGroup;

  // filterItem(item: any): boolean;
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
  @Input() formArray: FormArray;
  @Input() subHandler: SubHandler;
  @Input() itemTemplate: TemplateRef<any>;
  @Input() newTemplate: TemplateRef<any>;

  formGroupNewItem: FormGroup;

  constructor(
  ) {}

  ngOnInit() {
    this.items.forEach(item => {
      const form = this.subHandler.createItemFormGroup(item);
      this.formArray.push(form);
    });

    this.prepareNewItem();
  }

  prepareNewItem() {
    const newItem: any = {};
    this.formGroupNewItem = this.subHandler.createNewFormGroup(newItem);
  }

  onRemove(event, item, form, index) {
    console.log('onRemove', {event, item});

    this.items = this.items.filter(obj => obj !== item);
    this.formArray.removeAt(index);
  }

  onAddNewItem() {
    const value = this.formGroupNewItem.getRawValue();
    value.id = this.items.length+1;

    this.items.push(value);
    this.formArray.push(this.formGroupNewItem);

    this.prepareNewItem();
  }
}
