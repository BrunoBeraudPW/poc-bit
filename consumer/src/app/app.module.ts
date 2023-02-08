import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyHeaderModule } from '@test-bruno/test-bruno.ui.my-header';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MyHeaderModule, HeaderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
