import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import FilesView from './views/FilesView.vue'
import EditorView from './views/EditorView.vue'

import './styles/globalstyle.css'
import './styles/icons.css'
import './styles/scroll.css'

const routes = [
  {
    path: '/',
    name: 'files',
    component: FilesView
  },
  {
    path: '/editor',
    name: 'editor',
    component: EditorView
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});


createApp(App).use(router).mount('#app')

