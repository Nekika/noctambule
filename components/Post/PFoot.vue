<template>
  <div class="post-foot">
    <Author />
    <div class="post-info">
      <Tags :tags="tags" />
      <p class="post-date">
        {{ date }}
      </p>
    </div>
  </div>
</template>

<script>
import Author from './Author'
import Tags from './Tags'

export default {
  components: {
    Author,
    Tags
  },
  props: {
    date: {
      type: String,
      default: ''
    },
    tags: {
      type: Array,
      default: () => []
    }
  }
}
</script>
