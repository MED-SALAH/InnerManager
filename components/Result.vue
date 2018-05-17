<template lang="html">
  <v-layout>
    <p>Conter est : {{counter}}</p>
  </v-layout>

</template>

<script>
export default {
  computed: {
    counter () {
      return this.$store.state.counter
    }
  }
}
</script>

<style lang="css">
</style>
