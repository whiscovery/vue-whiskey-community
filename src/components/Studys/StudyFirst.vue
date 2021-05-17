<template>
<div>
<div class="row gx-2 mt-5" v-for="data, i in datas" :key="i">
  <div class="col-sm-3">
    <div class="hr-sect"><span class="badge bg-dark">제품 사진</span></div>
    <div class="wrapper">
      <img :src="data.사진" class="photo-img"></div>
  </div>
  <div class="col-sm-9">
    <div class="hr-sect"><span class="badge bg-dark">Offical Information</span></div>
    <div class="p-3 mt-3">
      <div class="info">
    <div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <span class="title">제품명</span><span class="desc">{{data.위스키}}</span> <span class="title ms-5">작성자</span><span class="desc">{{data.작성자}}</span></li>
        <li class="list-group-item"><span class="title">종류/지역</span> <span class="desc">{{data.구분}}/{{data.지역}}</span></li>
        <li class="list-group-item"><span class="title">테이스팅</span> <br /><span class="desc" v-html="data.테이스팅노트.replaceAll('\n','<br />')"></span></li>
        <li class="list-group-item"><span class="title">설명</span> <br /><span class="desc" v-html="data.설명.replaceAll('\n','<br />')"></span></li>
        <li class="list-group-item"><span class="title">기타지식</span><br /><span class="desc" v-html="data.코멘트.replaceAll('\n','<br />')"></span></li>
      </ul>
    </div>
</div>
      </div></div>
</div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'StudyFirst',
  data () {
    return {
      datas: [],
      임시배열: []
    }
  },
  async created () {
    const url = 'https://spreadsheets.google.com/feeds/list/1IO__IdrhBi6nmmrYxG0vWPOy8TO6g_2fBOPVoi5BttY/1/public/full?alt=json'
    axios.get(url)
      .then((result) => {
        const temp = result.data.feed.entry
        for (var i = 0; i < temp.length; i++) {
          var Object = {
            위스키: temp[i]['gsx$위스키'].$t,
            구분: temp[i]['gsx$구분'].$t,
            지역: temp[i]['gsx$지역'].$t,
            작성자: temp[i]['gsx$작성자'].$t,
            테이스팅노트: temp[i]['gsx$테이스팅노트'].$t,
            설명: temp[i]['gsx$설명'].$t,
            사진: temp[i]['gsx$사진'].$t,
            코멘트: temp[i]['gsx$코멘트'].$t
          }
          this.임시배열.push(Object)
        }
        this.datas = this.임시배열
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

<style>
.info{
  margin-top: 0;
  padding-top: 0;
  text-align: left;
}
.title{
  font-weight: 800;
  margin-right: 30px;
}
.desc{
  font-size: 14px;
}
.wrapper {
  padding: 35px 0px 60px 0px;
  margin: 0px auto;
}
.photo-img {
  width: 100%;
  margin: 0px auto;
}
</style>
