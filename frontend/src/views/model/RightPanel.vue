<template>
  <div>
    <div>
      <a-radio-group default-value="1" button-style="solid" style="width:100%" @change="onChange">
        <a-radio-button value="1" style="width:50%">
          参数
        </a-radio-button>
        <a-radio-button value="2" style="width:50%">
          样式
        </a-radio-button>
      </a-radio-group>
    </div>
    <div style="margin-top: 200px">
        属性面板
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
    }
  },
  mounted () {
  },
  methods:{
    onChange(e) {
      console.log(`checked = ${e.target.value}`);
    },
  }
};
</script>

<style scoped>

</style>