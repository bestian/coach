<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          <router-link to = "/coachmap">
            找教練
          </router-link>
        </h1>
        <p class="subheading font-weight-regular">
          找到離家近的優質健身教練
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="4"></v-col>
      <v-col sm="4">
        <v-btn text @click = "setKey(s)"  v-for = "s in skills" :key="s">
          <v-icon>mdi-tag</v-icon>
            {{ s }}</v-btn>
      </v-col>
      <v-col sm="4"></v-col>
    </v-row>
    <v-row>
      <v-col class="md-4" v-for = "c in search(coaches, myKey).slice(0, 4)" :key="c.name">
        <v-card
          class="mx-auto"
          max-width="344"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">{{ c.addr }}</div>
              <v-list-item-title class="headline mb-1">{{ c.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ c.des }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="80"
              color="grey"
            ><img :src="c.img"></v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn text v-for = "s in c.skills" :key="s" @click = "setKey(s)">
              <v-icon>mdi-tag</v-icon>
              {{ s }}</v-btn>
            <v-btn text link :href = "c.site" target="_blank">前往個人頁</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: ['coaches', 'myKey', 'skills'],
    data: () => ({
    }),
    methods: {
      setKey (k) {
        this.$emit('setKey', k)
      },
      search (list, k) {
        var re = new RegExp(k)
        var l = list.filter((o) => { 
          let s = JSON.stringify(o)
          return re.test(s)
        })
        return l
      }
    }
  }
</script>

<style type="text/css" scoped="">
  
</style>
