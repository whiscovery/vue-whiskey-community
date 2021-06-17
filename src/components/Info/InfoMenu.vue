<template>
  <div>
    <div class="mt-3 mb-3">
  <router-link to="/info/list"><button class="btn btn-yellow" type="button">목록</button></router-link>
  <router-link to="/info/insert"><button class="btn btn-yellow ms-2" type="button">입력</button></router-link>
</div>
  </div>
</template>

<script>
export default {
    name: 'InfoMenu'
}
</script>

<style>
.btn-yellow {
  background-color: gold;
}
</style>
