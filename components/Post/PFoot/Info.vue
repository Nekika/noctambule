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
      type: Date || String,
      default: null
    },
    tags: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    /*
      Handles type bug
      Sometimes date is a String when it should be a Date
     */
    formattedDate () {
      if (typeof this.date !== 'string') { return this.date.toLocaleDateString() }
      const date = new Date(this.date)
      return date.toLocaleDateString()
    }
  }
}
</script>
