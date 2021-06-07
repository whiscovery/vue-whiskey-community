<template>
<div>
  <div class="wrapper" v-if="modistate == false">
    <div class="photo" @dblclick="modistate = true">
      <img :src="photo" class="photo-img">
    </div>
  </div>
  <div class="wrapper" v-if="modistate == true">
    <div class="photo">
      <UploadPhoto @getImageURL="uploadPhoto" />
      <button @click="modiPhoto" class="btn btn-warning mt-3 modi-photo">확인</button>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import { baseurl } from '@/config/index'
import UploadPhoto from '@/components/UploadPhoto'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'WhiskeyPhoto',
  data () {
    return {
      modistate: false
    }
  },
  props: {
    photo: String,
    id: Number
  },
  components: {
    UploadPhoto: UploadPhoto
  },
  computed: {
    ...mapState(['whiskey'])
  },
  methods: {
    modiPhoto () {
      this.modistate = false
    },
    uploadPhoto (value) {
      axios.post(baseurl + '/editpost', {
          id: this.id,
          이미지: value,
          패스워드: 'wkftodruTekwjdwlsdnr'
        })
        .then((res) => {
          alert('수정되었습니다')
          this.fetchWhiskey(this.id)
          // this.$router.push({
          //   name: 'Detail',
          //   params: { postId: parseInt(this.id) }
          // }).catch(() => {})
        })
        .catch((err) => {
          // alert('패스워드가 맞지 않습니다')
          console.log(err)
        })
    },
    ...mapActions(['fetchWhiskey'])
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
