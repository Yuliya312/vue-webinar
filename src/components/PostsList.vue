<template>
  <div class="PostsList">
    <h2>Posts:</h2>

    <ul class="PostsList__list">
      <li
        v-for="post of posts"
        :key="post.id"
        class="PostsList__item"
      >
        <div>
          <b>[User #{{ post.id }}]: </b>
          {{ post.title }}
        </div>

        <button
          type="button"
          class="PostsList__button button"
          @click="openPost(post.id)"
          v-if="post.id !== selectedPostId"
        >
          Open
        </button>

        <button
            type="button"
            class="PostsList__button button"
            @click="openPost(0)"
            v-if="post.id === selectedPostId"
        >
          CLose
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PostsList',
  data() {
    return {
      postId: 0,
    };
  },
  props: {
    posts: Array,
    selectedPostId: Number,
  },
  methods: {
    openPost(postId) {
      this.$emit('postSelected', postId);
    },
  },
};
</script>

<style scoped lang="scss">
.PostsList {
  width: 100%;

  &__user-button {
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: bold;

    &:hover {
      background-color: lightblue;
    }
  }

  &__list {
    list-style: none;
    padding-left: 5px;
  }

  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 5px;
    background-color: #fafafd;
    line-height: 1.5;
  }

  &__button {
    margin-left: 10px;
  }
}
</style>
