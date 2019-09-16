import Vue from 'vue';
import Router from 'vue-router';
import MainPage from './components/MainPage.vue';
import RegisterPage from './components/RegisterPage.vue';
import LoginPage from './components/LoginPage.vue';
import ProfilePage from './components/ProfilePage.vue';
import ResetPage from './components/ResetPage.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MainPage
    },
    {
      path: '/register',
      component: RegisterPage
    },
    {
      path: '/login',
      component: LoginPage
    },
    {
      path: '/profile',
      component: ProfilePage
    },
    {
      path: '/reset',
      component: ResetPage
    }
  ]
})

export default router;
