<template>
  <nuxt-content :document="page"></nuxt-content>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const page = await $content('home').fetch()
    return {
      page
    }
  }
}
</script>

<style>
</style>
