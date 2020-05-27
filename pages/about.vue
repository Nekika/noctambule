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
  }
}
</script>

<style scoped>

</style>
