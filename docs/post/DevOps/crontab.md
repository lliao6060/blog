<!--
 * @Author: lindy.liao@jingmi.com.tw 
 * @Date: 2025-10-15 16:17:10
 * @LastEditTime: 2025-10-15 16:17:28
 * @LastEditors: lindy.liao@jingmi.com.tw 
 * @Description: 檔案描述
 * @FilePath: /blog/docs/post/DevOps/crontab.md
-->
# Crontab 定時任務
### 什麼是 Crontab?
`Crontab`（是 `cron table`的縮寫）是一個用於在`Unix`和`Unix-like`操作系統上定期執行任務的工具。這些任務通常被稱為"`cron jobs`"。`Crontab`允許用戶定義計劃的任務，以便在特定的日期和時間執行，無需手動操作。

![image](https://hackmd.io/_uploads/BkWjzRCMee.png)

### Crontab 基本操作
查看目前使用者的定時任務
```
crontab -l
```

編輯 Crontab 任務
```
crontab -e
```

刪除目前使用者的所有 Crontab 任務
```
crontab -r
```

刪除特定使用者的 Crontab 任務（需要 root 權限）
```
crontab -u username -r
```

### 使用方法
![image](https://hackmd.io/_uploads/BJLjJRRMxe.png)

#### 特殊字符说明：

| 字符 | 意義 | 說明 |
| -------- | -------- | -------- |
| `*`     | 匹配任意單一原子值     | 每分鐘，每小時，每天等     |
| `,`     | 分隔清單項: 星期項     | `2,4,6` 是週二、週四、週六。     |
| `-`     | 定義範圍: 小時項      | `9-18` 表示早上9點到下午6點，每小時都匹配    |
| `/`     | 定義範圍: 小時項     | `9/2` 表示從早上9點開始，每2小時執行一次    |


#### 特殊的 Crontab 時間關鍵字

除了傳統的 * * * * * 語法，cron 也支援一些特殊關鍵字：


| 關鍵字 | 意義 |
| -------- | -------- | 
| @reboot     | 系統啟動時執行     |
| @yearly     |每年 1 月 1 日 00:00 執行     |
| @monthly     |每月 1 日 00:00 執行     |
| @weekly     |每週日 00:00 執行    |
| @daily     |每日 00:00 執行     |
| @hourly     |每小時 00:00 執行    |

範例: 
在系統啟動時運行 startup_script.sh。
```
@reboot /home/user/startup_script.sh
```


#### Crontab 時間表達式範例
> 米字號 改為全形'＊' 不然看不到

1. `0 21 * * *` -> 每天晚上 9 點整執行
解讀： 分鐘(0) 小時(21) 日期(＊) 月份(＊) 星期(＊)

2. `0 22 * * 5` -> 週五晚上 10 點整執行
解讀： 分鐘(0) 小時(22) 日期(＊) 月份(＊) 星期(5)

3. `0 8 * * *` -> 每天早上8點執行
解讀： 分鐘(0) 小時(0) 日期(8) 月份(＊) 星期(＊)

4. `0 9-23/2 * * MON-FRI` -> 週一到週五 週一到週五 早上9點晚上11點 每兩小時執行一次
解讀： 分鐘(0) 小時(9-23/2) 日期(＊) 月份(＊) 星期(MON-FRI)

5. `30 2 * * *` -> 每天凌晨 2:30 運行 backup.sh
解讀： 分鐘(30) 小時(2) 日期(＊) 月份(＊) 星期(＊)


### 參考
- [前端必备的定时任务技能 - Cron + node-schedule](https://juejin.cn/post/7163608389233147918)
- [Cron 是什麼？定時任務的語法怎麼寫？](https://kucw.io/blog/cron/)
- Google gemini
- [理解 crontab 幫助處理例行性任務](https://vocus.cc/article/64df411bfd89780001629217)
- [crontab介紹](https://juejin.cn/post/7474874046166663187?searchId=202506051626559D51979786D483CF07C9)
- [crontab解析工具](https://www.huhage.fun/#/tools/cron)