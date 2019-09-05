import MainPage from './components/MainPage.vue';
import RegisterPage from './components/RegisterPage.vue';

const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/register',
    component: RegisterPage
  },
];
export default routes;
