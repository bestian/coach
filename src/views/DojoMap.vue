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
  props: ['dojos'],
  data() {
    return {
    }
  }
};
</script>

<style type="text/css" scoped="">
  
</style>