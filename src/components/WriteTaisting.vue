<template>
<div>
   <h4 class="mt-3 mb-5">{{제품명}}이 어떠셨나요?</h4>
  <form class="taist-form">
  <div class="row mb-3">
    <label for="taistingbody" class="col-sm-3 col-form-label">바디감({{taistingbody}})</label>
    <div class="col-sm-9">
      <input type="range" class="form-range" min="0" max="100" step="5" v-model="taistingbody">
    </div>
  </div>
  <div class="row mb-3">
    <label for="taisting달콤" class="col-sm-3 col-form-label">달콤함({{taisting달콤}})</label>
    <div class="col-sm-9">
      <input type="range" class="form-range" min="0" max="100" step="5" v-model="taisting달콤">
    </div>
  </div>
  <div class="row mb-3">
    <label for="taisting피트" class="col-sm-3 col-form-label">피트({{taisting피트}})</label>
    <div class="col-sm-9">
      <input type="range" class="form-range" min="0" max="100" step="5" v-model="taisting피트">
    </div>
  </div>
  <div class="row mb-3">
    <label for="taisting스파이스" class="col-sm-3 col-form-label">스파이스({{taisting스파이스}})</label>
    <div class="col-sm-9">
      <input type="range" class="form-range" min="0" max="100" step="5" v-model="taisting스파이스">
    </div>
  </div>
  <div class="row mb-3">
    <label for="taisting과일" class="col-sm-3 col-form-label">과일/꽃({{taisting과일}})</label>
    <div class="col-sm-9">
      <input type="range" class="form-range" min="0" max="100" step="5" v-model="taisting과일">
    </div>
  </div>
  <div class="row mb-3">
    <label for="taisting견과" class="col-sm-3 col-form-label">견과({{taisting견과}})</label>
    <div class="col-sm-9">
      <input type="range" class="form-range" min="0" max="100" step="5" v-model="taisting견과">
    </div>
  </div>
  <div class="row mb-3">
    <label for="taisting몰트" class="col-sm-3 col-form-label">몰트({{taisting몰트}})</label>
    <div class="col-sm-9">
      <input type="range" class="form-range" min="0" max="100" step="5" v-model="taisting몰트">
    </div>
  </div>
  <div style="text-align: center">
  <button class="button-menu" type="submit" @click="btnOK">테이스팅하기</button><button type="submit" class="button-menu ms-3" @click="$emit('closeModal')">닫기</button>
  </div>
    </form>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'WriteTaisting',
  data () {
    return {
      taistingbody: 0,
      taisting달콤: 0,
      taisting피트: 0,
      taisting스파이스: 0,
      taisting과일: 0,
      taisting견과: 0,
      taisting몰트: 0
    }
  },
  props: {
    id: Number,
    제품명: String
  },
  methods: {
    btnOK () {
      const { taistingbody, taisting달콤, taisting피트, taisting스파이스, taisting과일, taisting견과, taisting몰트 } = this
      const data = {
        whiskeyid: this.id,
        테이스팅점수: [taistingbody, taisting달콤, taisting피트, taisting스파이스, taisting과일, taisting견과, taisting몰트]
      }
      axios.post('http://localhost:4000/writepost/taisting', data)
        .then((res) => {
          alert('테이스팅 점수가 저장되었습니다')
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
.taist-form{
  text-align: left;
  font-weight: 300;
}
.tooltip {
width: 200px;
background: #59c7f9;
color: #ffffff;
text-align: center;
padding: 10px 20px 10px 20px;
border-radius: 10px;
top: calc(100% + 11px);
left: 50%;
transform: translate-x(-50%)
 }
</style>
