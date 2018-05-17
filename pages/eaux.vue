<template lang="html">
  <v-layout row wrap>
    <v-flex xs12 md8 class="ma-3">
      <div >
        <LineChart :data="datatou" :options="options"></LineChart>

      </div>
    </v-flex>

    <v-flex text-xs-center xs12 md3 class="ma-3">
      <v-card>
        <TestBare></TestBare>
        <v-divider></v-divider>
        <v-card-actions>
        <v-btn flat color="info">Plus De Détail</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex text-xs-center xs12>
      <h1>Vuex</h1>
      <v-divider></v-divider>
      <v-btn @click="increm" color="primary">Incrementer</v-btn>
      <v-btn @click="decrem" color="secondary">Decrementer</v-btn>
      <strong><Result/></strong>
      <h2>{{$store.state.counter}}</h2>
      <v-text-field
        name="name"
        label="label"
        v-model="value"
        single-line
        @vtex
      ></v-text-field>
      <h3>{{value}}</h3>
      <hr>
      <h3>icici {{getcounter}}</h3>
      <hr>
      <h2>{{vlcom}}</h2>
      <!-- <Company :test='test' :testt='testt'></Company> -->

    </v-flex>
  </v-layout>


</template>

<script>
import LineChart from '~/components/line-chart.js'
import TestBare from '~/components/testbare.vue'
// import Conter from '~/components/Conter.vue'
import Result from '~/components/Result.vue'
// import Company from '~/models/company.js'
import { mapMutations, mapGetters } from 'vuex'

export default {
  components: {
    LineChart,
    TestBare,
    // Conter,
    Result
    // Company
  },
  methods: {
    ...mapMutations([
      'increm',
      'decrem'
    ])
  },
  computed: {
    ...mapGetters([
      'getcounter'
    ]),
    value: {
      get () {
        return this.$store.state.counter
      },
      set (value) {
        return this.$store.dispatch('updatevalue', value)
      }
    },
    vlcom: {
      get () {
        return this.$store.state.company
      }
    }
  },
  data () {
    return {
      test: 'salah',
      testt: 'salahh',
      datatou: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
          label: 'Planifier',
          backgroundColor: '#ff8c00',
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        }]
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
              stepSize: 10,
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
