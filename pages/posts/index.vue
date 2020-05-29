<template>
  <div id="posts">
    <Preview
      v-for="post in posts"
      :key="post.slug"
      :post="post"
    />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const posts = await $content('posts').fetch()
    return {
      posts
    }
  },
  head () {
    return {
      title: 'Posts'
    }
  }
}
</script>

<style>
  #posts {
    @apply gap-4;
    @screen md {
      @apply grid grid-cols-2;
    }
  }
</style>
