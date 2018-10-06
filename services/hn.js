import fetch from 'isomorphic-fetch'

function getInitialPosts (type) {
  return fetchPosts({ page: 1, type: type })
}

function fetchPosts (opts) {
  const { page, type } = opts
  return fetch(`https://api.hnpwa.com/v0/${type}/${page}.json`)
    .then(res => res.json())
}

function fetchDiscussion (id) {
  return fetch(`https://api.hnpwa.com/v0/item/${id}.json`)
    .then(res => res.json())
}

export {
  getInitialPosts,
  fetchPosts,
  fetchDiscussion
}
