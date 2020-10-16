import Layout from '@/layout/index.vue'
const DragTable = () => import('@/views/table/dragTable.vue')
const DyTable = () => import('@/views/table/dyTable.vue')

const tableRoute = {
  path: '/table',
  component: Layout,
  redirect: '/table/dragTable',
  meta: {
    name: '表格'
  },
  children: [{
    name: 'dragTable',
    path: 'dragTable',
    component: DragTable,
    meta: {
      name: '拖拽表格'
    }
  },
  {
    name: 'dyTable',
    path: 'dyTable',
    component: DyTable,
    meta: {
      name: '动态表格'
    }
  }]

}
export default tableRoute
