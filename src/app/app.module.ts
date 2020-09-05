import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ListComponent } from './list/list.component';
import { InfoComponent } from './info/info.component';
import { FirstPageComponent } from './first-page/first-page.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ListComponent, InfoComponent, FirstPageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
