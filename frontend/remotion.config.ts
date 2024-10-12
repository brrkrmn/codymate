import { Config } from "@remotion/cli/config";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";

Config.overrideWebpackConfig((config) => {
  return {
    ...config,
    resolve: {
      ...config.resolve,
      plugins: [...(config.resolve?.plugins ?? []), new TsconfigPathsPlugin()],
    },
  };
});

Config.setEntryPoint("./src/remotion/index.ts");
Config.setOutputLocation("out/video.mp4");
