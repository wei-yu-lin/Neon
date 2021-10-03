import { createRouter, createWebHistory } from "vue-router";
import { getCookies } from "@/tools/cookies";
import LoginForm from "@/components/MemberSystem/LoginForm.vue";
import Profile from "@/views/Profile.vue";
import CarouselPhoto from "@/views/CMS//CarouselPhoto.vue";
import CartsMain from "@/views/Carts/CartsMain.vue";

let HomePage = {
  path: "/",
  name: "HomePage",
  redirect: "/Accommodation",
  component: () => import("@/layout/client.vue"),
  children: [
    {
      path: "/Accommodation",
      name: "Accommodation",
      component: () => import("@/views/Accommodation/Accommodation.vue"),
    },
    {
      path: "/Carts/:Zone/:id",
      name: "CartsMain",
      component: CartsMain,
      props: (route) => ({
        hotelValue: route.params.id,
      }),
    },
  ],
};

let Admin = {
  path: "/Admin",
  name: "Admin",
  component: () => import("@/layout/admin.vue"),
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
      component: () => import("../views/CMS//AddPhoto.vue"),
      meta: { requireAuth: true },
    },
    {
      path: "profile",
      name: "個人資料",
      component: Profile,
    },
  ],
};

const routes = [
  HomePage,
  Admin,
  {
    path: "/login",
    name: "LoginForm",
    component: LoginForm,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.meta.requireAuth) {
    const info = getCookies("login");
    if (info) {
      next();
    } else {
      next({ name: "LoginForm" });
    }
  } else {
    next();
  }
});

export default router;
