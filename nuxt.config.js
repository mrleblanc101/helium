import svgo from './svgoConfig.js';

export default {
    target: 'static',

    router: {
        base: '/helium/',
    },

    head: {
        titleTemplate: (titleChunk) => {
            return titleChunk ? `${titleChunk} | Agence Hélium` : 'Agence Hélium';
        },
        htmlAttrs: {
            lang: 'fr',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
            { name: 'theme-color', content: '#2400FF' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
            { rel: 'icon', type: 'image/svg+xml', href: 'favicon.svg' },
            { rel: 'apple-touch-icon', href: 'apple-touch-icon.png' },
            { rel: 'mask-icon', href: 'safari-pinned-tab.ico', color: '#2400FF' },
            { rel: 'manifest', href: 'site.webmanifest' },
        ],
    },

    loading: { color: '#2400FF', height: '5px' },

    css: [{ src: '@/assets/scss/app.scss', lang: 'scss' }],

    plugins: [
        { src: '@/plugins/vue-marquee-text-component.js', mode: 'client' },
        { src: '@/plugins/vue-typer.js', mode: 'client' },
        { src: '@/plugins/vue-awesome-swiper.js', mode: 'client' },
    ],

    components: true,

    buildModules: ['@nuxtjs/style-resources', '@nuxtjs/eslint-module', '@nuxtjs/stylelint-module'],

    modules: ['@nuxtjs/svg', '@nuxt/content', 'cookie-universal-nuxt'],

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
