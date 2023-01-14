import { Config } from '@stencil/core';
import {postcss} from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
import purgecss from "@fullhuman/postcss-purgecss";
import { reactOutputTarget as react } from '@stencil/react-output-target';



//purge function to keep only the classes used in EACH component
const purge = purgecss({
  content: ["./src/**/*.tsx", "./src/index.html"],
  safelist: [':host'],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

export const config: Config = {
  namespace: 'fantasia',
  outputTargets: [
    react({
      componentCorePackage: 'fantasia',
      proxiesFile: '../fantasia-react/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins : [
    postcss({
      plugins: [
        require("postcss-import"),
        require("tailwindcss")("./tailwind.config.js"),
        autoprefixer(),
        ...(process.env.NODE_ENV === "production"
          ? [purge, require("cssnano")]
          : [])
      ]
    })
  ],
};
