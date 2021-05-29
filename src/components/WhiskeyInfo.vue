<template>
<div class="info" @dblclick="modistate = true">
  <ul class="list-group list-group-flush" v-if="modistate == false">
    <li class="list-group-item">
      <span class="title">제품명</span><span class="desc">{{name}}</span></li>
    <li class="list-group-item"><span class="title">종류/도수</span> <span class="desc">{{category}} / {{degree}}%</span></li>
    <li class="list-group-item"><span class="title">가격대</span> <span class="desc">{{price}}</span></li>
    <li class="list-group-item"><span class="title">테이스팅</span> <br /><span class="desc" v-html="taisting.replaceAll('\n','<br />')"></span></li>
    <li class="list-group-item"><span class="title">설명</span> <br /><span class="desc" v-html="desc.replaceAll('\n','<br />')"></span></li>
    <li class="list-group-item"><span class="title">기타지식</span><br /><span class="desc" v-html="etc.replaceAll('\n','<br />')"></span></li>
  </ul>
  <form v-if="modistate == true">
    <ul class="list-group list-group-flush">
    <li class="list-group-item">
      <input v-model="id" style="display : none">
      <div class="row">
        <label for="제품명" class="col-sm-2 col-form-label col-form-label-sm"><span class="title">제품명</span></label>
        <div class="col-sm-10">
          <input type="text" class="form-control form-control-sm" id="제품명" v-model="name">
        </div>
      </div>
    </li>
    <li class="list-group-item">
      <div class="row">
        <label for="종류" class="col-sm-2 col-form-label col-form-label-sm"><span class="title">종류</span></label>
        <div class="col-sm-10">
          <input type="text" class="form-control form-control-sm" id="종류" v-model="category">
        </div>
      </div>
    </li>
    <li class="list-group-item">
      <div class="row">
        <label for="도수" class="col-sm-2 col-form-label col-form-label-sm"><span class="title">도수</span></label>
        <div class="col-sm-10">
          <input type="text" class="form-control form-control-sm" id="도수" v-model="degree">
        </div>
      </div>
    </li>
    <li class="list-group-item">
      <div class="row">
        <label for="가격대" class="col-sm-2 col-form-label col-form-label-sm"><span class="title">가격대</span></label>
        <div class="col-sm-10">
          <input type="text" class="form-control form-control-sm" id="가격대" v-model="price">
        </div>
      </div>
    </li>
    <li class="list-group-item">
      <div class="row">
        <label for="테이스팅" class="col-sm-2 col-form-label col-form-label-sm"><span class="title">테이스팅</span></label>
        <div class="col-sm-10">
          <textarea type="text" class="form-control form-control-sm" id="테이스팅" v-model="taisting" style="width: 100%; height: 180px"></textarea>
        </div>
      </div>
    </li>
    <li class="list-group-item">
      <div class="row">
        <label for="설명" class="col-sm-2 col-form-label col-form-label-sm"><span class="title">설명</span></label>
        <div class="col-sm-10">
          <textarea type="text" class="form-control form-control-sm" id="설명" v-model="desc" style="width: 100%; height: 180px"></textarea>
        </div>
      </div>
    </li>
    <li class="list-group-item">
      <div class="row">
        <label for="기타지식" class="col-sm-2 col-form-label col-form-label-sm"><span class="title">기타지식</span></label>
        <div class="col-sm-10">
          <textarea type="text" class="form-control form-control-sm" id="기타지식" v-model="etc" style="width: 100%; height: 180px"></textarea>
        </div>
      </div>
    </li>
  <div class="btnmodi">
    <button @click.prevent="btnModi" type="submit" class="btn btn-warning mt-3">수 정</button>
  </div>
  </ul>
  </form>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'WhiskeyInfo',
  data () {
    return {
      whiskey: {},
      modistate: false,
      imgfile: null,
      id: 0,
      name: '',
      category: '',
      degree: '',
      price: '',
      taisting: '',
      desc: '',
      etc: ''
    }
  },
  // props: {
  //   whiskey: Object
  // },
  methods: {
    async btnModi () {
      await this.$nextTick()
      axios.post('http://localhost:4000/editpost', {
        id: this.id,
        제품명: this.name,
        종류: this.category,
        도수: this.degree,
        가격대: this.price,
        테이스팅: this.taisting,
        설명: this.desc,
        기타지식: this.etc
      })
        .then((res) => {
          alert('수정되었습니다')
          this.modistate = false
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  async created () {
    const url = '/whiskey/' + this.$route.params.id
    axios.get(url)
      .then((res) => {
        this.id = res.data.id
        this.name = res.data.제품명
        this.category = res.data.종류
        this.degree = res.data.도수
        this.price = res.data.가격대
        this.taisting = res.data.테이스팅
        this.desc = res.data.설명
        this.etc = res.data.기타지식
      })
      .catch((err) => {
        console.log(err)
      })
    await this.$nextTick()
  }

}
</script>

<style scoped>
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
.modiinput{
  margin-right: 20px;
  padding: 5px;
  width: 80%;
}
.btnmodi{
  margin: 0px auto;
}
</style>
