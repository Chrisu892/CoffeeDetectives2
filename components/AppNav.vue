<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__list-item"><NuxtLink to="/" title="">Home</NuxtLink></li>
      <li class="nav__list-item"><NuxtLink to="/contact/" title="">Contact</NuxtLink></li>
    </ul>
  </nav>
</template>

<script setup>
  // const route = useRoute()
  // When accessing /posts/1, route.params.id will be 1
  // console.log(route.params.id)
</script>