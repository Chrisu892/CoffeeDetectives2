<template>
  <div class="input">
    <input class="input__field" :type="type" required :placeholder="placeholder" />
    <button class="input__button" type="submit">Sign Up</button>
  </div>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'text'
      },
      placeholder: {
        type: String,
        default: 'Type here...'
      }
    }
  }
</script>

<style scoped lang="scss">
  .input {
    @include flex-row;
    background-color: $clr-secondary;
    border: solid 1px $clr-secondary;
    border-radius: 50px;
    overflow: hidden;
  }
  .input__field {
    @include font-regular;
    border: 0;
    border-radius: 50px 0 0 50px;
    min-width: 300px;
    padding: 0.875rem 1.125rem;
  }
  .input__button {
    @include font-regular;
    background-color: $clr-secondary;
    border: 0;
    border-radius: 0 50px 50px 0;
    color: $clr-white;
    cursor: pointer;
    min-width: 100px;
    padding: 0.875rem 1rem;
  }
</style>