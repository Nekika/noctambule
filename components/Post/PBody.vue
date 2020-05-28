<template>
  <div class="post-body">
    <nuxt-content :document="content" class="text-justify" />
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
  h2 {
    @apply mt-6 font-bold;
  }
  p, h3 {
    @apply mt-3;
  }
</style>
