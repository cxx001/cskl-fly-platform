<template>
  <div @addNode="addNode">
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
      let coordinates = this.canvansRef.terminal2canvas([clientX, clientY]);
      let node = JSON.parse(e.dataTransfer.getData("node"));
      this.mockData.nodes.push({
        id: this.guid(),
        left: coordinates[0],
        top: coordinates[1],
        render: DragNode,
        nodeData: node.nodeData,
        endpoints: node.nodeData.endpoints,
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
</style>