<template>
  <div class="post-list">
    <PostPreview
      v-for="post in posts"
      :key="post.slug"
      :post="post"
    />
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>
  .post-list {
    @apply gap-4;
    @screen md {
      @apply grid grid-cols-2;
    }
  }
</style>
