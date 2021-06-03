<template>
<div class="card shadow-sm">
  <div class="box">
    <router-link class="text-link" :to="{ name: 'Detail', params: { postId: whiskey.id }}">
      <!-- <img :src="특이사항이미지" class="badge-img"> -->
      <!-- <div class="badge-div-1"><span class="badge rounded-pill bg-warning mt-1" v-if="whiskey.특이사항 ? whiskey.특이사항.includes('위스커버리 1기 스터디') : false">1기 스터디</span><span class="badge rounded-pill bg-info mt-1" v-if="whiskey.특이사항 ? whiskey.특이사항.includes('22종 버번 테이스팅') : false">22종 버번 테이스팅</span></div> -->
      <div class="badge-div-1">
        <div v-for="특이사항,i in 특이사항들" :key="i">
          <span class="badge rounded-pill bg-info mt-1" v-if="whiskey.특이사항 ? whiskey.특이사항.includes(`${특이사항}`) : false">
            {{특이사항}}
          </span>
        </div>
      </div>
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
// import study1 from '@/assets/study1.png'
export default {
  name: 'Listitem',
  data () {
    return {
      특이사항임시: '',
      특이사항들: []
    }
  },
  mounted () {
      this.특이사항들 = this.whiskey.특이사항.split('/')
      for (var i = 0; i < this.특이사항들.length; i++) {
        if (this.특이사항들[i] === '없음') {
          this.특이사항들[i] = undefined
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
.badge-div-1 {
  width: 40px;
  position: absolute;
  top: 3px;
  left: 3px;
  opacity: 0.7; filter: alpha(opacity=50);
}
.badge-div-2 {
  width: 40px;
  position: absolute;
  top: 28px;
  left: 3px;
  opacity: 0.7; filter: alpha(opacity=50);
}
.thumbnail-whiskey{
  width: auto;
  height: 210px;
  object-fit: contain;
}
.span-1 {

}
</style>
