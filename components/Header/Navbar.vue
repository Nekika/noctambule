<template>
  <nav class="flex justify-around">
    <NLink to="/">Home</NLink>
    <NLink to="/posts">Posts</NLink>
    <NLink to="/tags">Tags</NLink>
  </nav>
</template>

<style>
  nav > a {
    @apply text-white no-underline
  }
  nav > a:hover {
    @apply text-lightgrey
  }
  nav > a.nuxt-link-exact-active {
    @apply underline
  }
</style>
