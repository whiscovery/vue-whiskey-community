<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <div class="right-menu mb-3" v-if="shortlist == true">
        <svg class="svg-icon" width="24" viewBox="0 0 20 20" @click="viewShortList">
          <path d="M10,1.445c-4.726,0-8.555,3.829-8.555,8.555c0,4.725,3.829,8.555,8.555,8.555c4.725,0,8.555-3.83,8.555-8.555C18.555,5.274,14.725,1.445,10,1.445 M10,17.654c-4.221,0-7.654-3.434-7.654-7.654c0-4.221,3.433-7.654,7.654-7.654c4.222,0,7.654,3.433,7.654,7.654C17.654,14.221,14.222,17.654,10,17.654 M14.39,10c0,0.248-0.203,0.45-0.45,0.45H6.06c-0.248,0-0.45-0.203-0.45-0.45s0.203-0.45,0.45-0.45h7.879C14.187,9.55,14.39,9.752,14.39,10 M14.39,12.702c0,0.247-0.203,0.449-0.45,0.449H6.06c-0.248,0-0.45-0.202-0.45-0.449c0-0.248,0.203-0.451,0.45-0.451h7.879C14.187,12.251,14.39,12.454,14.39,12.702 M14.39,7.298c0,0.248-0.203,0.45-0.45,0.45H6.06c-0.248,0-0.45-0.203-0.45-0.45s0.203-0.45,0.45-0.45h7.879C14.187,6.848,14.39,7.051,14.39,7.298"></path>
        </svg>
      </div>
      <div class="right-menu mb-3" v-if="shortlist == false">
        <svg class="svg-icon" width="24" viewBox="0 0 20 20" @click="viewFullList">
          <path d="M10,1.75c-4.557,0-8.25,3.693-8.25,8.25c0,4.557,3.693,8.25,8.25,8.25c4.557,0,8.25-3.693,8.25-8.25C18.25,5.443,14.557,1.75,10,1.75 M10,17.382c-4.071,0-7.381-3.312-7.381-7.382c0-4.071,3.311-7.381,7.381-7.381c4.07,0,7.381,3.311,7.381,7.381C17.381,14.07,14.07,17.382,10,17.382 M7.612,10.869c-0.838,0-1.52,0.681-1.52,1.519s0.682,1.521,1.52,1.521c0.838,0,1.52-0.683,1.52-1.521S8.45,10.869,7.612,10.869 M7.612,13.039c-0.359,0-0.651-0.293-0.651-0.651c0-0.357,0.292-0.65,0.651-0.65c0.358,0,0.651,0.293,0.651,0.65C8.263,12.746,7.97,13.039,7.612,13.039 M7.629,6.11c-0.838,0-1.52,0.682-1.52,1.52c0,0.838,0.682,1.521,1.52,1.521c0.838,0,1.521-0.682,1.521-1.521C9.15,6.792,8.468,6.11,7.629,6.11M7.629,8.281c-0.358,0-0.651-0.292-0.651-0.651c0-0.358,0.292-0.651,0.651-0.651c0.359,0,0.651,0.292,0.651,0.651C8.281,7.988,7.988,8.281,7.629,8.281 M12.375,10.855c-0.838,0-1.521,0.682-1.521,1.52s0.683,1.52,1.521,1.52s1.52-0.682,1.52-1.52S13.213,10.855,12.375,10.855 M12.375,13.026c-0.358,0-0.652-0.294-0.652-0.651c0-0.358,0.294-0.652,0.652-0.652c0.357,0,0.65,0.294,0.65,0.652C13.025,12.732,12.732,13.026,12.375,13.026 M12.389,6.092c-0.839,0-1.52,0.682-1.52,1.52c0,0.838,0.681,1.52,1.52,1.52c0.838,0,1.52-0.681,1.52-1.52C13.908,6.774,13.227,6.092,12.389,6.092 M12.389,8.263c-0.36,0-0.652-0.293-0.652-0.651c0-0.359,0.292-0.651,0.652-0.651c0.357,0,0.65,0.292,0.65,0.651C13.039,7.97,12.746,8.263,12.389,8.263"></path>
        </svg>
      </div>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" v-if="shortlist == false">

        <input class="form-control" v-model="whiskeysearch" placeholder="위스키 이름 검색">
          <div class="col" v-for="whiskey in filteredWhiskey" :key="whiskey.id">
            <Listitem :whiskey="whiskey" />
          </div>
      </div>
      <div class="row" v-if="shortlist == true">
        <input class="form-control mb-3" v-model="whiskeysearch" placeholder="위스키 이름 검색">
          <div class="row mb-3" v-for="whiskey in filteredWhiskey" :key="whiskey.id">
            <FullListitem :whiskey="whiskey" />
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import Listitem from '@/components/Listitem'
import FullListitem from '@/components/FullListitem'
import { mapState, mapActions } from 'vuex'
// import axios from 'axios'

export default {
  name: 'List',
  data () {
    return {
      whiskeysearch: '',
      // whiskeys: [],
      shortlist: false
    }
  },
  components: {
    Listitem: Listitem,
    FullListitem: FullListitem
  },
  created () {
    this.fetchWhiskeysList()
  },
  computed: {
    ...mapState(['whiskeyslist']),
    // 위스키 정보 데이터 중 '제품명' 필드에 검색어가 포함되어 있는지 확인 후 참이면 반환
    filteredWhiskey () {
      return this.$store.state.whiskeyslist.filter((data) => {
        return data.제품명.toUpperCase().includes(this.whiskeysearch.toUpperCase())
      })
    }
  },
  methods: {
    ...mapActions(['fetchWhiskeysList']),
    viewShortList () {
      this.shortlist = false
    },
    viewFullList () {
      this.shortlist = true
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
.right-menu {
  text-align: right;
}
</style>
