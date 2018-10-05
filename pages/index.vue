<template>
  <div>
    <ul>
      <li
        v-for="post in posts"
        :key="post.id"
        class="ll"
      >
        <a :href="post.url">
          {{ post.title }}
        </a>
        by <a :href="`https://news.ycombinator.com/user?id=${post.user}`">
          {{ post.user }}
        </a>
        <nuxt-link
          :to="`/item/${post.id}/`"
          class="fr"
        >
          discuss
        </nuxt-link>
      </li>
    </ul>
    <br>
    <button
      :disabled="isLoading"
      @click="loadMore"
    >
      {{ isLoading ? 'loading...' : 'load more' }}
    </button>
  </div>
</template>

<script>
import { getInitialPosts, fetchPosts } from '~/services/hn'

export default {
  data () {
    return {
      isLoading: false,
      currentPage: 1
    }
  },
  asyncData () {
    return getInitialPosts()
      .then(res => {
        return { posts: res }
      })
  },
  methods: {
    loadMore () {
      this.currentPage += 1
      this.isLoading = true
      return fetchPosts(this.currentPage)
        .then(res => {
          const posts = this.posts
          this.posts = posts.concat(res)
          this.isLoading = false
        })
    }
  }
}
</script>
