<template>
  <div>
    <Cover :cover="cover" :credits="credits" />
    <div class="text-center my-8">
      <h1 class="font-bold">{{ title }}</h1>
      <p>Hugo « Nekika » Jahnke</p>
      <Tags :tags="tags" />
    </div>
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
