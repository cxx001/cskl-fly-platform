<template>
  <div>
    <div class="Item" @click="onItem">
      <div id="flag">空白项目</div>
    </div>

    <div class="bottomFrame">
      <a-divider id="divider"></a-divider>
      <p>创建一个不包含任何内容的空白项目</p>
      <a-input-search
        class="inputFrame"
        placeholder="/Users/admin/NewProject"
        enter-button="浏览"
        size="large"
        @search="onSearch"
      >
      </a-input-search>
      
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onItem(value) {
      console.log("进入主界面2");
      this.$router.push({ name: "ModelIndex", params: {}});
    },
    onSearch(value) {
      console.log(value);
    },
  },
};
</script>

<style scoped>
.Item {
  background-color: gray;
  width: 160px;
  height: 110px;
  position: absolute;
  left: 10px;
  top: 50px;
}

#flag {
  background-color: rgb(13, 53, 231);
  width: 160px;
  height: 25px;
  position: relative;
  bottom: -85px;
  color: aliceblue;
}

.bottomFrame {
  margin: 40% auto;
}

.inputFrame {
  width: 50%;
}

</style>