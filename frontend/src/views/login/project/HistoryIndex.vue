<template>
  <div class="Item" @click="onItem">
    <div id="flag">
      项目名称
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onItem(value) {
      console.log('进入主界面');
      this.$router.push({ name: "ModelIndex", params: {}});
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

</style>