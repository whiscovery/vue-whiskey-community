<template>
<div class="container mt-5">
  <h3> 위스키 입력 </h3>
  <form class="row g-3 mt-3">
    <div class="col-md-6 form-floating mb-3">
      <input type="text" v-model="name" class="form-control" id="floatingInput" placeholder="위스키 제품명">
      <label for="floatingInput">제품명(영문)</label>
    </div>
    <div class="col-md-4 form-floating mb-3">
      <select v-model="category" id="floatingInput" class="form-select">
        <option>스카치 위스키</option>
        <option>버번 위스키</option>
      </select>
      <label for="floatingInput">종류</label>
    </div>
    <div class="col-md-2 form-floating mb-3">
      <input type="text" v-model="degree" class="form-control" id="111" placeholder="name@example.com">
      <label for="111">도수</label>
    </div>

    <div class="col-md-8 form-floating mb-3">
      <input type="text" v-model="image" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">이미지 URL</label>
    </div>
    <div class="col-md-4 form-floating mb-3">
      <input type="text" v-model="price" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">가격대</label>
    </div>
    <div class="form-floating">
  <textarea v-model="tasting" class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 80px"></textarea>
    <label for="floatingTextarea2">테이스팅</label>
  </div>
  <div class="form-floating">
  <textarea v-model="desc" class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 120px"></textarea>
    <label for="floatingTextarea2">정보</label>
  </div>
  <div class="form-floating">
  <textarea v-model="etc" class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 120px"></textarea>
    <label for="floatingTextarea2">기타지식</label>
  </div>
    <div class="col-12">
      <button @click.prevent="btnOK" type="submit" class="btn btn-primary">입 력</button>
    </div>
  </form>
  {{whiskey}}
</div>
</template>

<script>
export default {
  name: 'Input',
  data () {
    return {
      whiskey: {},
      name: '',
      category: '',
      degree: '',
      image: '',
      price: '',
      tasting: '',
      desc: '',
      etc: ''
    }
  },
  methods: {
    btnOK () {
      this.whiskey = {
        제품명: this.name,
        종류: this.category,
        도수: this.degree,
        이미지: this.image,
        가격대: this.price,
        테이스팅: this.tasting,
        설명: this.desc,
        기타지식: this.etc,
        코멘트: []
      }
    }
  }
}
</script>

<style>

</style>
