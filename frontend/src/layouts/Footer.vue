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
  </div>
</template>

<script>
import ErrorIcon from "@/assets/error.svg";
import WarnIcon from "@/assets/warning.svg";

export default {
  components: {
    ErrorIcon,
    WarnIcon,
  },
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