<template>
  <div
    style="
      border: 1px solid #a1a1a1;
      margin: 20px 3px;
      height: 300px;
      position: relative;
      background: white;
    "
  >
    <span style="position: absolute; left: 3px; top: -12px"><b>SM</b></span>
    <div style="margin: 10px 3px; text-align: left; position: absolute; width: 100%">
      <a-space>
        <span>仿真节点</span>
        <a-auto-complete
          :data-source="nodeSource"
          style="width: 200px"
          placeholder="input node name"
          :filter-option="filterOption"
          :value="nodeValue"
          @change="selectNode"
        />
      </a-space>
      <a-button style="float: right; right: 10px">push</a-button>
    </div>
    <div style="height: 210px; border: 2px solid #a1a1a1; margin: 55px 5px">
      <a-badge
        count="1"
        :number-style="{
          backgroundColor: '#fff',
          color: '#999',
          boxShadow: '0 0 0 1px #d9d9d9 inset',
        }"
        style="position: absolute; left: 2px; top: 45px"
      />
      <div
        style="
          border: 1px solid #a1a1a1;
          height: 150px;
          margin: 10px 5px;
          text-align: left;
          padding: 10px 10px;
        "
      >
        <template v-for="tag in tags">
          <a-tooltip v-if="tag.length > 100" :key="tag" :title="tag">
            <a-tag :key="tag" :closable="true" @close="() => handleClose(tag)">
              {{ `${tag.slice(0, 20)}...` }}
            </a-tag>
          </a-tooltip>
          <a-tag
            v-else
            :key="tag"
            :closable="true"
            @close="() => handleClose(tag)"
          >
            {{ tag }}
          </a-tag>
        </template>
      </div>
      <div style="position: absolute; margin: -2px 5px">
        <a-space>
          <a-auto-complete
            :data-source="dataSource"
            style="width: 200px"
            placeholder="input model name"
            :filter-option="filterOption"
            :value="inputValue"
            @change="change"
          />
          <a-button @click="addModel">添加</a-button>
        </a-space>
      </div>
    </div>
    <p style="color: #0000ff; position: absolute; left: 5px; top: 271px">
      +添加
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataSource: ["初始输出", "质量", "运动", "加法器"],
      nodeSource: ["192.168.0.1", "192.168.0.2", "192.168.0.3"],
      tags: ["初始输出", "质量", "运动"],
      inputValue: "",
      nodeValue: "",
    };
  },
  methods: {
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toUpperCase()
          .indexOf(input.toUpperCase()) >= 0
      );
    },
    handleClose(removedTag) {
      const tags = this.tags.filter((tag) => tag !== removedTag);
      console.log(tags);
      this.tags = tags;
    },
    addModel() {
      const inputValue = this.inputValue;
      let tags = this.tags;
      if (inputValue && tags.indexOf(inputValue) === -1) {
        tags = [...tags, inputValue];
      }
      console.log(tags);
      Object.assign(this, {
        tags,
        inputVisible: false,
        inputValue: "",
      });
      this.inputValue = "";
    },
    change(value) {
      this.inputValue = value;
      console.log("当前输入节点名: ", value);
    },
    selectNode(value) {
      console.log("选择节点: ", value);
    },
  },
};
</script>

<style>
</style>