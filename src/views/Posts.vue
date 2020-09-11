<template>
  <div class="App">
    <header class="App__header">
      <label>
        Select a user: &nbsp;

        <select class="App__user-selector">
          <option value="0">All users</option>
          <option value="1">Leanne Graham</option>
          <option value="2">Ervin Howell</option>
          <option value="3">Clementine Bauch</option>
          <option value="4">Patricia Lebsack</option>
          <option value="5">Chelsey Dietrich</option>
          <option value="6">Mrs. Dennis Schulist</option>
          <option value="7">Kurtis Weissnat</option>
          <option value="8">Nicholas Runolfsdottir V</option>
          <option value="9">Glenna Reichert</option>
          <option value="10">Leanne Graham</option>
        </select>
      </label>
    </header>

    <main class="App__main">
      <div class="App__sidebar">
        <posts-list
          :posts="posts"
          @postSelected="setPostId"
        ></posts-list>
      </div>

      <div class="App__content">
        <post-details
          :post-id="postId"
        ></post-details>
      </div>
    </main>
  </div>
</template>
<script>
import { getPosts } from '@/api/posts';
import PostsList from '@/components/PostsList.vue';
import PostDetails from '@/components/PostDetails.vue';

export default {
  data() {
    return {
      posts: [],
      postId: 0,
    };
  },
  components: {
    PostsList,
    PostDetails,
  },
  async mounted() {
    this.posts = await getPosts();
  },
  methods: {
    setPostId(postId) {
      this.postId = postId;
    },
  },
};
</script>

<style scoped lang="scss">
%stretch-panel {
  flex-grow: 1;
  margin: 10px;
  padding: 20px;
  border-radius: 20px;
  background-color: white;
}

.App {
  &__header {
    position: sticky;
    padding: 10px;
  }

  &__user-selector {
    padding: 5px;
    cursor: pointer;
    font-size: 1rem;
    color: #4d457b;
    border: 1px solid #4d457b;
    border-radius: 5px;
  }

  &__main {
    display: flex;
    justify-content: stretch;
    align-content: stretch;
  }

  &__sidebar {
    @extend %stretch-panel;

    flex-basis: 60%;
    border-color: blue;
  }

  &__content {
    @extend %stretch-panel;

    flex-basis: 30%;
    border-color: green;
  }
}
</style>
