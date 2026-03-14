import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import Instruction from './pages/Instruction.vue';
import Portfolio from './pages/Portfolio.vue';
import Teams from './pages/Teams.vue';
import PreviousWorks from './pages/PreviousWorks.vue';
import Contacts from './pages/Contacts.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/instruction', name: 'Instruction', component: Instruction },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio },
  { path: '/teams', name: 'Teams', component: Teams },
  { path: '/previous-works', name: 'PreviousWorks', component: PreviousWorks },
  { path: '/contacts', name: 'Contacts', component: Contacts },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
