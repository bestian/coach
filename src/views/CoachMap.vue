<template>
  <v-container>
    <my-map :data="coaches"></my-map>
  </v-container>
</template>

<script>
// @ is an alias to /src
import MyMap from '@/components/Map.vue'

export default {
  name: "Coachmap",
  components: {
    MyMap
  },
  data() {
    return {
      coaches: [
        { name: '周亮', latlng: [25.105497, 121.597366], img: 'https://i.imgur.com/62FAmJj.jpg', des: '這是比較長的介紹' }
      ]
    }
  },
  mounted () {
    var vm = this
    this.$http.get('https://bestian.github.io/coach/coaches.json').then(response => {
        vm.coaches = response.data
    })
  }
};
</script>

<style type="text/css" scoped="">
  
</style>