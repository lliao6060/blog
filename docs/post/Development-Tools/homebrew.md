# homebrew
- 安裝 在終端機輸入
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

- 一氣呵成的指令，幫助你更新和維護你透過 Homebrew 安裝的套件：
```
brew update && brew upgrade && brew cleanup
```
- `brew update`：這個指令會更新 Homebrew 本身，以及你安裝的所有套件的資訊。
- `brew upgrade`：這個指令會將你安裝的所有套件更新到最新版本，如果有依賴關係也會一併升級。
- `brew cleanup`：這個指令會清理掉你不再需要的舊版本套件以及其他暫存檔案並釋放空間。

### 推薦套件
#### nvm
#### ffmpeg
測試影片：裝完之後就跑 ffplay {VIDEO_URL}
這樣可以直接看這個串流是否正常


1. 僅錄影螢幕畫面
    如果你只想錄製螢幕畫面，指令的 -i 參數應該填入螢幕的編號，也就是 3。
    ```
    ffmpeg -f avfoundation -i "3" -r 30 -c:v libx264 -pix_fmt yuv420p output.mp4
    ```
2. 同時錄影螢幕畫面和麥克風
         "3:1": 冒號前方的 3 是影片輸入（螢幕），冒號後方的 1 是音訊輸入（MacBook Air的麥克風）。

    -c:a aac: 新增了音訊編碼器，這裡使用 aac，這是 MP4 格式常用的音訊編碼器。
    ```
    ffmpeg -f avfoundation -i "3:1" -r 30 -c:v libx264 -c:a aac -pix_fmt yuv420p output.mp4
    ```
    
3. 如何直接將檔案儲存到指定位置
    為了方便管理，下次錄影時，你可以在 FFmpeg 指令中直接指定一個更方便的儲存路徑，例如將檔案儲存到桌面（Desktop）。

    你只需要修改指令最後的輸出路徑即可：
    ```
    ffmpeg -f avfoundation -i "3:1" -r 30 -c:v libx264 -c:a aac -pix_fmt yuv420p ~/Desktop/my_screencast.mp4
    ```
    `~/Desktop/my_screencast.mp4`：這個路徑會將錄影檔案直接儲存到你的桌面，並命名為 my_screencast.mp4。
    你可以將 `~/Desktop` 替換成任何你想儲存的資料夾路徑。

4. 停止錄影按 Ctrl + C
5. 打開影片 open output.mp4


    #### 重要提醒：macOS 權限設定
    如果你在執行修正後的指令時仍然遇到「Input/output error」或類似錯誤，很可能是因為 macOS 的隱私權限限制。

    請務必前往「系統設定」>「隱私權與安全性」>「螢幕錄影」，並確保已開啟「終端機」的權限。這是 macOS 保護使用者隱私的機制，只有在獲得明確許可後，FFmpeg 才能存取螢幕。


### oh-my-zsh 安裝
雖然你是用 Homebrew 安裝了 Oh My Zsh，但切換主題的方法是一樣的，因為這主要是在修改 Oh My Zsh 自己的設定檔，而不是 Homebrew 的設定。

以下是詳細的步驟：

#### **1. 開啟終端機 (Terminal)**

  * 如果你還沒打開，請先打開終端機。

#### **2. 編輯 `.zshrc` 設定檔**

Oh My Zsh 的設定檔是 `~/.zshrc`。你可以使用終端機的文字編輯器來開啟它。

  * **使用 `nano` 編輯器（推薦給新手）：**
    ```bash
    nano ~/.zshrc
    ```
    `nano` 是一個簡單易用的編輯器，所有操作都會在畫面下方提示。

#### **3. 尋找並修改 `ZSH_THEME` 變數**

在 `nano` 編輯器中，使用鍵盤的方向鍵移動游標，找到類似下面這行：

```bash
ZSH_THEME="robbyrussell"
```

將引號中的 `"robbyrussell"` 替換成你想要的主題名稱。舉例來說，如果你想使用 **`agnoster`** 這個主題：

```bash
ZSH_THEME="agnoster"
```

> 💡 **小提示：** 你可以在網路上搜尋 "oh my zsh themes" 來預覽不同的主題樣式。

#### **4. 儲存並退出編輯器**

  * **使用 `nano`：**
      * 按下 `Ctrl + O` (寫入檔案)。
      * 按下 `Enter` 確認檔案名稱。
      * 按下 `Ctrl + X` 退出編輯器。

#### **5. 重新載入 Zsh 設定**

最後一步是讓你的終端機載入新的設定，這樣主題就會立即切換了。

在終端機中輸入以下指令並按下 `Enter`：

```bash
source ~/.zshrc
```

如果一切順利，你的終端機主題應該會馬上改變。
推薦主題 `ZSH_THEME="jonathan"`
主題列表 -> [themes](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes)

```
# 1. 安裝 cloudflared（Mac）
brew install cloudflare/cloudflare/cloudflared

# 2. 確認本地服務運行在 443 端口
lsof -i :443  # 檢查是否有服務在 443

# 3. 建立隧道
cloudflared tunnel --url https://localhost:443

# 4. 複製輸出的網址到手機測試
INF |  Your quick Tunnel has been created! Visit it at (it may take some time to be reachable):  |
INF |  https://louisville-physician-societies-garbage.trycloudflare.com << 通常長類似這樣
```





### 參考
[Mac 必裝的套件管理工具－Homebrew 最新版使用手冊](https://electrify.tw/homebrew-for-mac/)