# Fantasia

A component library based on Stencil.js and Web components

## Development

### build stencil library

```shell
cd fantasia-stencil
npm run build
```

### link stencil library with react wrapper library
```shell
cd fantasia-react
npm link fantasia
```

### usage

```shell
cd fantasia-react
npm link

cd my-project
npm link fantasia-react
```

in application
```jsx
import { FtModal } from 'fantasia-react';
```
