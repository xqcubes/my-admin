<template>
 <div class="re-menu">

    <el-submenu v-if="item.children&&item.children.length>0" :index="item.value">
       <template slot="title">
            {{item.label}}
        </template>
          <re-menu  v-for="(child,index) in item.children" :key="index" :item="child">
          </re-menu>
    </el-submenu>
   <el-menu-item v-else :index="item.value">
     <span slot="title">{{item.label}}</span>
     </el-menu-item>
 </div>
</template>

<script>

export default {
  name: 'reMenu',

  props: {
    item: {
      type: Object,
      default: () => {}
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
