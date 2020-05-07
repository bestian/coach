<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item link v-for = "n in navs" :key="n.to" :to = "n.to">
          <v-list-item-action>
            <v-icon>{{ n.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ n.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title> {{$route.name }}</v-toolbar-title>
      <v-divider></v-divider>
      <v-text-field
        :autofocus = "true"
        hide-details
        prepend-icon="search"
        single-line
        :clearable="true"
        placeholder="關鍵字搜詢"
        v-model = "myKey"
        list="skills"
      >{{myKey}}</v-text-field>
      <datalist id="skills">
        <option v-for = "s in skills" :key="s" :value="s"/>
      </datalist>
    </v-app-bar>
    <v-content>
      <router-view :coaches="coaches" :dojos="dojos" :myKey="myKey" @setKey="setKey"/>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    methods: {
      setKey (k) {
        this.myKey = k
      }
    },
    data: () => ({
      myKey: '',
      drawer: null,
      navs: [
        {to: '/', icon: 'mdi-home', title: '首頁'},
        {to: '/about', icon: 'mdi-information', title: '關於'},
        {to: '/coachmap', icon: 'mdi-map', title: '教練地圖'},
        {to: '/dojomap', icon: 'mdi-map', title: '場館地圖'}
      ],
      coaches: [],
      dojos: [],
      skills: []
    }),
    mounted () {
      var vm = this
      // this.$http.get('/coaches.json').then(response => {
      this.$http.get('https://bestian.github.io/coach/coaches.json').then(response => {
          vm.coaches = response.data
          for (var i = 0; i < vm.coaches.length; i++) {
            var skills = vm.coaches[i].skills
            for (var j = 0; j < skills.length; j++) {
              let s = skills[j]
               if (vm.skills.indexOf(s) == -1) { 
                 vm.skills.push(s)
               }
             } 
          }
      })
      // this.$http.get('/dojos.json').then(response => {
      this.$http.get('https://bestian.github.io/coach/dojos.json').then(response => {
          vm.dojos = response.data
      })
    }
  }
</script>

<style lang="scss">

@import "~leaflet.markercluster/dist/MarkerCluster.css";
@import "~leaflet.markercluster/dist/MarkerCluster.Default.css";
@import "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900";
@import "https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css";
@import "https://fonts.googleapis.com/css?family=Material+Icons";
@import '~vuetify/dist/vuetify.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.v-navigation-drawer {
  z-index: 999999;
}
a {
  text-decoration: none;
  cursor: pointer;
}

</style>
