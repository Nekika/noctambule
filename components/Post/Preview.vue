<template>
  <NLink :to="`/posts/${post.slug}`" tag="div" class="post-preview" :style="{ backgroundImage: coverSrc }">
    <div class="information">
      <h3>{{ post.title }}</h3>
      <p class="summary">{{ post.summary }}</p>
      <Tags :tags="post.tags" />
    </div>
  </NLink>
</template>

<script>
import Tags from './Tags'

export default {
  components: {
    Tags
  },
  props: {
    post: {
      type: Object,
      default: null
    }
  },
  computed: {
    coverSrc () {
      const cover = require(`~/assets/covers/${this.post.cover}`)
      return `url(${cover})`
    }
  }
}
</script>

<style scoped>
  .post-preview {
    /* Position */
    @apply relative;

    /* Size */
    @apply h-56;

    /* Display */
    @apply text-center;

    /* Background */
    @apply bg-cover;
  }

  .post-preview > .information {
    /* Position */
    @apply absolute bottom-0;

    /* Display */
    @apply p-2;

    /* Background */
    @apply bg-darkgrey;
  }

  .post-preview > .information > .summary {
    @apply text-lightgrey;
  }
</style>
