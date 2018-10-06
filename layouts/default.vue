<template>
  <div class="l">
    <h2>
      <nuxt-link
        to="/"
        class="logo"
      >
        evilnews
      </nuxt-link>
      <template v-if="this.$route.name !== 'item-id'">
        // {{ this.$route.name === 'index' ? 'top' : this.$route.name }}
      </template>
    </h2>
    <div class="m">
      <nuxt-link to="/">top</nuxt-link>
      <nuxt-link to="/new">new</nuxt-link>
      <nuxt-link to="/show">show</nuxt-link>
      <nuxt-link to="/ask">ask</nuxt-link>
      <nuxt-link to="/jobs">jobs</nuxt-link>
    </div>
    <br>
    <nuxt/>
    <br>
    <hr>
    <br>
    <pre class="tc"><a href="https://github.com/evilfactory-id/evilnews">source code. plz fix me</a></pre>
  </div>
</template>

<style>
body {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.7rem;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.page-enter-active, .page-leave-active {
  transition: opacity .5s
}

.page-enter, .page-leave-active {
  opacity: 0
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
pre,
code {
  white-space: pre-wrap;
}
a {
  color: #666;
  text-decoration: none;
  word-wrap: break-word;
}
a:visited:hover,
a:hover,
a:focus {
  color: #000;
}
a:visited {
  text-decoration: overline;
  color: #ccc;
}
hr {
  border: 0;
  border-bottom: 1px solid #ccc;
}
.fr {
  float: right
}
.l {
  padding: 2rem 1rem;
  width: 960px;
  max-width: 100%;
  margin: auto;
}
ul {
  padding-left: 0;
}
.ll {
  padding: 0 5px;
  list-style: none;
  margin-bottom: 1rem;
}
.ll:hover {
  border-radius: 3px;
  background-color: #efefef;
}
.logo,
.logo:visited {
  color: #333;
}
.tc { text-align: center }

.m {
  margin-top: 1rem;
}
.m .nuxt-link-exact-active {
  background-color: #efefef;
  color: #333;
  border-radius: 3px;
}
.m a {
  padding: 2px 10px;
}
p {
  margin-bottom: 1.5rem;
}
</style>
