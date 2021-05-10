<template>
  <div class="wrapper">
    <div class="photo">
      <img :src="whiskey.이미지" class="photo-img">
    </div>
    <div class="report">
      <div class="report-desc">
        <div class="card text-dark bg-light mb-3">
          <div class="card-header">My drink</div>
          <div class="card-body">
            <p class="card-text"><span class="badge bg-dark report-item">2020-04-06</span><span class="badge bg-dark">2021-05-06</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhiskeyPhoto',
  props: {
    whiskey: Object
  }

}
</script>

<style scoped>
.wrapper {
  padding: 35px 0px 60px 0px;
  margin: 0px auto;
}
.photo-img {
  width: 100%;
  margin: 0px auto;
}
.report {
  margin: 0px auto;
  margin-top: 20px;
}
.report-desc{
  text-align: center;
}
.report-item{
  margin: 10px;
}
</style>
