<template>
  <div>
  {{ notifyList }}
    <!--<span id="result">Total: {{ totalQty }}</span>-->
    <div 
      class="row" 
      v-for="(item, i) in notifyList"
      :key="`item-${i}`"
    >
      <div class="col-xs-6">
        <div class="form-group">
          <input 
          :ref="'title'" 
          class="form-control"     
          v-model="item.qty">
        </div>
      </div>
      <button @click="addItem(item,i)">+</button>
      <button 
        v-if="i > 0"
        @click="removeItem(item)"
      >-</button>
    </div>
  </div>
</template>

<script>

export default {
  name: '',
  data() {
    return {
      notifyList: [],
      limit: 4,
    };
  },
  computed: {
    // totalQty() {
    //     return this.items.reduce((total, item) => {
    //       return total + Number(item.qty);
    //     }, 0);
    //   },
  },
  methods: {
    addItem(item) {
      if(this.notifyList.length < this.limit) {
        this.notifyList.push({
          notifyAccount: '',
        });
      }
      this.$nextTick(() => {
         let index = this.notifyList.length - 1;
         let input = this.$refs.title[index];
        input.focus();
      });
    },
    removeItem(item) {
      const vm = this;
      const itemList = vm.notifyList.map(function(_item) {
        return _item;
      });
      const lastItemIndex = itemList.lastIndexOf(item);
      if (lastItemIndex > -1) {
        vm.notifyList.splice(lastItemIndex, 1);
      }
    }
  },
  mounted() {
    this.addItem()
  }, 
};
</script>