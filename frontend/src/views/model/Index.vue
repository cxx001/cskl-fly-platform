<template>
  <div class="flex-container">
    <div class="flex-item-left">
      <LeftPanel />
    </div>
    <div class="flex-item-middle" @dragover="dragover" @drop="addNode">
      <PanelTopMenu />
      <div class="middle-area">
        <PanelRuler>
          <template v-slot:butterfly>
            <Butterfly ref="butterfly"/>
          </template>
        </PanelRuler>
      </div>
    </div>
    <div class="flex-item-right">
      <RightPanel/>
    </div>
  </div>
</template>

<script>
import Butterfly from "./Butterfly.vue";
import PanelRuler from "@/components/ruler/panel-ruler.vue";
import LeftPanel from "./LeftPanel.vue";
import RightPanel from "./RightPanel.vue";
import PanelTopMenu from "@/components/panelTopMenu.vue";

export default {
  name: "Drag",
  components: {
    Butterfly,
    LeftPanel,
    RightPanel,
    PanelRuler,
    PanelTopMenu,
  },
  methods: {
    dragover(e) {
      e.preventDefault();
    },
    addNode(e) {
      this.$refs.butterfly.addNode(e);
    },
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
  background-color: white;
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
  background-color: white;
  width: 20%;
  height: 100%;
  z-index: 3;
}

.butterfly-vue-container {
  top: 0;
}
</style>