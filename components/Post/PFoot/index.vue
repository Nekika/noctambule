<template>
  <div class="grid grid-cols-2">
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

<style>

</style>
