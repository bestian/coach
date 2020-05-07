<template>
  <div class="home">
    <HelloWorld :coaches="coaches" @setKey="setKey" :myKey="myKey"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  props: ['coaches', 'myKey'],
  components: {
    HelloWorld
  },
  methods: {
    setKey (k) {
      this.$emit('setKey', k)
    }
  }
}
</script>
