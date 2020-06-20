<template>

  <v-bottom-navigation
    :value="activeBtn"
    grow
    absolute
    color="teal"
  >
    <v-btn>
      <span>Recents</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn>
      <span>Recents</span>
      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn>
      <span>Favorites</span>
      <v-icon>mdi-calendar_today</v-icon>
    </v-btn>

    <v-btn>
      <span>Nearby</span>
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
