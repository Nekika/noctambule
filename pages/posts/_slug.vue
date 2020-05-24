<template>
  <div class="container">
    <Post :post="post"></Post>
  </div>
</template>

<script>
import Post from '~/components/Post'

export default {
  head () {
    return {
      title: this.post.title
    }
  },
  components: {
    Post
  },
  async asyncData ({ params, $content }) {
    const posts = await $content('posts').where({ slug: params.slug }).fetch()
    return {
      post: posts[0]
    }
  }
}
</script>
