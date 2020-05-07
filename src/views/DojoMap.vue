<template>
  <v-container>
    <my-map :data="dojos"></my-map>
  </v-container>
</template>

<script>

import { latLng } from "leaflet";
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
        { name: '周亮', latlng: latLng(47.41422, -1.250482), img: 'https://i.imgur.com/62FAmJj.jpg', des: '這是比較長的介紹' }
      ]
    }
  }
};
</script>

<style type="text/css" scoped="">
  
</style>