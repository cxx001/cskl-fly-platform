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
import { VUEREF } from '@/store/mutation-types';
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

  mounted() {
    this.$store.dispatch("model/setVueRef", {key: VUEREF.BUTTERFLY, ref: this});
  },

  methods: {
    guid() {
      function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      }
      return S4() + S4() + "-" + S4();
    },
    addNode(e) {
      let { clientX, clientY } = e;
      let coordinates = this.$store.state.model.canvansRef.terminal2canvas([
        clientX,
        clientY,
      ]);
      let node = JSON.parse(e.dataTransfer.getData("node"));
      node.nodeData.endpointEble = true;
      this.mockData.nodes.push({
        id: this.guid(),
        left: coordinates[0],
        top: coordinates[1],
        render: DragNode,
        nodeData: node.nodeData,
      });
    },
    deleteNode(nodeId) {
      for (let i = 0; i < this.mockData.nodes.length; i++) {
        const element = this.mockData.nodes[i];
        if (element.id == nodeId) {
          this.mockData.nodes.splice(i, 1);
          break;
        }
      }
    },

    finishLoaded(VueCom) {
      this.$store.dispatch("model/setCanvansRef", VueCom.canvas);
      console.log("finish");

      VueCom.canvas.on('system.node.click', (data) => {
        console.log('点击节点:', data);
        let form = {
          id: data.node.options.id,
          name: data.node.options.nodeData.name,
          isEntity: data.node.options.nodeData.index == 3
        }
        this.$store.dispatch("model/setAttrForm", {key: 'default', form: form});
        this.$store.dispatch("model/setAttrForm", {key: data.node.options.nodeData.index, form: form});
      })
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