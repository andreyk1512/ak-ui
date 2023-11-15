import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { name } from './package.json';

export default defineConfig({
  build: {
    lib: {
      name,
      entry: './src/index.ts',
      fileName: (format) => `index.${format}.js`,
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [dts({ tsconfigPath: 'tsconfig.build.json' })],
});
