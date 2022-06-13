import svgo from './svgoConfig.js';

export default {
    target: 'static',

    router: {
        base: '/helium/',
    },

    head: {
        title: 'Hélium',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
            { rel: 'mask-icon', href: '/safari-pinned-tab.ico', color: '#0000ff' },
            { rel: 'manifest', href: '/site.webmanifest' },
        ],
    },

    loading: { color: '#0000ff', height: '5px' },

    css: [{ src: '@/assets/scss/app.scss', lang: 'scss' }],

    plugins: [],

    components: true,

    buildModules: ['@nuxtjs/style-resources', '@nuxtjs/eslint-module', '@nuxtjs/stylelint-module'],

    modules: ['@nuxt/content', 'cookie-universal-nuxt'],

    content: {},

    styleResources: {
        scss: ['@/assets/scss/settings/*'],
    },

    eslint: {
        fix: true,
    },

    stylelint: {
        fix: true,
    },

    build: {
        extend(config) {
            config.module.rules.push({
                test: /\.vue$/,
                loader: 'vue-svg-inline-loader',
                options: {
                    inlineKeyword: 'inline',
                    inlineStrict: true,
                    spriteKeyword: 'sprite',
                    spriteStrict: true,
                    removeAttributes: ['alt', 'src', 'inline', 'tabindex'],
                    xhtml: false,
                    svgo,
                },
            });
        },
    },
};
