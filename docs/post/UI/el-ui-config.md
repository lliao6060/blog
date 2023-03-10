
# el-ui配置相關
###### tags: `element-ui` `vue` `vue ui`

### 引入
- [單獨引入方法](https://blog.csdn.net/qq_38244874/article/details/108448113)
- [單獨引入Message組件的問題](https://blog.csdn.net/weixin_30578677/article/details/96515700)

- [切換語言](https://blog.csdn.net/qq_40556950/article/details/105970003?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2.control)


### input
- 添加focus
```javascript=
 this.$nextTick(() => this.$refs.yourRefInput.focus())
```
- 限制只能輸入數字
```javascript=
oninput="if(isNaN(value)) { value = null } if(value.indexOf('.')>0){value=value.slice(0,value.indexOf('.')+3)}"
```
- [el-input輸入框字符限制，只顯示英文及數字](https://blog.csdn.net/qq_39967527/article/details/105511927?utm_medium=distribute.pc_relevant.none-task-blog-baidujs_title-0&spm=1001.2101.3001.4242)
```html=
<el-input 
  v-model="accountVal" 
  maxlength="24"
  placeholder="请输入用户账号"
></el-input>
```
```javascript=

通过监控输入框的事实输入，来进行正则盼盼重新赋值处理

watch: {
  'baseInfoForm.companyEngName'(nV)//watch對象 {
    const vm = this;
    let codeReg = new RegExp("[A-Za-z0-9]+"), //正则 英文+数字；
    len = nV.length,
    str='';
      for(let i = 0; i < len; i ++) {
      if(codeReg.test(nV[i])) {
        str += nV[i];
      }
    }
    vm.baseInfoForm.companyEngName = str;
  },
}
```

### datepicker
- [日期不可選同一天](https://codepen.io/Yan06/pen/oNYpyPx)
- [daterange版不可選同一天](https://codepen.io/Yan06/pen/bGBazKL)