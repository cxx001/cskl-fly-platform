<template>
  <a-layout id="components-layout-basic">
    <a-layout-header>Header</a-layout-header>
    <a-layout id="components-layout-side" style="position: absolute; top: 35px; bottom: 25px; left: 0px; right: 0px">
      <a-layout-sider v-model="collapsed" collapsible :trigger="null">
        <a-menu
          theme="dark"
          :default-selected-keys="['2']"
          mode="inline"
          @click="menuHandle"
        >
          <a-menu-item key="1">
            <a-icon type="pie-chart" />
            <span>总览</span>
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="file" />
            <span>建模</span>
          </a-menu-item>
          <a-menu-item key="3">
            <a-icon type="desktop" />
            <span>仿真</span>
          </a-menu-item>
          <a-menu-item key="4">
            <a-icon type="project" />
            <span>评估</span>
          </a-menu-item>
          <a-menu-item key="5" class="memu-item-custom-5">
            <a-icon type="table" />
            <span>资源</span>
          </a-menu-item>
          <a-menu-item key="6" class="memu-item-custom-6">
            <a-icon type="user" />
            <span>用户</span>
          </a-menu-item>
          <a-menu-item key="7" class="memu-item-custom-7">
            <a-icon type="setting" />
            <span>设置</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>

      <a-layout-content style="overflow: hidden">
        <router-view />
      </a-layout-content>
    </a-layout>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>

<script>
export default {
  name: "AppSider",
  data() {
    return {
      collapsed: true,
    };
  },

  methods: {
    menuHandle(item) {
      console.log('click:' + item.key);
      let pageNames = [
        "OverviewIndex",
        "ModelIndex",
        "SimulationIndex",
        "ReportIndex",
        "ResourceIndex",
        "",
        "",
      ]
      this.$router.push({ name: pageNames[item.key-1], params: {} });
    },
  },
};
</script>

<style scoped>
#components-layout-basic .ant-layout-header {
  height: 35px;
  background: #d6d6d6;
  line-height: 35px;
}

#components-layout-basic .ant-layout-footer {
  background: #5956fd;
  height: 25px;
  padding: 0;
  line-height: 25px;
  bottom: 0px;
  position: absolute;
  width: 100%;
}

.memu-item-custom-5 {
  position: absolute;
  bottom: 90px;
}

.memu-item-custom-6 {
  position: absolute;
  bottom: 50px;
}

.memu-item-custom-7 {
  position: absolute;
  bottom: 10px;
}
</style>
