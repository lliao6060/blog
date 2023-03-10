# 周報表
###### tags: `情境問題`

#### 要求
1. 每周一結算
2. 即使當周沒有資料也要顯示0的空資料表
3. 結束日期必須小於今天 不可搜尋未來時間(add alert?)


```vue
<template>
  <div id="app">

    <pre>{{ data }}</pre>
    
  </div>
</template>

<script>
const api_data = {
  "2021-07-11": [
    {
      "actPlayer": 0,
      "beginDate": "2021-07-05T00:00:00",
      "commission": 0,
      "dailyMultiple": 0,
      "endDate": "2021-07-11T00:00:00",
      "gameId": -1,
      "jilv": 0,
      "normalGameNum": 0,
      "num1": 0,
      "num2": 0,
      "platformId": 0,
      "playMoney": 0,
      "regPlayer": 2,
      "siteId": 1000350,
      "tprId": 260592,
      "winMoney": 0
    }
  ],
  "2021-07-18": [
    {
      "actPlayer": 0,
      "beginDate": "2021-07-12T00:00:00",
      "commission": 0,
      "dailyMultiple": 0,
      "endDate": "2021-07-18T00:00:00",
      "gameId": -1,
      "jilv": 0,
      "normalGameNum": 0,
      "num1": 0,
      "num2": 0,
      "platformId": 0,
      "playMoney": 0,
      "regPlayer": 2,
      "siteId": 1000350,
      "tprId": 261310,
      "winMoney": 0
    }
  ]
}
const games = [
    {
        "gId": 741,
        "text": "slot_a(H5)",
        "value": 1001
    },
    {
        "gId": 742,
        "text": "slot_b(H5)",
        "value": 1002
    },
    {
        "gId": 743,
        "text": "slot_c(H5)",
        "value": 1003
    },
    {
        "gId": 744,
        "text": "slot_d(H5)",
        "value": 1004
    },
    {
        "gId": 361,
        "text": "斗地主(H5)",
        "value": 1020
    },
    {
        "gId": 521,
        "text": "经典水果机(H5)",
        "value": 1021
    },
    {
        "gId": 463,
        "text": "好运5扑克(H5)",
        "value": 1022
    },
    {
        "gId": 464,
        "text": "超级斗地主(H5)",
        "value": 1023
    },
    {
        "gId": 341,
        "text": "森林舞会2",
        "value": 1040
    },
    {
        "gId": 445,
        "text": "森林舞会(H5)",
        "value": 1041
    },
    {
        "gId": 321,
        "text": "捕鱼大满贯",
        "value": 1050
    },
    {
        "gId": 382,
        "text": "千炮捕鱼(H5)",
        "value": 1051
    },
    {
        "gId": 381,
        "text": "水浒传(H5)",
        "value": 1110
    },
    {
        "gId": 641,
        "text": "五龙争霸(H5)",
        "value": 1111
    },
    {
        "gId": 441,
        "text": "水浒英雄(H5)",
        "value": 1112
    },
    {
        "gId": 541,
        "text": "魔豆(H5)",
        "value": 1113
    },
    {
        "gId": 601,
        "text": "天龙虎地(H5)",
        "value": 1114
    },
    {
        "gId": 444,
        "text": "黄金777(H5)",
        "value": 1115
    },
    {
        "gId": 482,
        "text": "明星97(H5)",
        "value": 1117
    },
    {
        "gId": 901,
        "text": "丛林岛(H5)",
        "value": 1119
    },
    {
        "gId": 621,
        "text": "洪福齐天(H5)",
        "value": 1120
    },
    {
        "gId": 701,
        "text": "HOOGA(H5)",
        "value": 1125
    },
    {
        "gId": 501,
        "text": "皇家轮盘(H5)",
        "value": 1138
    },
    {
        "gId": 401,
        "text": "百乐牛牛(H5)",
        "value": 1139
    },
    {
        "gId": 461,
        "text": "太极(H5)",
        "value": 1140
    },
    {
        "gId": 443,
        "text": "百家乐(H5)",
        "value": 1141
    },
    {
        "gId": 442,
        "text": "双龙抢珠(H5)",
        "value": 1143
    },
    {
        "gId": 502,
        "text": "舞狮报喜(H5)",
        "value": 1144
    },
    {
        "gId": 562,
        "text": "金鲨银鲨(H5)",
        "value": 1145
    },
    {
        "gId": 481,
        "text": "楚汉德州(H5)",
        "value": 1146
    },
    {
        "gId": 561,
        "text": "炸金花(H5)",
        "value": 1147
    },
    {
        "gId": 781,
        "text": "二八杠(H5)",
        "value": 1148
    },
    {
        "gId": 581,
        "text": "蜜糖甜心(H5)",
        "value": 1149
    },
    {
        "gId": 661,
        "text": "五路财神(H5)",
        "value": 1153
    },
    {
        "gId": 801,
        "text": "摇钱树(H5)",
        "value": 1154
    },
    {
        "gId": 681,
        "text": "多福多财(H5)",
        "value": 1157
    },
    {
        "gId": 822,
        "text": "熊猫滚滚财(H5)",
        "value": 1158
    },
    {
        "gId": 721,
        "text": "美女吉蒂(H5)",
        "value": 1159
    },
    {
        "gId": 722,
        "text": "牌九(H5)",
        "value": 1160
    },
    {
        "gId": 961,
        "text": "百人牛牛",
        "value": 1161
    },
    {
        "gId": 1061,
        "text": "黄金赛马",
        "value": 1162
    },
    {
        "gId": 1161,
        "text": "龙虎斗",
        "value": 1163
    },
    {
        "gId": 1142,
        "text": "糖果乐园",
        "value": 3000
    },
    {
        "gId": 761,
        "text": "王牌斗地主(H5)",
        "value": 5001
    },
    {
        "gId": 821,
        "text": "王牌牛牛(H5)",
        "value": 5002
    },
    {
        "gId": 823,
        "text": "王牌炸金花(H5)",
        "value": 5003
    },
    {
        "gId": 841,
        "text": "鱼鱼鱼(H5)",
        "value": 6002
    },
    {
        "gId": 842,
        "text": "西游记(H5)",
        "value": 6003
    },
    {
        "gId": 881,
        "text": " 发大财(H5)",
        "value": 6004
    },
    {
        "gId": 843,
        "text": "招财猫(H5)",
        "value": 6005
    },
    {
        "gId": 921,
        "text": "富-财源广进(H5)",
        "value": 6007
    },
    {
        "gId": 922,
        "text": "富-传奇选择(H5)",
        "value": 6008
    },
    {
        "gId": 923,
        "text": "富-永恒彩钻(H5)",
        "value": 6009
    },
    {
        "gId": 924,
        "text": "富-锣鼓迎富(H5)",
        "value": 6010
    },
    {
        "gId": 925,
        "text": "富-富贵牡丹(H5)",
        "value": 6011
    },
    {
        "gId": 882,
        "text": "金运熊猫(H5)",
        "value": 6012
    },
    {
        "gId": 941,
        "text": "财-财源广进(H5)",
        "value": 6013
    },
    {
        "gId": 942,
        "text": "财-传奇选择(H5)",
        "value": 6014
    },
    {
        "gId": 943,
        "text": "财-永恒彩钻(H5)",
        "value": 6015
    },
    {
        "gId": 944,
        "text": "财-锣鼓迎富(H5)",
        "value": 6016
    },
    {
        "gId": 945,
        "text": "财-富贵牡丹(H5)",
        "value": 6017
    },
    {
        "gId": 861,
        "text": "吉祥如意(H5)",
        "value": 6018
    },
    {
        "gId": 981,
        "text": "鱼跃龙门",
        "value": 6019
    },
    {
        "gId": 1021,
        "text": "豪华-财源广进",
        "value": 6020
    },
    {
        "gId": 1022,
        "text": "豪华-传奇选择",
        "value": 6021
    },
    {
        "gId": 1023,
        "text": "豪华-永恒彩钻",
        "value": 6022
    },
    {
        "gId": 1024,
        "text": "豪华-锣鼓迎富",
        "value": 6023
    },
    {
        "gId": 1025,
        "text": "豪华-富贵牡丹",
        "value": 6024
    },
    {
        "gId": 1081,
        "text": "金吉-财源滚滚",
        "value": 6026
    },
    {
        "gId": 1082,
        "text": "金吉-无尽宝藏",
        "value": 6027
    },
    {
        "gId": 1083,
        "text": "金吉-彩钻连连",
        "value": 6028
    },
    {
        "gId": 1084,
        "text": "金吉-锣鼓喧天",
        "value": 6029
    },
    {
        "gId": 1085,
        "text": "金吉-牡丹齐放",
        "value": 6030
    },
    {
        "gId": 1043,
        "text": "闪电-龙之宝藏",
        "value": 6032
    },
    {
        "gId": 1044,
        "text": "闪电-财富之眼",
        "value": 6033
    },
    {
        "gId": 1045,
        "text": "闪电-帝王宝藏",
        "value": 6034
    },
    {
        "gId": 1046,
        "text": "闪电-金蟾蜍",
        "value": 6035
    },
    {
        "gId": 1181,
        "text": "丛林秘宝",
        "value": 6036
    },
    {
        "gId": 1026,
        "text": "满贯骰宝",
        "value": 6801
    },
    {
        "gId": 1141,
        "text": "小猪农场",
        "value": 7000
    },
    {
        "gId": 1042,
        "text": "发发发",
        "value": 7001
    }
];

export default {
  name: '',
  data() {
    return {
      timer: '',
      dApi: '',
    }
  },
    data() {
    return {
      week: {
        start: '',
        end: '',
      },
      data: [],
      games,
    };
  },
  mounted() {
    this.search();
  },
  methods: {
    toFloat(num) {
      return num;
    },
    search() {
      const start = new Date('2021,7,1');
      const end = new Date('2021,8,30');
      this.addSpaceData(api_data, start, end);
    },
    getStartEnd(start, end) {
      const s_start = start;
      const s_end = end;

      //如果當月1號為禮拜天 往前一周
      if (s_start.getDay() == 0) {
        s_start.setDate(s_start.getDate() - 7);
      } else {
        s_start.setDate(s_start.getDate() - (s_start.getDay() - 1)); //月份當前日期減掉星期幾獲得禮拜一
      }
      s_end.setDate(s_end.getDate() + (7 - s_end.getDay())) //月份當前日期加上星期幾獲得禮拜日

      if (s_end >= new Date()) {
        s_end.setDate(s_end.getDate() - 7);
      }

      return {
        start: s_start,
        end: s_end,
      }
    },
  
    addSpaceData(data, startDate, endDate) {
      const { start, end } = this.getStartEnd(startDate, endDate)
      let _data = data
      const dateArray = Object.keys(_data).map(function (item) {
        return new Date(item).getTime()
      })
  
      let last_end_timestamp = end
      const first_start_timestamp = start
  
      while (last_end_timestamp > first_start_timestamp) {
        if (!dateArray.includes(last_end_timestamp)) {
          let newKey = new Date(last_end_timestamp);
          _data[newKey] === undefined ? (_data[newKey] = []) : _data
          this.injectData(_data)
        }
  
        last_end_timestamp -= 1000 * 60 * 60 * 24 * 7
      }
    },
  
    injectData(_data) {
      this.data = []
  
      Object.keys(_data).map((key) => {
        let regPlayer = 0
        let actPlayer = 0
        let num1 = 0
        let num2 = 0
        let playMoney = 0
        let winMoney = 0
        let totalWin = 0
        let totalCommission = 0
        let gameName = ''
  
        const result = {}
        this.games.forEach(game => {
          result[`playScore${game.value}`] = 0
          result[`winScore${game.value}`] = 0
          result[`win${game.value}`] = 0
          result[`commission${game.value}`] = 0
          result[`dailyMultiple${game.value}`] = 0
          result[`normalGameNum${game.value}`] = 0
        })
  
        _data[key].map((elem) => {
          if (!elem) return;
          if (elem.gameId === -1) {
            regPlayer += elem.regPlayer
            actPlayer += elem.actPlayer
            num1 += elem.num1
            num2 += elem.num2
          }
  
          if (elem.gameId != -1) {
            playMoney += elem.playMoney
            winMoney += elem.winMoney
            totalWin += elem.winMoney - elem.playMoney - elem.commission
            totalCommission += elem.commission
  
            result[`playScore${elem.gameId}`] += elem.playMoney
            result[`winScore${elem.gameId}`] += elem.winMoney
            result[`win${elem.gameId}`] += elem.winMoney - elem.playMoney - elem.commission
            result[`commission${elem.gameId}`] += elem.commission
            result[`dailyMultiple${elem.gameId}`] += elem.dailyMultiple
            result[`normalGameNum${elem.gameId}`] += elem.normalGameNum
          }
        })
  
        this.data.push({
          logDate: this.$moment(key).format('YYYY-MM-DD').toString(),
          logDateToShow:
            this.$moment(key).subtract(6, 'days').format('YYYY-MM-DD').toString() +
            '~' +
            this.$moment(key).format('YYYY-MM-DD').toString(),
          regPlayer,
          actPlayer,
          num1,
          num2,
          num3: this.toFloat(num1 - num2),
          playMoney: this.toFloat(playMoney),
          winMoney: this.toFloat(winMoney),
          totalCommission: this.toFloat(totalCommission),
          totalWin: this.toFloat(totalWin),
          totalRare: `${fixedNumber((winMoney / playMoney) * 100)}%`,
          gameName,
        })
  
        // Object.keys(result).forEach((key) => {
        //   this.data[this.data.length - 1][`${key}`] = fixedNumber(result[key])
        // })
  
        this.data = this.data.sort(function(a, b) {
          return new Date(b.logDate).getTime() - new Date(a.logDate).getTime()
        })
  
      })
    },
  },
};
</script>
```

