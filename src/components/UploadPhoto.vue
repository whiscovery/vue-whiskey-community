<template>
<div>
    <div class="text-center">
        <img v-if="imgfile" :src="imgfile" class="no-img">
        <img v-else src="http://dy.gnch.or.kr/img/no-image.jpg" class="no-img">
    </div>
    <div class="col-md-12 form-floating mb-3">
        <input @change="handleImageUpload" type="file">
        <!-- <input type="text" v-model="image" class="form-control" id="image" placeholder="name@example.com">
        <label for="image">이미지 URL</label> -->
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'UploadPhoto',
    data () {
        return {
            imgfile: null
        }
    },
    methods: {
        handleImageUpload (e) {
        // const data = new FormData()
        // data.append('image', e.target.files[0])
        // console.log(data)
        const data = e.target.files[0]
        axios({
            method: 'post',
            url: 'https://api.imgur.com/3/image/',
            data: data,
            headers: { Authorization: 'Client-ID 2b9222138a7cc78' }
        })
            .then((res) => {
            this.imgfile = res.data.data.link
            this.$emit('getImageURL', res.data.data.link)
            })
            .catch((err) => {
            console.log(err)
            })
        }
    }

}
</script>

<style>

</style>
