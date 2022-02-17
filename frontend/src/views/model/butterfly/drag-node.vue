<template>
  <div class="drag-node">
    <div v-if="itemData.nodeData.endpointEble">
      <p id="item-title">{{ itemData.nodeData.name }}</p>
      <div
        v-for="(endpoint, index) in itemData.nodeData.endpoints"
        :key="index"
      >
        <!-- right -->
        <div
          v-if="endpoint.orientation[0] == 1 && endpoint.orientation[1] == 0"
          :style="endPointStyle(endpoint)"
        >
          <butterfly-vue-endpoint
            :id="endpoint.id"
            :param="{ endpoint: endpoint }"
          >
          </butterfly-vue-endpoint>
        </div>
        <!-- left -->
        <div
          v-else-if="
            endpoint.orientation[0] == -1 && endpoint.orientation[1] == 0
          "
          :style="endPointStyle(endpoint)"
        >
          <butterfly-vue-endpoint
            :id="endpoint.id"
            :param="{ endpoint: endpoint }"
          >
          </butterfly-vue-endpoint>
        </div>
        <!-- top -->
        <div
          v-else-if="
            endpoint.orientation[0] == 0 && endpoint.orientation[1] == 1
          "
          :style="endPointStyle(endpoint)"
        >
          <butterfly-vue-endpoint
            :id="endpoint.id"
            :param="{ endpoint: endpoint }"
          >
          </butterfly-vue-endpoint>
        </div>
        <!-- bottom -->
        <div v-else :style="endPointStyle(endpoint)">
          <butterfly-vue-endpoint
            :id="endpoint.id"
            :param="{ endpoint: endpoint }"
          >
          </butterfly-vue-endpoint>
        </div>
      </div>
    </div>
    <div v-else>
      <p id="item-title">{{ itemData.nodeData.name }}</p>
    </div>
  </div>
</template>

<script>
import ButterflyVueEndpoint from "./vue-endpoint.vue";

export default {
  name: "drag-node",
  props: {
    itemData: {
      type: Object,
    },
  },
  components: {
    ButterflyVueEndpoint,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    endPointStyle(endpoint) {
      let style = {};
      style.position = "absolute";
      if (endpoint.orientation[0] == 1) {
        // right
        style.right = "0px";
        let offset = endpoint.pos[1];
        style.top = offset * 100 - 10 + "px";
      } else if (endpoint.orientation[0] == -1) {
        // left
        style.left = "0px";
        let offset = endpoint.pos[1];
        style.top = offset * 100 - 10 + "px";
      } else if (endpoint.orientation[1] == 1) {
        // top
        style.top = "0px";
        let offset = endpoint.pos[0];
        style.left = offset * 100 + "px";
      } else {
        // bottom
        style.bottom = "0px";
        let offset = endpoint.pos[0];
        style.left = offset * 100 + "px";
      }

      return style;
    },
  },
};
</script>

<style scoped>
.drag-node {
  width: 100px;
  height: 100px;
  background-color: gray;
}

#item-title {
  line-height: 100px;
}
</style>
