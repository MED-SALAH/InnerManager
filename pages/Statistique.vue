<template lang="html">
  <v-layout row wrap>
    <v-flex xs12 md8 class="ma-3">
      <v-card>
        <div >
          <LineChart :data="datatou" :options="options"></LineChart>

        </div>
      </v-card>
    </v-flex>

    <v-flex text-xs-center xs12 md8 class="ma-3">
      <v-card>
        <TestBare></TestBare>
        <v-divider></v-divider>
        <v-card-actions>
        <v-btn flat color="info">Plus De Détail</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs12>
      <v-card>

            <v-btn @click="increm" color="primary">Entreprise-1-</v-btn>
            <v-btn @click="increm" color="primary">Entreprise-1-</v-btn>
            <v-flex xs12
            v-for="(item, id) in $store.state.compan" :key="id"
            
            >
              <h1>{{item.name}} ==> {{item.water}}</h1>
              <h1>{{selectComp}}</h1>

            </v-flex>


            <v-flex text-xs-center xs12>
              <h1>Vuex</h1>
              <v-divider></v-divider>
              <v-btn @click="increm" color="primary">Incrementer</v-btn>
              <v-btn @click="decrem" color="secondary">Decrementer</v-btn>
              <v-btn color="secondary" v-for="(item, i) in $store.state.compan" :key="i">entreprise</v-btn>
              <strong><Result/></strong>
              <h2>{{$store.state.counter}}</h2>
              <v-text-field
                name="name"
                label="label"
                v-model="value"
                single-line
                @vtex
              ></v-text-field>
              <h3>ca : {{value}}</h3>
              <hr>
              <h3>icici {{getcounter}}</h3>
              <hr>
              <h2>{{vlcom}}</h2>
              <!-- <Company :test='test' :testt='testt'></Company> -->

            </v-flex>
      </v-card>

    </v-flex>

  </v-layout>


</template>

<script>
import LineChart from '~/components/line-chart.js'
import TestBare from '~/components/testbare.vue'
// import Conter from '~/components/Conter.vue'
import Result from '~/components/Result.vue'
// import Company from '~/models/company.js'
import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  components: {
    LineChart,
    TestBare,
    // Conter,
    Result
    // Company
  },
  mounted () {
    console.log(this.$store.state.compan)
    this.$store.dispatch('fetchAll')
    console.log(this.$store.state.compan)
    // return this.$store.state.selectedComp
    console.log(this.$store.state.selectedComp)
  },
  methods: {
    ...mapMutations([
      'increm',
      'decrem'
    ])
  },
  computed: {
    ...mapMutations([
      'selectComp'
    ]),
    ...mapGetters([
      'getcounter'
    ]),
    ...mapActions([
      'fetchAll'
    ]),
    value: {
      get () {
        return this.$store.state.counter
      }
      // set (value) {
      //   return this.$store.dispatch('updatevalue', value)
      // }
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
        datasets: [
          {
            label: 'Electricité',
            // backgroundColor: '#ff8c00',
            borderColor: '#FC2525',
            pointBackgroundColor: 'white',
            // backgroundColor: '#FC2525',
            borderWidth: 1,
            pointBorderColor: 'white',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
          },
          {
            label: 'Gaz',
            // backgroundColor: '#ff8c00',
            borderColor: '#ff8c00',
            pointBackgroundColor: 'white',
            // backgroundColor: '#FC2525',
            borderWidth: 1,
            pointBorderColor: 'white',
            data: [20, 50, 42, 70, 40, 10, 20, 35, 22, 65, 53, 70]
          },
          {
            label: 'Eaux',
            // backgroundColor: '#ff8c00',
            borderColor: '#ff8c00',
            pointBackgroundColor: 'white',
            // backgroundColor: '#FC2525',
            borderWidth: 1,
            pointBorderColor: 'white',
            data: [10, 20, 70, 30, 25, 50, 33, 12, 62, 14, 33, 64]
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
