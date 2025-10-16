<template>
  <div class="firework"></div>
</template>

<script>
  export default {
    name: '',
    data() {},
  };
</script>

<style lang="scss">
  @keyframes sprite {
    0% {
      background-position: 0 0;
    }

    20% {
      background-position: 0 0;
      transform: translateY(-200px);
    }

    100% {
      background-position: 100% 0;
      transform: translateY(-200px);
    }
  }

  .firework {
    position: fixed;
    bottom: 10%;
    left: 50%;
    width: 500px;
    height: 500px;
    background: url('../../../assets/firework.png') top left / calc(28 * 100%) 100% no-repeat;
    animation: sprite 2s steps(27) infinite;
  }
</style>