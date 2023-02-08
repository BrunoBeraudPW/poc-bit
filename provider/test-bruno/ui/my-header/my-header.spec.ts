import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyButtonModule } from '@test-bruno/test-bruno.ui.my-button';

import { MyHeaderComponent } from './my-header.component';
import { MyHeaderModule } from './my-header.module';

describe('MyHeaderComponent', () => {
  let component: MyHeaderComponent;
  let fixture: ComponentFixture<MyHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MyHeaderModule, MyButtonModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('should be true', () => {
    expect(true).toBeTruthy();
  });
});
