# Axios筆記

- [axios大全](https://www.cnblogs.com/cckui/p/10444246.html)
    - 統一處理：
    ```javascript=
    getHistoryData (data) { 
      axios.get('/api/survey/list/', {
        params: data
      }).then((res) => {
        console.log(res)
        this.tableData = res.data.result
        this.totalData = res.data.count
      }).catch((err) => {
        console.log(err)
        alert('请求出错！')
      })
    }
    ```
    
    - 使用 asyns/await 將 axios 異步請求同步化：
    ```javascript=
    async getHistoryData (data) {
      try {
        let res = await axios.get('/api/survey/list/', {
          params: data
        })
        this.tableData = res.data.result
        this.totalData = res.data.count
      } catch (err) {
        console.log(err)
        alert('请求出错！')
      }
    }
    ```
    
    - 當 axios 請求拿到的數據在不同場景下做不同的處理時：
    ```javascript=
     async handleClick (tab) {
      let data = {
        status: tab.name,
        name: this.formInline.user,
        cid: this.formInline.identity,
        start_time: this.formInline.dateTime ? this.formInline.dateTime[0] : '',
        end_time: this.formInline.dateTime ? this.formInline.dateTime[1] : ''
      }
      try {
        let res = await this.getHistoryData()
        console.log(res)
        // 等拿到返回数据res后再进行处理
        this.tableData = res.data.result
        this.totalData = res.data.count
      } catch (err) {
        console.log(err)
        alert('请求出错')
      } 
    },
    // 封裝axios請求，返回promise, 用於調用getHistoryData函數後作不同處理
    getHistoryData (data) {
      return new Promise((resolve, reject) => {
        axios.get('/api/survey/list/', {
          params: data
        }).then((res) => {
          resolve(res)
        }).catch((err) => {
          reject(err)
        })
      })
    }
    ```