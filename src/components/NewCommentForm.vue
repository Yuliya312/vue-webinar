<template>
  <form class="NewCommentForm" @submit.prevent="handleSubmit">
    <div class="form-field">
      <input
          type="text"
          name="name"
          placeholder="Your name"
          class="NewCommentForm__input"
          v-model.trim="newComment.name"
      />
    </div>

    <div class="form-field">
      <input
          type="text"
          name="email"
          placeholder="Your email"
          class="NewCommentForm__input"
          v-model="newComment.email"
      />
    </div>

    <div class="form-field">
      <textarea
          name="body"
          placeholder="Type comment here"
          class="NewCommentForm__input"
          v-model="newComment.body"
      />
    </div>

    <button
        type="submit"
        class="NewCommentForm__submit-button button"
    >
      Add a comment
    </button>
  </form>
</template>

<script>

export default {
  name: 'NewCommentForm',
  data() {
    return {
      newComment: {
        name: '',
        email: '',
        body: '',
      },
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.newComment);
    },
  },
};
</script>

<style scoped lang="scss">
.NewCommentForm {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  &__input {
    border: none;
    border-bottom: 1px solid #4d457b;
    font-family: inherit;
    font-size: 0.9rem;
    padding: 10px 5px;
    color: #4d457b;
  }

  &__submit-button {
    margin-top: 10px;
  }
}
</style>
