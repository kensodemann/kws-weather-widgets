import { Config } from '@stencil/core';

export const config:Config = {
  namespace: 'kwsweather',
  outputTargets:[
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'www',
      copy: [
        { src: 'imgs' }
      ]
    }
  ]
};
