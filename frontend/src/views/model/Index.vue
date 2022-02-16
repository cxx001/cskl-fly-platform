<template>
  <div class="flex-container">
    <div class="flex-item-left">
      <LeftPanel />
    </div>
    <div class="flex-item-middle" @dragover="dragover" @drop="addNode">
      <div class="middle-top">
        <div>
          <a-tabs
            v-model="activeKey"
            type="editable-card"
            @edit="onEdit"
            size="small"
            style="float: left"
          >
            <a-tab-pane
              v-for="pane in panes"
              :key="pane.key"
              :tab="pane.title"
              :closable="pane.closable"
            >
              {{ pane.content }}
            </a-tab-pane>
          </a-tabs>
        </div>

        <div style="width: 100%; margin-left: 73%; position: absolute">
          <a-row>
            <a-col :span="1">
              <Suoxiao class="top-scale-icon" />
            </a-col>
            <a-col :span="3">
              <a-slider v-model="inputValue1" :min="1" :max="800" />
            </a-col>
            <a-col :span="1">
              <FangDa class="top-scale-icon" />
            </a-col>
            <a-col :span="1">
              <a-dropdown :trigger="['click']">
                <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
                  {{ inputValue1 + "%" }}
                </a>
                <a-menu slot="overlay">
                  <a-menu-item key="0"> 重置视图 </a-menu-item>
                  <a-menu-divider />
                  <a-menu-item key="1"> 25% </a-menu-item>
                  <a-menu-item key="2"> 50% </a-menu-item>
                  <a-menu-item key="3"> 75% </a-menu-item>
                  <a-menu-item key="4"> 100% </a-menu-item>
                  <a-menu-item key="5"> 125% </a-menu-item>
                  <a-menu-item key="6"> 150% </a-menu-item>
                  <a-menu-item key="7"> 200% </a-menu-item>
                  <a-menu-item key="8"> 300% </a-menu-item>
                  <a-menu-item key="9"> 400% </a-menu-item>
                  <a-menu-item key="10"> 800% </a-menu-item>
                  <a-menu-divider />
                  <a-menu-item key="11"> 适合窗口 </a-menu-item>
                </a-menu>
              </a-dropdown>
            </a-col>
          </a-row>
        </div>
      </div>

      <div class="middle-area">
        <PanelRuler>
          <template v-slot:butterfly>
            <Butterfly ref="butterfly"/>
          </template>
        </PanelRuler>
      </div>
    </div>
    <div class="flex-item-right">
      <RightPanel/>
    </div>
  </div>
</template>

<script>
import Butterfly from "./butterfly/Butterfly.vue";
import PanelRuler from "./ruler/panel-ruler.vue";
import LeftPanel from "./LeftPanel.vue";
import RightPanel from "./RightPanel.vue";

import FangDa from "@/assets/fangda.svg";
import Suoxiao from "@/assets/suoxiao.svg";

export default {
  name: "Drag",
  components: {
    Butterfly,
    LeftPanel,
    RightPanel,
    PanelRuler,
    FangDa,
    Suoxiao,
  },
  data() {
    const panes = [
      {
        title: "画板 1",
        content: "Content of Tab 1",
        key: "1",
        closable: false,
      },
      { title: "画板 2", content: "Content of Tab 2", key: "2" },
    ];

    return {
      // tab分页test
      activeKey: panes[0].key,
      panes,
      newTabIndex: 0,

      inputValue: 0,
      inputValue1: 100,
    };
  },
  methods: {
    dragover(e) {
      e.preventDefault();
    },
    addNode(e) {
      this.$refs.butterfly.addNode(e);
    },
    
    callback(key) {
      console.log('cxx::----->' + key);
    },
    onEdit(targetKey, action) {
      this[action](targetKey);
    },
    add() {
      const panes = this.panes;
      const activeKey = `newTab${this.newTabIndex++}`;
      panes.push({
        title: `New Tab ${activeKey}`,
        content: `Content of new Tab ${activeKey}`,
        key: activeKey,
      });
      this.panes = panes;
      this.activeKey = activeKey;
    },
    remove(targetKey) {
      let activeKey = this.activeKey;
      let lastIndex;
      this.panes.forEach((pane, i) => {
        if (pane.key === targetKey) {
          lastIndex = i - 1;
        }
      });
      const panes = this.panes.filter((pane) => pane.key !== targetKey);
      if (panes.length && activeKey === targetKey) {
        if (lastIndex >= 0) {
          activeKey = panes[lastIndex].key;
        } else {
          activeKey = panes[0].key;
        }
      }
      this.panes = panes;
      this.activeKey = activeKey;
    },
  },
};
</script>

<style scoped>
.flex-container {
  display: -webkit-flex;
  display: flex;
  width: 100%;
  height: 100%;
}

.flex-item-left {
  background-color: white;
  width: 20%;
  height: 100%;
}

.flex-item-middle {
  background-color: white;
  width: 60%;
  height: 100%;
  z-index: 2;
  position: relative;
}

.flex-item-middle ::v-deep .butterfly-vue-container {
  top: 0;
}

.flex-item-right {
  background-color: white;
  width: 20%;
  height: 100%;
  z-index: 3;
}

.butterfly-vue-container {
  top: 0;
}

.top-scale-icon {
  width: 25px;
  height: 25px;
  top: 6px;
  right: 11px;
  position: absolute;
}

.ant-dropdown-link {
  position: absolute;
  left: 10px;
  top: 8px;
}
</style>