<template>
  <div class="self-center">
    <p class="text-lightgrey"> {{ formattedDate }} </p>
    <Tags :tags="tags" />
  </div>
</template>

<script>
export default {
  props: {
    date: {
      type: Date,
      default: null
    },
    tags: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    formattedDate () { return this.date.toLocaleDateString() }
  }
}
</script>
