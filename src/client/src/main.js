import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import store from '@/store';
import router from '@/router';
import { addComponent } from './fonteawesome.js';

const app = createApp(App).use(store).use(router);
addComponent(app);
app.mount('#app');
