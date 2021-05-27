<template>
<div class="wrapper mt-5">
    <div class="LoginBox mt-5 p-3">
    <form>
        <h4 class="text-center mt-3">가입하기</h4>
        <div class="row mb-1 mt-2 p-3">
            <label for="email" class="col-sm-3 col-form-label">Email</label>
            <div class="col-sm-9">
            <input type="email" class="form-control" id="email">
            </div>
        </div>
        <div class="row mb-1 mt-2 p-3">
            <label for="nickname" class="col-sm-3 col-form-label">닉네임</label>
            <div class="col-sm-9">
            <input type="email" class="form-control" id="nickname">
            </div>
        </div>
        <div class="row mb-1 p-3">
            <label for="password" class="col-sm-3 col-form-label">암호</label>
            <div class="col-sm-9">
            <input type="password" class="form-control" id="password">
            </div>
        </div>
        <div class="row mb-4 p-3">
            <label for="repassword" class="col-sm-3 col-form-label">암호재입력</label>
            <div class="col-sm-9">
            <input type="password" class="form-control" id="repassword">
            </div>
        </div>
        <div class="row mb-4 p-3">
            <button type="submit" class="btn btn-primary">가입하기</button>
        </div>
    </form>
    </div>

</div>
</template>

<script>
export default {
  name: 'Register'
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
