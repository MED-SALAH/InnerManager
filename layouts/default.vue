<template>
  <v-app>
    <v-toolbar
      dark
      app
      fixed
      :clipped-left="clipped"
    >
      <v-toolbar-title style="width: 300px" class="white--text">
      <v-toolbar-side-icon @click.stop='drawer = !drawer'></v-toolbar-side-icon>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>web</v-icon>
      </v-btn>
      </v-toolbar-title>
      <v-toolbar-items>
        <v-btn  light flat color="white" to="/">Acceuil</v-btn>
        <v-btn  flat color="white" to="/Statistique">Statistique</v-btn>
        <v-btn  flat color="white" to="/Autre">Autre</v-btn>
      </v-toolbar-items>

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
       <v-icon>more_vert</v-icon>
     </v-btn>
   <v-btn icon>
     <v-icon>apps</v-icon>
   </v-btn>
   <v-btn icon>
     <v-icon large color="grey lighten-1">notifications</v-icon>
   </v-btn>

    </v-toolbar>

    <v-navigation-drawer
    dark
    :clipped="clipped"
    v-model="drawer"
    fixed
    app
    >
      <v-list>
          <v-layout  justify-center>
            <v-list-tile-avatar size="50">
              <v-avatar size="50" class="red">
                <img src="/akeros-blanc-85x85.jpg" alt="alt">
              </v-avatar>
                <!-- <img text-xs-center src="/akeros-blanc-85x85.jpg"> -->
            </v-list-tile-avatar>
          </v-layout>

           <template v-for="item in items">
             <v-layout
               row
               v-if="item.heading"
               align-center
               :key="item.heading"
               :href="item.href"
               exact
             >
           </v-layout>
           <v-list-group
             v-else-if="item.children"
             v-model="item.model"
             :key="item.text"
             :prepend-icon="item.model ? item.icon : item['icon-alt']"
             append-icon=""
             :href="item.href"

           >
             <v-list-tile slot="activator" :href="item.href">


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



<v-content>
<v-container>
  <nuxt/>
</v-container>

</v-content>
<v-footer fixed="fixed" dark class="white--text"  app>
    <div>Tous Les droit reserver &copy; {{ new Date().getDay()}}/{{ new Date().getMonth()}}/{{ new Date().getFullYear() }} </div>
</v-footer>

</v-app>
</template>
<script type="text/javascript">
import Footer from '~/components/Footer.vue'
export default {
  components: {
    Footer
  },
  data () {
    return {
      clipped: true,
      drawer: true,
      right: null,
      items: [
        { icon: 'dashboard', text: 'Tableau de Bord', href: 'eaux' },
        { icon: 'history', text: 'Consomation' },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'Type d inergie',
          model: false,
          children: [
            { icon: 'event', text: 'Electricité', href: 'Autre' },
            { icon: 'home', text: 'Gaz' },
            { icon: 'map', text: 'Eaux' },
            { icon: 'people', text: 'Internet' },
            { icon: 'business', text: 'Autre' }
          ]
        },

        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'settings',
          text: 'Parametre',
          model: false,
          children: [
            { icon: 'event', text: 'Theme' },
            { icon: 'business', text: 'Langue' }
          ]
        },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'help',
          text: 'Help',
          model: false,
          children: [
            { icon: 'event', text: 'Documentation' },
            { icon: 'business', text: 'Guide User' }
          ]
        },
        { icon: 'keyboard', text: 'Nous contacter' }
      ]
    }
  }

}
</script>
