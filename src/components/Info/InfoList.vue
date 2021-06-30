<template>
  <div>정보
    <transition name="contactModal">
        <div v-if="viewModal" class="black-bg">
            <div class="white-bg">
                <Content :data="viewContentItem" @closeModal="viewModal = false" />
            </div>
        </div>
    </transition>

    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <input class="form-control" v-model="infosearch" placeholder="제목 검색">
          </div>
          <table class="table mt-3">
  <thead>
    <tr>
      <th style="width: 70%" scope="col">제목</th>
      <th style="width: 30%" scope="col">키워드</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="info, i in filteredInfo" :key="i" >
      <td @click="viewContent(info.id)" class="title-style"><b>{{info.제목}}</b></td>
      <td class="keyword-style">{{info.키워드}}</td>
    </tr>
  </tbody>
  </table>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Content from '@/components/Content'
import axios from 'axios'
import { baseurl } from '@/config/index'

export default {
    name: 'InfoList',
    data () {
        return {
            viewModal: false,
            infosearch: '',
            viewContentId: 0,
            viewContentItem: []
        }
    },
    components: {
        Content
    },
    created () {
    this.fetchInfoList()
  },
  computed: {
    ...mapState(['infolist']),
    // 위스키 정보 데이터 중 '제품명' 필드에 검색어가 포함되어 있는지 확인 후 참이면 반환
    filteredInfo () {
      return this.$store.state.infolist.filter((data) => {
        return data.제목.toUpperCase().includes(this.infosearch.toUpperCase())
      })
    }
  },
  methods: {
      viewContent (value) {
        this.viewContentItem = []
        axios.get(baseurl + '/info/' + value)
          .then((res) => {
            this.viewContentItem = res.data
            })
          .catch((err) => {
            console.log(err)
          })
          this.viewModal = true
          this.viewContentId = value
      },
    ...mapActions(['fetchInfoList'])
  }
}
</script>

<style scoped>
.title-style{
  font-size: 13px;
  text-align: left;
  padding-left: 20px;
  }
.keyword-style{
  font-size: 11px;
  vertical-align: center;
  }

.info-list{
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
  top: 0;
  left: 0;
}
.title{
  font-family: 'Exo 2', sans-serif;
}
.white-bg {
  color: #000;
  top: 50%;
  left: 50%;
  width: 80%;
  height: 100%;
  overflow: scroll;
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
    width: 100%;
    background-color: #fff;
    border-radius: 8px;
    padding: 10px;
    z-index: 3;
    font-size: 14px;
  }
}
.contactModal-enter-from {
    opacity: 0;
}
.contactModal-enter-active {
    transition: all 1s;
}
.contactModal-enter-to{
    opacity: 1;
}
.contactModal-leave-from {
  opacity: 1;
}
.contactModal-leave-active {
  transition: all 1s;
}
.contactModal-leave-to{
  opacity: 0;
}
.form-input {
  width: 80%;
  height: 30px;
  margin: 5px;
}
.form-textarea {
  width: 80%;
  height: 100px;
  margin: 5px;
}
.blank {
  height: 50px;
}
.blank-small {
  height: 20px;
}
.blank-large {
  height: 200px;
}
.boxDiv {
  padding: 15px 5px 15px 5px;
  height: fit-content;
  background: #ffffff;
  /* background: -webkit-linear-gradient(135deg, #fffcdc, #d9a7c7);  /* Chrome 10-25, Safari 5.1-6 */
  /* background: linear-gradient(135deg, #fffcdc, #d9a7c7); W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.301);
  border-radius: 5px; /* 5px rounded corners */
}
.loading {
  width: 100%;
  height: 400px;
  line-height: 400px;
  text-align: center;
}
.loading > img {
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
}
</style>
