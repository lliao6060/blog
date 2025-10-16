# Cursor Figma MCP 設定

## 安裝與設定

### 指令
```bash
npx figma-developer-mcp --figma-api-key=<your_token>
```

## 取得 Figma API Token

若要在 Figma 的設定中重新產生個人存取權杖(Personal Access Token, PAT)：

1. 請先登入您的 Figma 帳戶，在左上角點擊頭像
2. 然後選擇 Settings（設定）
3. 接著，在設定頁面中選擇 Security（安全）標籤
4. 捲動至 Personal access tokens（個人存取權杖）部分
5. 點選 Generate new token（產生新令牌）
6. 輸入令牌的名稱，選擇您需要的權限，然後複製產生的令牌以備使用

## Cursor MCP 設定

```json
{
  "mcpServers": {
    "Framelink Figma MCP": {
      "command": "npx",
      "args": [
        "-y",
        "figma-developer-mcp",
        "--figma-api-key=token",
        "--port=3333",
        "--stdio"
      ]
    }
  }
}
```

## 參考資源
- [Figma MCP + Cursor 完全配置与使用指南：实现设计到代码的智能转换](https://juejin.cn/post/7510181121206255650)

