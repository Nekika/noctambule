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
