<template>
  <div class="px-sm md:px-md lg:px-lg xl:px-xl">
    <Header />
    <nuxt />
  </div>
</template>

<script>
import Header from '~/components/Header'

export default {
  components: {
    Header
  }
}
</script>
