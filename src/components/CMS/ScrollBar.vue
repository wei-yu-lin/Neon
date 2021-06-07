<template>
  <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="position-sticky pt-3">
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle col-12" type="button" data-bs-toggle="collapse" data-bs-target="#CMS">CMS</button>
          <div id="CMS" class="collapse multi-collapse" >
            

          <div class="list-group" id="list-tab">
            <router-link class="list-group-item list-group-item-action text-center"  :to="{name: 'CarouselPhoto'}">輪播圖片管理</router-link>
            <a class="list-group-item list-group-item-action" id="list-profile-list"  href="#list-profile" role="tab" >Profile</a>
            <a class="list-group-item list-group-item-action" id="list-messages-list"  href="#list-messages" role="tab" >Messages</a>
            <a class="list-group-item list-group-item-action" id="list-settings-list"  href="#list-settings" role="tab" >Settings</a>
          </div>

          </div >  
        </div>

        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Saved reports</span>
          <a class="link-secondary" href="#">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file-text"></span>
              Current month
            </a>
          </li>
        </ul>
      </div>
    </nav> 
</template>


<style lang="scss" scoped>
  @import "@/assets/helpers/_dashboard.scss"
</style>
