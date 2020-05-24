<template>
  <div class="post-body">
    <nuxt-content :document="content" />
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped>

</style>
