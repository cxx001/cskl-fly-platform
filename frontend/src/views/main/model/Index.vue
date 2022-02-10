<template>
  <div class="flex-container">
    <div class="flex-item-left">
      <LeftPanel />
    </div>
    <div class="flex-item-middle" @dragover="dragover" @drop="addNode">
      <panelRuler>
        <template v-slot:butterfly>
          <butterfly-vue
            className="drag"
            :canvasData="mockData"
            :canvasConf="canvasConf"
            @onLoaded="finishLoaded"
            key="drag"
          />
        </template>
      </panelRuler>
      
    </div>
    <div class="flex-item-right">属性面板</div>
  </div>
</template>

<script>
import { ButterflyVue } from "butterfly-vue";
import canvasConf from "./canvasConf.js";
import LeftPanel from "./LeftPanel.vue";
import dragNode from "./node/drag-node.vue";
import panelRuler from "./node/panel-ruler.vue"

/**
 *
 */

export default {
  name: "Drag",
  components: {
    ButterflyVue,
    LeftPanel,
    dragNode,
    panelRuler,
  },
  data() {
    return {
      canvasConf,
      canvansRef: {},
      mockData: {
        nodes: [],
        groups: [],
        edges: [],
      },
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
        render: dragNode,
        nodeData: node.nodeData,
        endpoints: [endpointLeft, endpointRight],
      });
    },
    finishLoaded(VueCom) {
      this.canvansRef = VueCom.canvas;
      console.log("finish");
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
  background-color: lightgrey;
  width: 20%;
  height: 100%;
  margin: 5px;
}

.flex-item-middle {
  background-color: lightgrey;
  width: 60%;
  height: 100%;
  margin-top: 5px;
  z-index: 2;
}

.flex-item-middle ::v-deep .butterfly-vue-container {
  top: 0;
}

.flex-item-right {
  background-color: lightgrey;
  width: 20%;
  height: 100%;
  margin: 5px;
  z-index: 3;
}

.butterfly-vue-container {
  top: 0;
}
</style>