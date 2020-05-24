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
import Preview from '~/components/Post/Preview'

export default {
  components: {
    Preview
  },
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
