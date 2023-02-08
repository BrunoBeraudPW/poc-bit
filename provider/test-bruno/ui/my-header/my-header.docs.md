---
labels: ['angular', 'typescript', 'my-header']
description: 'A `my-header` component.'
---

# MyHeader documentation

Import `MyHeaderModule` into your application:

```ts
import { MyHeaderModule } from './my-header.module';

// add it to your module imports
@NgModule({
  imports: [
    MyHeaderModule
  ]
})
export class AppModule {}
```

Use `MyHeaderComponent` in your templates:

```html
<my-header></my-header>
```
