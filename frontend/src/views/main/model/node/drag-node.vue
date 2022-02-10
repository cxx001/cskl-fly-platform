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
    width: 100px;
    height: 60px;
    background-color: gray;
    padding-top: 20px;
  }

</style>
