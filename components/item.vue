<template>
  <ul>
    <li
      v-for="(post, index) in posts"
      :key="post.id"
      class="ll"
    >
      <a :href="post.url">
        [{{ index + 1 }}] {{ post.title }}
      </a>
      by <a :href="`https://news.ycombinator.com/user?id=${post.user}`">
        {{ post.user }}
      </a>
      <nuxt-link
        :to="`/item/${post.id}/`"
        class="fr"
      >
        {{ post.comments_count }} comment{{ post.comments_count > 3 ? 's' : '' }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>
