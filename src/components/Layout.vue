<template>
  <div>
    <router-view/>
    <foot/>
  </div>
</template>

<script>
// import contents from './content.vue'
import foot from './footer.vue'

export default {
  name: 'Layout',
  components: {
    // contents,
    foot
  }
}
</script>
