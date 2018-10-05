import fetch from 'isomorphic-fetch'

function getInitialPosts () {
  return fetch('https://api.hnpwa.com/v0/news/1.json')
    .then(res => res.json())
}

function fetchPosts (page) {
  return fetch(`https://api.hnpwa.com/v0/news/${page}.json`)
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
