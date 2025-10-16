# Vue + typeScript配置筆記
[原文](https://www.itread01.com/content/1576343165.html)

1. 安裝typescript

```javascript
npm install typescript @vue/cli-plugin-typescript -D
```

2. 在專案的根目錄下建立 `shims-vue.d.ts`、`shims-tsx.d.ts`、`tsconfig.json`

- shims-vue.d.ts

```javascript
import Vue from 'vue';

declare module '*.vue' {
  export default Vue;
}
```

- shims-tsx.d.ts

```javascript
import Vue, { VNode } from 'vue';

declare global {
  namespace JSX {
    type Element = VNode
    type ElementClass = Vue
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
```

- tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "esnext",
    "strict": true,
    "jsx": "preserve",
    "importHelpers": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "experimentalDecorators":true,
    "sourceMap": true,
    "noImplicitThis": false,
    "baseUrl": ".",
    "types": [
      "webpack-env"
    ],
    "paths": {
      "@/*": [
        "src/*"
      ]
    },
    "lib": [
      "esnext",
      "dom",
      "dom.iterable",
      "scripthost"
    ]
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "tests/**/*.ts",
    "tests/**/*.tsx"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

3. ESLint配置
> 如果使用的是VScode，推薦使用ESLint外掛輔助開發。

- 安裝(配置項的說明檢視AlloyTeam ESLint 規則)

```javascript
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-alloy
```

- 配置 在專案的根目錄中建立.eslintrc.js，然後將以下內容複製到其中:

```javascript
module.exports = {
  extends: [
    'alloy',
    'alloy/typescript',
  ],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    // 自定義規則
    'spaced-comment': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'grouped-accessor-pairs': 'off',
    'no-constructor-return': 'off',
    'no-dupe-else-if': 'off',
    'no-import-assign': 'off',
    'no-setter-return': 'off',
    'prefer-regex-literals': 'off'
  }
};
```


4. 檔案改造
- 入口檔案
  1. main.js 改為 main.ts
  2. vue.config.js 修改入口檔案


```javascript
const path = require('path')
module.exports = {
  ...
  pages: {
    index: {
      entry: path.resolve(__dirname+'/src/main.ts')
    },
  },
  ...
}
```

- vue元件檔案
> 隨著TypeScript和ES6裡引入了類，在一些場景下我們需要額外的特性來支援標註或修改類及其成員。 裝飾器（Decorators）為我們在類的宣告及成員上通過超程式設計語法新增標註提供了一種方式。
> Vue 也為我們提供了類風格元件的 TypeScript 裝飾器，使用裝飾器前需要在 tsconfig.json 將 experimentalDecorators 設定為 true。
 1. 安裝vue裝飾器(vue-property-decorator庫完全依賴vue-class-component，在安裝時要一起裝上)

```javascript
npm install vue-class-component vue-property-decorator -D
```

 2. 改造.vue (只需要修改srcipt內的東西即可，其他不需要改動)
 > 類成員修飾符，不新增修飾符則預設為public
 > public：公有，可以自由訪問類的成員
 > protected：保護，類及其繼承的子類可訪問
 > private：私有，只有類可以訪問

 ```javascript
 <script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import draggable from 'vuedraggable'

@Component({
  created(){
    
  },
  components:{
    draggable
  }
})
export default class MyComponent extends Vue {
  /* data */
  private ButtonGrounp:Array<any> = ['edit', 'del']
  public dialogFormVisible:boolean = false
  
  /*method*/
  setDialogFormVisible(){
    this.dialogFormVisible = false
  }
  addButton(btn:string){
    this.ButtonGrounp.push(btn)
  }

  /*compute*/
  get routeType(){
    return this.$route.params.type
  }
}
</script>
 ```

  - Prop
  > !: 為屬性使用明確的賦值斷言修飾符，瞭解更多看文件
  
  ```javascript
  import { Component, Vue, Prop } from "vue-property-decorator";
  export default class MyComponent extends Vue {
    ...
    @Prop({type: Number,default: 0}) readonly id!: number
    ...
  }
  ```
  等同於

  ```javascript
  export default {
    ...
    props:{
      id:{
        type: Number,
        default: 0
      }
    }
    ...
  }
  ```

  - Watch
  > 更多裝飾器使用，參考vue-property-decorator文件

  ```javascript
  import { Component, Vue, Watch } from "vue-property-decorator";
  export default class MyComponent extends Vue {
    ...
    @Watch('dialogFormVisible')
    dialogFormVisibleChange(newVal:boolean){
      // 一些操作
    }
    ...
  }
  ```
  等同於

  ```javascript
  export default {
    ...
    watch:{
      dialogFormVisible(){
        // 一些操作
      }
    }
    ...
  }
  ```

  - Provide/Inject

  ```javascript
  // App.vue
  import {Component, Vue, Provide} from 'vue-property-decorator'
  @Component
  export default class App extends Vue {
    @Provide() app = this
  }

  // MyComponent.vue
  // App.vue
  export default {
    provide() {
      return {
        'app': this
      }
    }
  }

  // MyComponent.vue
  export default {
    inject: ['app']
  }
  ```

  5. 為vue例項新增屬性/方法
  > 當我們在使用`this.$route`或一些原型上的方法時，typescript無法進行推斷，**在編譯時會報屬性$route不存在的錯誤**，需要為這些全域性的屬性或方法新增全域性宣告
  > 對shims-vue.d.ts做修改，當然你也可以選擇自定義*.d.ts來新增宣告

  ```javascript
  import Vue from 'vue';
  import VueRouter, { Route } from 'vue-router'

  declare module '*.vue' {
    export default Vue;
  }

  declare module 'vue/types/vue' {
    interface Vue {
      $api: any;
      $bus: any;
      $router: VueRouter;
      $route: Route;
    }
  }
  ```

  6. 自定義型別定義檔案
  > 當一些型別或介面等需要頻繁使用時，我們可以為專案編寫全域性型別定義，
  > 根路徑下建立@types資料夾，裡面存放*.d.ts檔案，專門用於管理專案中的型別定義檔案。

  範例 global.d.ts

  ```javascript
    //declare 可以建立 *.d.ts 檔案中的變數，declare 只能作用域最外層
    //變數
    declare var num: number;

    //型別
    type StrOrNum = string | number

    //函式
    declare function handler(str: string): void;

    // 類
    declare class User { 
      
    }

    //介面
    interface OBJ {
      [propName: string]: any;
      [propName: number]: any;
    }

    interface RES extends OBJ {
      resultCode: number;
      data: any;
      msg?: string;
    }
  ```

  7. 解放雙手，transvue2ts轉換工具
  > 改造過程最麻煩的就是語法轉換，內容都是一些固定的寫法，這些重複且枯燥的工作可以交給機器去做。這裡我們可以藉助 transvue2ts 工具提高效率，transvue2ts 會幫我們把data、prop、watch等語法轉換為裝飾器語法。

  
  - 安裝

  ```javascript
  npm i transvue2ts -g
  ```

  - 使用(工具只是幫我們轉換部分語法。工具未能處理的語法和引數的型別定義，還是需要我們去修改的。要注意的是轉換後註釋會被過濾掉)
  > 安裝完之後，transvue2ts 庫的路徑會寫到系統的 path中，直接開啟命令列工具即可使用，命令的第二個引數是檔案的完整路徑。
  > **執行命令後會在同級目錄生成轉換好的新檔案，例如處理view資料夾下的index.vue，轉換後會生成indexTS.vue**。


  處理單檔案元件

  ```javascript
  transvue2ts D:\typescript-vue-admin-demo\src\pages\index.vue
  =>
  輸出路徑：D:\typescript-vue-admin-demo\src\pages\indexTS.vue
  ```

  處理資料夾下的所有vue元件檔案

  ```javascript
  transvue2ts D:\typescript-vue-admin-demo\src\pages
  =>
  輸出路徑：D:\typescript-vue-admin-demo\src\pagesTS
  ```

  - 補充
    - 關於第三方庫使用 
    > 一些三方庫會在安裝時，包含有型別定義檔案，使用時無需自己去定義，可以直接使用官方提供的型別定義。
    > node_modules中找到對應的包資料夾，型別檔案一般都會存放在types資料夾內，其實型別定義檔案就像文件一樣，這些內容能夠清晰的看到所需引數和引數型別。

    範例1 (element-ui 元件引數)

    使用型別定義
    ```javascript
    import { Component, Vue } from "vue-property-decorator";
    import { ElLoadingComponent, LoadingServiceOptions } from 'element-ui/types/loading'

    let loadingMark:ElLoadingComponent; 
    let loadingConfig:LoadingServiceOptions = {
      lock: true,
      text: "載入中",
      spinner: "el-icon-loading",
      background: "rgba(255, 255, 255, 0.7)"
    };

    @Component
    export default class MyComponent extends Vue {
      ...
      getList() {
        loadingMark = this.$loading(loadingConfig);
        this.$api.getList()
          .then((res:RES) => {
            loadingMark.close();
          });
      }
      ...
    }
    ```

    element-ui/types/loading，原檔案裡還有很多註釋，對每個屬性都做出描述
    ```javascript
    export interface LoadingServiceOptions {
      target?: HTMLElement | string
      body?: boolean
      fullscreen?: boolean
      lock?: boolean
      text?: string
      spinner?: string
      background?: string
      customClass?: string
    }
    export declare class ElLoadingComponent extends Vue {
      close (): void
    }
    declare module 'vue/types/vue' {
      interface Vue {
        $loading (options: LoadingServiceOptions): ElLoadingComponent
      }
    }
    ```

    範例2 (vue-router 鉤子函式)

    使用型別定義
    ```javascript
    import { Component, Vue } from "vue-property-decorator";
    import { NavigationGuard } from "vue-router";

    @Component
    export default class MyComponent extends Vue {
      beforeRouteUpdate:NavigationGuard = function(to, from, next) {
        next();
      }
    }
    ```

    在vue-router/types/router.d.ts中，開頭就可以看到鉤子函式的型別定義。
    ```javascript
    export type NavigationGuard<V extends Vue = Vue> = (
      to: Route,
      from: Route,
      next: (to?: RawLocation | false | ((vm: V) => any) | void) => void
    ) => any
    ```

    還有前面所使用到的Router、Route，所有的方法、屬性、引數等都在這裡被描述得清清楚楚
    ```javascript
      export declare class VueRouter {
        constructor (options?: RouterOptions);

        app: Vue;
        mode: RouterMode;
        currentRoute: Route;

        beforeEach (guard: NavigationGuard): Function;
        beforeResolve (guard: NavigationGuard): Function;
        afterEach (hook: (to: Route, from: Route) => any): Function;
        push (location: RawLocation, onComplete?: Function, onAbort?: ErrorHandler): void;
        replace (location: RawLocation, onComplete?: Function, onAbort?: ErrorHandler): void;
        go (n: number): void;
        back (): void;
        forward (): void;
        getMatchedComponents (to?: RawLocation | Route): Component[];
        onReady (cb: Function, errorCb?: ErrorHandler): void;
        onError (cb: ErrorHandler): void;
        addRoutes (routes: RouteConfig[]): void;
        resolve (to: RawLocation, current?: Route, append?: boolean): {
          location: Location;
          route: Route;
          href: string;
          normalizedTo: Location;
          resolved: Route;
        };

        static install: PluginFunction<never>;
      }
      export interface Route {
        path: string;
        name?: string;
        hash: string;
        query: Dictionary<string | (string | null)[]>;
        params: Dictionary<string>;
        fullPath: string;
        matched: RouteRecord[];
        redirectedFrom?: string;
        meta?: any;
      }
    ```
    - 自定義三方庫宣告 
     當使用的三方庫未帶有 *.d.ts 宣告檔案時，在專案編譯時會報這樣的錯誤：

     ```javascript
      Could not find a declaration file for module 'vuedraggable'. 'D:/typescript-vue-admin-demo/node_modules/vuedraggable/dist/vuedraggable.umd.min.js' implicitly has an 'any' type.
      Try `npm install @types/vuedraggable` if it exists or add a new declaration (.d.ts) file containing `declare module 'vuedraggable';`
     ```
     大致意思為 vuedraggable 找不到宣告檔案，可以嘗試安裝 @types/vuedraggable(如果存在)，或者自定義新的宣告檔案。
      - 解決方法
        1. 安裝 @types/vuedraggable
          > 按照提示先選擇第一種方式，安裝 @types/vuedraggable，然後發現錯誤 404 not found，說明這個包不存在。感覺這個元件還挺多人用的（周下載量18w），沒想到社群居然沒有宣告檔案。
        2. 自定義宣告檔案
          > 首先在 node_modules/@types 下建立 vuedraggable 資料夾，如果沒有 @types 資料夾可自行建立。vuedraggable 資料夾下建立 index.d.ts。編寫以下內容：

        ```javascript
        import Vue from 'vue'
        declare class Vuedraggable extends Vue{}
        export = Vuedraggable
        ```

        重新編譯後沒有報錯，解決問題。


