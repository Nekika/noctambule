<template>
  <div>
    <Tags :tags="tags" />
    <p>
      {{ formattedDate }}
    </p>
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
