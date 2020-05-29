<template>
  <div>
    <h1 class="text-center mb-2">
      <NLink :to="`/tags/${tag}`">#{{ tag }}</NLink>
    </h1>
    <PostList :posts="posts" />
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
  computed: {
    tag () { return this.$route.params.name }
  },
  head () {
    return {
      title: `#${this.tag} posts`
    }
  }
}
</script>
