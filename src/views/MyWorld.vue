<template>
  <div>
    <transition name="myModal">
    <div v-if="commentwriteModal" class="black-bg">
        <div class="white-bg">
        <WriteMyRecord @closeModal="commentwriteModal=false" />
        </div>
    </div>
    </transition>

      <h2 class="mt-5"> 개인기록 </h2>
      <div class="button-write"><button @click="commentwriteModal=true" class="btn btn-warning">기록하기</button></div>
      <div class="container mt-3">
        <div class="row">
            <div class="col-sm-2 text-left">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">음주 기록</li>
                    <li class="list-group-item"></li>
                </ul>
            </div>
            <div class="col-sm-10">
                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th class="col-sm-1 table-text">마신날</th>
                        <th class="col-sm-1 table-text">마신곳</th>
                        <th class="col-sm-3 table-text">술이름</th>
                        <th class="col-sm-7 table-text">내용</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="comment, i in comments" :key="i" >
                        <td class="table-text">{{comments[i].일시}}</td>
                        <td class="table-text">{{comments[i].장소}}</td>
                        <td class="table-text">{{comments[i].위스키이름}}</td>
                        <td class="table-text">{{comments[i].내용}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </div>
  </div>
</template>

<script>
import axios from 'axios'
import WriteMyRecord from '@/components/WriteMyRecord'

export default {
  name: 'MyWorld',
  components: {
    WriteMyRecord: WriteMyRecord
  },
  data () {
    return {
      totals: [],
      comments: [],
      datas: {
        nickname: '진욱',
        email: 'rootack@gmail.com',
        password: 'qwer1234'
      },
      commentwriteModal: false
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

<style scoped>
.button-write{
    text-align: right;
}
.table-text{
    font-size: 13px;
    text-align: left;
}
.black-bg {
  width : 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  position: fixed;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}
.title{
  font-family: 'Exo 2', sans-serif;
}
.white-bg {
  color: #000;
  top: 50%;
  left: 50%;
  width: 60%;
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  z-index: 3;
  font-weight: 800;
}
.white-bg .contact-us-title{
  width:100%;
  color: #fff;
  background: darkslateblue;
}
@media(max-width: 720px){
  .black-bg {
    width : 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }
  .title{
    font-family: 'Exo 2', sans-serif;
  }
  .white-bg {
    color: #000;
    margin: 0px;
    top: 50%;
    left: 50%;
    width: 100%;
    background-color: #fff;
    border-radius: 8px;
    z-index: 3;
    font-size: 14px;
  }
}
</style>
