<template>
  <div>
    <nuxt-content :document="page" class="text-justify" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const page = await $content('about').fetch()
    return { page }
  },
  head () {
    return {
      title: 'About'
    }
  }
}
</script>

<style scoped>

</style>
