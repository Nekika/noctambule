<template>
  <div>
    <img :src="coverSrc" alt="cover">
    <p class="text-center text-xs text-lightgrey">
      Cover : {{ author }} | Source : <a :href="source.link">{{ source.name }}</a>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    cover: {
      type: String,
      default: ''
    },
    credits: {
      type: Object,
      default: null
    }
  },
  computed: {
    coverSrc () { return require(`~/assets/covers/${this.cover}`) },
    author () { return this.credits.author },
    source () { return this.credits.source }
  }
}
</script>
