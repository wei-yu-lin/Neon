import Vue from 'vue'
import VueRouter from 'vue-router'
import Cookies from 'vue-cookies'
import LoginForm from '@/components/MemberSystem/LoginForm.vue'
import Profile from '@/components/MemberSystem/Profile.vue'
import HomePage from '@/views/HomePage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/login',
    name: 'LoginForm',
    component: LoginForm
  },
  {
    path: '/login/profile',
    name: '個人資料',
    component: Profile
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { requireAuth: true }
  }
]


const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.requireAuth) {
    const info = Cookies.get('login')
    if (info) {
      const token = info.token
      // 如果token不為空，且確實有這個欄位則讓路由變更
      if (token.length > 0 || token === undefined) {
        next()
      } else {
        // 未通過則導回login頁面
        next({ name: 'LoginForm' })
      }
    } else {
      next({ name: 'LoginForm' })
    }
  } else {
    next()
  }
})

export default router
