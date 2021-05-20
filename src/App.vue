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
body{
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}
.header{
  margin: 0px;
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

.hr-sect{display:flex;flex-basis:100%;align-items:center;color:rgba(46, 45, 45, 0.9);font-size:17px;margin:30px 0}
.hr-sect:after,.hr-sect:before{content:"";flex-grow:1;background:rgba(33, 33, 33, 0.35);height:1px;font-size:0;line-height:0;margin:0 16px}
.hr-sect-bold{display:flex;flex-basis:100%;align-items:center;color:rgba(46, 45, 45, 0.9);font-size:23px;margin:30px 0}
.hr-sect-bold:after,.hr-sect-bold:before{content:"";flex-grow:1;background:rgba(33, 33, 33, 0.35);height:2px;font-size:0;line-height:0;margin:0 16px}

</style>
