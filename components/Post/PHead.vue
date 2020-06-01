<template>
  <div>
    <div class="relative">
      <div class="text-center absolute inset-x-0 bottom-0 bg-darkgrey pb-2">
        <h1 class="font-bold">{{ title }}</h1>
        <p class="text-lightgrey">Hugo « Nekika » Jahnke</p>
        <PostTags :tags="tags" />
      </div>
      <img :src="coverSrc" alt="cover">
    </div>
    <p class="text-center text-xs text-lightgrey mt-2">
      Cover : {{ author }} | Source : <a :href="source.link">{{ source.name }}</a>
    </p>
  </div>
</template>

<script>
export default {
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
  },
  computed: {
    coverSrc () { return require(`~/assets/covers/${this.cover}`) },
    author () { return this.credits.author },
    source () { return this.credits.source }
  }
}
</script>
