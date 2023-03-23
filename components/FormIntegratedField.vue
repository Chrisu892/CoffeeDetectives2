<template>
  <div class="input">
    <input class="input__field" :type="type" :placeholder="placeholder" />
    <button class="input__button" type="button">Sign Up</button>
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
    background-color: $clr-white;
    border-radius: 50px;
    display: flex;
    flex-flow: row;
    overflow: hidden;
  }
  .input__field {
    border: 0;
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
    font-size: $font-regular;
    min-width: 300px;
    padding: 0.875rem 1.125rem;
  }
  .input__button {
    background-color: $clr-secondary;
    border: 0;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    color: $clr-white;
    cursor: pointer;
    font-size: $font-regular;
    min-width: 100px;
    padding: 0.875rem 1rem;
  }
</style>