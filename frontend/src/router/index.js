import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AdminHomeView from '@/views/AdminHomeView.vue'
import AppointmentsView from '@/views/AppointmentsView.vue'
import DoctorsView from '@/views/DoctorsView.vue'
import PatientsView from '@/views/PatientsView.vue'
import UsersView from '@/views/UsersView.vue'
import StaffHomeView from '@/views/StaffHomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminHomeView
    },
    {
      path: '/appointments',
      name: 'appointments',
      component: AppointmentsView
    },
    {
      path: '/doctors',
      name: 'doctors',
      component: DoctorsView
    },
    {
      path: '/patients',
      name: 'patients',
      component: PatientsView
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView
    },
    {
      path: '/staff',
      name: 'staff',
      component: StaffHomeView
    }
  ]
})

export default router
