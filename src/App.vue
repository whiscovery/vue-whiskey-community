<template>
  <div id="app">
    <div id="header">
      <Header />
    </div>
    <transition name="fade">
      <router-view :whiskeys="whiskeys" />
    </transition>
  </div>
</template>

<script>
import Header from './components/Header'
// import whiskeys from '@/assets/data.js'
// import axios from 'axios'

export default {
  name: 'App',
  components: {
    Header: Header
  },
  data () {
    return {
      whiskeys: []
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
/* 전환효과 (Fade) */
.fade-enter-active, .fade-leave-active { transition: opacity 0.5s; }
.fade-enter, .fade-leave-to { opacity: 0.1; }
</style>
