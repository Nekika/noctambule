<template>
  <div class="text-center">
    <p class="text-lightgrey">{{ date }}</p>
    <PostTags :tags="tags" />
  </div>
</template>

<script>
export default {
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
