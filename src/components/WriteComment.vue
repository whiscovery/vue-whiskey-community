<template>
<div class="container mt-5">
  <h3> 코멘트 입력 {{$route.params.id}} {{whiskeyname}}</h3>
  <form class="row g-3 mt-3">
    <div class="col-md-6 form-floating mb-3" v-if="user.nick">
      <input type="text" v-model="이름" class="form-control" id="이름" :placeholder="user.nick">
      <label class="label" for="이름">{{user.nick}}</label>
    </div>
    <div class="col-md-6 form-floating mb-3" v-if="!user.nick">
      <input type="text" v-model="이름" class="form-control" id="이름" placeholder="이름">
      <label class="label" for="이름">이름</label>
    </div>
    <div class="col-md-3 form-floating mb-3">
      <input type="text" v-model="장소" class="form-control" id="장소" placeholder="장소">
      <label class="label" for="장소">장소</label>
    </div>
    <div class="col-md-3 form-floating mb-3">
      <datepicker v-model="일시" format='yyyy-MM-dd' input-class="form-control pb-4" id="일시" />
      <label class="label" for="일시">마신 날<br /></label>
    </div>
  <div class="form-floating">
  <textarea v-model="내용" class="form-control" placeholder="Leave a comment here" id="코멘트" style="height: 120px"></textarea>
    <label class="label" for="코멘트">코멘트</label>
  </div>
  <div class="btnmodi">
    <button @click="btnModi" type="submit" class="btn btn-warning mt-3">코멘트 입력</button><button @click="$emit('closeModal')" type="submit" class="btn btn-success ms-3 mt-3">창닫기</button>
  </div>

  </form>
</div>
</template>

<script>
import axios from 'axios'
import Datepicker from 'vuejs-datepicker'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'WriteComment',
  data () {
    return {
      이름: '',
      장소: '',
      일시: '',
      내용: '',
      이메일: '',
      위스키이름: 'guest'
    }
  },
  components: {
    Datepicker: Datepicker
  },
  props: {
    whiskeyname: String
  },
  computed: mapGetters(['user']),
  methods: {
    ...mapActions(['getProfile']),
    async btnModi () {
      const id = this.$route.params.id
      await this.$nextTick()
      axios.post('http://localhost:4000/writecomment', {
        위스키번호: id,
        이름: this.이름,
        장소: this.장소,
        일시: new Intl.DateTimeFormat('en-US').format(this.일시),
        내용: this.내용,
        위스키이름: this.whiskeyname,
        이메일: this.email
      })
        .then((res) => {
          console.log(res)
          alert('코멘트 작성 완료')
          if (res.status === 200) {
            this.$router.push({ name: 'Detail', params: { id: this.$route.params.id } }).catch(() => {})
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

}
</script>

<style scope>
.label{
  font-weight: 400;
}
.btnmodi{
  margin: 0px auto;
}
</style>
