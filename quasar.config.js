import { defineConfig } from '#q-app'

export default defineConfig(() => {
  return {
    boot: [],

    css: [
      'app.scss'
    ],

    extras: [
      'roboto-font',
      'material-icons',
    ],

    build: {
      cssMinify: 'esbuild',

      target: {},

      filenameBasedRouting: true,

      vueRouterMode: 'history',

      extendViteConf(viteConf) {
        viteConf.css.preprocessorOptions.sass.api = 'legacy'
        viteConf.css.preprocessorOptions.sass.silenceDeprecations.push(
          'legacy-js-api'
        )

        viteConf.css.preprocessorOptions.scss.api = 'legacy'
        viteConf.css.preprocessorOptions.scss.silenceDeprecations.push(
          'legacy-js-api'
        )
      },
    },

    devServer: {
      open: false
    },

    framework: {
      config: {},
      plugins: []
    },

    animations: [],

    ssr: {
      prodPort: 3000,
      middlewares: [
        'render'
      ],
      pwa: false
    },

    pwa: {
      workboxMode: 'GenerateSW'
    },

    cordova: {},

    capacitor: {
      hideSplashscreen: true
    },

    electron: {
      preloadScripts: [ 'electron-preload' ],
      inspectPort: 5858,
      bundler: 'packager',
      packager: {},
      builder: {
        appId: 'app-vite-v3'
      }
    },

    bex: {
      extraScripts: []
    }
  }
})