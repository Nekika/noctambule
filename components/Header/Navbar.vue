<template>
  <nav class="flex justify-around">
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
</style>
