<template>
  <div class="flex-container">
    <div class="flex-item-left">
      <LeftPanel />
    </div>
    <div class="flex-item-middle" @dragover="dragover" @drop="addNode">
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
            <a-slider v-model="inputValue1" :min="1" :max="100" />
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
                <a-menu-item key="0">
                  <a href="http://www.alipay.com/">1st menu item</a>
                </a-menu-item>
                <a-menu-item key="1">
                  <a href="http://www.taobao.com/">2nd menu item</a>
                </a-menu-item>
                <a-menu-divider />
                <a-menu-item key="3"> 3rd menu item </a-menu-item>
              </a-menu>
            </a-dropdown>
          </a-col>
        </a-row>
      </div>

      <PanelRuler>
        <template v-slot:butterfly>
          <butterfly-vue
            className="drag"
            :canvasData="mockData"
            :canvasConf="canvasConf"
            @onLoaded="finishLoaded"
            key="drag"
          />
        </template>
      </PanelRuler>
    </div>
    <div class="flex-item-right">属性面板</div>
  </div>
</template>

<script>
import { ButterflyVue } from "butterfly-vue";
import LeftPanel from "./LeftPanel.vue";
import PanelRuler from "./ruler/panel-ruler.vue";
import DragNode from "./drag-node.vue";

import FangDa from "@/assets/fangda.svg";
import Suoxiao from "@/assets/suoxiao.svg";

export default {
  name: "Drag",
  components: {
    ButterflyVue,
    LeftPanel,
    PanelRuler,
    DragNode,
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
      canvasConf: {
        disLinkable: true, // 可删除连线
        linkable: true, // 可连线
        draggable: true, // 可拖动
        zoomable: true, // 可放大
        moveable: true, // 可平移
        theme: {
          edge: {
            arrow: true,
            type: "endpoint",
            shapeType: "Manhattan",
            arrowPosition: 1,
            defaultAnimate: true,
          },
          endpoint: {
            position: [], //限制锚点位置['Top', 'Bottom', 'Left', 'Right'],
            linkableHighlight: true, //连线时会触发point.linkable的方法，可做高亮
            limitNum: 10, //限制锚点的连接数目
            expandArea: {
              //锚点过小时，可扩大连线热区
              left: 10,
              right: 10,
              top: 10,
              botton: 10,
            },
          },
        },
      },
      canvansRef: {},
      mockData: {
        nodes: [],
        groups: [],
        edges: [],
      },

      // tab分页test
      activeKey: panes[0].key,
      panes,
      newTabIndex: 0,

      inputValue: 0,
      inputValue1: 1,
    };
  },
  methods: {
    guid() {
      function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      }
      return S4() + S4() + "-" + S4();
    },
    dragover(e) {
      e.preventDefault();
    },
    addNode(e) {
      const endpointLeft = {
        id: "left",
        orientation: [-1, 0],
        pos: [0, 0.5],
      };
      const endpointRight = {
        id: "right",
        orientation: [1, 0],
        pos: [0, 0.5],
      };
      let { clientX, clientY } = e;
      let coordinates = this.canvansRef.terminal2canvas([clientX, clientY]);
      let node = JSON.parse(e.dataTransfer.getData("node"));
      this.mockData.nodes.push({
        id: this.guid(),
        left: coordinates[0],
        top: coordinates[1],
        render: DragNode,
        nodeData: node.nodeData,
        endpoints: [endpointLeft, endpointRight],
      });
    },
    finishLoaded(VueCom) {
      this.canvansRef = VueCom.canvas;
      console.log("finish");
    },

    callback(key) {
      console.log(key);
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