<template>
<div class="container mt-5">
  <h3> 코멘트 입력 {{$route.params.id}}</h3>
  <form class="row g-3 mt-3">
    <div class="col-md-6 form-floating mb-3">
      <input type="text" v-model="이름" class="form-control" id="이름" placeholder="이름">
      <label class="label" for="이름">이름</label>
    </div>
    <div class="col-md-3 form-floating mb-3">
      <input type="text" v-model="장소" class="form-control" id="장소" placeholder="장소">
      <label class="label" for="장소">장소</label>
    </div>
    <div class="col-md-3 form-floating mb-3">
      <input type="text" v-model="일시" class="form-control" id="일시" placeholder="마신 날짜">
      <label class="label" for="일시">마신 날</label>
    </div>
  <div class="form-floating">
  <textarea v-model="내용" class="form-control" placeholder="Leave a comment here" id="코멘트" style="height: 120px"></textarea>
    <label class="label" for="코멘트">코멘트</label>
  </div>
  <div class="btnmodi">
    <button @click="btnModi" type="submit" class="btn btn-warning mt-3">수 정</button>
  </div>

  </form>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'WriteComment',
  data () {
    return {
      이름: '',
      장소: '',
      일시: '',
      내용: ''
    }
  },
  methods: {
    async btnModi () {
      const id = this.$route.params.id
      await this.$nextTick()
      axios.post('http://localhost:4000/writecomment', {
        whiskeyid: id,
        이름: this.이름,
        장소: this.장소,
        일시: this.일시,
        내용: this.내용
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
