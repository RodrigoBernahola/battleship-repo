import { merge } from "webpack-merge";
import common from "./webpack.common.js";
import ESLintPlugin from "eslint-webpack-plugin";

export default merge(common, {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new ESLintPlugin({
      failOnError: true,
      failOnWarning: false,
    }),
  ],
});
