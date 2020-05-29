<template>
  <div id="home">
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
    @apply mt-4 text-justify;
    @screen md {
      @apply grid grid-cols-2;
      grid-row-gap: 15px;
      grid-column-gap: 30px;
    }
  }
  #home > div > * {
    @apply mb-2;
  }
  #home h1, #home h2, #home h3 {
    @apply text-center;
  }
  #home img.avatar {
    @apply my-3 mx-auto;
    max-height: 64px;
    @screen md {
      max-height: 80px;
    }
    @screen lg {
      max-height: 96px;
    }
    @scren xl {
      max-height: 128px;
    }
  }
</style>
