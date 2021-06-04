<template>
<div class="row align-items-center">
  <div>
    <button @click="$emit('commentModalOpen', name)" class="btn btn-warning mb-2" type="button">코멘트 쓰기</button>
  </div>
    <div v-if="deleteOpen == true" class="speech-bubble md-3 mt-3">
    <form class="row row-cols-lg-auto g-3 align-items-center">
      <div class="col-sm-12">
        <div class="input-group">
          <input type="password" v-model="패스워드" class="form-control" id="패스워드" placeholder="패스워드">
        </div>
      </div>
      <div class="col-sm-12">
        <div class="input-group">
          <button @click.prevent="delComment(deleteId)" type="submit" class="btn btn-warning">삭제</button>
        </div>
      </div>
      <div class="col-sm-12">
        <div class="input-group">
          <button @click="deleteOpen=false" type="submit" class="btn btn-success">취소</button>
        </div>
      </div>
    </form>
  </div>
  <div class="wrapper" v-for="comment,i in comments" :key="i">
      <div v-if="deleteOpen == false" class="speech-bubble md-3 mt-3">
        <span class="badge bg-primary name">{{comment.이름}} </span><span class="comment-content"> "{{comment.내용}}" <small>({{comment.일시}} @ {{comment.장소}}에서)</small> </span>
        <!-- <svg class="svg-icon ms-4" width="18" viewBox="0 0 20 20">
          <path d="M18.303,4.742l-1.454-1.455c-0.171-0.171-0.475-0.171-0.646,0l-3.061,3.064H2.019c-0.251,0-0.457,0.205-0.457,0.456v9.578c0,0.251,0.206,0.456,0.457,0.456h13.683c0.252,0,0.457-0.205,0.457-0.456V7.533l2.144-2.146C18.481,5.208,18.483,4.917,18.303,4.742 M15.258,15.929H2.476V7.263h9.754L9.695,9.792c-0.057,0.057-0.101,0.13-0.119,0.212L9.18,11.36h-3.98c-0.251,0-0.457,0.205-0.457,0.456c0,0.253,0.205,0.456,0.457,0.456h4.336c0.023,0,0.899,0.02,1.498-0.127c0.312-0.077,0.55-0.137,0.55-0.137c0.08-0.018,0.155-0.059,0.212-0.118l3.463-3.443V15.929z M11.241,11.156l-1.078,0.267l0.267-1.076l6.097-6.091l0.808,0.808L11.241,11.156z"></path>
        </svg> -->
        <svg class="svg-icon ms-1" width="16" viewBox="0 0 20 20" @click.prevent="delCommentInit(comment.id)">
          <path d="M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306"></path>
        </svg>
      </div>
  </div>
</div>

</template>

<script>
// import axios from 'axios'
// import { baseurl } from '@/config/index'
// import { mapState, mapActions } from 'vuex'

export default {
  name: 'WhiskeyComment',
  data () {
    return {
      name: '',
      // comments: [],
      paramsid: this.$route.params.id,
      msg: '',
      deleteOpen: false,
      패스워드: '',
      deleteId: 0
    }
  },
  props: {
    comments: Array
  },
  computed: {
  },
  async created () {
    // this.fetchComment(this.id)
    // const url = baseurl + '/comment/' + this.id
    // axios.get(url)
    //   .then((res) => {
    //     this.comments = res.data
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
    // await this.$nextTick()
  },
  methods: {
    btnCommentModal () {
      this.$store.commit('COMMENTMODALOPEN')
    },
    delCommentInit (id) {
      this.deleteId = id
      this.deleteOpen = true
    },
    delComment (value) {
      const data = {
        id: value,
        패스워드: this.패스워드
      }
      // this.deleteComment(data)
      // .then(res => {
      //   alert('댓글이 삭제되었습니다.')
      // })
      // .catch(err => {
      //   console.log(err)
      // })
      if (confirm('삭제하겠습니까?')) {
        this.$emit('delete', data)
        this.deleteOpen = false
      } else {
        alert('취소하셨습니다')
      }
    }
  }
}
</script>

<style scope>
.wrapper{
    text-align: left;
    width: 100%;
}
.comment{
    margin: 0px auto;
}

.name{
    font-size: 18px;
}
.speech-bubble {
    position:relative;
    width:100%;
    padding: 15px 5px 15px 5px;
    background: #ecf0f1;
    border-radius: 10px;
}
.speech-bubble:after {
    border-top:15px solid #ecf0f1;;
    border-left: 15px solid transparent;
    border-right: 0px solid transparent;
    border-bottom: 0px solid transparent;
    content:"";
    position:absolute;
    top:10px;
    left:-15px;
}
.comment-content{
  font-size: 13px;
}
</style>
