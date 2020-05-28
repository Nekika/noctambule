<template>
  <div>
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
      type: Date,
      default: null
    },
    tags: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
  div {
    @apply text-center;
    @screen md {
      @apply grid grid-cols-2;
    }
  }
</style>
