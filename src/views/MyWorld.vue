<template>
  <div>
    <transition name="myModal">
    <div v-if="commentwriteModal" class="black-bg">
        <div class="white-bg">
        <WriteMyRecord :email="user.email" :nick="user.nick" @submit="onCommentSubmit" @closeModal="commentwriteModal=false" />
        </div>
    </div>
    </transition>

      <h2 class="mt-5"> {{user.nick}}'s World </h2>
      <div class="container mt-3">
        <div class="row">
            <!-- <div class="col-sm-2 text-left">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><button>프로필</button></li>
                    <li class="list-group-item"><button @click="getRecord">음주 기록</button></li>
                </ul>
            </div> -->
            <div class="col-sm-12">
              <MyRecord @commentModalOpen="commentwriteModal = true;" />
            </div>
        </div>
        </div>
  </div>
</template>

<script>
// import axios from 'axios'
import WriteMyRecord from '@/components/WriteMyRecord'
import MyRecord from '@/components/MyRecord'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MyWorld',
  components: {
    WriteMyRecord: WriteMyRecord,
    MyRecord: MyRecord
  },
  data () {
    return {
      comments: [],
      commentwriteModal: false
    }
  },
  computed: {
    ...mapGetters(['user'])
    // ...mapState(['myrecords'])
  },
  created () {
    // this.fetchMyRecords(this.user.email)
    this.$store.dispatch('getProfile')
  },
  methods: {
    onCommentSubmit (inputComment) {
      if (confirm('댓글 작성하시겠습니까')) {
        this.writeComment(inputComment)
        .then(() => {
          alert('댓글이 작성되었습니다')
          this.commentwriteModal = false
        })
        .catch(err => {
          alert(err.response.data.msg)
        })
      }
    },
    ...mapActions(['writeComment'])
    // ...mapActions(['fetchMyRecords'])
  }
}
</script>

<style scoped>
.button-write{
    text-align: right;
}
.table-text{
    font-size: 13px;
    text-align: left;
}
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
  top: 0;
  left: 0;
}
.title{
  font-family: 'Exo 2', sans-serif;
}
.white-bg {
  color: #000;
  top: 50%;
  left: 50%;
  width: 60%;
  height: 100%;
  overflow: scroll;
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
    margin: 0px;
    top: 50%;
    left: 50%;
    width: 100%;
    background-color: #fff;
    border-radius: 8px;
    z-index: 3;
    font-size: 14px;
  }
}
</style>
