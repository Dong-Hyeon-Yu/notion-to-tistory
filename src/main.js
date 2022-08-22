import { createApp } from 'vue'
import App from './App.vue'
import 'highlight.js/styles/stackoverflow-light.css'
import 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";

createApp(App)
    .use(hljsVuePlugin)
    .mount('#app')
