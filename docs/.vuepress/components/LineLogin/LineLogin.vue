<template>
  <div class="line-login-btn__btn-wrapper">
    <div class="line-logo">
      <div></div>
    </div>
    <div class="line-text">Log In</div>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {},
  };
</script>

<style lang='scss'>
.line-login-btn {
  &__btn-wrapper {
    width: 250px;
    height: 70px;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    transition: all 0.3 ease;
    background: #06c755;
    border-radius: 15px;
    font-size: clamp(29px, 3.75vw, 29px);
    font-weight: bold;
    overflow: hidden;
    cursor: pointer;
    .line-logo {
      width: 30%;
      border-right: 1px solid #06b74e;
      >div {
        max-width: 100%;
        height: 70px;
        background: url('../../../assets/line/btn_base.png') center center / contain;
      }
    }
    .line-text {
      width: 70%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
    }
    &:hover {
      background: #05b34c;
      .line-logo {
        border-color: #06c755;
        >div {
          background: url('../../../assets/line/btn_hover.png') center center / contain;
        }
      }
    }
  }
}
</style>