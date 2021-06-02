<template>
<div>
  <div class="wrapper" v-if="modistate == false">
    <div class="photo" @dblclick="modistate = true">
      <img :src="photo" class="photo-img">
    </div>
  </div>
  <div class="wrapper" v-if="modistate == true">
    <div class="photo">
      <UploadPhoto />
      <button @click="modiPhoto" class="btn btn-warning mt-3 modi-photo">확인</button>
    </div>
  </div>
</div>
</template>

<script>
// import axios from 'axios'
import UploadPhoto from '@/components/UploadPhoto'
export default {
  name: 'WhiskeyPhoto',
  data () {
    return {
      modistate: false
    }
  },
  props: {
    photo: String
  },
  components: {
    UploadPhoto: UploadPhoto
  },
  methods: {
    modiPhoto () {
      this.modistate = false
    }
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
.modi-photo {
  display: block;
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
  .modi-photo {
    display: block;
    margin: 0px auto;
  }
}
</style>
