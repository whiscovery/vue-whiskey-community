<template>
<div>
<transition name="contactModal">
  <div v-if="commentwriteModal" class="black-bg">
    <div class="white-bg">
      <WriteComment />
      <button type="submit" class="button-menu" @click="commentwriteModal=false">CLOSE</button>
      </div>
  </div>
</transition>
  <div class="container overflow-hidden">
      <!-- Modal -->

<!-- Modal End -->
    <!-- <h4>Detail</h4>
    <p>{{$route.params.id}}</p> -->
      <div class="row gx-2 mt-5">
        <div class="test col-sm-3">
          <div><WhiskeyPhoto /></div>
        </div>
        <div class="test col-sm-9">
          <div class="p-3 mt-3"><WhiskeyInfo /></div>
          <div class="p-3 mt-3 mb-5"><WhiskeyComment :whiskey="whiskey" @commentModalOpen="commentwriteModal = true; commentwhiskeyname = $event" /></div>
        </div>
      </div>
      <div class="row gx-2">
        <div class="test col-sm"><WhiskeyStatics /></div>
        <div class="test col-sm"></div>
        <div class="test col-sm"></div>
      </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import WhiskeyStatics from '@/components/WhiskeyStatics'
import WhiskeyPhoto from '@/components/WhiskeyPhoto'
import WhiskeyInfo from '@/components/WhiskeyInfo'
import WhiskeyComment from '@/components/WhiskeyComment'
import WriteComment from '@/components/WriteComment'
import axios from 'axios'

export default {
  name: 'List',
  data () {
    return {
      whiskey: {},
      commentwhiskeyname: null,
      commentwriteModal: false
    }
  },
  components: {
    WhiskeyPhoto: WhiskeyPhoto,
    WhiskeyStatics: WhiskeyStatics,
    WhiskeyInfo: WhiskeyInfo,
    WhiskeyComment: WhiskeyComment,
    WriteComment: WriteComment

  },
  // created () {
  //   // this.whiskey = this.whiskeys[parseInt(this.$route.params.id) - 1]
  // },,
  async created () {
    const url = 'http://localhost:4000/whiskey/' + this.$route.params.id
    axios.get(url)
      .then((res) => {
        this.whiskey = res.data
      })
      .then(() => {

      })
      .catch((err) => {
        console.log(err)
      })
    await this.$nextTick()
  }

}
</script>

<style scoped>
.black-bg {
  width : 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  position: fixed;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}
.title{
  font-family: 'Exo 2', sans-serif;
}
.white-bg {
  color: #000;
  top: 50%;
  left: 50%;
  width: 60%;
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  z-index: 3;
  font-weight: 800;
}
.white-bg .contact-us-title{
  width:100%;
  color: #fff;
  background: darkslateblue;
}
@media(max-width: 720px){
  .black-bg {
    width : 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    position: fixed;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }
  .title{
    font-family: 'Exo 2', sans-serif;
  }
  .white-bg {
    color: #000;
    top: 50%;
    left: 50%;
    width: 90%;
    background-color: #fff;
    border-radius: 8px;
    padding: 10px;
    z-index: 3;
    font-size: 14px;
  }
}
.contactModal-enter-from {
    opacity: 0;
}
.contactModal-enter-active {
    transition: all 1s;
}
.contactModal-enter-to{
    opacity: 1;
}
.contactModal-leave-from {
  opacity: 1;
}
.contactModal-leave-active {
  transition: all 1s;
}
.contactModal-leave-to{
  opacity: 0;
}
.form-input {
  width: 80%;
  height: 30px;
  margin: 5px;
}
.form-textarea {
  width: 80%;
  height: 100px;
  margin: 5px;
}
.blank {
  height: 50px;
}
.blank-small {
  height: 20px;
}
.blank-large {
  height: 200px;
}
</style>
