import MainPage from './components/MainPage.vue';
import RegisterPage from './components/RegisterPage.vue';
import LoginPage from './components/LoginPage.vue';

const routes = [
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
];
export default routes;
