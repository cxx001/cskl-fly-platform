<template>
  <div class="drag-node">
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
      type: Object
    }
  },
  methods: {
  },
  created() {
  }
};
</script>

<style scoped>
  .drag-node {
    width: 60px;
    height: 40px;
    background-color: gray;
    padding-top: 10px;
  }

</style>
