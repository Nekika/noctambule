<template>
  <div>
    <Preview
      v-for="post in posts"
      :key="post.slug"
      :post="post"
    />
  </div>
</template>

<script>
export default {
  async asyncData ({ params, $content }) {
    const posts = await $content('posts').where({ tags: { $contains: params.name } }).fetch()
    return {
      posts
    }
  },
  head () {
    return {
      title: `${this.$route.params.name} posts`
    }
  }
}
</script>

<style scoped>

</style>
