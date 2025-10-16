<template>
  <div class="totalImperialAward">
    <div class="awardMoney">
      <h2
        :data-number="priceToNT(awardMoney).slice(1,)"
      >
        <div>{{ priceToNT(awardMoney).slice(1,) }}</div>
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      awardMoney: 12345678,
    }
  },
  methods: {
    priceToNT(price) {
      if (price) {
        let toTwdPrice = price.toLocaleString(
          'zh-TW', {
            style: 'currency',
            currency: 'TWD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }
        );
        return toTwdPrice;
      }
    },
  },
};
</script>

<style lang="scss">
  @function createShadow() {
    $values: 0px 1px #c80000;
    @for $i from 2 to 10 {
      $values: $values, 0px #{$i}px #c80000;
    }
    @return $values;
  }
  @import url('https://fonts.googleapis.com/css2?family=Mitr&display=swap');

  @mixin flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .totalImperialAward {
    position: relative;
    margin: 0 auto;
    margin-top: 0%;
    text-align: center;
    width: 80%;
    z-index: 1;
    height: 100px;

    .awardMoney {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      @include flex-center;
      letter-spacing: 10px;
      >h2 {
        width: 100%;
        @include flex-center;
        position: relative;
        font-size: 12vmin;
        // font-size: 90px;
        font-family: 'Mitr', sans-serif;
        color: transparent;
        filter: drop-shadow(2px 2px black) drop-shadow(-2px -2px black) drop-shadow(-2px 2px black) drop-shadow(2px -2px black);
        z-index: 2;
        &::after {
          color: transparent;
          content: attr(data-number);
          text-shadow: createShadow();
        }
        > div {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          margin: auto;
          background: linear-gradient(to top, #ffd230 39%, #ff7600 45%, #ff6116 48%, #fff 18%, #ffff95 80%);
          background-clip: text;
          -webkit-background-clip: text;
        }
      }
    }
  }
</style>