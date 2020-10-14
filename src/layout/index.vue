<template>
  <div class="layout">
    <nav-menu class="menu"></nav-menu>
    <div class="main">
      <nav-top></nav-top>
      <nav-tab></nav-tab>
      <div class="content">
          <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import NavMenu from './navMenu'
import NavTop from './navTop'
import NavTab from './navTab'
export default {
  name: 'layout',
  components: {
    NavMenu,
    NavTop,
    NavTab
  }
}
</script>

<style lang="stylus" scoped>
.layout{
   position relative
   width 100%
   height 100%
   top 0
   bottom 0

  .menu{
    position fixed
    top 0
    left 0
    bottom 0
    width 210px
    }

  .main{
    margin-left 210px
    background  red
    }
  }
</style>
