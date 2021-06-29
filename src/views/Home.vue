<template>
<div class="container">
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-2 mt-3 m-2">

<div class="col">
    <div class="col" v-if="whiskeyslist">
            <p class="title">새로 입력된 위스키</p>
            <div class="wrapper" v-for="whiskey, j in getWhiskeysList()" :key="j">
                <div class="row mb-1">
                        <div class="col-1">
                            <img :src="barrel" class="barrel-img m-1">
                        </div>
                        <div class="col-11 md-3 mt-2">
                             <button type="button" class="btn btn-outline-warning ms-3 text-truncate btn-sm" v-if="whiskey.id">
                                 <router-link class="text-link" :to="{ name: 'Detail', params: { postId: whiskey.id }}"><span class="whiskey">{{whiskey.제품명}}</span></router-link>
                             </button>
                             <button type="button" v-else>???</button>
                            <!-- <span class="comment-content"> "{{comment.내용}}" <small>({{comment.일시}} @ {{comment.장소}}에서)</small> </span> -->
                        </div>
                </div>
            </div>
    </div>
    <div class="col" v-else>값 불러 오는 중</div>
    <div class="col blank"></div>
    <div class="col" v-if="infolist">
            <p class="title">새로 입력된 정보</p>
            <div class="wrapper" v-for="info, j in getInfoList()" :key="j">
                <div class="row mb-1">
                        <div class="col-1">
                            <img :src="barrel" class="barrel-img m-1">
                        </div>
                        <div class="col-11 md-3 mt-2">
                             <button type="button" class="btn btn-outline-warning ms-3 text-truncate btn-sm" v-if="info.id">
                                 <router-link class="text-link" :to="{ name: 'InfoList'}"><span class="whiskey">{{info.제목}}</span></router-link>
                             </button>
                             <button type="button" v-else>???</button>
                            <!-- <span class="comment-content"> "{{comment.내용}}" <small>({{comment.일시}} @ {{comment.장소}}에서)</small> </span> -->
                        </div>
                </div>
            </div>
    </div>

    <div class="col" v-else>값 불러 오는 중</div>
</div>

    <div class="col" v-if="commentslist">
            <p class="title">최근 코멘트</p>
            <div class="wrapper" v-for="comment, i in getCommentsList()" :key="i">
                <div class="row">
                    <div class="col-2"><img :src="man1" width="100%" class="over-img">
                        <span class="badge bg-dark over-letter m-1">{{comment.이름}}</span>
                    </div>
                        <div class="col-10 speech-bubble md-3 mt-3 ms-2">
                            <router-link class="text-link" :to="{ name: 'Detail', params: { postId: comment.위스키번호 }}"><span class="badge bg-warning name">{{comment.위스키이름}} </span></router-link><span class="comment-content"><small> ({{comment.일시}} @ {{comment.장소}}에서)</small></span><br />
                            <span class="comment-content"> "{{comment.내용}}"  </span>
                        </div>
                </div>
            </div>
    </div>
    <div class="col" v-else>값 불러 오는 중</div>
</div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import man1 from '@/assets/people/man1.png'
import barrel from '@/assets/barrel.png'

export default {
  name: 'Home',
  data () {
      return {
          man1: man1,
          barrel: barrel
      }
  },
  created () {
    this.fetchWhiskeysList()
    this.fetchCommentList()
    this.fetchInfoList()
  },
  computed: {
    ...mapState(['whiskeyslist', 'commentslist', 'infolist'])
  },
  methods: {
      getCommentsList () {
         var tempcomments = [...this.commentslist]
         var temp = []
         var filtered = tempcomments.filter((element) => element.위스키번호 !== '0')
         filtered.sort((a, b) => {
             return a._id.substring(0, 8) > b._id.substring(0, 8) ? -1 : a._id.substring(0, 8) < b._id.substring(0, 8) ? 1 : 0
         })
         for (var i = 0; i < 10; i++) {
             if (filtered[i]) {
                temp.push(filtered[i])
             }
         }
         return temp
      },
      getWhiskeysList () {
         var tempwhiskeys = [...this.whiskeyslist]
         var temp = []
         var filtered = tempwhiskeys.filter((element) => element !== undefined)
         filtered.sort((a, b) => {
             return a.id > b.id ? -1 : a.id < b.id ? 1 : 0
         })
         for (var i = 0; i < 8; i++) {
             if (filtered[i]) {
                temp.push(filtered[i])
             }
         }
         return temp
      },
      getInfoList () {
         var tempinfos = [...this.infolist]
         var temp = []
         var filtered = tempinfos.filter((element) => element !== undefined)
         filtered.sort((a, b) => {
             return a.id > b.id ? -1 : a.id < b.id ? 1 : 0
         })
         for (var i = 0; i < 8; i++) {
             if (filtered[i]) {
                temp.push(filtered[i])
             }
         }
         return temp
      },
    ...mapActions(['fetchWhiskeysList', 'fetchCommentList', 'fetchInfoList'])
  }
}
</script>

<style scoped>
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
.title {
    font-family: 'Exo 2', sans-serif;
    font-weight: 700;
    font-size: 30px;
}
.name{
    font-size: 13px;
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
    font-family: 'Exo 2', sans-serif;
}
.barrel-img{
    width: 40px;
  position: relative;
  opacity: 0.0.8; filter: alpha(opacity=50);
}
.over-img{
    width: 50px;
  position: relative;
  top: 3px;
  left: 3px;
  opacity: 0.0.8; filter: alpha(opacity=50);
}
.over-letter{
    width: 40px;
  position: relative;
  top: 3px;
  left: 3px;
  opacity: 0.7; filter: alpha(opacity=50);
    font-family: 'Exo 2', sans-serif;
}
.whiskey{
    font-size: 13px;
    color: rgb(49, 37, 37);
    font-family: 'Exo 2', sans-serif;
}
.blank{
    height: 60px;
}
</style>
