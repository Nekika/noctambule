<template>
  <div id="post-foot">
    <Info :date="date" :tags="tags" />
    <Author />
  </div>
</template>

<script>
import Author from './Author'
import Info from './Info'

export default {
  components: {
    Author,
    Info
  },
  props: {
    date: {
      type: String,
      default: 'null'
    },
    tags: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
  #post-foot {
    @apply mt-5;
    @screen md {
      @apply grid grid-cols-2;
    }
  }
</style>
