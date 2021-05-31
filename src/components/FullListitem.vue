<template>
    <div class="row">
      <p class="text-link"><router-link class="text-link" :to="{ name: 'Detail', params: { id: whiskey.id }}">• <small class="list-small">[{{whiskey.종류}}]</small> {{whiskey.제품명}}</router-link></p>
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
