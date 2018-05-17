<template lang="html">
      <v-toolbar
      color="blue darken-3"
        dark
        app
        fixed
      >
        <v-toolbar-title style="width: 300px" class="white--text">
        <v-toolbar-side-icon @clik.stop='draww'></v-toolbar-side-icon>
        <span>Nom-Societe</span>
        </v-toolbar-title>


        <v-spacer></v-spacer>

       <v-text-field
         placeholder="Search..."
         single-line
         append-icon="search"
         :append-icon-cb="() => {}"
         color="white"
         hide-details
       ></v-text-field>

     <v-btn icon>
       <v-icon>apps</v-icon>
     </v-btn>
     <v-btn icon>
       <v-badge color="red">
             <span slot="badge" color="red">10</span>
             <v-icon large color="grey lighten-1">notifications</v-icon>
           </v-badge>
     </v-btn>

      </v-toolbar>


</template>
<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      required: false
    }
  },
  methods: {
    draww () {
      this.drawer = true
      this.drawer.$emit('changer', this.drawer)
    }
  }
}
</script>

<style lang="css">
</style>
