<template>
  <div>
    <a-drawer
      placement="bottom"
      :closable="true"
      :visible="visible"
      :get-container="false"
      :wrap-style="{ position: 'absolute' }"
      :maskClosable="false"
      :mask="false"
      @close="onClose"
    >
      <a-radio-group id="radio-group" default-value="1" @change="onChange" style="float: left">
        <a-radio-button value="1"> 日志 </a-radio-button>
        <a-radio-button value="2"> 命令 </a-radio-button>
      </a-radio-group>
      <div v-if="pageView == 1">
        <BottomLog />
      </div>
      <div v-else>
        <BottomCommand />
      </div>
    </a-drawer>
  </div>
</template>

<script>
import BottomLog from "./BottomLog.vue";
import BottomCommand from "./BottomCommand.vue"
import { VUEREF } from '@/store/mutation-types';

export default {
  components: {
    BottomLog,
    BottomCommand,
  },
  data() {
    return {
      visible: true,
      pageView: 1,
    };
  },
  mounted() {
    this.$store.dispatch("model/setVueRef", {key: VUEREF.BOTTOMPANEL, ref: this});
  },
  methods: {
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    onChange(e) {
      this.pageView = e.target.value;
    },
  },
};
</script>

<style scoped>
#radio-group {
  top: 7px;
  left: 7px;
  position: absolute;
}
</style>