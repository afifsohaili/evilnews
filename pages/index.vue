<template>
  <div>
    <Item
      :posts="posts"
      class="items"/>
    <button
      v-if="!allLoaded"
      :disabled="isLoading"
      class="button is-primary"
      @click="loadMore">
      {{ isLoading ? 'Loading...' : 'Load more' }}
    </button>
    <p v-else>All data loaded</p>
  </div>
</template>

<script>
import { getInitialPosts, fetchPosts } from '~/services/hn'

export default {
  components: {
    Item: () => import('~/components/Item')
  },
  data () {
    return {
      allLoaded: false,
      isLoading: false,
      currentPage: 1
    }
  },
  asyncData () {
    return getInitialPosts('news')
      .then(res => {
        return { posts: res }
      })
  },
  methods: {
    loadMore () {
      this.currentPage += 1
      this.isLoading = true
      return fetchPosts({ page: this.currentPage, type: 'news' })
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
