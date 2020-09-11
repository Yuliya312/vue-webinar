const BASE_URL = 'https://mate-api.herokuapp.com';

async function get(url) {
  const response = await fetch(`${BASE_URL}${url}`);
  const { data } = await response.json();

  return data;
}

export function getPosts() {
  return get('/posts');
}

export function getPost(postId) {
  return get(`/posts/${postId}`);
}
