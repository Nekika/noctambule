<template>
  <div id="posts">
    <nuxt-link
      v-for="post in posts"
      :key="post.id"
      :to="`/posts/${post.slug}`">
      {{ post.title }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Posts'
    }
  },
  async asyncData ({ $content }) {
    const posts = await $content('posts').fetch()
    return {
      posts
    }
  }
}
</script>
