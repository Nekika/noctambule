<template>
  <header>
    <div class="container">
      <NLink to="/" class="text-4xl font-logo text-white no-underline cursor-pointer hover:text-lightgrey md:text-6xl">
        Noctambule
      </NLink>
    </div>
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

<style>
  header {
    /* Border, color and shadow */
    @apply bg-grey border-b border-lightgrey shadow-nav;

    /* Position */
    @apply sticky top-0 inset-x-0;

    /* Display */
    @apply grid grid-cols-2 items-center py-2;
  }
</style>
