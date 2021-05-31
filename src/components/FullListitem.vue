<template>
    <div class="row">
    <div class="col-sm-9">
      <p class="text-link"><router-link class="text-link" :to="{ name: 'Detail', params: { id: whiskey.id }}">• {{whiskey.제품명}}</router-link></p>
    </div>
    <div class="col-sm-3">
      <small class="list-small">{{whiskey.종류}}</small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FullListitem',
  props: {
    whiskey: Object
  }

}
</script>

<style scoped>
.text-link {
    text-align: left !important;
}
</style>
