# 倒數計時
###### tags: `情境問題`

#### 要求
1. 倒數計時, 時間到後要重拉api
2. 時間一定要是`dis`, **需請後端提供計算好的dis(毫秒差距)**


```vue
<template>
  <div>{{ timer }}</div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      timer: '',
      dApi: '',
    }
  },
  created() {
    this.getTimeApi();
  },
  methods: {
    async getTimeApi() {
      const _dApi = 5000;
      this.dApi = _dApi;
      this.setTimer(this.dApi);
      // console.log(_dApi)
    },
    getTimeRemain(t) {
      let s = Math.floor((t / 1000) % 60);
      let m = Math.floor((t / 1000 / 60) % 60);
      let h = Math.floor((t / (1000 * 60 * 60)) % 24);
      let d = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        d,
        h,
        m,
        s
      };
    },
    createCountdown(dis, fn, immediate = true) {
      let _dis;
      let prevDis;
      let timer;
      let timeup;

      const count = () => {
        _dis -= 1000;
        if (_dis <= 0) {
          timeup = true;
        }
        const date = this.getTimeRemain(_dis);
        fn({
          date,
          timeup
        });
        // auto stop when timeup
        if (timeup) {
          clearInterval(timer);
        }
      };

      const startTimer = (newDis) => {
        // clear timer already exist, stop old timer
        if (timer) clearInterval(timer);
        if (newDis) {
          // store new dis to prevDis
          prevDis = newDis;
        }
        _dis = prevDis;
        // reset timeup before start
        timeup = false;
        timer = setInterval(count, 1000);
      };

      // first start immediate
      if (immediate) {
        startTimer(dis);
      }

      return {
        cancel() {
          clearInterval(timer);
        },
        start(newDis) {
          startTimer(newDis);
        },
      }
    },
    setTimer(d) {
      // const d = 86400000;
      // const _timer = this.createCountdown(5000, (res) => { 
      //     if (res.timeup) console.log('done'); 
      //     else console.log('continue') 
      //   }
      // );
      const _timer = this.createCountdown(d, (res)=> {
        this.timer = `${res.date.d} 天 ${res.date.h} : ${res.date.m} : ${res.date.s}`;
        if (res.timeup) {
          this.getTimeApi();
          console.log('done');
        } else {
          console.log('continue')
        } 
        // console.log(res.date)
      })
      return _timer;
    },
  },
};
</script>
```

