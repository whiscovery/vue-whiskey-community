<template>
<div class="container mt-5">
  <h3> 위스키 입력 </h3>
  <form class="row g-3 mt-3">
    <div class="col-md-5 form-floating mb-3">
      <input type="text" v-model="name" class="form-control" id="name" placeholder="위스키 제품명">
      <label for="name">제품명(영문)</label>
    </div>
    <div class="col-md-3 form-floating mb-3">
      <select v-model="category" id="category" class="form-select">
        <option>스카치 위스키</option>
        <option>버번 위스키</option>
        <option>레이 위스키</option>
      </select>
      <label for="category">종류</label>
    </div>
    <div class="col-md-2 form-floating mb-3">
      <input type="text" v-model="degree" class="form-control" id="degree" placeholder="name@example.com">
      <label for="degree">도수</label>
    </div>
    <div class="col-md-2 form-floating mb-3">
      <input type="text" v-model="price" class="form-control" id="price" placeholder="name@example.com">
      <label for="price">가격대</label>
    </div>
      <div class="col-md-5">
        <div class="text-center">
          <img v-if="imgfile" :src="imgfile" class="no-img">
          <img v-else src="http://dy.gnch.or.kr/img/no-image.jpg" class="no-img">
        </div>
        <div class="col-md-12 form-floating mb-3">
          <input @change="handleImageUpload" type="file">
          <!-- <input type="text" v-model="image" class="form-control" id="image" placeholder="name@example.com">
          <label for="image">이미지 URL</label> -->
        </div>
      </div>
      <div class="col-md-7">
      <div class="form-floating">
        <textarea v-model="tasting" class="form-control" placeholder="Leave a comment here" id="tasting" style="width: 100%; height: 300px"></textarea>
        <label for="tasting">테이스팅</label>
      </div>
      </div>
  <div class="form-floating">
  <textarea v-model="desc" class="form-control" placeholder="Leave a comment here" id="desc" style="height: 120px"></textarea>
    <label for="desc">정보</label>
  </div>
  <div class="form-floating">
  <textarea v-model="etc" class="form-control" placeholder="Leave a comment here" id="etc" style="height: 120px"></textarea>
    <label for="etc">기타지식</label>
  </div>
    <div class="col-12">
      <button @click.prevent="btnOK" type="submit" class="btn btn-primary">입 력</button>
    </div>
  <!-- <div>
    <img id=image v-if="imgfile" :src="imgfile">
    <img v-else src="http://dy.gnch.or.kr/img/no-image.jpg">
    <br />
    <input @change.prevent="handleImageUpload" id="file" type="file">
  </div> -->
  </form>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Input',
  data () {
    return {
      imgfile: null,
      whiskey: {},
      name: '',
      category: '',
      degree: '',
      // image: '',
      price: '',
      tasting: '',
      desc: '',
      etc: ''
    }
  },
  methods: {
    btnOK () {
      axios.post('http://localhost:4000/input', {
        제품명: this.name,
        종류: this.category,
        도수: this.degree,
        이미지: this.imgfile,
        가격대: this.price,
        테이스팅: this.tasting,
        설명: this.desc,
        기타지식: this.etc,
        코멘트: []
      })
        .then((res) => {
          console.log(res)

          this.$router.push({
            name: 'list'
          })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    handleImageUpload (e) {
      // const data = new FormData()
      // data.append('image', e.target.files[0])
      // console.log(data)
      const data = e.target.files[0]
      axios({
        method: 'post',
        url: 'https://api.imgur.com/3/image/',
        data: data,
        headers: { Authorization: 'Client-ID 2b9222138a7cc78' }
      })
        .then((res) => {
          this.imgfile = res.data.data.link
        })
        .then((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
.no-img{
 width: 80%;
 max-height: 300px;
  margin-bottom: 20px;
}
</style>
