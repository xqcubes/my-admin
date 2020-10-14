import Layout from '@/layout/index.vue'
const DragTable = () => import('@/views/table/dragTable.vue')
const DyTable = () => import('@/views/table/dyTable.vue')

const tableRoute = [{
  path: '/',
  component: Layout,
  children: [{
    name: 'dragTable',
    path: 'dragTable',
    component: DragTable
  },
  {
    name: 'dyTable',
    path: '/dyTable',
    component: DyTable
  }]

}]
export default tableRoute
