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
            />
          </div>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>

<script>
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
  data() {
    return {
      data,
    };
  },
};
</script>

<style scoped>

</style>