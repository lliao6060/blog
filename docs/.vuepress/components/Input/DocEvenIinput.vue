<template>
  <div>
    <input v-model="test.name" />
    <div class="test-list">
      <ul class="test-list test-list--item">
        <li 
          v-for="(item,key) in list" 
          :key="item" 
          :class="{active : index == key+1}"
          @click="changeInputVal(item)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
const test_data = [
    {
      id: 1,
      name: '桃園',
      value: '桃園,台灣',
    },
    {
      id: 2,
      name: '台中',
      value: '台中,台灣',
    },
    {
      id: 3,
      name: '台南',
      value: '台南,台灣',
    },
    {
      id: 4,
      name: '高雄',
      value: '高雄,台灣',
    },
    {
      id: 5,
      name: '北京',
      value: '北京,中國',
    },
  ];

export default {
  name: '',
  data() {
    return {
      test: {
        id: '',
        name: '',
        value: '',
      },
    	list: test_data,
			index: 1
    };
  },
  methods: {
    changeInputVal(item) {
      const vm = this;
      vm.test = JSON.parse(JSON.stringify(item));
      vm.index = item.id;
    },
    addDocumentEvent() {
      const vm = this;
    	document.addEventListener('keyup',(e)=>{
    	  if(e.keyCode === 13) {
    		  vm.changeInputVal(vm.list[vm.index-1]);
    		}
    		if(e.keyCode == 38) {
    			if( vm.index > 1 ){
    				vm.index--;
    			}else{
    				vm.index = vm.list.length;
    			}
    		}
    		else if(e.keyCode == 40) {
    			if( vm.index < vm.list.length ){
    				vm.index++;
    			}else {
    				vm.index = 1;
    			}
    		}
    	})
    },
  },
  mounted() {
    this.addDocumentEvent();
  },
};
</script>

<style scoped lang="scss">
#app {
  margin: 5%;
  font-family: '微軟正黑體';
}

.test-list {
  &--item {
    li {
      display: flex;
      align-items: center;
  		height: 40px;
  		line-height: 40px;
  		padding: 5px 12px;
  		cursor: pointer;
  		&:hover,
  		&.active{
  	    color: #de1717;
        font-weight: bold;
        background-color: #fff0f6;
    	}
  	}
  }
}

</style>
