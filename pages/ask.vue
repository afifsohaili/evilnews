<template>
  <div>
    <Item :posts="posts" />
    <br>
    <button
      v-if="!allLoaded"
      :disabled="isLoading"
      @click="loadMore"
    >
      {{ isLoading ? 'loading...' : 'load more' }}
    </button>
    <p v-else>All data loaded</p>
  </div>
</template>

<script>
import { getInitialPosts, fetchPosts } from '~/services/hn'

export default {
  components: {
    Item: () => import('~/components/item')
  },
  head () {
    return {
      title: 'Ask | evilnews'
    }
  },
  data () {
    return {
      allLoaded: false,
      isLoading: false,
      currentPage: 1
    }
  },
  asyncData () {
    return getInitialPosts('ask')
      .then(res => {
        return { posts: res }
      })
  },
  methods: {
    loadMore () {
      this.currentPage += 1
      this.isLoading = true
      return fetchPosts({ page: this.currentPage, type: 'ask' })
        .then(res => {
          if (res.length === 0) this.allLoaded = true
          const posts = this.posts
          this.posts = posts.concat(res)
          this.isLoading = false
        })
    }
  }
}
</script>
