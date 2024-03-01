<script setup lang="ts">
import { toInteger } from 'lodash-es'
import type { TableColumn } from 'naive-ui/es/data-table/src/interface'

const columns: TableColumn[] = [
  {
    key: 'name',
    title: '用户名',
  },
  {
    key: 'nickName',
    title: '用户昵称',
  },
  {
    key: 'id',
    title: '账号ID',
  },
  {
    key: 'roleName',
    title: '角色',
  },
  {
    key: 'createdAt',
    title: '注册时间',
  },
  {
    key: 'status',
    title: '状态',
  },
  {
    key: 'operation',
    title: '操作',
    fixed: 'right',
    width: 160,
  },
]
const data = ref<any[]>([])
const loading = ref(false)

/* 随便搞点数据 */
function generateData() {
  return new Promise<any[]>((resolve) => {
    loading.value = true
    setTimeout(() => {
      loading.value = false
      const result = []
      for (let i = 0; i < 20; i++) {
        const temp = {
          name: `abc ${i + 1}`,
          nickName: i + 1,
          id: i + 1,
          roleName: Math.random() > 0.9 ? '普通用户' : '管理员',
          createdAt: new Date(Date.now() - toInteger(Math.random() * 100000)).toLocaleDateString(),
          status: Math.random() > 0.5 ? '在线' : '离线',
        }
        result.push(temp)
      }
      resolve(result)
    }, 1200)
  })
}

onMounted(async () => {
  data.value = await generateData()
})
</script>

<template>
  <div wh-full bg-white p-15>
    <CustomDataTable :scroll-x="2200" :loading="loading" :columns="columns" wh-full flex-height :data="data">
      <template #operation>
        <n-space>
          <n-button type="info">
            编辑
          </n-button>
          <n-button type="error">
            删除
          </n-button>
        </n-space>
      </template>
    </CustomDataTable>
  </div>
</template>
