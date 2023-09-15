import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";

// config should be exported default
const conf = [
  {
    // entry point for the application
    input: "./src/index.js",
    // outpu directry - array of output conf
    // esmodule commonjs
    output: [
      {
        file: "dist/index.js",
        format: "cjs", // common js
      },
      {
        file: "dist/index.es.js",
        format: "esm", // common js
      },
    ],
    plugins: [
      postcss({
        plugins: [],
        minimize: true,
      }),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      external(),
      resolve(),
      commonjs(),
      terser(),
    ],
  },
];

export default conf;
