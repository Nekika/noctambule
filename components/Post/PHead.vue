<template>
  <div class="post-cover">
    <Cover :cover="cover" :credits="credits" />
    <h1>{{ title }}</h1>
    <p>Hugo « Nekika » Jahnke</p>
    <Tags :tags="tags" />
  </div>
</template>

<script>
import Cover from './Cover'
import Tags from './Tags'

export default {
  components: {
    Cover,
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
    },
    credits: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped>

</style>
