import Vue from 'vue';
import Router from 'vue-router';
import store from './store'
import MainPage from './components/MainPage.vue';
import RegisterPage from './components/RegisterPage.vue';
import LoginPage from './components/LoginPage.vue';
import ProfilePage from './components/ProfilePage.vue';
import Dashboard from './components/Dashboard.vue';
import ResetPage from './components/ResetPage.vue';

Vue.use(Router);

const ifNotLoggedIn = (to, from, next) => {
  if (!store.getters.isLoggedIn) {
    next()
    return
  }
  next('/')
}

const ifLoggedIn = (to, from, next) => {
  if (store.getters.isLoggedIn) {
    next()
    return
  }
  next('/login')
}

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MainPage
    },
    {
      path: '/register',
      component: RegisterPage,
      beforeEnter: ifNotLoggedIn
    },
    {
      path: '/login',
      component: LoginPage,
      name: 'login',
      beforeEnter: ifNotLoggedIn
    },
    {
      path: '/profile',
      component: ProfilePage,
      name: 'profile',
      beforeEnter: ifLoggedIn
    },
    {
      path: '/reset',
      component: ResetPage
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   // false by default on the store.
//   if (to.name !== 'login') {
//     if(store.getters['isLoggedIn']) {
//       next();
//     } else {
//       next('/login');
//     }
//   }
//   next();
// })

export default router;
