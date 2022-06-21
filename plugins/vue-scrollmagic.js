import Vue from 'vue';
import VueScrollmagic from 'vue-scrollmagic';
Vue.use(VueScrollmagic, {
    globalSceneOptions: {
        triggerHook: 'onLeave',
        duration: '200%',
    },
});
