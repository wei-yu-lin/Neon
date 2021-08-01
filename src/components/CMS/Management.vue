<template>
  <div class="wrapper">
    <nav
      id="sidebarMenu"
      class="col-lg-2 col-md-3 d-md-block bg-light sidebar collapse"
    >
      <div class="position-sticky pt-3">
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle col-12"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#CMS"
          >
            CMS
          </button>
          <div id="CMS" class="collapse multi-collapse">
            <div class="list-group">
              <router-link
                class="list-group-item list-group-item-action text-center"
                :to="{ name: 'AddPhoto' }"
              >
                <font-awesome-icon  icon="images"/> 新增輪播圖片
              </router-link>
              <router-link
                class="list-group-item list-group-item-action text-center"
                :to="{ name: 'CarouselPhoto' }"
                > <font-awesome-icon  icon="images" pulse/> 輪播圖片管理</router-link
              >
            </div>
          </div>
        </div>

        <h1
          class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
        >
          <span>其他</span>
          <a class="link-secondary" href="#">
            <span data-feather="plus-circle"></span>
          </a>
        </h1>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: '個人資料' }">
              <span data-feather="file-text"></span>
              Profile
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="col-lg-10 col-md-9 ms-sm-auto px-md-4">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/helpers/_dashboard.scss";
</style>
