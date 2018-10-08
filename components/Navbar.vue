<template>
  <nav
    class="navbar"
    role="navigation"
    aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link
        class="navbar-item is-brand is-size-3"
        to="/">
        Evilnews
      </nuxt-link>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div
      class="navbar-menu">

      <div class="navbar-end">
        <nuxt-link
          class="navbar-item navbar-item--right-menu"
          to="/">
          Top
        </nuxt-link>
        <nuxt-link
          class="navbar-item navbar-item--right-menu"
          to="/new">
          New
        </nuxt-link>
        <nuxt-link
          class="navbar-item navbar-item--right-menu"
          to="/show">
          Show
        </nuxt-link>
        <nuxt-link
          class="navbar-item navbar-item--right-menu"
          to="/ask">
          Ask
        </nuxt-link>
        <nuxt-link
          class="navbar-item navbar-item--right-menu"
          to="/jobs">
          Jobs
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: 1px solid #e4e4e4;
}

.navbar-menu {
  align-items: center;
}

.navbar-item.is-brand {
  font-family: 'Freckle Face', cursive;
}

.nuxt-link-exact-active:not(.is-brand) {
  background: #313131;
  border-radius: 3px;
  color: #fff;
}
</style>
