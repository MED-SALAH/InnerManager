<template lang="html">
  <div >
    <LineChart :data="datatou" :options="options"></LineChart>

  </div>

</template>

<script>
import LineChart from '~/components/line-chart.js'
export default {
  components: {
    LineChart
  },
  data () {
    return {
      datatou: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Planifier',
            fill: false,
            // backgroundColor: '#ff8c00',
            borderColor: '#ff8c00',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
          },
          {
            label: 'Planifier',
            fill: false,
            // backgroundColor: '#ff8c00',
            borderColor: '#FC2525',
            data: [12, 56, 90, 60, 54, 87, 46, 30, 10, 50, 21, 33]
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            display: true,
            ticks: {
              beginAtZero: true,
              min: 0,
              max: 100,
              stepSize: 5,
              callback: function (label, index, labels) {
                return label + ' %' // just change the '$' to % for percentage
              }
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [ {
            display: false,
            gridLines: {
              display: false
            }
          }]
        }
      }
    }
  }
}
</script>

<style lang="css">
</style>
