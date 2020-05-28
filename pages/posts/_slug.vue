<template>
  <Post :post="post" />
</template>

<script>
export default {
  async asyncData ({ params, $content }) {
    const posts = await $content('posts').where({ slug: params.slug }).fetch()
    return {
      post: posts[0]
    }
  },
  head () {
    return {
      title: this.post.title
    }
  }
}
</script>
