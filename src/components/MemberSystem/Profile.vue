<template>
  <div class="container">
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">姓名</span>
      <input type="text" class="form-control" aria-label="使用者名稱" :value="this.$store.state.user.username">
    </div>

    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Recipient's username" aria-label="使用者帳號">
      <span class="input-group-text" id="basic-addon2">@gmail.com</span>
    </div>

    <label for="basic-url" class="form-label">Your vanity URL</label>
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
      <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text">$</span>
      <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
      <span class="input-group-text">.00</span>
    </div>

    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Username" aria-label="Username">
      <span class="input-group-text">@</span>
      <input type="text" class="form-control" placeholder="Server" aria-label="Server">
    </div>

    <div class="input-group">
      <span class="input-group-text">With textarea</span>
      <textarea class="form-control" aria-label="With textarea"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  props: {
  },
  methods: {
  },
  computed:{
    SpliceId:{
      get(){
        const db_userid = this.$store.state.user.user_id;
        console.log(db_userid.splice());

      }
    }
  }
}
</script>