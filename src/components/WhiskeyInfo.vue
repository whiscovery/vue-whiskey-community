<template>
<div class="info" @dblclick="btnModiInit">
  <ul class="list-group list-group-flush" v-if="modistate == false">
    <li class="list-group-item">
      <span class="title">제품명</span><span class="desc">{{whiskey.제품명}}</span></li>
    <li class="list-group-item"><span class="title">종류/도수</span> <span class="desc">{{whiskey.종류}} / {{whiskey.도수}}%</span></li>
    <li class="list-group-item">
      <span class="title">특이사항</span><span class="desc">{{whiskey.특이사항}}</span></li>
    <li class="list-group-item"><span class="title">테이스팅</span> <br /><span class="desc" v-html="whiskey.테이스팅.replaceAll('\n','<br />')"></span></li>
    <li class="list-group-item"><span class="title">설명</span> <br /><span class="desc" v-html="whiskey.설명.replaceAll('\n','<br />')"></span></li>
    <li class="list-group-item"><span class="title">기타지식</span><br /><span class="desc" v-html="whiskey.기타지식.replaceAll('\n','<br />')"></span></li>
  </ul>
  <form v-if="modistate == true">
    <ul class="list-group list-group-flush">
    <li class="list-group-item">
      <input v-model="id" style="display : none">
      <div class="row">
        <label for="제품명" class="col-sm-2 col-form-label col-form-label-sm"><span class="title">제품명</span></label>
        <div class="col-sm-10">
          <input type="text" class="form-control form-control-sm" id="제품명" v-model="제품명">
        </div>
      </div>
    </li>
    <li class="list-group-item">
      <div class="row">
        <label for="종류" class="col-sm-2 col-form-label col-form-label-sm"><span class="title">종류</span></label>
        <div class="col-sm-10">
          <input type="text" class="form-control form-control-sm" id="종류" v-model="종류">
        </div>
      </div>
    </li>
    <li class="list-group-item">
      <div class="row">
        <label for="도수" class="col-sm-2 col-form-label col-form-label-sm"><span class="title">도수</span></label>
        <div class="col-sm-10">
          <input type="text" class="form-control form-control-sm" id="도수" v-model="도수">
        </div>
      </div>
    </li>
    <li class="list-group-item">
      <div class="row">
        <label for="특이사항" class="col-sm-2 col-form-label col-form-label-sm"><span class="title">특이사항</span></label>
        <div class="col-sm-10">
          <input type="text" class="form-control form-control-sm" id="특이사항" v-model="특이사항">
        </div>
      </div>
    </li>
    <li class="list-group-item">
      <div class="row">
        <label for="가격대" class="col-sm-2 col-form-label col-form-label-sm"><span class="title">가격대</span></label>
        <div class="col-sm-10">
          <input type="text" class="form-control form-control-sm" id="가격대" v-model="가격대">
        </div>
      </div>
    </li>
    <li class="list-group-item">
      <div class="row">
        <label for="테이스팅" class="col-sm-2 col-form-label col-form-label-sm"><span class="title">테이스팅</span></label>
        <div class="col-sm-10">
          <textarea type="text" class="form-control form-control-sm" id="테이스팅" v-model="테이스팅" style="width: 100%; height: 180px"></textarea>
        </div>
      </div>
    </li>
    <li class="list-group-item">
      <div class="row">
        <label for="설명" class="col-sm-2 col-form-label col-form-label-sm"><span class="title">설명</span></label>
        <div class="col-sm-10">
          <textarea type="text" class="form-control form-control-sm" id="설명" v-model="설명" style="width: 100%; height: 180px"></textarea>
        </div>
      </div>
    </li>
    <li class="list-group-item">
      <div class="row">
        <label for="기타지식" class="col-sm-2 col-form-label col-form-label-sm"><span class="title">기타지식</span></label>
        <div class="col-sm-10">
          <textarea type="text" class="form-control form-control-sm" id="기타지식" v-model="기타지식" style="width: 100%; height: 180px"></textarea>
        </div>
      </div>
    </li>
    <li class="list-group-item">
      <div class="row">
        <label for="패스워드" class="col-sm-2 col-form-label col-form-label-sm"><span class="title">패스워드</span></label>
        <div class="col-sm-10">
          <textarea type="text" class="form-control form-control-sm" id="패스워드" v-model="패스워드" style="width: 100%; height: 180px"></textarea>
        </div>
      </div>
    </li>
  <div class="btnmodi">
    <button @click.prevent="btnModi" type="submit" class="btn btn-warning mt-3">수 정</button>
    <button @click="btnModiCancel" type="submit" class="btn btn-danger mt-3 ms-1">취 소</button>
  </div>
  </ul>
  </form>
</div>
</template>

<script>
import axios from 'axios'
import { baseurl } from '@/config/index'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'WhiskeyInfo',
  data () {
    return {
      // whiskey: {},
      modistate: false,
      imgfile: null,
      id: 0,
      제품명: '',
      종류: '',
      도수: '',
      가격대: '',
      테이스팅: '',
      설명: '',
      기타지식: '',
      특이사항: '',
      패스워드: ''
      // id: this.whiskey.id,
      // 제품명: this.whiskey.제품명,
      // 종류: this.whiskey.종류,
      // 도수: this.whiskey.도수,
      // 가격대: this.whiskey.가격대,
      // 테이스팅: this.whiskey.테이스팅,
      // 설명: this.whiskey.설명,
      // 기타지식: this.whiskey.기타지식,
      // 특이사항: this.whiskey.특이사항
    }
  },
  // props: {
  //   whiskey: Object
  // },
  computed: {
    ...mapState(['whiskey'])
  },
  methods: {
    btnModiInit () {
      this.id = this.whiskey.id
      this.제품명 = this.whiskey.제품명
      this.종류 = this.whiskey.종류
      this.도수 = this.whiskey.도수
      this.가격대 = this.whiskey.가격대
      this.테이스팅 = this.whiskey.테이스팅
      this.설명 = this.whiskey.설명
      this.기타지식 = this.whiskey.기타지식
      this.특이사항 = this.whiskey.특이사항
      this.modistate = true
    },
    btnModi () {
      axios.post(baseurl + '/editpost', {
          id: this.id,
          제품명: this.제품명,
          종류: this.종류,
          도수: this.도수,
          가격대: this.가격대,
          테이스팅: this.테이스팅,
          설명: this.설명,
          기타지식: this.기타지식,
          특이사항: this.특이사항,
          패스워드: this.패스워드
        })
        .then((res) => {
          alert('수정되었습니다')
          this.fetchWhiskey(this.id)
          this.modistate = false
          this.$router.push({
            name: 'Detail',
            params: { postId: parseInt(this.id) }
          }).catch(() => {})
        })
        .catch((err) => {
          alert('패스워드가 맞지 않습니다')
          console.log(err)
        })
    },
    btnModiCancel () {
      this.modistate = false
    },
    ...mapActions(['fetchWhiskey'])
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
