<template>
  <div>
    <div class="mt-3 mb-3">
  <router-link to="/info/list"><button type="button" class="btn btn-primary btn-sm">목록</button></router-link>
  <router-link to="/info/insert"><button type="button" class="btn btn-primary btn-sm ms-2">입력</button></router-link>
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
