<template>
 <div class="re-menu">

   <el-menu-item v-if="!item.children || (item.children&&!item.meta)" :index="`${path}/${item.path}`">
     <span v-if="item.children && item.children.length===1">{{item.children[0].meta.name}} </span>
     <span v-else slot="title">{{item.meta.name}}</span>
   </el-menu-item>
   <el-submenu v-else :index="`${path}/${item.path}`">
       <template slot="title" v-if="item.meta">
            {{item.meta.name}}
        </template>
          <re-menu  v-for="(child,index) in item.children" :key="index" :item="child" :path="`${path}${item.path}`">
          </re-menu>
    </el-submenu>
 </div>
</template>

<script>

export default {
  name: 'reMenu',

  props: {
    item: {
      type: Object,
      default: () => {}
    },
    path: {
      type: String,
      default: ''
    }
  },
  mounted () {
    // console.log('re', this.item)
  }

}
</script>

<style lang="stylus">
  .re-menu{

  }
</style>
