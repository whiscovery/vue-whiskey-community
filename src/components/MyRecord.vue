<template>
<div>
    <div v-if="user">
    <div class="button-write"><button @click="$emit('commentModalOpen')" class="btn btn-warning">음주 기록하기</button></div>
            <div v-if="myrecords">
                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th class="col-sm-3 table-text">#</th>
                        <th class="col-sm-9 table-text">내용</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="comment, i in myrecords" :key="i" >
                        <td class="table-text"><span class="comment-date">{{comment.일시}}</span></td>
                        <td class="table-text t-left"><span class="comment-title">{{comment.위스키이름}}</span><span class="comment-location">(@ {{comment.장소}})</span>
                        <p class="comment-content">{{comment.내용}}</p></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-else>
                <div class="loading">
                    <img :src="loading">
                </div>
            </div>
    </div>
    <div v-else>
        Loading user's getProfile
    </div>
</div>
</template>

<script>
// import axios from 'axios'
import { mapGetters, mapState, mapActions } from 'vuex'
import loading from '@/assets/loading.gif'

export default {
    name: 'MyRecord',
    data () {
        return {
            comments: [],
            loading: loading
        }
    },
    props: {
    },
    created () {
        this.getProfile()
            console.log(this.user.email)
        new Promise((resolve, reject) => {
            this.fetchMyRecords(this.user.email)
            resolve()
            console.log('1:' + this.user)
        }).then(() => {
            console.log('2:' + this.myrecords)
        }).catch(() => {
            console.log('Err!')
        })
    },
    computed: {
        ...mapGetters(['user']),
        ...mapState(['myrecords'])
    },
    // mounted () {
    //     this.comments = [...this.myrecords]
    //     this.comments.sort((a, b) => {
    //         return a.일시 > b.일시 ? -1 : a.일시 < b.일시 ? 1 : 0
    //     })
    // },
    methods: {
        ...mapActions(['getProfile', 'fetchMyRecords'])
  }

}
</script>

<style scoped>
.comment-title {
    font-size: 14px;
    text-align: left;
}
.comment-date {
    font-size: 10px;
}
.comment-location {
    font-size: 12px;
    color:chocolate;
}
.comment-content {
    font-size: 12px;
    text-align: left;
}
.t-left {
    text-align: left;
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
