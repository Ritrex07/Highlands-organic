// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Keep the existing asset folder explicit. It is capitalized in the
  // project, while Vite's default assumes a lowercase `public` directory.
  // Without this, the PDF-extracted images are omitted from the build.
  vite: {
    publicDir: "Public",
  },
  // Vercel needs Nitro's native output manifest so SSR routes and public
  // images are deployed together. The previous default emitted Cloudflare
  // output, which can leave static assets unavailable on Vercel.
  nitro: {
    preset: "vercel",
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
