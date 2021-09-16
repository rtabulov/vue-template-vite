import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteComponents from 'vite-plugin-components';
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
      '@': resolve(__dirname, 'src'),
    },
  },

  plugins: [
    vue(),
    Pages(),
    viteComponents(),
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
