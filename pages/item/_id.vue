<template>
  <div class="items">
    <h2 class="title is-5">{{ item.title }}</h2>
    <p class="meta">
      by
      <a :href="`https://news.ycombinator.com/user?id=${item.user}`">
        {{ item.user }}
      </a>
      •
      <span>{{ item.time_ago }}</span>
    </p>
    <article
      class="content"
      v-html="item.content" />
    <div
      v-for="comment in item.comments"
      :key="comment.id"
      class="comment">
      <div
        class="content"
        v-html="comment.content" />
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

<style scoped lang="scss">
.title,
.meta,
article {
  margin-left: 1rem;
  margin-right: 1rem;
}

article {
  border-bottom: 1px solid #e4e4e4;
  padding-bottom: 3rem;
}

.comment {
  margin: 1rem auto;
  padding: 1rem;

  &:hover {
    background: #fafafa;
  }
}
</style>
