import MainPage from './components/MainPage.vue';
import RegisterPage from './components/RegisterPage.vue';
import LoginPage from './components/LoginPage.vue';
import ProfilePage from './components/ProfilePage.vue';

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
  {
    path: '/profile',
    component: ProfilePage
  },
];
export default routes;
