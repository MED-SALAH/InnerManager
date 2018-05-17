import { Radar, mixins } from 'vue-chartjs'

export default {
  extends: Radar,
  mixins: [mixins.reactiveProp],
  props: ['data', 'options'],
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
