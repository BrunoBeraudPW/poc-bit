import { NgModule } from '@angular/core';
import { MyHeaderComponent } from './my-header.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon';
import { MyButtonModule } from '@test-bruno/test-bruno.ui.my-button';


@NgModule({
  declarations: [
    MyHeaderComponent
  ],
  imports: [MatToolbarModule, MatIconModule, MyButtonModule],
  exports: [
    MyHeaderComponent
  ]
})
export class MyHeaderModule {}
