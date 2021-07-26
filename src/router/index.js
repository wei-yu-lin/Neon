import {createRouter, createWebHashHistory} from 'vue-router'
import LoginForm from '@/views/LoginForm.vue'
import HomePage from '@/views/HomePage.vue'
import Profile from '@/components/MemberSystem/Profile.vue'
import CarouselPhoto from '@/components/CMS/Carousel/CarouselPhoto.vue'


const routes = [
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
    path: '/Management',
    name: 'Management',
    component: () => import('../views/Management.vue'),
    meta: { requireAuth: true },
    children: [
      {
        path: 'CMS/Photo/Manage',
        name: 'CarouselPhoto',
        component: CarouselPhoto,
        meta: { requireAuth: true }
      },
      {
        path: 'CMS/Photo/Add',
        name: 'AddPhoto',
        component: () => import('../components/CMS/Carousel/AddPhoto.vue'),
        meta: { requireAuth: true }
      },
      {
        path: 'profile',
        name: '個人資料',
        component: Profile
      },
    ]
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.requireAuth) {
    const info = VueCookies.get('login')
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

export default router;