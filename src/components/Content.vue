<template>
  <div>
      {{data}}
      <button @click="$emit('closeModal')">닫기</button>
  </div>
</template>

<script>
export default {
    name: 'Content',
    props: {
        data: Array
    }
}
</script>

<style>

</style>
