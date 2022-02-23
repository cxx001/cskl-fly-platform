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
    <div v-if="pageView == 1">
      <ModelAttribute />
    </div>
    <div v-else>
      <ModelStyle />
    </div>
  </div>
</template>

<script>
import ModelAttribute from "./ModelAttribute.vue"
import ModelStyle from "./ModelStyle.vue"

export default {
  components: {
    ModelAttribute,
    ModelStyle,
  },
  data() {
    return {
      pageView: 1
    }
  },
  mounted () {
  },
  methods:{
    onChange(e) {
      console.log(`checked = ${e.target.value}`);
      this.pageView = e.target.value;
    },
  }
};
</script>

<style scoped>

</style>