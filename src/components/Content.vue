<template>
  <div class="info mt-3">
      <div class="close">
      <button type="button" class="btn-close" @click="$emit('closeModal')" aria-label="Close"></button>
      </div>
      <div v-if="data">
       <ul class="list-group list-group-flush">
    <li class="list-group-item pb-3">
      <span class="title">{{data.제목}}</span></li>
      <li class="list-group-item mt-3 pb-4"><span class="desc" v-html="data.내용.replaceAll('\n','<br />')"></span></li>
       <li class="list-group-item">{{data.키워드}}</li>
      </ul>
      </div>
      <div v-else>
          로딩중
      </div>
  </div>
</template>

<script>
export default {
    name: 'Content',
    props: {
        data: Object
    }
}
</script>

<style scoped>
.info{
  margin-top: 0;
  padding-top: 0;
  text-align: left;
}
.title{
  font-weight: 800;
  margin-right: 30px;
  font-size: 17px;
  font-family: 'Exo 2', sans-serif;
}
.desc{
  font-size: 14px;
  font-family: 'Exo 2', sans-serif;
  font-weight: 300;
}
.close {
    text-align: right;
}
</style>
