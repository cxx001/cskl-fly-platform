<template>
  <div>
    <div>
      <a-radio-group default-value="1" button-style="solid" style="width:100%" @change="onChange">
        <a-radio-button value="1" style="width:50%">
          建模
        </a-radio-button>
        <a-radio-button value="2" style="width:50%">
          画板
        </a-radio-button>
      </a-radio-group>
      <a-input-search class="topSearch" placeholder="搜索" style="width: 98%; margin-top:5px" @search="onSearch" />
      <div v-if="pageView == 1">
        <ModelList />
      </div>
      <div v-else>
        <ModelTree />
      </div>
    </div>
  </div>
</template>

<script>
import ModelList from "./ModelList.vue"
import ModelTree from "./ModelTree.vue"

export default {
  components: {
    ModelList,
    ModelTree
  },
  data() {
    return {
      pageView: 1,
    }
  },
  methods:{
    onChange(e) {
      console.log(`checked = ${e.target.value}`);
      this.pageView = e.target.value;
    },

    onSearch(value) {
      console.log(value);
    },
  }
};
</script>

<style scoped>

</style>