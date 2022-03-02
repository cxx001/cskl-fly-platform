<template>
  <div class="flex-container">
    <div class="flex-item-left">
      <LeftPanel />
    </div>
    <div class="flex-item-middle">
      
    </div>
    <div class="flex-item-right">
      <RightPanel />
    </div>
  </div>
</template>

<script>
import LeftPanel from "./LeftPanel.vue";
import RightPanel from "./RightPanel.vue";

export default {
  components: {
    LeftPanel,
    RightPanel,
  },
}
</script>

<style scoped>
.flex-container {
  display: -webkit-flex;
  display: flex;
  width: 100%;
  height: 100%;
}

.flex-item-left {
  background-color: rgb(221, 219, 219);
  width: 20%;
  height: 100%;
}

.flex-item-middle {
  background-color: white;
  width: 60%;
  height: 100%;
  z-index: 2;
  position: relative;
}

.flex-item-right {
  background-color: rgb(221, 219, 219);
  width: 20%;
  height: 100%;
  z-index: 3;
}
</style>

