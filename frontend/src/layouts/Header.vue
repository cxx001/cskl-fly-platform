<template>
  <div class="header">
    <ul>
      <li>
        <Icon style="width: 25px; height: 25px" />
      </li>
      <li>
        <a-tooltip style="width: 20px; height: 20px;">
          <template slot="title"> 新建(Ctrl + N) </template>
          <XinJian />
        </a-tooltip>
      </li>
      <li>
        <a-tooltip style="width: 20px; height: 20px">
          <template slot="title"> 打开(Ctrl + O) </template>
          <Dakai />
        </a-tooltip>
      </li>
      <li>
        <a-tooltip style="width: 20px; height: 20px">
          <template slot="title"> 保存(Ctrl + S) </template>
          <Baocun @click="saveHandle" />
        </a-tooltip>
      </li>
      <li>
        <a-tooltip style="width: 20px; height: 20px">
          <template slot="title"> 更多 </template>
          <Gengduo @click="clearHandle" />
        </a-tooltip>
      </li>
      <li>
        <a-tooltip style="width: 20px; height: 20px">
          <template slot="title"> 撤销(Ctrl + Z) </template>
          <Chexiao @click="undoHandle" />
        </a-tooltip>
      </li>
      <li>
        <a-tooltip style="width: 20px; height: 20px">
          <template slot="title"> 重做(Ctrl + Y) </template>
          <Chenzuo @click="redoHandle" />
        </a-tooltip>
      </li>
    </ul>
    <b>飞行仿真项目</b>
  </div>
</template>

<script>
import Icon from "@/assets/icon.svg";
import XinJian from "@/assets/xinjian.svg";
import Dakai from "@/assets/dakai.svg";
import Baocun from "@/assets/baocun.svg";
import Gengduo from "@/assets/gengduo.svg";
import Chexiao from "@/assets/chexiao.svg";
import Chenzuo from "@/assets/chenzuo.svg";

import utils from "../utils/utils"

export default {
  components: {
    Icon,
    XinJian,
    Dakai,
    Baocun,
    Gengduo,
    Chexiao,
    Chenzuo,
  },

  methods: {
    saveHandle() {
      let mockData = {
        nodes: [],
        edges: [],
      };
      let data = this.$store.state.model.canvansRef.getDataMap();
      for (let i = 0; i < data.nodes.length; i++) {
        const element = data.nodes[i];
        let node = {};
        node.id = element.id;
        node.index = element.options.nodeData.index;
        node.top = element.top;
        node.left = element.left;
        node.name = element.options.nodeData.name;
        node.dllFile = element.options.nodeData.dllFile;
        node.fctName = element.options.nodeData.fctName;
        mockData.nodes.push(node);
      }
      for (let i = 0; i < data.edges.length; i++) {
        const element = data.edges[i];
        let edge = {};
        edge.id = element.id;
        edge.sourceNode = element.sourceNode.id;
        edge.targetNode = element.targetNode.id;
        edge.source = element.sourceEndpoint.id;
        edge.target = element.targetEndpoint.id;
        mockData.edges.push(edge);
      }
      utils.saveMock(mockData);
      console.log('保存浏览器缓存数据:', mockData);
    },

    undoHandle() {
      this.$store.state.model.canvansRef.undo();
    },

    redoHandle() {
      this.$store.state.model.canvansRef.redo();
    },

    clearHandle() {
      localStorage.removeItem('mockData');
      console.log('clear mockdata!');
    },
  }
};
</script>

<style scoped>
ul {
  width: 500px;
  height: 35px;
  line-height: 35px;
  list-style-type: none;
  float: left;
  position: absolute;
  left: -40px;
}

li {
  float: left;
  padding: 5px 10px;
}
</style>