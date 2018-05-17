<template lang="html">
    <v-card color="gray">
      <v-container>
        <v-layout row wrap>
          <v-flex xs2 offset-xs10>
            <v-avatar>
              <v-icon x-large :class="color">{{ nicon }}</v-icon>
            </v-avatar>
          </v-flex>
          <v-flex md5 class="text-xs-center">
            <strong><h1>{{valeur1}} {{ degre }}</h1></strong>
              <strong>{{text}}</strong><br>
          </v-flex>
        </v-layout>
      </v-container>
      <v-divider></v-divider>
      <v-container>
        <v-layout row wrap>
          <v-flex xs8>
            <v-layout row wrap>
              <v-flex xs2>
                <v-avatar>
                  <v-icon :class="color">{{ cicon }}</v-icon>
                </v-avatar>
              </v-flex>
              <v-flex xs8>
                <strong>Min:  {{min}} {{ degre }}</strong><br>
                <strong>Max:  {{max}} {{ degre }}</strong>
              </v-flex>
            </v-layout>

          </v-flex>
          <v-flex>
            <v-layout row wrap>
              <v-flex xs4>
                <v-avatar>
                  <v-icon :class="color">{{ micon }}</v-icon>
                </v-avatar>
              </v-flex>
              <v-flex xs8>
                <strong>{{date}}</strong><br>
                <strong>à 14:07</strong>
              </v-flex>
            </v-layout>

          </v-flex>
        </v-layout>


      </v-container>

    </v-card>
</template>

<script>
export default {
  props: {
    nicon: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    micon: {
      type: String,
      default: ''
    },
    cicon: {
      type: String,
      default: ''
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 0
    },
    degre: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'primary'
    },
    valeur1: {
      type: Number,
      default: 0
    },
    valeur2: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="css">
</style>
