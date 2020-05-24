<template>
  <div class="post-preview">
    <h3>
      <nuxt-link :to="`/posts/${post.slug}`">
        {{ post.title }}
      </nuxt-link>
    </h3>
    <p>{{ post.summary }}</p>
    <nuxt-link
      v-for="(tag, index) in post.tags"
      :key="index"
      :to="`/tags/${tag}`"
    >
      #{{ tag }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
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
