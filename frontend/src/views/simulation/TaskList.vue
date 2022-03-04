<template>
  <div>
    <div style="border: 1px solid #a1a1a1; margin: 3px; overflow: auto">
      <div style="margin: 3px">
        <a-input
          addon-before="IP"
          default-value="127.0.0.1"
          style="width: 70%"
        />
        <a-input addon-before="Port" default-value="8080" style="width: 30%" />
      </div>
      <div style="float: left; margin: 3px">
        <button style="width: 80px">connect</button>
        <span>在线</span>
      </div>
      <button style="float: right; margin: 3px; width: 80px">run</button>
    </div>

    <div style="margin: 3px">
      <a-list item-layout="horizontal" :data-source="data" :split="false">
        <a-list-item slot="renderItem" slot-scope="item">
          <div style="width: 100%; border: 1px solid #a1a1a1">
            <a-list-item-meta description="2022.03.02 11:59">
              <p slot="title">{{ item.title }}</p>
              <a-avatar
                slot="avatar"
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              />
            </a-list-item-meta>
            <a-icon
              type="setting"
              style="position: relative; right: -160px; top: -50px"
              @click="settingHandle"
            />
          </div>
        </a-list-item>
      </a-list>
    </div>
    <a-modal
      v-model="visible"
      title="仿真设置"
      :footer="null"
      :maskClosable="false"
      :width="800"
    >
      <div style="white-space: pre-line; height: 500px">
        <a-radio-group default-value="1" @change="onChange" style="float: left">
          <a-radio-button value="1" style="width: 100px">
            步长/算法
          </a-radio-button>
          <a-radio-button value="2" style="width: 100px">
            故障注入
          </a-radio-button>
        </a-radio-group>
        <div class="pageview" v-if="pageView == 1">
          <StepSetting />
        </div>
        <div class="pageview" v-else>
          <FaultInjection />
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script>
import StepSetting from "./StepSetting.vue";
import FaultInjection from "./FaultInjection.vue";

const data = [
  {
    title: "仿真任务1",
  },
  {
    title: "仿真任务2",
  },
  {
    title: "仿真任务3",
  },
  {
    title: "仿真任务4",
  },
];
export default {
  components: {
    StepSetting,
    FaultInjection,
  },
  data() {
    return {
      data,
      visible: false,
      pageView: 1,
    };
  },
  methods: {
    settingHandle() {
      this.visible = true;
    },
    onChange(e) {
      this.pageView = e.target.value;
    },
  },
};
</script>

<style>
.ant-modal-title {
  text-align: center;
}
.ant-radio-group {
  position: absolute;
  left: 0px;
  top: 55px;
}

.pageview {
  width: 99%;
  height: 84%;
  border: 1px solid #a1a1a1;
  position: absolute;
  top: 92px;
  left: 4px;
}
</style>