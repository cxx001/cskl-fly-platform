<template>
  <a-layout id="app-layout-sider">
    <a-layout-sider
      v-model="collapsed"
      theme="light"
      class="layout-sider"
    >
      <a-menu class="menu-item" theme="light" mode="inline" :default-selected-keys="['menu_1']" @click="menuHandle">
        <a-menu-item v-for="(menuInfo, index) in menu" :key="index">
          <a-icon :type="menuInfo.icon" />
          {{ menuInfo.title }}
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-content class="layout-content">
        <router-view />
      </a-layout-content>
    </a-layout>
    <div class="footer">
      <p>状态栏</p>
    </div>
  </a-layout>
</template>
<script>
export default {
  name: 'AppSider',
  data() {
    return {
      collapsed: true,
      menu: {
        'menu_1' : {
          icon: 'home',
          title: '总览',
          pageName: 'DemoFileIndex',
          params: {},
        },
        'menu_2' : {
          icon: 'profile',
          title: '建模',
          pageName: 'OtherIndex',
          params: {},
        },
        'menu_3' : {
          icon: 'profile',
          title: '仿真',
          pageName: 'OtherIndex',
          params: {},
        },
        'menu_4' : {
          icon: 'profile',
          title: '评估',
          pageName: 'OtherIndex',
          params: {},
        },
        'menu_5' : {
          icon: 'profile',
          title: '资源',
          pageName: 'OtherIndex',
          params: {},
        },
        'menu_6' : {
          icon: 'profile',
          title: '用户',
          pageName: 'OtherIndex',
          params: {},
        },
        'menu_7' : {
          icon: 'profile',
          title: '设置',
          pageName: 'OtherIndex',
          params: {},
        }
      }
    };
  },
  created () {},
  mounted () {
  },
  methods: {
    menuHandle (item) {
      
    },
  },
};
</script>
<style lang="less" scoped>
// 嵌套
#app-layout-sider {
  height: 100%;
  .logo {
    border-bottom: 1px solid #e8e8e8;
  }
  .pic-logo {
    height: 32px;
    //background: rgba(139, 137, 137, 0.2);
    margin: 10px;
  }
  .layout-sider {
    border-top: 1px solid #e8e8e8;
    border-right: 1px solid #e8e8e8;
  }
  .menu-item {
    .ant-menu-item {
      background-color: #fff;
      margin-top: 0px;
      margin-bottom: 0px;
      padding: 0 0px !important;
    }
  }
  .layout-content {
    //background-color: #fff;
  }

  /* 底部样式 */
  .footer {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: rgba(34, 132, 224, 0.89);
    position: fixed;
    bottom: 0;
    width: 100%;
  }
}
</style>
