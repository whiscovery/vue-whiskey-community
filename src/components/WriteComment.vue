<template>
<div class="container mt-5">
  <h3>{{whiskeyname}} / {{user.email}}</h3>
  <form class="row g-3 mt-3">
    <div class="row" v-if="user.nick">
      <label class="col-sm-2 col-form-label" for="이름">이름</label>
      <div class="col-sm-10">
        <input type="text" readonly class="form-control-plaintext" id="이름" v-model="user.nick">
      </div>
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
    <button @click.prevent="btnModi" type="submit" class="btn btn-warning mt-3">코멘트 입력</button><button @click="$emit('closeModal')" type="submit" class="btn btn-success ms-3 mt-3">창닫기</button>
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
      var options = { year: 'numeric', month: '2-digit', day: '2-digit', hour12: false }
      const id = this.$route.params.id
      const email = (this.user.email) ? this.user.email : this.이메일
      const nickname = (this.user.nick) ? this.user.nick : this.이름
      const date = new Intl.DateTimeFormat('ko-KR', options).format(this.일시)
      console.log(email + '/' + nickname)
      await this.$nextTick()
      axios.post('/writecomment', {
        위스키번호: id,
        이름: nickname,
        장소: this.장소,
        일시: date,
        내용: this.내용,
        위스키이름: this.whiskeyname,
        이메일: email
      })
        .then((res) => {
          console.log(res)
          if (res.status === 200) {
            alert('코멘트 작성 완료')
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
