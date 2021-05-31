<template>
  <div id="app">
    <div id="header">
      <Header />
    </div>
      <router-view :key="$route.fullPath" :whiskeys="whiskeys" />

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
  },
  computed: {
  },
  created () {
    // axios.get('/whiskey')
    //   .then((res) => {
    //     this.whiskeys = res.data
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
    this.$store.dispatch('fetchWhiskeys')
    this.$store.dispatch('getProfile')
  }
}
</script>
<style>
body{
  margin: 0px;
  padding: 0px;
  background: #fff;
  height: 100%;
  overflow: auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  padding: 0px;
  background: #fff;
  height: 100%;
  overflow: auto;
}
.header{
  margin: 0px;
}
#nav {
  padding: 0px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.black-bg {
  width : 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  position: fixed;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}
.title{
  font-family: 'Exo 2', sans-serif;
}
.white-bg {
  color: #000;
  top: 50%;
  left: 50%;
  width: 60%;
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  z-index: 3;
  font-weight: 800;
}
.white-bg .contact-us-title{
  width:100%;
  color: #fff;
  background: darkslateblue;
}
@media(max-width: 720px){
  .black-bg {
    width : 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    position: fixed;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }
  .title{
    font-family: 'Exo 2', sans-serif;
  }
  .white-bg {
    color: #000;
    top: 50%;
    left: 50%;
    width: 90%;
    background-color: #fff;
    border-radius: 8px;
    padding: 10px;
    z-index: 3;
    font-size: 14px;
  }
}
.contactModal-enter-from {
    opacity: 0;
}
.contactModal-enter-active {
    transition: all 1s;
}
.contactModal-enter-to{
    opacity: 1;
}
.contactModal-leave-from {
  opacity: 1;
}
.contactModal-leave-active {
  transition: all 1s;
}
.contactModal-leave-to{
  opacity: 0;
}

/* 전환효과 (Fade) */
.fade-enter-active, .fade-leave-active { transition: opacity 0.5s; }
.fade-enter, .fade-leave-to { opacity: 0.1; }

.hr-sect{display:flex;flex-basis:100%;align-items:center;color:rgba(46, 45, 45, 0.9);font-size:17px;margin:30px 0}
.hr-sect:after,.hr-sect:before{content:"";flex-grow:1;background:rgba(33, 33, 33, 0.35);height:1px;font-size:0;line-height:0;margin:0 16px}
.hr-sect-bold{display:flex;flex-basis:100%;align-items:center;color:rgba(46, 45, 45, 0.9);font-size:23px;margin:30px 0}
.hr-sect-bold:after,.hr-sect-bold:before{content:"";flex-grow:1;background:rgba(33, 33, 33, 0.35);height:2px;font-size:0;line-height:0;margin:0 16px}

</style>
