module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        titleTemplate: '%s - YourShoeSize.com',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'Nuxt.js project'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    /*
    ** Customize the progress bar color
    */
    loading: {color: '#3B8070'},
    /*
    ** Build configuration
    */
    build: {
        /*
        ** Run ESLint on save
        */
        extend(config, {isDev, isClient}) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    },
    modules: [
        // Simple usage
        'nuxt-buefy'
    ],
    plugins: [
        {src: '~plugins/component.js', ssr: true},
        {src: '~plugins/component_font.js', ssr: false}
    ],
    css: [
        'buefy/lib/buefy.css',
        '@/assets/css/_app.scss',
        '@/assets/css/main.css',
        'flag-icon-css/css/flag-icon.css'
    ]
}