<template>
  <div>
    <butterfly-vue
      className="drag"
      :canvasData="mockData"
      :canvasConf="canvasConf"
      @onLoaded="finishLoaded"
      key="drag"
    />
  </div>
</template>

<script>
import { ButterflyVue } from "butterfly-vue";
import DragNode from "@/components/butterfly/drag-node.vue";
import NodeData from "@/components/butterfly/node-data";
import canvasConf from "@/components/butterfly/canvasConf";

export default {
  components: {
    ButterflyVue,
    DragNode,
  },

  data() {
    return {
      canvasConf: canvasConf,
      mockData: this.getLocalMockData(),
    };
  },

  methods: {
    finishLoaded(VueCom) {
      VueCom.canvas.on("system.node.click", (data) => {
        console.log("点击节点:", data);
      });
    },

    getNodeData(index) {
      for (const key in NodeData) {
        const element = NodeData[key];
        for (let i = 0; i < element.length; i++) {
          const item = element[i];
          if (item.nodeData.index == index) {
            return JSON.parse(JSON.stringify(item.nodeData)); // clone
          }
        }
      }
      return null;
    },

    getLocalMockData() {
      let mockData = {
        nodes: [],
        groups: [],
        edges: [],
      };
      let lcoalData = JSON.parse(localStorage.getItem("mockData"));
      if (!lcoalData) {
        lcoalData = mockData;
      }
      for (let i = 0; i < lcoalData.nodes.length; i++) {
        const element = lcoalData.nodes[i];
        let nodeData = this.getNodeData(element.index);
        nodeData.endpointEble = true;
        element.render = DragNode;
        element.nodeData = nodeData;
        mockData.nodes.push(element);
      }
      setTimeout(() => {
        for (let i = 0; i < lcoalData.edges.length; i++) {
          const edge = lcoalData.edges[i];
          this.mockData.edges.push(edge);
        }
      });

      return mockData;
    },
  },
};
</script>

<style scoped>
</style>