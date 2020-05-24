<template>
  <div id="home">
    <nuxt-content :document="page"></nuxt-content>
    <h2>Latest post</h2>
    <Preview :post="latestPost"/>
  </div>
</template>

<script>
import Preview from '~/components/Post/Preview'

export default {
  async asyncData ({ $content }) {
    const page = await $content('home').fetch()
    const posts = await $content('posts').sortBy('updated_at', 'desc').limit(1).fetch()
    return {
      page,
      latestPost: posts[0]
    }
  },
  head () {
    return {
      title: 'Home'
    }
  },
  components: {
    Preview
  }
}
</script>

<style>
</style>
