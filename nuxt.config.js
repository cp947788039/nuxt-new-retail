const pkg = require('./package')

module.exports = {
    mode: 'universal',

    /*
    ** Headers of the page
    */
    head: {
        title: pkg.name,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: pkg.description }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },

    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },

    /*
    ** Global CSS
    */
    css: [
        '~static/css/reset.css',
        'element-ui/lib/theme-chalk/index.css',
        '~assets/less/element-ui.less',
        '~assets/less/main.less'
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '@/plugins/element-ui',
        '@/plugins/api',
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/pwa'
    ],
    /*
    ** Axios module configuration
    */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },

    /*
    ** Build configuration
    */
    build: {
        /* transpile: [/^element-ui/], */
        vendor: ['element-ui'],

        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
            const sassResourcesLoader = {
                loader: 'sass-resources-loader',
                options: {
                    resources: ['~assets/less/element-ui.less','~assets/less/main.less']
                }
            }
            config.module.rules.forEach(rule => {
                if (rule.test.toString() === '/\\.vue$/') {
                    rule.options.loaders.less.push(sassResourcesLoader)
                }
                if (rule.test.toString() === '/\\.less$/') {
                    rule.use.push(sassResourcesLoader)
                }
            })
            // Run ESLint on save
            if (ctx.isDev && ctx.isClient) {
                /* config.module.rules.push({
                  enforce: 'pre',
                  test: /\.(js|vue)$/,
                  loader: 'eslint-loader',
                  exclude: /(node_modules)/
                }) */
            }
        }
    }
}
