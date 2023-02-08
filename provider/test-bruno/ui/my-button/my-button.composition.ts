import { Component, Input, NgModule } from '@angular/core';
import { MyButtonModule } from './my-button.module';

@Component({
  selector: 'my-button-composition-cmp',
  template: `<my-button>Basic</my-button>`
})
class MyButtonCompositionComponent {
  @Input()
  disabled!: boolean;
}

@NgModule({
  declarations: [MyButtonCompositionComponent],
  imports: [MyButtonModule],
  bootstrap: [MyButtonCompositionComponent]
})
export class MyButtonCompositionModule {}
