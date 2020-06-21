<template>

  <v-bottom-navigation
    :value="activeBtn"
    grow
    fixed
    color="teal"
  >
    <v-btn>

      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn>
      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn>
      <span/>
    </v-btn>

    <v-btn class="todo-plus">
      <span>+</span>

    </v-btn>

    <v-btn>
      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn>
      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>

</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      activeBtn: null
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
