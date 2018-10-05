<template>
  <div>
    <h2>{{ item.title }}</h2>
    <p>by <a :href="`https://news.ycombinator.com/user?id=${item.user}`">
      {{ item.user }}</a> • <span>{{ item.time_ago }}</span>
    </p>
    <div v-html="item.content" />
    <br>
    <hr>
    <br>
    <div
      v-for="comment in item.comments"
      :key="comment.id"
      class="ll"
    >
      <div v-html="comment.content" />
      ~<a :href="`https://news.ycombinator.com/user?id=${comment.user}`">{{ comment.user }}</a>
    </div>
    <p>
      <a :href="`https://news.ycombinator.com/item?id=${this.$route.params.id}`">
        discussion detail
      </a>
    </p>
  </div>
</template>

<script>
import { fetchDiscussion } from '~/services/hn'

export default {
  asyncData ({ params }) {
    return fetchDiscussion(params.id)
      .then(res => {
        return { item: res }
      })
  },
  head () {
    return {
      title: `${this.item.title} - evilnews`
    }
  }
}
</script>
