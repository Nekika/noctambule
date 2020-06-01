<template>
  <div id="post-foot">
    <Author />
    <Info :date="date" :tags="tags" />
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
  #post-foot > div {
    @apply mt-4;
    @screen md {
      @apply mt-0;
    }
  }
</style>
