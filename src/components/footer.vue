<template>

  <v-bottom-navigation
    :value="activeBtn"
    grow
    fixed
    color="teal"
  >
    <v-btn to="Main">
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn to="Calendar">
      <v-icon>mdi-calendar-month</v-icon>
    </v-btn>

    <v-btn>
      <span/>
    </v-btn>

    <v-btn class="todo-plus">
      <span>+</span>

    </v-btn>

    <v-btn>
      <v-icon>mdi-notebook-edit</v-icon>
    </v-btn>

    <v-btn>
      <v-icon>mdi-cog</v-icon>
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
