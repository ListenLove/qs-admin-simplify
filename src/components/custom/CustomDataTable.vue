<script setup lang="ts">
/* 轻度封装数据表格自定义渲染功能 */
import type { DataTableColumn } from 'naive-ui'
import type { TableColumns } from 'naive-ui/es/data-table/src/interface'
import type { PropType } from 'vue'

const props = defineProps({
  columns: {
    type: Array as PropType<TableColumns>,
    required: true,
  },
})
const slots = useSlots()
const localColumns = computed(() => {
  const columns = [...props.columns as TableColumns]
  columns.forEach((c: any) => {
    const key = c.key
    if (slots[key]) {
      c.render = (row: DataTableColumn) => {
        return slots[key]!({ row })
      }
    }
  })
  return columns
})
</script>

<template>
  <main flex-col>
    <n-data-table v-bind="$attrs" :columns="localColumns" flex-1 />
  </main>
</template>
