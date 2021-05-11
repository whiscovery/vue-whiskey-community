<template>
<div class="row align-items-center">
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button @click="$emit('commentModalOpen', whiskey.제품명)" class="btn btn-outline-dark btn-sm mb-2" type="button">코멘트 쓰기</button>
</div>
  <div class="wrapper" v-for="comment,i in whiskey.코멘트" :key="i">
      <div class="speech-bubble">
          <span class="badge bg-primary name">{{comment.이름}} </span><span> "{{comment.내용}}" <small>({{comment.일시}} @ {{comment.장소}})</small> </span>
      </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'WhiskeyComment',
  props: {
    whiskey: Object
  }
}
</script>

<style scope>
.wrapper{
    text-align: left;
}
.comment{
    margin: 0px auto;
}

.name{
    font-size: 18px;
}
.speech-bubble {
    position:relative;
    width:100%;
    padding: 15px 5px 15px 20px;
    background: #ecf0f1;
    border-radius: 10px;
}
.speech-bubble:after {
    border-top:15px solid #ecf0f1;;
    border-left: 15px solid transparent;
    border-right: 0px solid transparent;
    border-bottom: 0px solid transparent;
    content:"";
    position:absolute;
    top:10px;
    left:-15px;
}
</style>
