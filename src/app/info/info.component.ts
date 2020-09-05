import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  @Input() data: any;
  @Input() config: any = {scope: 'OWN'};
}
