<template>
  <header class="sticky top-0 inset-x-0 grid grid-cols-2 items-center py-2">
    <NLink to="/" tag="h2" class="font-logo text-4xl">
      Noctambule
    </NLink>
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
