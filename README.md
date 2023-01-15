# Fantasia

 (🏗 Work in progress)

A personal component library based on Stencil.js and Web components

## Components
- [x] modal

## Project structure
```
├── fantasia-stencil # web components 
└── fantasia-react # react wrapper for integration
```

## Quick start

### usage: vanilla JS application
```html
<ft-modal></ft-modal>
```

### usage: React application
```jsx
import { FtModal } from '@paladinze/fantasia-react';
```


## Development
try out stencil components in standalone environment

```shell
cd fantasia-stencil
npm run start
```

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

### use the components when developing

```shell
cd fantasia-react
npm link

cd my-project
npm link fantasia-react
```
