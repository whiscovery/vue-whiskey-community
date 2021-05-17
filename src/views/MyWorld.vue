<template>
  <div>
      <h1> My World </h1>
      <div class="container mt-3">
        <div class="row">
            <div class="col-sm-3 text-left">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">음주 기록</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                </ul>
            </div>
            <div class="col-sm-9">{{comments}}
                <div v-for="comment, i in comments" :key="i" class="card text-white bg-dark mb-3" style="max-width: 18rem;">
                    <div class="card-header">{{comments[i].일시}} ({{comments[i].장소}}</div>
                    <div class="card-body">
                        <h5 class="card-title">술이름</h5>
                        <p class="card-text">{{comments[i].내용}}</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MyWorld',
  data () {
    return {
      totals: [],
      comments: [],
      datas: {
        nickname: '진욱',
        email: 'rootack@gmail.com',
        password: 'qwer1234'
      }
    }
  },
  created () {
    const url = 'http://localhost:4000/comment/search/' + this.datas.email
    axios.get(url)
      .then((res) => {
        this.comments = res.data
      })
      .catch((err) => {
        console.log(err)
      })
  }

}
</script>

<style>

</style>
