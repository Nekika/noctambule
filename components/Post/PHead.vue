<template>
  <div class="post-cover">
    <img :src="coverSrc" alt="cover">
    <h1>{{ title }}</h1>
    <Tags :tags="tags" />
  </div>
</template>

<script>
import Tags from './Tags'

export default {
  components: {
    Tags
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    cover: {
      type: String,
      default: ''
    },
    tags: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    coverSrc () { return require(`~/assets/covers/${this.cover}`) }
  }
}
</script>

<style scoped>

</style>
