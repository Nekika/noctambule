<template>
  <div class="post-preview">
    <h3>
      <NLink :to="`/posts/${post.slug}`">
        {{ post.title }}
      </NLink>
    </h3>
    <p>{{ post.summary }}</p>
    <Tags :tags="post.tags" />
  </div>
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
  }
}
</script>

<style scoped>

</style>
