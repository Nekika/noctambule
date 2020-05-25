<template>
  <div class="post-tags">
    <nuxt-link
      v-for="tag in tags"
      :key="tag"
      :to="`/tags/${tag}`"
    >
      #{{ tag }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>

</style>
