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
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          <router-link to = "/dojomap">
            找場館
          </router-link>
        </h1>
        <p class="subheading font-weight-regular">
          找到離家近的優質健身場館
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data: () => ({
    }),
  }
</script>

<style type="text/css" scoped="">
  
</style>
