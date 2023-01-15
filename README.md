# Fantasia

A component library based on Stencil.js and Web components

## Quick start
try out stencil components in standalone environment

```shell
npm run start
```

## Development

### build stencil library

```shell
cd fantasia-stencil
npm run dev
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
