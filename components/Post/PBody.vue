<template>
  <div class="post-body">
    <nuxt-content :document="content" />
  </div>
</template>

<script>
export default {
  props: ['content']
}
</script>

<style scoped>

</style>
