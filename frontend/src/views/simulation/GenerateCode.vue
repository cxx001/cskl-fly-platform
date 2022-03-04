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
    <div style="margin: 10px 3px">
      <a-input
        addon-before="IP"
        default-value="127.0.0.1"
        style="width: 50%; float: left"
      />
      <a-input
        addon-before="Port"
        default-value="8080"
        style="width: 22%; float: left; margin-left: 5px"
      />
      <a-button style="float: right">push</a-button>
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
      tags: ["初始输出", "质量", "运动"],
      inputValue: "",
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
  },
};
</script>

<style>
</style>