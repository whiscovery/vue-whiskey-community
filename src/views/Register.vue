<template>
<div class="wrapper mt-5">
    <div class="LoginBox mt-5 p-3">
    <form @submit.prevent="registerUser">
        <h4 class="text-center mt-3">가입하기</h4>
        <div class="row mb-1 mt-2 p-3">
            <label for="email" class="col-sm-3 col-form-label">Email</label>
            <div class="col-sm-9">
            <input type="email" class="form-control" id="email" v-model="email">
            </div>
        </div>
        <div class="row mb-1 mt-2 p-3">
            <label for="nick" class="col-sm-3 col-form-label">닉네임</label>
            <div class="col-sm-9">
            <input type="text" class="form-control" id="nick" v-model="nick">
            </div>
        </div>
        <div class="row mb-1 p-3">
            <label for="password" class="col-sm-3 col-form-label">암호</label>
            <div class="col-sm-9">
            <input type="password" class="form-control" id="password" v-model="password">
            </div>
        </div>
        <div class="row mb-4 p-3">
            <label for="confirm_password" class="col-sm-3 col-form-label">암호재입력</label>
            <div class="col-sm-9">
            <input type="password" class="form-control" id="confirm_password" v-model="confirm_password">
            </div>
        </div>
        <div class="row mb-4 p-3">
            <button class="btn btn-primary">가입하기</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <router-link to="/login" class="card-link">Already have an account?</router-link>
        </div>
    </form>
    </div>

</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Register',
  data () {
      return {
        email: '',
        nick: '',
        password: '',
        confirm_password: '',
        checknick: true,
        checkemail: true
      }
  },
  methods: {
      ...mapActions(['register']),
      registerUser () {
          const user = {
              nick: this.nick,
              password: this.password,
              confirm_password: this.confirm_password,
              email: this.email,
              checknick: this.checknick,
              checkemail: this.checkemail
          }
          if (!this.nick || !this.password || !this.confirm_password || !this.email || !this.checknick || !this.checkemail) {
              alert('모든 항목을 기입해주세요.')
          } else {
            this.register(user).then(res => {
                if (res.data.success) {
                    alert('가입되셨습니다. 로그인해주세요.')
                    this.$router.push('login')
                }
            })
          }
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
