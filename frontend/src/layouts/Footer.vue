<template>
  <div>
    <ul>
      <li>
        <a-popconfirm title="Are you sure？" ok-text="2" cancel-text="1">
          <a-tooltip>
            <template slot="title"> 没有错误 </template>
            <a-space>
              <ErrorIcon />
              <span style="color: #ffffff">0</span>
              <WarnIcon />
              <span style="color: #ffffff">0</span>
            </a-space>
          </a-tooltip>
        </a-popconfirm>
      </li>
    </ul>
    <LogIcon style="position: absolute; right: 10px; top: 5px" @click="openLog" />
  </div>
</template>

<script>
import ErrorIcon from "@/assets/error.svg";
import WarnIcon from "@/assets/warning.svg";
import LogIcon from "@/assets/log.svg";
import { VUEREF } from '@/store/mutation-types';

export default {
  components: {
    ErrorIcon,
    WarnIcon,
    LogIcon,
  },

  methods: {
    openLog() {
      this.$store.state.model.vueRef[VUEREF.BOTTOMPANEL].showDrawer();
    },
  }
};
</script>

<style scoped>
ul {
  width: 100px;
  height: 25px;
  line-height: 25px;
  list-style-type: none;
  padding: 5px;
}
</style>