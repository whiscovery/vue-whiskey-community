<template>
  <div class="container overflow-hidden">
    <!-- <h4>Detail</h4>
    <p>{{$route.params.id}}</p> -->
      <div class="row gx-2 mt-5">
        <div class="test col-sm-3">
          <div><WhiskeyPhoto :whiskey="whiskey" /></div>
        </div>
        <div class="test col-sm-9">
          <div class="p-3 mt-3"><WhiskeyInfo :whiskey="whiskey" /></div>
          <div class="p-3 mt-3 mb-5"><WhiskeyComment :whiskey="whiskey" /></div>
        </div>
      </div>
      <div class="row gx-2">
        <div class="test col-sm"><WhiskeyStatics :whiskeys="whiskeys" /></div>
        <div class="test col-sm"></div>
        <div class="test col-sm"></div>
      </div>

  </div>
</template>

<script>
// @ is an alias to /src
import WhiskeyStatics from '@/components/WhiskeyStatics'
import WhiskeyPhoto from '@/components/WhiskeyPhoto'
import WhiskeyInfo from '@/components/WhiskeyInfo'
import WhiskeyComment from '@/components/WhiskeyComment'

export default {
  name: 'List',
  data () {
    return {
      whiskey: {}
    }
  },
  components: {
    WhiskeyPhoto: WhiskeyPhoto,
    WhiskeyStatics: WhiskeyStatics,
    WhiskeyInfo: WhiskeyInfo,
    WhiskeyComment: WhiskeyComment

  },
  created () {
    this.whiskey = this.whiskeys[parseInt(this.$route.params.id) - 1]
  },
  props: {
    whiskeys: Array
  }
}
</script>

<style scoped>
</style>
