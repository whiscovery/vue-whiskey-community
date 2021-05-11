<template>
<div class="info">
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><span class="title">제품명</span> <span class="desc">{{whiskey.제품명}}</span></li>
    <li class="list-group-item"><span class="title">종류/도수</span> <span class="desc">{{whiskey.종류}} / {{whiskey.도수}}%</span></li>
    <li class="list-group-item"><span class="title">가격대</span> <span class="desc">{{whiskey.가격대}}</span></li>
    <li class="list-group-item"><span class="title">테이스팅</span> <br /><span class="desc" v-html="whiskey.테이스팅.replaceAll('\n','<br />')"></span></li>
    <li class="list-group-item"><span class="title">설명</span> <br /><span class="desc" v-html="whiskey.설명.replaceAll('\n','<br />')"></span></li>
    <li class="list-group-item"><span class="title">기타지식</span><br /><span class="desc" v-html="whiskey.기타지식.replaceAll('\n','<br />')"></span></li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'WhiskeyInfo',
  props: {
    whiskey: Object
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
</style>
