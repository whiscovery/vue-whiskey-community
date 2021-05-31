<template>
  <div class="wrapper">
    <div class="photo">
      <img :src="image" class="photo-img">
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'WhiskeyPhoto',
  // props: {
  //   whiskey: Object
  // },
  data () {
    return {
      image: ''
    }
  },
  async created () {
    const url = '/whiskey/' + this.$route.params.id
    axios.get(url)
      .then((res) => {
        this.image = res.data.이미지
      })
      .catch((err) => {
        console.log(err)
      })
    await this.$nextTick()
  }

}
</script>

<style scoped>
.wrapper {
  padding: 35px 0px 60px 0px;
  margin: 0px auto;
}
.photo-img {
  width: 100%;
  margin: 0px auto;
}
@media(max-width: 720px){
  .wrapper {
  padding: 35px 0px 60px 0px;
  margin: 0px auto;
}
.photo-img {
  width: 80%;
  margin: 0px auto;
}
}
</style>
