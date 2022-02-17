<template>
  <div class="model-collapse-panel">
    <a-collapse v-model="activeKey">
      <a-collapse-panel key="1" header="基础元件">
        <div
          v-for="(node, index) in NodeData.base"
          :key="index"
          draggable
          class="node-container"
          @dragstart="
            (e) => {
              dragstart(e, node);
            }
          "
          :ref="node.ref"
        >
          <a-popover placement="right">
            <template slot="content">
              <p>Content</p>
              <p>Content</p>
            </template>
            <template slot="title">
              <span>{{node.nodeData.name}}</span>
            </template>
            <DragNode :itemData="node" />
          </a-popover>
        </div>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
import DragNode from "./butterfly/drag-node.vue";
import NodeData from "./butterfly/node-data.js";

export default {
  components: {
    DragNode,
  },

  data() {
    return {
      activeKey: ['1'],
      NodeData: NodeData,
    };
  },

  methods: {
    dragstart(e, node) {
      let width = this.$refs[node.ref][0].clientWidth;
      let height = this.$refs[node.ref][0].clientHeight;
      e.dataTransfer.setData("node", JSON.stringify(node));
      e.dataTransfer.setDragImage(
        this.$refs[node.ref][0],
        width / 2,
        height / 2
      );
    },
  },
};
</script>

<style scoped>
.node-container {
  float: left;
  margin: 15px;
}

.model-collapse-panel {
  margin: 5px;
  width: 98%;
}
</style>