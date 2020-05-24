<template>
  <div class="post">
    <PHead :title="title" :cover="cover" :tags="tags" />
    <PBody :content="post" />
    <PFoot />
  </div>
</template>

<script>
import PHead from './PHead'
import PBody from './PBody'
import PFoot from './PFoot'

export default {
  components: {
    PHead,
    PBody,
    PFoot
  },
  props: {
    post: {
      type: Object,
      default: null
    }
  },
  computed: {
    title () { return this.post.title },
    cover () { return this.post.cover },
    tags () { return this.post.tags }
  }
}
</script>

<style scoped>

</style>
