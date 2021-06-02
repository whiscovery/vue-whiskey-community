<template>
<div>
<transition name="contactModal">
  <div v-if="commentwriteModal" class="black-bg">
    <div class="white-bg">
      <WriteComment :whiskeyid="whiskey.id" :whiskeyname="whiskey.제품명" @submit="onCommentSubmit" @closeModal="commentwriteModal=false" />
      </div>
  </div>
</transition>

<transition name="contactModal">
  <div v-if="taistwriteModal" class="black-bg">
    <div class="white-bg">
      <WriteTaisting :id="whiskey.id" :제품명="whiskey.제품명" @closeModal="taistwriteModal=false" />
      </div>
  </div>
</transition>
<transition name="taistdetailModal">
  <div v-if="taistdetailModal" class="black-bg">
    <div class="white-bg">
      <TaistDetail :whiskey="whiskey" @closeModal="taistdetailModal=false" />
      </div>
  </div>
</transition>
  <div class="container overflow-hidden">
      <!-- Modal -->

<!-- Modal End -->
    <!-- <h4>Detail</h4>
    <p>{{$route.params.id}}</p> -->
      <div class="row gx-2 mt-5 mb-5" v-if="whiskey">
        <div class="test col-sm-3">
          <div class="hr-sect"><span class="badge bg-dark">제품 사진</span></div>
          <div><WhiskeyPhoto :photo="whiskey.이미지"/></div>
          <div class="boxDiv">
            <div class="hr-sect"><span class="badge bg-dark">사용자 테이스팅</span></div>
            <div><WhiskeyStatics v-if="whiskey.테이스팅점수 != undefined" :테이스팅점수="calData()" /></div>  <!--undefied 일 때 오류를 잡기 위해 v-if-->
            <button @click="taistdetailModal=true" class="btn btn-info btn-sm mt-3">자세히보기</button>
            <button @click="taistwriteModal=true" class="btn btn-warning btn-sm mt-3 ms-2">맛평가하기</button>
          </div>
        </div>
        <div class="test col-sm-9">
          <div class="hr-sect"><span class="badge bg-dark">Offical Information</span></div>
          <div class="p-3 mt-3"><WhiskeyInfo :whiskey="whiskey" /></div>
          <!-- <div  class="hr-sect">코멘트</div> -->
          <div class="hr-sect"><span class="badge bg-dark">맛본자의 코멘트</span></div>
          <div class="p-3 mb-5">
            <WhiskeyComment v-if="comments" @delete="deleteComment" :comments="comments" @commentModalOpen="commentwriteModal = true; commentwhiskeyname = $event" />
            <p v-else>코멘트 불러오는 중</p>
            </div>
        </div>
      </div>
      <div v-else>게시물 불러오는 중</div>
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
import WriteTaisting from '@/components/WriteTaisting'
import TaistDetail from '@/components/TaistDetail'
// import axios from 'axios'
// import { baseurl } from '@/config/index'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'List',
  data () {
    return {
      commentwhiskeyname: null,
      commentwriteModal: false,
      taistwriteModal: false,
      taistdetailModal: false
    }
  },
  components: {
    WhiskeyPhoto: WhiskeyPhoto,
    WhiskeyStatics: WhiskeyStatics,
    WhiskeyInfo: WhiskeyInfo,
    WhiskeyComment: WhiskeyComment,
    WriteComment: WriteComment,
    WriteTaisting: WriteTaisting,
    TaistDetail: TaistDetail
  },
  props: {
    postId: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState(['whiskey', 'comments'])
  },
  created () {
    this.fetchWhiskey(this.postId)
    .catch(err => {
      alert(err.response.data.msg)
      this.$router.back()
    })
    this.fetchComment(this.postId)
    // const url = baseurl + '/whiskey/' + this.$route.params.id
    // axios.get(url)
    //   .then((res) => {
    //     this.whiskey = res.data
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
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
    deleteComment (value) {
      this.deleteComment(value)
      .then(res => {
        alert('댓글이 삭제되었습니다.')
      })
      .catch(err => {
        console.log(err)
      })
    },
    calData () {
      var tempdata = this.whiskey.테이스팅점수
      var mapdata = []
      var a = 0; var b = 0; var c = 0; var d = 0; var e = 0; var f = 0; var g = 0
      for (var i = 0; i < this.whiskey.테이스팅점수.length; i++) {
        a = a + parseInt(this.whiskey.테이스팅점수[i][0])
        b = b + parseInt(this.whiskey.테이스팅점수[i][1])
        c = c + parseInt(this.whiskey.테이스팅점수[i][2])
        d = d + parseInt(this.whiskey.테이스팅점수[i][3])
        e = e + parseInt(this.whiskey.테이스팅점수[i][4])
        f = f + parseInt(this.whiskey.테이스팅점수[i][5])
        g = g + parseInt(this.whiskey.테이스팅점수[i][6])
      }

      tempdata = [a, b, c, d, e, f, g]
      mapdata = tempdata.map(x => x / this.whiskey.테이스팅점수.length)

      return mapdata
    },
    ...mapActions(['fetchWhiskey', 'fetchComment', 'writeComment', 'deleteComment'])
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
.boxDiv {
  padding: 15px 5px 15px 5px;
  height: fit-content;
  background: #ffffff;
  /* background: -webkit-linear-gradient(135deg, #fffcdc, #d9a7c7);  /* Chrome 10-25, Safari 5.1-6 */
  /* background: linear-gradient(135deg, #fffcdc, #d9a7c7); W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.301);
  border-radius: 5px; /* 5px rounded corners */
}
</style>
