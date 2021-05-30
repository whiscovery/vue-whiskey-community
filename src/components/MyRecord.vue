<template>
<div>
    <div class="button-write"><button @click="$emit('commentModalOpen')" class="btn btn-warning">음주 기록하기</button></div>
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
                        <tr v-for="comment, i in sortedComments" :key="i" >
                        <td class="table-text">{{comments[i].일시}}</td>
                        <td class="table-text">{{comments[i].장소}}</td>
                        <td class="table-text">{{comments[i].위스키이름}}</td>
                        <td class="table-text">{{comments[i].내용}}</td>
                        </tr>
                    </tbody>
                </table>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'MyRecord',
    data () {
        return {
            comments: [],
            temps: []
        }
    },
    props: {
        email: String
    },
    async created () {
        const url = 'http://whiscovery.xyz/comment/search/' + this.email
        axios.get(url)
        .then((res) => {
            this.comments = res.data
        })
        .catch((err) => {
            console.log(err)
        })
        await this.$nextTick()
    },
    computed: {
        // 위스키 정보 데이터 중 '제품명' 필드에 검색어가 포함되어 있는지 확인 후 참이면 반환
        sortedComments () {
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.comments.sort((a, b) => {
                return a.일시 > b.일시 ? -1 : a.일시 < b.일시 ? 1 : 0
            })
            return this.comments
        }
    }

}
</script>

<style>

</style>
