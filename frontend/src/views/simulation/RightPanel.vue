<template>
  <div>
    <a-space direction="vertical" :size="1" style="width: 100%">
      <a-radio-group default-value="1" @change="onChange" style="float: left">
        <a-radio-button value="1" style="width: 100px">
          信号列表
        </a-radio-button>
        <a-radio-button value="2" style="width: 100px">
          虚实替换
        </a-radio-button>
        <a-radio-button value="3" style="width: 100px">
          系统监控
        </a-radio-button>
      </a-radio-group>
      <div v-if="pageView == 1">
        <SignalList />
      </div>
      <div v-else-if="pageView == 2">
        <VirtualRealList />
      </div>
      <div v-else>
        <SysMonitor />
      </div>
    </a-space>
  </div>
</template>

<script>
import SignalList from "./SignalList.vue";
import VirtualRealList from "./VirtualRealList.vue";
import SysMonitor from "./SysMonitor.vue";

export default {
  components: {
    SignalList,
    VirtualRealList,
    SysMonitor,
  },
  data() {
    return {
      pageView: 1,
    };
  },
  methods: {
    onChange(e) {
      this.pageView = e.target.value;
    },
  },
};
</script>

<style scoped>
</style>