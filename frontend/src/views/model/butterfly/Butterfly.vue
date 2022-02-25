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
import DragNode from "./drag-node.vue";
import NodeData from "./node-data";

export default {
  components: {
    ButterflyVue,
    DragNode,
  },

  data() {
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
            arrowPosition: 0.98,
            defaultAnimate: false,
            draggable: true,
          },
          endpoint: {
            position: [], //限制锚点位置['Top', 'Bottom', 'Left', 'Right'],
            linkableHighlight: true, //连线时会触发point.linkable的方法，可做高亮
            limitNum: 10, //限制锚点的连接数目
            isAllowLinkInSameNode: false, //是否允许同一节点中的锚点连接
            expandArea: {
              //锚点过小时，可扩大连线热区
              left: 1,
              right: 1,
              top: 1,
              botton: 1,
            },
          },
        },
      },
      mockData: this.getLocalMockData(),
    };
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
    finishLoaded(VueCom) {
      this.$store.dispatch("model/setCanvansRef", VueCom.canvas);
      console.log("finish");

      VueCom.canvas.on('system.node.click', (data) => {
        console.log('点击节点:', data);
        let form = {
          id: data.node.options.nodeData.index,
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