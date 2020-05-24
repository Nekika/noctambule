<template>
  <div class="post">
    <h1>{{ post.title }}</h1>
    <nuxt-content :document="post"></nuxt-content>
  </div>
</template>

<script>
export default {
  layout: 'post',
  async asyncData ({ params, $content }) {
    const posts = await $content('posts').where({ slug: params.slug }).fetch()
    return {
      post: posts[0]
    }
  }
}
</script>
