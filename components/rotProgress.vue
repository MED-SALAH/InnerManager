<template lang="html">
  <v-layout row wrap>
    <v-progress-circular :value="value" :size="100" :width="13"
    :rotate="360" :color="color">
      {{value}} {{unit}}
      <v-icon x-small :class="colorr">{{ bicon }}</v-icon>
    </v-progress-circular>
  </v-layout>

</template>

<script>
export default {
  data () {
    return {
      interval: {}
    }
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    unit: {
      type: String,
      default: ''
    },
    bicon: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    colorr: {
      type: String,
      default: ''
    }
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  mounted () {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0)
      }
      this.value += 10
    }, 600)
  }
}
</script>

<style lang="css">
</style>
