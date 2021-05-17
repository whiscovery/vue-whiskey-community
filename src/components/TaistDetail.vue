<template>
  <div class="taistdetail">
      <h4>테이스팅 세부 점수</h4>
      <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">바디감</th>
            <th scope="col">달콤함</th>
            <th scope="col">피트</th>
            <th scope="col">스파이스</th>
            <th scope="col">과일/꽃</th>
            <th scope="col">견과류</th>
            <th scope="col">몰트</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="point,i in whiskey.테이스팅점수" :key="i">
            <th scope="row">{{i}}</th>
            <td>{{point[0]}}</td>
            <td>{{point[1]}}</td>
            <td>{{point[2]}}</td>
            <td>{{point[3]}}</td>
            <td>{{point[4]}}</td>
            <td>{{point[5]}}</td>
            <td>{{point[6]}}</td>
            </tr>
        </tbody>
    </table>
      <button @click="$emit('closeModal')">창닫기</button>
  </div>
</template>

<script>
export default {
  name: 'TaistDetail',
  props: {
    whiskey: Array
  }
}
</script>

<style>
.taistdetail{
    font-size: 15px;
    font-weight: 300;
}
</style>
