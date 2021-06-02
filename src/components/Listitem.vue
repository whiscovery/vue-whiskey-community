<template>
<div class="card shadow-sm">
  <div class="box">
    <router-link class="text-link" :to="{ name: 'Detail', params: { postId: whiskey.id }}">
      <img :src="특이사항이미지" class="badge-img">
      <img :src="whiskey.이미지" class="thumbnail-whiskey"></router-link>
  </div>
  <div class="card-body">
    <p class="card-text text-truncate"><router-link class="text-link" :to="{ name: 'Detail', params: { postId: whiskey.id }}">{{whiskey.제품명}}</router-link></p>
    <div class="d-flex justify-content-between align-items-center">
      <small class="list-small">{{whiskey.종류}}</small>
    </div>
  </div>
</div>
</template>

<script>
import study1 from '@/assets/study1.png'
export default {
  name: 'Listitem',
  data () {
    return {
      특이사항이미지: ''
    }
  },
  mounted () {
    if (this.whiskey.특이사항 || this.whiskey.특이사항 !== '없음') {
      console.log('1')
      if (this.whiskey.특이사항 === '위스커버리 1기 스터디') {
        this.특이사항이미지 = study1
        console.log('2')
      }
    }
  },
  props: {
    whiskey: Object
  }

}
</script>

<style>
.box {
  position: relative;
}
.badge-img {
  width: 40px;
  position: absolute;
  top: 3px;
  left: 3px;
  opacity: 0.5; filter: alpha(opacity=50);
}
.thumbnail-whiskey{
  width: auto;
  height: 210px;
  object-fit: contain;
}
</style>
