import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        customElement: true,
      },
    }),
  ],

  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/self.ts"),
      name: "Self",
      // the proper extensions will be added
      fileName: "self-lib",
    },
    // rollupOptions: {
    //   input: {
    //     // main: resolve(__dirname, "index.html"),
    //     self: resolve(__dirname, "self.html"),
    //   },
    // },
  },
});
