<template>
  <div class="wrapper">
    <div class="photo">
      <img :src="photo" class="photo-img">
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'WhiskeyPhoto',
  props: {
    photo: String
  }
}
</script>

<style scoped>
.wrapper {
  padding: 35px 0px 60px 0px;
  margin: 0px auto;
}
.photo {
  display: block;
  margin: 0px auto;
}
.photo-img {
  display: block;
  width: 100%;
  margin: 0px auto;
}
@media(max-width: 720px){
.wrapper {
  padding: 35px 0px 60px 0px;
  margin: 0px auto;
}
.photo {
  display: block;
  margin: 0px auto;
}
.photo-img {
  width: 60%;
  display: block;
  margin: 0px auto;
}
}
</style>
