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
      <router-view />
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
    this.$router.push({ name: "ModelList", params: {}});
  },
  methods:{
    onChange(e) {
      console.log(`checked = ${e.target.value}`);
      if (e.target.value == 1) {
        this.$router.push({ name: "ModelList", params: {}});
      } else {
        this.$router.push({ name: "ModelTree", params: {}});
      }
    },

    onSearch(value) {
      console.log(value);
    },
  }
};
</script>

<style scoped>

</style>