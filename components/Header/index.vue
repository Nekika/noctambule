<template>
  <Header>
    <nuxt-link to="/" tag="h2">
      Noctambule
    </nuxt-link>
    <Navbar />
  </Header>
</template>

<script>
import Navbar from './Navbar'
export default {
  components: {
    Navbar
  }
}
</script>
