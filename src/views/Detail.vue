<template>
  <div class="container overflow-hidden">
    <!-- <h4>Detail</h4>
    <p>{{$route.params.id}}</p> -->
      <div class="row gx-5">
        <div class="col-sm-5">
          <div class="shadow-sm p-3 mt-3 mb-5 bg-body rounded"><WhiskeyPhoto :whiskeys="whiskeys" /></div>
        </div>
        <div class="col-sm-7">
          <div class="shadow-sm p-3 mt-3 mb-5 bg-body rounded"><WhiskeyInfo :whiskeys="whiskeys" /></div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm"><WhiskeyStatics :whiskeys="whiskeys" /></div>
        <div class="col-sm"><WhiskeyComment :whiskeys="whiskeys" /></div>
        <div class="col-sm"></div>
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
      whiskey: this.whiskeys.$route.params.id
    }
  },
  components: {
    WhiskeyPhoto: WhiskeyPhoto,
    WhiskeyStatics: WhiskeyStatics,
    WhiskeyInfo: WhiskeyInfo,
    WhiskeyComment: WhiskeyComment

  },
  props: {
    whiskeys: Array
  }
}
</script>
