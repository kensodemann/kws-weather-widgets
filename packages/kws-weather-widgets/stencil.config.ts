import { Config } from "@stencil/core";
import { angularOutputTarget } from "@stencil/angular-output-target";
import { reactOutputTarget } from "@stencil/react-output-target";

export const config: Config = {
  namespace: "kwsweather",
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: "kws-weather-widgets",
      directivesProxyFile:
        "../kws-weather-widgets-angular/src/directives/proxies.ts"
    }),
    reactOutputTarget({
      componentCorePackage: "kws-weather-widgets",
      proxiesFile: "../kws-weather-widgets-react/src/components.ts"
    }),
    {
      type: "dist",
      esmLoaderPath: "../loader"
    },
    {
      type: "www",
      copy: [{ src: "imgs" }]
    }
  ]
};
