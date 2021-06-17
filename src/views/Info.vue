<template>
  <div>
      <InfoMenu />
      <div>
          <router-view></router-view>
      </div>
    </div>
</template>

<script>
import InfoMenu from '@/components/Info/InfoMenu'
export default {
    name: 'Info',
    components: {
        InfoMenu
    }
}
</script>

<style scoped>
.alert-small {
    font-size: 13px;
    margin-top: 10px;
}
</style>
