<template>
  <v-container>
    <my-map :data="dojos"></my-map>
  </v-container>
</template>

<script>
// @ is an alias to /src
import MyMap from '@/components/Map.vue'

export default {
  name: "Dojomap",
  components: {
    MyMap
  },
  data() {
    return {
      dojos: [
        { name: '周亮', latlng: [25.105497, 121.597366], img: 'https://i.imgur.com/62FAmJj.jpg', des: '這是比較長的介紹' }
      ]
    }
  },
  mounted () {
    var vm = this
    this.$http.get('https://bestian.github.io/coach/dojos.json').then(response => {
        vm.dojos = response.data
    })
  }
};
</script>

<style type="text/css" scoped="">
  
</style>