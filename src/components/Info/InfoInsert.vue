<template>
  <div class="container mt-5">
      <h3>위스키 관련 정보 입력</h3>
    <div class="jeju-input">
        <form class="row g-3" @submit.prevent="btnInfoOK">
            <div class="col-md-12 form-floating">
                <input type="text" class="form-control" v-model="제목" placeholder="제목">
                <label for="제목">제목</label>
            </div>
            <div class="col-md-5">
            <div class="col-md-12 form-floating">
                <input type="password" class="form-control" v-model="비밀번호" placeholder="비밀번호">
                <label for="비밀번호">비밀번호</label>
            </div>
                <div class="col-md-12 mt-3">
                <UploadPhoto @getImageURL="getImageURL" />
                {{imgfile}}
                </div>
            </div>
      <div class="col-md-7">
            <div class="col-12 form-floating">
                <textarea class="form-control" placeholder="Leave a comment here" v-model="내용" style="height: 400px"></textarea>
                <label for="내용">관련 정보</label>
            </div>
            <div class="col-md-12 mt-2 form-floating">
                <input type="text" class="form-control" v-model="키워드" placeholder="키워드">
                <label for="키워드">키워드</label>
            </div>
      </div>
            <div class="col-12">
                <button class="btn btn-primary">등록</button>
            </div>
            </form>
    </div>

  </div>
</template>
<script>
import UploadPhoto from '@/components/UploadPhoto'
import { baseurl } from '@/config/index'
import axios from 'axios'
export default {
    name: 'InfoInsert',
    data () {
        return {
            imgfile: '',
            제목: '',
            내용: '',
            키워드: '',
            비밀번호: ''
        }
    },
    components: {
        UploadPhoto: UploadPhoto
    },
    methods: {
        btnInfoOK () {
            const data = {
                제목: this.제목 ? this.제목 : '제목없음',
                내용: this.내용 ? this.내용 : '내용없음',
                키워드: this.키워드 ? this.키워드 : '키워드',
                비밀번호: this.비밀번호
            }
            console.log(data)
            axios.post(baseurl + '/writeinfo', data)
            .then((res) => {
                alert('입력되었습니다')
            })
            .catch((err) => {
                console.log(err)
            })
        },
        getImageURL (url) {
            this.imgfile = url
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
