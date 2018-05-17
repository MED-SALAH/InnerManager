<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card class="text-xs-center">
        <v-flex>
          <h3>Choisire une Date et heure</h3>
          <v-flex xs11>
              <v-menu
                ref="menu1"
                :close-on-content-click="false"
                v-model="menu1"
                :nudge-right="40"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                max-width="290px"
                min-width="290px"
              >
                <v-text-field
                  slot="activator"
                  v-model="dateFormatted"
                  label="Date"
                  hint="MM/DD/YYYY format"
                  persistent-hint
                  prepend-icon="event"
                  @blur="date = parseDate(dateFormatted)"
                ></v-text-field>
                <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
              </v-menu>
              <p>Format de la Date: <strong>{{ date }}</strong></p>
            </v-flex>
            <v-flex md5>
                <v-menu
                  ref="menu"
                  :close-on-content-click="false"
                  v-model="menu2"
                  :nudge-right="40"
                  :return-value.sync="time"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  max-width="290px"
                  min-width="290px"
                >
                  <v-text-field
                    slot="activator"
                    v-model="time"
                    label="Picker in menu"
                    prepend-icon="access_time"
                    readonly
                  ></v-text-field>
                  <v-time-picker v-model="time" @change="$refs.menu.save(time)"></v-time-picker>
                </v-menu>
              </v-flex>
        </v-flex>
      </v-card>
      <v-divider></v-divider> <v-divider></v-divider>
    </v-flex>
      <v-flex md5 v-for="(item,i) in items" :key="i" row wrap class="ma-3">
        <EtatComp :color='item.color' :nicon="item.mcon" :text="item.texte" :min="item.minn" :max="item.maxx" :degre="item.degret" :valeur1="item.val1" :valeur2="item.val2" :micon="item.micon" :cicon="item.cicon" :date="date"></EtatComp>
      </v-flex>
  </v-layout>
</template>

<script>
import EtatComp from '~/components/EtatComp2.vue'

export default {
  components: {
    EtatComp
  },
  computed: {
    computedDateFormatted () {
      return this.formatDate(this.date)
    }
  },
  watch: {
    date (val) {
      this.dateFormatted = this.formatDate(this.date)
    }
  },
  methods: {
    formatDate (date) {
      if (!date) return null
      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate (date) {
      if (!date) return null
      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    }
  },
  data () {
    return {
      date: null,
      dateFormatted: null,
      menu1: false,
      items: [
        {color: 'red--text', mcon: 'opacity', texte: 'Temperature', degret: '°C', val1: 24.5, val2: 'Entreprise', minn: -6, maxx: 41.3, micon: 'sort', cicon: 'memory'},
        {color: 'teal--text lighten-4', mcon: 'pool', texte: 'Humidité', degret: '%', val1: 57.7, val2: 'Zones', minn: 30, maxx: 100, micon: 'sort', cicon: 'memory'},
        {color: 'purple--text darken-2', mcon: 'place', texte: 'CO2', degret: 'ppm', val1: 515.7, val2: 'Capteurs installés', minn: 212, maxx: 650, micon: 'sort', cicon: 'memory'},
        {color: 'purple--text darken-2', mcon: 'wifi', texte: 'Débit', degret: 'db', val1: 38, val2: 'Capteurs installés', minn: 6, maxx: 56, micon: 'sort', cicon: 'memory'}
      ]
    }
  }
}
</script>

<style lang="css">
.load {
  margin: 11rem
}
</style>
