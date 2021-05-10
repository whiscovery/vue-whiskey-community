<template>
  <div id="app">
    <div id="header">
      <Header />
    </div>
    <router-view :whiskeys="whiskeys" />
  </div>
</template>

<script>
import Header from './components/Header'
import whiskeys from '@/assets/data.js'

export default {
  name: 'App',
  components: {
    Header: Header
  },
  data () {
    return {
      whiskeys: whiskeys
      // whiskeylist: ['Woodford Reserve Straight Bourbon Whiskey', 'Wild Turkey 101']
    }
  }

}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
