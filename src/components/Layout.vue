<template>
  <v-app>
    <main-header/>
    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
    <v-footer padless>
      <main-footer/>
    </v-footer>
  </v-app>
</template>

<script>
// import contents from './content.vue'
import MainHeader from './header'
import MainFooter from './footer'

export default {
  name: 'Layout',
  components: {
    MainHeader,
    // contents,
    MainFooter
  }
}
</script>

<style lang="scss">
.abc{
  &:after{content:''; display: block; clear:both;}
  >a{float:left;}
  h1{font-size:1.5rem;}
  .abc_a{
    float:right; width:30px; height:30px;
    span{display:block; width:100%; height: 8px; border-bottom:2px solid #ddd;}
  }

}

</style>
