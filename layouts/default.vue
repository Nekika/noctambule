<template>
  <div class="min-h-screen px-4 md:px-16 lg:px-24 xl:px-32 bg-grey text-white">
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
