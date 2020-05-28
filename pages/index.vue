<template>
  <div id="home" class="mt-3 text-justify">
    <nuxt-content :document="intro" />
    <div>
      <h2>Latest post</h2>
      <Preview :post="latestPost" />
    </div>
    <nuxt-content :document="motivations" />
    <nuxt-content :document="contact" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const intro = await $content('home/intro').fetch()
    const motivations = await $content('home/motivations').fetch()
    const contact = await $content('home/contact').fetch()
    const posts = await $content('posts').sortBy('updated_at', 'desc').limit(1).fetch()
    return {
      intro,
      motivations,
      contact,
      latestPost: posts[0]
    }
  },
  head () {
    return {
      title: 'Home'
    }
  }
}
</script>

<style>
  #home {
    @screen md {
      @apply mt-10;
      @apply grid grid-cols-2;
      grid-gap: 30px;
    }
  }
  #home > * {
    @apply mb-2;
    @screen md {
      @apply mb-0;
    }
  }
</style>
