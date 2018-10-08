<template>
  <ul>
    <li
      v-for="(post, index) in posts"
      :key="post.id"
      class="item">
      <p>
        <span class="index">[{{ index + 1 }}]</span>
        <a :href="post.url">
          {{ post.title }}
        </a>&nbsp;by&nbsp;<a
          :href="`https://news.ycombinator.com/user?id=${post.user}`"
          class="author">
          {{ post.user }}
        </a>
      </p>
      <nuxt-link
        :to="`/item/${post.id}/`"
        class="comments">
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

<style scoped>
.item {
  display: flex;
  padding: 0.5rem;
  justify-content: space-between;
}

.index {
  display: inline-block;
  margin-right: 1rem;
}

.comments {
  text-align: right;
}

.item:hover {
  background: #fafafa;
}
</style>
