<template>
  <div id="tags">
    <div v-for="(tag, index) in tags" :key="index" class="text-center mt-5">
      <h3>
        <nuxt-link :to="`/tags/${tag.name}`">
          #{{ tag.name }}
        </nuxt-link>
      </h3>
      <p>{{ tag.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const tags = await $content('tags').fetch()
    return { tags }
  },
  head () {
    return {
      title: 'Tags'
    }
  }
}
</script>
