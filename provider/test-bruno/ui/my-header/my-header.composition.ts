import { Component, NgModule } from '@angular/core';
import { MyHeaderModule } from './my-header.module';

@Component({
  selector: 'my-header-composition-cmp',
  template: `<my-header></my-header>`
})
class MyHeaderCompositionComponent {}

@NgModule({
  declarations: [MyHeaderCompositionComponent],
  imports: [MyHeaderModule],
  bootstrap: [MyHeaderCompositionComponent]
})
export class MyHeaderCompositionModule {}
