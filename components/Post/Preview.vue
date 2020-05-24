<template>
  <div class="post-preview">
    <h3>{{ post.title }}</h3>
    <p>{{ post.summary }}</p>
    <nuxt-link
      v-for="(tag, index) in post.tags"
      :key="index"
      :to="`/tags/${tag}`">
      #{{ tag }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style scoped>

</style>
