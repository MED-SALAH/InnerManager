<template>

    <v-navigation-drawer stateless hide-overlay>
      <v-list >
           <template v-for="item in items">
             <v-layout
               row
               v-if="item.heading"
               align-center
               :key="item.heading"
             >
           </v-layout>
           <v-list-group
             v-else-if="item.children"
             v-model="item.model"
             :key="item.text"
             :prepend-icon="item.model ? item.icon : item['icon-alt']"
             append-icon=""
           >
             <v-list-tile slot="activator">

               <v-list-tile-content>
                 <v-list-tile-title>
                   {{ item.text }}
                 </v-list-tile-title>
               </v-list-tile-content>
             </v-list-tile>


             <v-list-tile
               v-for="(child, i) in item.children"
               :key="i"
               @click=""
             >
             <v-list-tile-action>
           <v-btn icon @click.native.stop="mini = !mini">
             <v-icon>keyboard_arrow_down</v-icon>
           </v-btn>
         </v-list-tile-action>

               <v-list-tile-action v-if="child.icon">
                 <v-icon>{{ child.icon }}</v-icon>
               </v-list-tile-action>
               <v-list-tile-content>
                 <v-list-tile-title>
                   {{ child.text }}
                 </v-list-tile-title>
               </v-list-tile-content>
             </v-list-tile>
           </v-list-group>

             <v-list-tile v-else @click="" :key="item.text">
               <v-list-tile-action>
                 <v-icon>{{ item.icon }}</v-icon>
               </v-list-tile-action>
               <v-list-tile-content>
                 <v-list-tile-title>
                   {{ item.text }}
                 </v-list-tile-title>
               </v-list-tile-content>
             </v-list-tile>
           </template>
         </v-list>
    </v-navigation-drawer>



</template>

<script>
export default{
  data () {
    return {
      drawer: '',
      mini: true,
      right: null,
      items: [
        { icon: 'dashboard', text: 'Tableau de Bord' },
        { icon: 'history', text: 'Consomation' },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'Type d inergie',
          model: false,
          children: [
            { icon: 'event', text: 'Electricité' },
            { icon: 'home', text: 'Gaz' },
            { icon: 'map', text: 'Eaux' },
            { icon: 'icon-alt', text: 'Internet' },
            { icon: 'business', text: 'Autre' }
          ]
        },
        { icon: 'settings', text: 'Parrametre' },
        { icon: 'help', text: 'Help' },
        { icon: 'keyboard', text: 'Nous contacter' }
      ]
    }
  }
}
</script>
