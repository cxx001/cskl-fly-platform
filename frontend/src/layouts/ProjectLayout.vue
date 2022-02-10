<template>
  <div>
    <a-layout-header style="background: #eee; padding: 0; height: 45px">
      <div class="topMenu">
        <a-radio-group v-model="value" @change="onChange" button-style="solid" size="large">
          <a-radio-button :value="1"> 最近打开项目 </a-radio-button>
          <a-radio-button :value="2"> 新建项目 </a-radio-button>
          <a-radio-button :value="3"> 打开其他项目... </a-radio-button>
        </a-radio-group>
      </div>
      <a-input-search class="topSearch" placeholder="input search text" style="width: 200px" @search="onSearch" />
      <a-icon class="topIcon" type="user" />
    </a-layout-header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 1,
    };
  },

  methods: {
    onChange(e) {
      console.log('radio checked', e.target.value);
      if (e.target.value == 1) {
        this.$router.push({ name: "HistoryIndex", params: {}});
      } else if(e.target.value == 2) {
        this.$router.push({ name: "NewIndex", params: {}});
      }
    },

    onSearch(value) {
      console.log(value);
    },
  },
};
</script>

<style scoped>
.topMenu {
  float: left;
  line-height: normal;
}

.topSearch {
  top: -10px;
  right: -180px;
  width: 200px;
}

.topIcon {
  float: right;
  padding: 0 20px;
  line-height: 55px;
  font-size: 25px;
}
</style>