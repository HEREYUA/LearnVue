<template>
<div class="content">
          <el-menu :default-active="$route.path"
                   class="el-menu-vertical-demo"
                    unique-opened router :collapse="collapsed"
                    background-color="#545c64"
                     text-color="#fff"
                     :style="{width:asideWidth+'px'}">
                <template class="el-submenu-font"  v-for="(item,index) in routes[0].children"  >
                  <!-- 拥有子菜单 -->
                  <el-submenu  :index="index+''" :key="item.name" v-if="item.children&&item.children.length>0">
                    <!-- <span  class="el-submenu-font-item" slot="title"><i :class="item.icons" class="icon_div"></i><span class="menu_name">{{item.name}}</span></span> -->
                    <template slot="title" >
                      <i :class="item.icons"></i>
                      <span class="menu_name">{{item.name}}</span>
                    </template>
                    <el-menu-item v-for="child in routeChildren(item)" :index="child.path" :key="child.path">{{child.name}}</el-menu-item>
                  </el-submenu>
                  <!-- 不拥有子菜单 -->
                  <el-menu-item v-if="!item.children" :key="item.name" :index="item.path">
                     <i :class="item.icons"></i>
                    <span slot="title"  class="menu_name">{{item.name}}</span>
                  </el-menu-item>
                </template>
          </el-menu>
      <el-container class="right_content">
        <el-header class="header" style="height:10%" >
         <el-row :span="24">
            <el-col :span="2">
              <div class=" collapse_icon">
                <i :class="icon" @click="handleCollapse"></i>
              </div>
            </el-col>
             <el-col :span="18">
              <div class=" breadcrumb">
                <el-breadcrumb separator="/" class="breadcrumb_inner">
                <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
                    {{ item.name }}
                </el-breadcrumb-item>
                </el-breadcrumb>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="user_info">
                <el-dropdown trigger="hover">
                <span class="el-dropdown-link userinfo-inner" ><img :src="sysUserAvatar"/>{{sysUserName}}</span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              </div>
            </el-col>
        </el-row>
        </el-header>
        <el-main class="main_content">
          <!-- 路由切换效果 先出后进 -->
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
        </el-main>
      </el-container>
</div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      collapsed: false,
      icon: 'el-icon-s-fold',
      asideWidth: 220,
      sysUserName: 'admin',
      sysUserAvatar: 'https://hbimg.huabanimg.com/e340a7bf6edf6e5331bb6f8debb37fc068da65f8df13-wldPd6'
    }
  },
  components: {
  },
  computed: {
    routes: function () {
      console.log(this.$router.options.routes)
      return this.$router.options.routes.filter(function (item) {
        return !item.hidden
      })
    },
    routeChildren: function (route) {
      return function (route) {
        return route.children.filter(function (child) {
          return !child.hidden
        })
      }
    }
  },
  methods: {
    handleCollapse () {
      this.collapsed = !this.collapsed
      this.icon = this.collapsed ? 'el-icon-s-unfold' : 'el-icon-s-fold'
      this.asideWidth = this.collapsed ? 64 : 220
    }
  }
}
</script>

<style >
.content{
  display: flex;
  width: 100%;
  height: 900px;
}
.right_content{
  width: 90%;
}
.header {
  background-color: #B3C0D1;
  color: #333;
}
.collapse_icon {
  font-size: 20px;
  line-height:90px;
  text-align: left;
}
.breadcrumb{
  height: 90px;
}
.breadcrumb_inner{
  height: 100%;
  line-height:90px;
}
.el-breadcrumb__separator{
  color: #606266;
}
.user_info{
  line-height: 90px;
   text-align: right;
}
.el-menu-vertical-demo{
  text-align: left;
}
.menu_name{
  margin-left: 20%;
}
.main_content {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
  height: 90%;
}
  /* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active{
transition: all .5s;
}
.fade-transform-enter {
opacity: 0;
transform: translateX(-30px);
}
.fade-transform-leave-to {
 opacity: 0;
 transform: translateX(30px);
}
</style>
