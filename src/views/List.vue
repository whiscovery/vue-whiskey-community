<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

        <input class="form-control" v-model="whiskeysearch" placeholder="위스키 이름 검색">
      <!-- <input class="form-control" list="datalistOptions" v-model="whiskeysearch" placeholder="위스키 이름 검색">
      <datalist id="datalistOptions">
        <option v-for="whiskey, i in whiskeylist" :key="i" :value="whiskey" />
      </datalist> -->

        <div class="col" v-for="whiskey in filteredWhiskey" :key="whiskey.id">
          <Listitem :whiskey="whiskey" />
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Listitem from '@/components/Listitem'

export default {
  name: 'List',
  data () {
    return {
      whiskeysearch: ''
    }
  },
  components: {
    Listitem: Listitem
  },
  props: {
    whiskeys: Array
  },
  computed: {
    // 위스키 정보 데이터 중 '제품명' 필드에 검색어가 포함되어 있는지 확인 후 참이면 반환
    filteredWhiskey () {
      return this.whiskeys.filter((data) => {
        return data.제품명.toUpperCase().includes(this.whiskeysearch.toUpperCase())
      })
    }
  }

}
</script>

<style>
.thumbnail-whiskey {
  width: 60%;
  margin: 0px auto;
  padding-top: 10px;
}
.list-small {
  margin: 0px auto;
  color: #1f4801;
}
.text-link {
  text-decoration: none;
  color: #000;
  font-weight: 500;
}
</style>
