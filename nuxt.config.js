module.exports = {
    mode: 'universal',

    /*
    ** Headers of the page
    */
    head: {
        title: 'Nuxt web',
        meta: [
            { charset: 'utf-8' },
            { 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' },
            { name: 'renderer', content: 'webkit' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
            { name: 'apple-mobile-web-app-capable', content: 'yes' },
            { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
            { name: 'format-detection', content: 'telephone=no' },
            { 'http-equiv': 'pragma', content: 'no-cache' },
            { name: 'msapplication-tap-highlight', content: 'no' },
            { name: 'author', content: 'author' },
            { name: 'keywords', content: 'keywords', hid: "keywords"},
            { name: 'description', content: 'description', hid: "description"},
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', type: 'text/css', href: '/css/reset.css'},
            { rel: 'stylesheet', type: 'text/css', href: '/css/animate.min.css'},
        ],
        script: [
            {src:'/js/jquery-2.1.4.min.js'},
            {src:'/js/flexible.js'},
            {src:'/js/hammer.js'},
        ],
    },

    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },

    /*
    ** Global CSS
    */
    css: [
        'element-ui/lib/theme-chalk/index.css',
        '@/assets/less/element-ui.less',
        '@/assets/less/main.less'
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        {src:'@/plugins/element-ui', ssr:false },
        {src:'@/plugins/api', ssr:false },
        {src:'@/plugins/loading', ssr:false },
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
        transpile: [/^element-ui/],
        vendor: ['element-ui'],

        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
            const sassResourcesLoader = {
                loader: 'sass-resources-loader',
                options: {
                    resources: ['@/assets/less/element-ui.less','@/assets/less/main.less']
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
            /* if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                  enforce: 'pre',
                  test: /\.(js|vue)$/,
                  loader: 'eslint-loader',
                  exclude: /(node_modules)/
                })
            } */
        }
    }
}
