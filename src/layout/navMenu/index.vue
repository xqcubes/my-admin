<template>
  <div class="nav-menu">

      <el-menu class="el-menu-vertical-demo"  background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <re-menu v-for="(it,id) in menuData" :key="id+'a'" :item="it"></re-menu>
      </el-menu>
  </div>
</template>

<script>
import ReMenu from './reMenu'

export default {
  name: 'navMenu',
  components: {
    ReMenu

  },
  data () {
    return {
      menuData: [
        { label: '菜单1', value: '1' },
        {

          label: '菜单2',
          value: '2',
          children: [
            { label: '菜单2-1', value: '2-1' },
            {
              label: '菜单2-2',
              value: '2-2',
              children: [
                { label: '菜单2-2-1', value: '2-2-1' }
              ]
            }
          ]
        },
        {
          label: '菜单3',
          value: '3',
          childern: [{
            label: '菜单3-1', value: '3-1'
          }]
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.nav-menu{
  width 210px
  height 100%
  overflow auto
  background #545c64
}
</style>
