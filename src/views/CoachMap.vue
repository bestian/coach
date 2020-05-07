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
  props: ['coaches'],
  data() {
    return {
    }
  }
};
</script>

<style type="text/css" scoped="">
  
</style>