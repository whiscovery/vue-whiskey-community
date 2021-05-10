<template>
<div class="container mt-5">
  <form class="row g-3">
    <div class="col-md-6 form-floating mb-3">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">제품명</label>
    </div>
    <div class="col-md-4 form-floating mb-3">
      <select id="floatingInput" class="form-select">
        <option>스카치 위스키</option>
        <option>버번 위스키</option>
      </select>
      <label for="floatingInput">종류</label>
    </div>
    <div class="col-md-2 form-floating mb-3">
      <input type="email" class="form-control" id="111" placeholder="name@example.com">
      <label for="111">도수</label>
    </div>

    <div class="col-md-8 form-floating mb-3">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">이미지</label>
    </div>
    <div class="col-md-4 form-floating mb-3">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">가격대</label>
    </div>
    <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 80px"></textarea>
    <label for="floatingTextarea2">테이스팅</label>
  </div>
  <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 120px"></textarea>
    <label for="floatingTextarea2">정보</label>
  </div>
  <div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 120px"></textarea>
    <label for="floatingTextarea2">기타지식</label>
  </div>
    <div class="col-12">
      <button type="submit" class="btn btn-primary">Sign in</button>
    </div>
  </form>
</div>
</template>

<script>
export default {
  name: 'Input'
}
</script>

<style>

</style>
