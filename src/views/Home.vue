<template>
<div class="div2">
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-2 mt-3 m-2">
    <div class="col">
        <div class="card shadow-sm">
        <div class="card-body">
                등록 위스키(총 {{whiskeyslist.length}}개)
                <ul v-for="whiskey, i in getWhiskeysList()" :key="i">
                    <li>{{whiskey.제품명}}</li>
                </ul>
        </div>
        </div>
    </div>
    <div class="col">
            <div class="wrapper" v-for="comment, i in getCommentsList()" :key="i">
                <div class="row">
                    <div class="col-md-2"><img :src="man1" width="100%" class="over-img">
                        <span class="badge bg-dark over-letter">{{comment.이름}}</span>
                    </div>
                        <div class="col-md-10 speech-bubble md-3 mt-3">
                            <span class="badge bg-primary name">{{comment.위스키이름}} </span>
                            <span class="comment-content"> "{{comment.내용}}" <small>({{comment.일시}} @ {{comment.장소}}에서)</small> </span>
                        </div>
                </div>
            </div>
    </div>
</div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import man1 from '@/assets/people/man1.png'

export default {
  name: 'Home',
  data () {
      return {
          man1: man1
      }
  },
  created () {
    this.fetchWhiskeysList()
    this.fetchCommentList()
  },
  computed: {
    ...mapState(['whiskeyslist', 'commentslist'])
  },
  methods: {
      getCommentsList () {
         var tempcomments = [...this.commentslist]
         var temp = []
         var filtered = tempcomments.filter((element) => element.위스키번호 !== '0')
         filtered.sort((a, b) => {
             return a._id > b._id ? 1 : a._id < b._id ? -1 : 0
         })
         for (var i = 0; i < 10; i++) {
            temp.push(filtered[i])
         }
         return temp
      },
      getWhiskeysList () {
         var filtered = [...this.whiskeyslist]
         var temp = []
         filtered.sort((a, b) => {
             return a._id > b._id ? -1 : a._id < b._id ? 1 : 0
         })
         for (var i = 0; i < 10; i++) {
            temp.push(filtered[i])
         }
         return temp
      },
    ...mapActions(['fetchWhiskeysList', 'fetchCommentList'])
  }
}
</script>

<style>
/* .div2 {
    background: url('https://i.imgur.com/fIphHX5.png');
    background-size: 100% 100%;
    background-position: center;
    opacity: 0.3;
} */
.recentlist {
    text-align: left;

}
.wrapper{
    text-align: left;
}
.comment{
    margin: 0px auto;
}

.name{
    font-size: 18px;
}
.speech-bubble {
    position:relative;
    width:80%;
    padding: 15px 5px 15px 20px;
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
.over-img{
    width: 40px;
  position: absolute;
  top: 3px;
  left: 3px;
  opacity: 0.5; filter: alpha(opacity=50);
}
.over-letter{
    width: 40px;
  position: absolute;
  top: 3px;
  left: 3px;
  opacity: 0.7; filter: alpha(opacity=50);
}
</style>
