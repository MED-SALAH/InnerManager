<template lang="html">
  <v-layout>
    <v-btn @click="increm" color="primary">Incrementer</v-btn>
    <v-btn @click="decrem" color="secondary">Decrementer</v-btn>
  </v-layout>

</template>

<script>
import { mapMutation } from 'vuex'

export default {
  methods: {
    ...mapMutation([
      'increm',
      'decrem'
    ])
  }
}
</script>

<style lang="css">
</style>
