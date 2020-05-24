<template>
  <div class="post-cover">
    <img :src="coverSrc" alt="cover">
    <h1>{{ title }}</h1>
    <nuxt-link
      v-for="(tag, index) in tags"
      :key="index"
      :to="`/tags/${tag}`"
    >
      #{{ tag }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
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
