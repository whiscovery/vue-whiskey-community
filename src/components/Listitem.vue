<template>
<div class="card shadow-sm">
            <img :src="whiskey.이미지" class="thumbnail-whiskey">

            <div class="card-body">
              <p class="card-text text-truncate"><router-link class="text-link" :to="{ name: 'Detail', params: { id: whiskey.id }}">{{whiskey.제품명}}</router-link></p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="list-small">{{whiskey.종류}}</small>
              </div>
            </div>
          </div>
</template>

<script>
export default {
  name: 'Listitem',
  props: {
    whiskey: Object
  }

}
</script>

<style>
.thumbnail-whiskey{
  width: auto;
  height: 210px;
  object-fit: contain;
}
</style>
