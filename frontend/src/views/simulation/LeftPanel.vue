<template>
  <div>
    <a-space direction="vertical" :size="1" style="width: 100%; ">
      <a-radio-group default-value="1" @change="onChange" style="float: left">
        <a-radio-button value="1" style="width: 100px"> 仿真 </a-radio-button>
        <a-radio-button value="2" style="width: 100px">
          生成代码
        </a-radio-button>
      </a-radio-group>
      <div v-if="pageView == 1">
        <TaskList />
      </div>
      <div v-else>
        <GenerateCode />
      </div>
    </a-space>
  </div>
</template>

<script>
import TaskList from "./TaskList.vue";
import GenerateCode from "./GenerateCode.vue";

export default {
  components: {
    TaskList,
    GenerateCode,
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