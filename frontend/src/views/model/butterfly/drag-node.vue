<template>
  <div class="drag-node">
    <!-- <ul v-for="(data, index) in itemData.nodeData.params.input" :key="index">
      <li>{{data.des}}</li>
    </ul> -->
    {{itemData.nodeData.name}}
  </div>
</template>

<script>
export default {
  name: "drag-node",
  props: {
    itemData: {
      type: Object,
    },
    canvasNode: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>

<style scoped>
.drag-node {
  width: 100px;
  height: 100px;
  background-color: gray;
  padding-top: 5px;
}
</style>
