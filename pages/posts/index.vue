<template>
  <div id="posts">
    <PostList :posts="posts" />
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
