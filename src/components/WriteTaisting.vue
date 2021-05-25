<template>
<div>
   <h4 class="mt-3 mb-5">{{제품명}}이 어떠셨나요?</h4>
  <form class="taist-form">
  <div class="row mb-3">
    <label for="taistingbody" class="col-sm-3 col-form-label taisting-bold">바디감 <span class="badge bg-info">{{taistingbody}}</span></label>
    <div class="col-sm-9">
      <input type="range" class="form-range" min="0" max="100" step="5" v-model="taistingbody">
    </div>
    <div class="taisting-desc">- 입에 채워지는 바디감 혹은 충만함 (라이트, 미디엄, 풀바디)</div>
  </div>
  <div class="row mb-3">
    <label for="taisting달콤" class="col-sm-3 col-form-label taisting-bold">달콤함 <span class="badge bg-info">{{taisting달콤}}</span></label>
    <div class="col-sm-9">
      <input type="range" class="form-range" min="0" max="100" step="5" v-model="taisting달콤">
    </div>
    <div class="taisting-desc">- 초콜릿, 바닐라, 메이플, 쿠키, 케이크, 꿀, 크림, 카라멜, 풍선껌, 타르트, 과자점, 구운사과, 푸딩, 버터스카치</div>
  </div>
  <div class="row mb-3">
    <label for="taisting피트" class="col-sm-3 col-form-label taisting-bold">피트 <span class="badge bg-info">{{taisting피트}}</span></label>
    <div class="col-sm-9">
      <input type="range" class="form-range" min="0" max="100" step="5" v-model="taisting피트">
    </div>
    <div class="taisting-desc">- 모닥불, 태운 헤더, 페놀향, 톡 쏘는 듯한, 흙, 연기, 고기잡이 그물, 흙, 잔디, 훈제 청어</div>
  </div>
  <div class="row mb-3">
    <label for="taisting스파이스" class="col-sm-3 col-form-label taisting-bold">스파이스 <span class="badge bg-info">{{taisting스파이스}}</span></label>
    <div class="col-sm-9">
      <input type="range" class="form-range" min="0" max="100" step="5" v-model="taisting스파이스">
    </div>
    <div class="taisting-desc">- 얼얼함, 매운, 씁쓸한, 쓰라린, 월계수, 향나무, 계피, 정향, 생강, 육두구, 후추, 소나무, 타닌, 우디함</div>
  </div>
  <div class="row mb-3">
    <label for="taisting과일" class="col-sm-3 col-form-label taisting-bold">과일/꽃 <span class="badge bg-info">{{taisting과일}}</span></label>
    <div class="col-sm-9">
      <input type="range" class="form-range" min="0" max="100" step="5" v-model="taisting과일">
    </div>
    <div class="taisting-desc">- 시트러스(레몬, 라임, 오렌지, 감귤), 쥬시(베리, 체리, 복숭아, 바나나) 말린과일(무화과, 건포도, 대추야자), 꽃(아로마, 향수, 제비곷, 온실화초, 난 풀향, 나뭇잎, 수액, 건초, 헤더, 포레스트, 들판, 허브)</div>
  </div>
  <div class="row mb-3">
    <label for="taisting견과" class="col-sm-3 col-form-label taisting-bold">견과 <span class="badge bg-info">{{taisting견과}}</span></label>
    <div class="col-sm-9">
      <input type="range" class="form-range" min="0" max="100" step="5" v-model="taisting견과">
    </div>
    <div class="taisting-desc">- 아몬드, 헤이즐넛, 기름진 느낌, 호두, 버터, 과일 겁질의 떫은 맛</div>
  </div>
  <div class="row mb-3">
    <label for="taisting몰트" class="col-sm-3 col-form-label taisting-bold">몰트 <span class="badge bg-info">{{taisting몰트}}</span></label>
    <div class="col-sm-9">
      <input type="range" class="form-range" min="0" max="100" step="5" v-model="taisting몰트">
    </div>
    <div class="taisting-desc">- 보리, 시리얼, 비스킷, 곡물, 건조된 볏짚, 익힌 야채, 곡물 껍질, 구운 토피, 구운 커피, 감초, 빵, 이스트</div>
  </div>
  <div style="text-align: center">
  <button class="button-menu" type="submit" @click.prevent="btnOK">테이스팅하기</button><button type="submit" class="button-menu ms-3" @click="$emit('closeModal')">닫기</button>
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
.taisting-desc{
   font-size: 12px;
   color: #353d4d;
   padding-left: 20px;
}
.taisting-bold{
  font-weight: 700;
}
</style>
