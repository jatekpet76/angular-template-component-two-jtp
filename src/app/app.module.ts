import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ListComponent } from './list/list.component';
import { InfoComponent } from './info/info.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { SubHandlerComponent } from './sub-handler/sub-handler.component';
import { SecondPageComponent } from './second-page/second-page.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    ListComponent, 
    InfoComponent, 
    FirstPageComponent, 
    SubHandlerComponent, 
    SecondPageComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
