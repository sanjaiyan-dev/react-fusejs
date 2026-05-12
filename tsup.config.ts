import { defineConfig } from "tsup";
import babel from "esbuild-plugin-babel";

export default defineConfig({
  entry: ["src/index.ts", "src/tanstack/index.ts"],
  format: ["esm", "cjs"],
  sourcemap: true,
  clean: true,
  treeshake: true,
  splitting: false,
  dts: true,
  external: ["react", "react-dom", "@tanstack/react-query"],
  esbuildPlugins: [
    babel({
      filter: /\.tsx?$/,
      config: {
        presets: [
          ["@babel/preset-react", { runtime: "automatic" }],
          "@babel/preset-typescript",
        ],
        plugins: [["babel-plugin-react-compiler", { target: "18" }]],
      },
    }) as any, // eslint-disable-line @typescript-eslint/no-explicit-any
  ],
  banner: {
    js: '"use client";',
  },
});
