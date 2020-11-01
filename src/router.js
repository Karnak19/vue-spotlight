// import { ref } from 'vue';

import { createRouter, createWebHashHistory } from 'vue-router';

import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import User from './components/User';
import UserDashboard from './components/User/Dashboard';
import UserProfile from './components/User/Profile';

export const routes = [
  { name: 'home', path: '/', component: Home },
  {
    name: 'user',
    path: '/user',
    component: User,
    children: [
      { name: 'dashboard', path: 'dashboard', component: UserDashboard },
      { name: 'profile', path: 'profile', component: UserProfile },
    ],
  },
  { name: 'products', path: '/products', component: Products },
  { name: 'contact', path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
