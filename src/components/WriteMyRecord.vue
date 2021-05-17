<template>
<div>
  <div>Recrod</div>
  <form class="row g-3 mt-3">
    <div class="col-md-6 form-floating mb-3">
      <input type="text" v-model="마신술" class="form-control" id="이름" placeholder="이름">
      <label class="label" for="이름">마신술</label>
    </div>
    <div class="col-md-3 form-floating mb-3">
      <input type="text" v-model="장소" class="form-control" id="장소" placeholder="장소">
      <label class="label" for="장소">장소</label>
    </div>
    <div class="col-md-3 form-floating mb-3">
      <datepicker v-model="일시" format='yyyy-MM-dd' input-class="form-control pb-4" id="일시" />
      <label class="label" for="일시">마신 날<br /></label>
    </div>
  <div class="form-floating">
  <textarea v-model="내용" class="form-control" placeholder="Leave a comment here" id="코멘트" style="height: 120px"></textarea>
    <label class="label" for="코멘트">음주 기록</label>
  </div>
  <div class="btnmodi">
    <button type="submit" class="btn btn-warning mt-3">코멘트 입력</button><button @click="$emit('closeModal')" type="submit" class="btn btn-success ms-3 mt-3">창닫기</button>
  </div>

  </form>
</div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'

export default {
  name: 'WriteMyRecord',
  components: {
    Datepicker: Datepicker
  }
}
</script>

<style>

</style>
