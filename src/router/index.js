import {createRouter, createWebHistory} from 'vue-router'
import {getCookies} from "@/tools/cookies";
import LoginForm from "@/components/MemberSystem/LoginForm.vue";
import HomePage from '@/views/HomePage.vue'
import Profile from '@/components/MemberSystem/Profile.vue'
import CarouselPhoto from '@/components/CMS/Carousel/CarouselPhoto.vue'
import CartsMain from '@/components/Carts/CartsMain.vue'


const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/Carts/",
    name: "CartsMain",
    component: CartsMain,
  },
  {
    path: "/login",
    name: "LoginForm",
    component: LoginForm,
  },
  {
    path: "/Management",
    name: "Management",
    component: () => import("@/components/CMS/Management.vue"),
    meta: { requireAuth: true },
    children: [
      {
        path: "CMS/Photo/Manage",
        name: "CarouselPhoto",
        component: CarouselPhoto,
        meta: { requireAuth: true },
      },
      {
        path: "CMS/Photo/Add",
        name: "AddPhoto",
        component: () => import("../components/CMS/Carousel/AddPhoto.vue"),
        meta: { requireAuth: true },
      },
      {
        path: "profile",
        name: "個人資料",
        component: Profile,
      },
    ],
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.meta.requireAuth) {
    const info = getCookies("login");
    if (info) {
        next()
    } else {
        next({ name: 'LoginForm' })
      }
  } else {
    next()
  }
})

export default router;