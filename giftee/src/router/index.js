import { createRouter, createWebHistory } from 'vue-router'
import ItemsList from '../views/ItemsList.vue';
import GiftForm from '../views/GiftForm.vue';
import Wishlist from '../views/Wishlist.vue';
import WishlistShare from '../views/WishlistShare.vue';
import LandingPage from '../views/LandingPage.vue';

const routes = [
  {
    path: '/auth',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/:id/share',
    name: 'WishlistShare',
    component: WishlistShare
  },
  {
    path: '/:id',
    name: 'Home',
    component: Wishlist,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/all-items/:id',
    name: 'Items',
    component: ItemsList,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/add-item',
    name: 'Add',
    component: GiftForm,
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("isLoggedIn")==="false") {
      next({ name: 'LandingPage' })
    } else {
      next() 
    }
  } else {
    next()
  }
})


export default router
