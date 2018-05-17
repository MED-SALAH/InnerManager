<template lang="html">
  <div >
    <BarChart :data="datatou" :options="options"></BarChart>

  </div>

</template>

<script>
import BarChart from '~/components/bar-chart.js'
export default {
  components: {
    BarChart
  },
  data () {
    return {
      datatou: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Electricite',
            backgroundColor: '#f87979',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
          },
          {
            label: 'Gaz',
            backgroundColor: '#0000ff',
            data: [12, 56, 90, 60, 54, 87, 46, 30, 10, 50, 21, 33]
          },
          {
            label: 'Eaux',
            backgroundColor: '#ff00bf',
            data: [14, 80, 60, 70, 36, 50, 70, 10, 20, 80, 90, 66]
          }
        ]
      },
      options: {
      }
    }
  }
}
</script>

<style lang="css">
</style>
