import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import vueI18n from '@intlify/vite-plugin-vue-i18n';
import eslintPlugin from 'vite-plugin-eslint';
import viteSvgIcons from 'vite-plugin-svg-icons';
import FullReload from 'vite-plugin-full-reload';
import viteImagemin from 'vite-plugin-imagemin';
import Pages from 'vite-plugin-pages';
import { visualizer } from 'rollup-plugin-visualizer';
import WindiCSS from 'vite-plugin-windicss';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  plugins: [
    vue(),
    Pages({ pagesDir: 'src/pages', importMode: 'async' }),
    Components({ dts: 'src/components.d.ts', dirs: ['src/components'] }),
    vueI18n({
      compositionOnly: true,
      fullInstall: false,
      runtimeOnly: true,
      include: path.resolve(__dirname, 'src/translations/messages/**'),
    }),
    WindiCSS(),
    viteSvgIcons({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]',
    }),
    viteImagemin(),
    FullReload(['src/assets/icons/*', 'src/assets/img/*']),
    eslintPlugin({ cache: false }),
  ],

  build: {
    rollupOptions: {
      plugins: [visualizer()],
    },
  },
});
