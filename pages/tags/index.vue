<template>
  <div id="tags">
    <h1>Tags</h1>
    <div v-for="(tag, index) in tags" :key="index">
      <h3>#{{ tag.name }}</h3>
      <p>{{ tag.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Tags'
    }
  },
  async asyncData ({ $content }) {
    const tags = await $content('tags').fetch()
    return { tags }
  }
}
</script>
