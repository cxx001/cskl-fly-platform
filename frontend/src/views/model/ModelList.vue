<template>
  <div class="model-collapse-panel">
    <a-collapse>
      <a-collapse-panel key="1" header="基础元件">
        <div
          draggable
          class="node-container"
          @dragstart="
            (e) => {
              dragstart(e, node1);
            }
          "
          ref="node1"
        >
          <DragNode :itemData="node1" />
        </div>
      </a-collapse-panel>
      <a-collapse-panel key="2" header="姿态动力学元件">
        <div
          draggable
          class="node-container"
          @dragstart="
            (e) => {
              dragstart(e, node2);
            }
          "
          ref="node2"
        >
          <DragNode :itemData="node2" />
        </div>
      </a-collapse-panel>
      <a-collapse-panel key="3" header="质心动力学元件">
        <div
          draggable
          class="node-container"
          @dragstart="
            (e) => {
              dragstart(e, node3);
            }
          "
          ref="node3"
        >
          <DragNode :itemData="node3" />
        </div>
      </a-collapse-panel>
      <a-collapse-panel key="4" header="动力系统元件">
        <div
          draggable
          class="node-container"
          @dragstart="
            (e) => {
              dragstart(e, node4);
            }
          "
          ref="node4"
        >
          <DragNode :itemData="node4" />
        </div>
      </a-collapse-panel>
      <a-collapse-panel key="5" header="坐标转化系统">
        <div
          draggable
          class="node-container"
          @dragstart="
            (e) => {
              dragstart(e, node5);
            }
          "
          ref="node5"
        >
          <DragNode :itemData="node5" />
        </div>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
import DragNode from './drag-node.vue';

export default {
  components: {
    DragNode
  },

  data(){
    return{
      node1: {
        ref: 'node1',
        nodeData: {
          name: 'node1'
        }
      },
      node2: {
        ref: 'node2',
        nodeData: {
          name: 'node2'
        }
      },
      node3: {
        ref: 'node3',
        nodeData: {
          name: 'node3'
        }
      },
      node4: {
        ref: 'node4',
        nodeData: {
          name: 'node4'
        }
      },
      node5: {
        ref: 'node5',
        nodeData: {
          name: 'node5'
        }
      },
    }
  },

  methods:{
    dragstart(e,node) {
      e.dataTransfer.setData('node',JSON.stringify(node));
      e.dataTransfer.setDragImage(this.$refs[node.ref],30,20);
    },
  }
};
</script>

<style scoped>
.node-container {
  margin: 5px;
  width: 60px;
}

.model-collapse-panel {
  margin: 5px;
  width: 98%;
}
</style>