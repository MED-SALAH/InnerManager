<template>
  <v-layout row wrap>
    <v-flex xs12 text-xs-center class="ma-3">
      <h2 class="blue lighten-3">Etat Generale</h2><br>
      <v-divider></v-divider>
    </v-flex>
    <v-flex xs12>
      <v-menu class="masquer" offset-y>
      <v-btn slot="activator" color="primary" dark>Choisire une entreprise</v-btn>
      <v-list>
        <v-list-tile v-for="(item, i) in Entrep" :key="i" @click="" >
          <v-list-tile-title>{{ item.nomB }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-btn color="teal">Generale</v-btn>
    <v-btn color="purple">Entreprise-1-</v-btn>
    <v-btn color="red">Entreprise-2-</v-btn>
    <v-divider></v-divider>
    </v-flex>
      <v-flex xs12 md3 v-for="(item,i) in Etcom" :key="i" row wrap class="ma-3">
        <EtatComp :clicker="item.clicker" :color="item.color" :nicon="item.mcon"
         :text="$store.state[item.texte]" :valeur1="$store.state[item.val1]" :valeur2="item.val2"
          ></EtatComp>
      </v-flex>
      <v-flex xs12 md3 v-for='(item,i) in items' :key="i" text-xs-center class="ma-3">
                  <v-card color="gray">
                    <v-flex xs8 offset-xs1>
                      <h2>{{ item.titrecom }}</h2>
                      <Doughnout :data="item.datadou" :options="item.options">
                      </Doughnout>
                    </v-flex>
                    <v-flex xs3 offset-xs1>
                      <span>{{item.unit}}</span>
                    </v-flex>
                    <v-card-actions>
                    <v-btn outline color="deep-orange">Plus De Détail</v-btn>
                    </v-card-actions>
                  </v-card>
       </v-flex>
       <v-flex xs12 md3 text-xs-center class="ma-3" v-for='(item,i) in itemsr' :key="i">
         <v-card>
           <v-flex xs8 offset-xs1>
             <h3>{{ item.text }}</h3>
             <RotProgress :bicon="item.bicon" :unit="item.unit" :value="item.valeur" :color="item.col" :colorr="item.coul" :size="100" :width="15">{{item.valeur}}
             </RotProgress>
           </v-flex>
           <v-card-actions>
           <v-btn outline color="deep-orange">Plus De Détail</v-btn>
           </v-card-actions>
         </v-card>
       </v-flex>
       <v-flex xs12 md3 text-xs-center class="ma-3" v-for='item in Etcom'>
         <v-card>
           <v-flex xs8 offset-xs1>
             <h3>{{ item.text }}</h3>
             <v-progress-linear :color="item.col" v-model="$store.state[item.val1]"></v-progress-linear>
             <h2>{{$store.state[item.val1]}} %</h2>
           </v-flex>
           <v-card-actions>
           <v-btn outline color="deep-orange">Plus De Détail</v-btn>
           </v-card-actions>
         </v-card>
       </v-flex>
  </v-layout>

</template>

<script>
import Doughnout from '~/components/doughnut-chart.js'
import EtatComp from '~/components/EtatComp.vue'
import RotProgress from '~/components/rotProgress.vue'

export default {
  components: {
    Doughnout,
    EtatComp,
    RotProgress
  },
  data () {
    return {
      valueDeterminate: 50,
      Entrep: [
        {nomB: 'Entreprise 1'},
        {nomB: 'Entreprise 2'},
        {nomB: 'Entreprise 3'},
        {nomB: 'Entreprise 4'}
      ],
      itemsr: [
        {text: 'Progress 1', valeur: 30, unit: '%', bicon: 'opacity', coul: 'purple--text', col: 'teal'},
        {text: 'Progress 2', valeur: 60, unit: 'KWH', bicon: 'ac_unit', coul: 'red--text', col: 'purple darken-3'},
        {text: 'Progress 3', valeur: 80, unit: 'Gbts', bicon: 'wifi', coul: 'black--text', col: 'red accent-4'}
      ],
      Etcom: [
        {clicker: () => this.$store.commit('decrementrep'), color: 'red--text', mcon: 'domain', texte: 'list', val1: 'entrep', val2: 'Entreprise', nomB: 'Choisire Entreprise'},
        {clicker: () => this.$store.commit('decremzone'), color: 'teal--text lighten-4', mcon: 'place', texte: 'Zones', val1: 'zone', val2: 'Zones'},
        {clicker: () => this.$store.commit('decremcapt'), color: 'purple--text darken-2', mcon: 'router', texte: 'Capteurs', val1: 'capt', val2: 'Capteurs installés'}
      ],
      items: [
        {
          titrecom: 'Consomation Electrique',
          unit: 'Kwh',
          datadou: {
            datasets: [{
              label: 'OK',
              data: [23, 42, 35],
              backgroundColor: ['#EF5350', '#EC407A', '#AB47BC'],
              hoverBackgroundColor: ['#D50000', '#880E4F', '#4A148C']
            }]
          },
          options: {
            title: {
              display: true,
              position: 'bottom'
              // text: 'Consomation'
            },
            cutoutPercentage: 20
          }
        },
        {
          titrecom: 'Consomation Eaux',
          unit: 'Litre',
          datadou: {
            datasets: [{
              label: 'OK',
              data: [18, 19, 63],
              backgroundColor: ['#5E35B1', '#3949AB', '#1E88E5'],
              hoverBackgroundColor: ['#311B92', '#1A237E', '#0D47A1']
            }]
          },
          options: {
            title: {
              display: true,
              position: 'bottom'
              // text: 'Consomation'
            },
            cutoutPercentage: 50
          }
        },
        {
          titrecom: 'Consomation Gaz',
          unit: 'Kwh',
          datadou: {
            // labels: ['A', 'B', 'C'],
            datasets: [{
              label: 'OK',
              data: [42, 19, 39],
              backgroundColor: ['#00E676', '#689F38', '#00796B'],
              hoverBackgroundColor: ['#00C853', '#33691E', '#004D40']
            }]
          },
          options: {
            title: {
              display: true,
              position: 'bottom'
              // text: 'Consomation'
            },
            cutoutPercentage: 0
          }
        }
      ]
    }
  }
}
</script>
