import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.scss']
})
export class MyHeaderComponent {
  @Input() testPropertiy!: string;
  constructor() {}
}
