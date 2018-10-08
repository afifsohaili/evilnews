<template>
  <div>
    <Navbar />
    <section class="container">
      <nuxt/>
    </section>
    <pre class="has-text-right"><a href="https://github.com/evilfactory-id/evilnews">source code. plz fix me</a></pre>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'

export default {
  components: {Navbar}
}
</script>

<style scoped>
pre {
  margin-top: 3em;
}
</style>

<style>
body {
  padding-top: 64px;
}

.items {
  margin: 3em auto 2em;
}
</style>
