import MainPage from './components/MainPage.vue';
import RegisterPage from './components/RegisterPage.vue';
import LoginPage from './components/LoginPage.vue';
import ProfilePage from './components/ProfilePage.vue';
import ResetPage from './components/ResetPage.vue';

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
  {
    path: '/reset',
    component: ResetPage
  }
];
export default routes;
