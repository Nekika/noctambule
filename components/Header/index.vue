<template>
  <header class="grid grid-cols-2 items-center">
    <nuxt-link to="/" tag="h2" class="font-logo">
      Noctambule
    </nuxt-link>
    <Navbar />
  </header>
</template>

<script>
import Navbar from './Navbar'
export default {
  components: {
    Navbar
  }
}
</script>
