<template>
  <div class="l">
    <nuxt-link
      to="/"
      class="logo"
    >
      <h2>evilnews</h2>
    </nuxt-link>
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

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
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
.ll {
  padding-bottom: 1.3rem;
}
.logo,
.logo:visited {
  color: #333;
}
.tc { text-align: center }
</style>
