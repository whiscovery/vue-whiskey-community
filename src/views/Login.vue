<template>
<div class="wrapper mt-5">
    <div class="LoginBox mt-5 p-3">
    <form @submit.prevent="btnOK(email, password)">
        <h4 class="text-center mt-3">Login</h4>
        <div class="row mb-1 mt-2 p-3">
            <label for="email" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
            <input type="email" class="form-control" v-model="email">
            </div>
        </div>
        <div class="row mb-4 p-3">
            <label for="password" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
            <input type="password" class="form-control" v-model="password">
            </div>
        </div>
        <div class="row mb-1 p-3">
            <button type="submit" class="btn btn-primary">로그인하기</button>
        </div>
        <div class="row mb-4 p-3">
            <small>계정이 없다면 <router-link to="/register">가입</router-link>하세요. 자신의 음주 기록을 확인할 수 있습니다.</small>
        </div>
    </form>
    </div>

</div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      msg: ''
    }
  },
  methods: {
      // redirect () {
      //   const { search } = window.location
      //   const tokens = search.replace(/^\?/, '').split('&')
      //   const { returnPath } = tokens.reduce((qs, tkn) => {
      //     const pair = tkn.split('=')
      //     qs[pair[0]] = decodeURIComponent(pair[1])
      //     return qs
      //   }, {})
      //   console.log(returnPath)
      //   this.$router.push(returnPath)
      //   },
        btnOK (email, password) {
            this.$store.dispatch('LOGIN', { email, password })
            .then()
            .catch(({ message }) => { this.msg = message })
        }
    }
}
</script>

<style scoped>
.wrapper{
    margin: 0px auto;
    max-width: 500px;
}
.LoginBox {
  width: 100%;
  margin: 30px 10jpx 0px 10px;
  padding: 15px 5px 15px 5px;
  height: fit-content;
  background: #ffffff;
  /* background: -webkit-linear-gradient(135deg, #fffcdc, #d9a7c7);  /* Chrome 10-25, Safari 5.1-6 */
  /* background: linear-gradient(135deg, #fffcdc, #d9a7c7); W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  box-shadow: 1px 2px 2px 0 rgba(0, 0, 0, 0.301);
  border-radius: 5px; /* 5px rounded corners */
}
</style>
