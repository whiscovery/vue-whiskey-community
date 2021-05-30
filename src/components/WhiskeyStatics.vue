<div><PolarArea :chartdata="datas" :options="options" /></div>

<script>
import { PolarArea } from 'vue-chartjs'

export default {
  name: 'WhiskeyStatics',
  components: {
    PolarArea: PolarArea
  },
  extends: PolarArea,
  props: {
    테이스팅점수: Array
  },
  data () {
    return {
      tempdata: [],
      datas: {
        datasets: [{
          label: '# of Votes',
          data: this.테이스팅점수,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }],
        labels: ['바디감', '달콤함', '피트', '스파이스', '과일/꽃', '견과류', '몰트']
      },
      options: { responsive: true, maintainAspectRatio: false }
    }
  },
  mounted () {
    this.renderChart(this.datas, this.options)
  }

}
</script>

<style>
body {
  background: #20262E;
  padding: 0px;
  font-family: Helvetica;
}

li {
  margin: 8px 0;
}

h2 {
  font-weight: bold;
  margin-bottom: 15px;
}

del {
  color: rgba(0, 0, 0, 0.3);
}
</style>
