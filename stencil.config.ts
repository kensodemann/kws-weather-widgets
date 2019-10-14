import { Config } from '@stencil/core';

export const config:Config = {
  namespace: 'kwsweather',
  outputTargets:[
    {
      type: 'dist'
    },
    {
      type: 'www',
      copy: [
        { src: 'imgs' }
      ]
    }
  ]
};
