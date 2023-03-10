# 分頁頁籤（各UI都適用）
###### tags: `情境問題`

1. 在`table/composables`創建一個`usePagination`的hook
```js
import type { Pagination } from '@/common/types'
import type { Ref } from 'vue'
import i18n from '@/plugins/i18n'

export interface ReturnUsePagination {
  pageData: Pagination,
}

export default function usePagination():ReturnUsePagination {
  const { t } = i18n.global
  const pageData: Pagination = reactive({
    pageOpts: [25, 50, 100],
    pageSizes: [
      {
        label: `25 / ${t('components.pagination.perpage')}`,
        value: 25
      },
      {
        label: `50 / ${t('components.pagination.perpage')}`,
        value: 50
      },
      {
        label: `100 / ${t('components.pagination.perpage')}`,
        value: 100
      },
    ],
    pageCurrent: 1,
    // 初始化總條數
    dataCount: 0,
    //每頁顯示多少條
    pageSize: 25,
    //當前頁碼
    page: 1,
  })

  return {
    pageData
  }
}
```

2.封裝成component 以`naive UI table`為例
```javascript
  interface TableProps {
    columns?: Array<DataTableColumn>
    size?: 'small' | 'medium' | 'large'
    data: DataTable[],
    loading: boolean
    showSearchBar: boolean
    pageData: Pagination
  }

  //note: withDefaults = props set default value
  const props = withDefaults(defineProps<TableProps>(), {
    columns: () => [],
    size: 'medium',
  })

  const emit = defineEmits<{
    (e: 'onChangePage', id: number): void
    (e: 'onChangePageSize', value: number): void
    (e: 'onReload'): void
  }>()

  //pagination
  function changePage(pageNo: number) {
    emit('onChangePage', pageNo)
  }
  async function changePageSize(size: number) {
    emit('onChangePageSize', size)
  }
```
```html
  <n-pagination
    v-model:page="pageData.page"
    v-model:page-size="pageData.pageSize"
    :page-count="Math.ceil(pageData.dataCount / pageData.pageSize)"
    :on-update:page="changePage"
    :on-update:page-size="changePageSize"
    show-size-picker
    :page-slot="5"
    :page-sizes="pageData.pageSizes"
    :prefix="() => `${$t('components.pagination.total', [`${pageData.dataCount}`])}`"
  ></n-pagination>
```

3. 在需用到的組件導入
```javascript
import usePagination from '@/components/table/composables/usePagination'
const { pageData } = usePagination()

const data: any = ref([])
const loading = ref(false)

async function getApi() {
  window.$loadingbar.start()
  loading.value = true
  const count = pageData.pageSize ? pageData.pageSize : 25

  //這邊就看api參數是什麼就給什麼
  const {
    res,
    data: list,
    totalCount,
  } = await api.getPlayers<{ data: Player[]; totalCount: number }>(
    ((pageData.page ? pageData.page : 1) - 1).toString(),
    count.toString(),
    enabled.toString(),
    isTester.toString(),
  )
  if (res != Result.OK) {
    window.$message.error(responseMessage[`${res}`])
    window.$loadingbar.error()
    loading.value = false
    return
  }
  exportData.value = list
  restructureData(list)
  if (totalCount > 0) {
    pageData.dataCount = totalCount
  }
  window.$loadingbar.finish()
  loading.value = false
}

function restructureData(copidData: Player[]) {
  const action = getText('roleText.0')
  const isEnabledAccount = getText('roleText.1')
  const statusText: string[] = [
    `${getText('statusText.0')}`,
    `${getText('statusText.1')}`,
    `${getText('statusText.2')}`,
  ]
  const result = copidData.map((item: Player) => {
    return {
      ...item,
      money: item.money ? fixedMoney(item.money as number) : 0,
      loggedInAt: dayjs(item.loggedInAt).format('YYYY-MM-DD HH:mm:ss'),
      role: item.isTester === true ? action : isEnabledAccount,
      //-下面都是api還沒有的
      vip: Math.floor(Math.random() * 10),
      status: Math.round(Math.random()),
    }
  })
  const page = pageData.page ? pageData.page : 1
  const addTextData = result.map((item: Player, i: number) => {
    return {
      ...item,
      index: (page - 1) * pageData.pageSize + i + 1,
      status: statusText[Math.floor(Math.random() * 3)],
    }
  })
  data.value = addTextData
}


// pagination
async function changePage(pageNo: number) {
  pageData.page = pageNo
  await getApi()
}
async function changePageSize(size: number) {
  pageData.pageSize = size
  await getApi()
}
async function onReload() {
  await getApi()
}

```
```html
<basic-table
  ref="exportable_table"
  :columns="columns"
  :data="data"
  :pageData="pageData"
  show-searchBar
  :loading="loading"
  @on-change-page="changePage"
  @on-change-page-size="changePageSize"
  @on-reload="onReload"
></basic-table>
```