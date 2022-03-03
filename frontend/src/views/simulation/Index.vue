<template>
  <div class="flex-container">
    <div class="flex-item-left">
      <LeftPanel />
    </div>
    <div class="flex-item-middle">
      <PanelTopMenu />
      <PanelRuler>
        <template v-slot:butterfly>
          <Butterfly />
        </template>
      </PanelRuler>
      <BottomPanel />
    </div>
    <div class="flex-item-right">
      <RightPanel />
    </div>
  </div>
</template>

<script>
import Butterfly from "./Butterfly.vue";
import PanelRuler from "@/components/ruler/panel-ruler.vue";
import LeftPanel from "./LeftPanel.vue";
import RightPanel from "./RightPanel.vue";
import BottomPanel from "./BottomPanel.vue";
import PanelTopMenu from "@/components/panelTopMenu.vue";

export default {
  components: {
    PanelRuler,
    LeftPanel,
    RightPanel,
    BottomPanel,
    PanelTopMenu,
    Butterfly,
  },
};
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

.flex-item-middle ::v-deep .butterfly-vue-container {
  top: 0;
}

.flex-item-right {
  background-color: rgb(221, 219, 219);
  width: 20%;
  height: 100%;
  z-index: 3;
}
</style>

