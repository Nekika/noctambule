<template>
  <div class="post-tags">
    <NLink
      v-for="tag in tags"
      :key="tag"
      :to="`/tags/${tag}`"
    >
      #{{ tag }}
    </NLink>
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
