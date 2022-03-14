import typescript from "rollup-plugin-typescript";
import sourceMaps from "rollup-plugin-sourcemaps";
import hashbang from "rollup-plugin-hashbang";
import { uglify } from "rollup-plugin-uglify";

export default [
  // {
  //   input: "./src/command.ts",
  //   output: [
  //     {
  //       format: "cjs",
  //       file: "lib/command.js",
  //       sourcemap: true,
  //     },
  //   ],
  //   plugins: [
  //     typescript({
  //       exclude: "node_modules/**",
  //       typescript: require("typescript"),
  //     }),
  //     sourceMaps(),
  //     uglify(),
  //     hashbang(),
  //   ],
  // },
  {
    input: "./src/index.ts",
    output: [
      {
        format: "cjs",
        file: "lib/index.js",
        sourcemap: true,
      },
    ],
    plugins: [
      typescript({
        exclude: "node_modules/**",
        typescript: require("typescript"),
      }),
      sourceMaps(),
      uglify(),
      hashbang(),
    ],
  },
];
