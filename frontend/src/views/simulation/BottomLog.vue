<template>
  <div class="bottom_log">
    <p>2021.12.12 12:59 仿真启动</p>
    <p>2021.12.12 12:59 编译</p>
    <p>2021.12.12 12:59 运行日志...</p>
    <p>2021.12.12 12:59 运行日志...</p>
    <p>2021.12.12 12:59 运行日志...</p>
    <p>2021.12.12 12:59 运行日志...</p>
    <p>2021.12.12 12:59 运行日志...</p>
    <p>2021.12.12 12:59 运行日志...</p>
    <p>2021.12.12 12:59 运行日志...</p>
    <p>2021.12.12 12:59 运行日志...</p>
    <p>2021.12.12 12:59 运行日志end...</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bottom_log {
  position: absolute;
  top: 50px;
  left: 7px;
  width: 100%;
  height: 80%;
  overflow: scroll;
}

p {
  border: 1px #ccc;
  margin-top: 10px;
  text-align: left;
  line-height: 0.5em;
}
</style>