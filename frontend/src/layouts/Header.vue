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
          <Gengduo />
        </a-tooltip>
      </li>
      <li>
        <a-tooltip style="width: 20px; height: 20px">
          <template slot="title"> 撤销(Ctrl + Z) </template>
          <Chexiao />
        </a-tooltip>
      </li>
      <li>
        <a-tooltip style="width: 20px; height: 20px">
          <template slot="title"> 重做(Ctrl + Y) </template>
          <Chenzuo />
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
      console.log('123::');
    }
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