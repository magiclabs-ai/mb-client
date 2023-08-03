// vite.config.ts
import { defineConfig } from "file:///Users/54nd10/code/magiclabs-ai/mb-client/node_modules/.pnpm/vite@4.4.8_@types+node@18.14.0/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/54nd10/code/magiclabs-ai/mb-client/node_modules/.pnpm/vite-plugin-dts@3.4.0_@types+node@18.14.0_typescript@5.1.6_vite@4.4.8/node_modules/vite-plugin-dts/dist/index.mjs";
import path, { resolve } from "path";
var __vite_injected_original_dirname = "/Users/54nd10/code/magiclabs-ai/mb-client/packages/client";
var vite_config_default = defineConfig({
  envDir: "../../",
  resolve: {
    alias: [
      { find: "@/shared", replacement: path.resolve(__vite_injected_original_dirname, "../../shared") },
      { find: "@/client", replacement: path.resolve(__vite_injected_original_dirname, "src") }
    ]
  },
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "magicbook-client",
      fileName: "magicbook-client"
    }
  },
  plugins: [dts({ entryRoot: "src" })],
  test: {
    setupFiles: [
      "__tests__/mocks/fetch.ts",
      "__tests__/mocks/books.ts",
      "__tests__/mocks/design-options.ts",
      "__tests__/mocks/websocket.ts"
    ],
    environment: "jsdom",
    coverage: {
      all: true,
      include: ["src/**/*.ts"],
      exclude: ["src/data/design-request.ts"],
      provider: "istanbul",
      reporter: ["text", "json-summary", "json", "html"]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvNTRuZDEwL2NvZGUvbWFnaWNsYWJzLWFpL21iLWNsaWVudC9wYWNrYWdlcy9jbGllbnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy81NG5kMTAvY29kZS9tYWdpY2xhYnMtYWkvbWItY2xpZW50L3BhY2thZ2VzL2NsaWVudC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvNTRuZDEwL2NvZGUvbWFnaWNsYWJzLWFpL21iLWNsaWVudC9wYWNrYWdlcy9jbGllbnQvdml0ZS5jb25maWcudHNcIjsvLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGVzdFwiIC8+XG5pbXBvcnQge2RlZmluZUNvbmZpZ30gZnJvbSAndml0ZSdcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xuaW1wb3J0IHBhdGgsIHtyZXNvbHZlfSBmcm9tICdwYXRoJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBlbnZEaXI6ICcuLi8uLi8nLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IFtcbiAgICAgIHtmaW5kOiAnQC9zaGFyZWQnLCByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uLy4uL3NoYXJlZCcpfSxcbiAgICAgIHtmaW5kOiAnQC9jbGllbnQnLCByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpfVxuICAgIF1cbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9pbmRleC50cycpLFxuICAgICAgbmFtZTogJ21hZ2ljYm9vay1jbGllbnQnLFxuICAgICAgZmlsZU5hbWU6ICdtYWdpY2Jvb2stY2xpZW50J1xuICAgIH1cbiAgfSxcbiAgcGx1Z2luczogW2R0cyh7ZW50cnlSb290OiAnc3JjJyx9KV0sXG4gIHRlc3Q6IHtcbiAgICBzZXR1cEZpbGVzOiBbXG4gICAgICAnX190ZXN0c19fL21vY2tzL2ZldGNoLnRzJyxcbiAgICAgICdfX3Rlc3RzX18vbW9ja3MvYm9va3MudHMnLFxuICAgICAgJ19fdGVzdHNfXy9tb2Nrcy9kZXNpZ24tb3B0aW9ucy50cycsXG4gICAgICAnX190ZXN0c19fL21vY2tzL3dlYnNvY2tldC50cydcbiAgICBdLFxuICAgIGVudmlyb25tZW50OiAnanNkb20nLFxuICAgIGNvdmVyYWdlOiB7XG4gICAgICBhbGw6IHRydWUsXG4gICAgICBpbmNsdWRlOiBbJ3NyYy8qKi8qLnRzJ10sXG4gICAgICBleGNsdWRlOiBbJ3NyYy9kYXRhL2Rlc2lnbi1yZXF1ZXN0LnRzJ10sXG4gICAgICBwcm92aWRlcjogJ2lzdGFuYnVsJyxcbiAgICAgIHJlcG9ydGVyOiBbJ3RleHQnLCAnanNvbi1zdW1tYXJ5JywgJ2pzb24nLCAnaHRtbCddXG4gICAgfVxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVEsb0JBQW1CO0FBQzNCLE9BQU8sU0FBUztBQUNoQixPQUFPLFFBQU8sZUFBYztBQUg1QixJQUFNLG1DQUFtQztBQUt6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixRQUFRO0FBQUEsRUFDUixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxFQUFDLE1BQU0sWUFBWSxhQUFhLEtBQUssUUFBUSxrQ0FBVyxjQUFjLEVBQUM7QUFBQSxNQUN2RSxFQUFDLE1BQU0sWUFBWSxhQUFhLEtBQUssUUFBUSxrQ0FBVyxLQUFLLEVBQUM7QUFBQSxJQUNoRTtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQU8sUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDeEMsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTLENBQUMsSUFBSSxFQUFDLFdBQVcsTUFBTSxDQUFDLENBQUM7QUFBQSxFQUNsQyxNQUFNO0FBQUEsSUFDSixZQUFZO0FBQUEsTUFDVjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLGFBQWE7QUFBQSxJQUNiLFVBQVU7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLFNBQVMsQ0FBQyxhQUFhO0FBQUEsTUFDdkIsU0FBUyxDQUFDLDRCQUE0QjtBQUFBLE1BQ3RDLFVBQVU7QUFBQSxNQUNWLFVBQVUsQ0FBQyxRQUFRLGdCQUFnQixRQUFRLE1BQU07QUFBQSxJQUNuRDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
