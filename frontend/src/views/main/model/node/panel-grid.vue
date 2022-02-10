<template>
  <div id="guide-wrapper" v-show="gridSize.width != 0 && gridSize.height != 0">
    <!-- 横线 -->
    <div
      class="horizontal"
      v-for="item in horizontalLineCount"
      :key="item + 'horizontal'"
      :style="{top: gridSize.height * (item - 1) + 'px'}">
    </div>
    <!-- 竖线 -->
    <div 
      class="vertical"
      v-for="item in verticalLineCount" 
      :key="item+'vertical'"
      :style="{left: gridSize.width * (item - 1) + 'px'}">
    </div>
  </div>
</template>

<script>
export default {
    name: 'guide',
    props: {
      gridSize: Object,
      pageSize: Object,
    },
    data() {
      return {
        horizontalLineCount: 0,
        verticalLineCount: 0,
      }
    },
    watch: {
      gridSize: {
        handler(newValue, oldValue) {
          this.calc();
        },
        deep: true,
      }
    },
    mounted () {
      this.calc();
    },
    methods: {
      calc () {
        if (this.gridSize.width === 0 || this.gridSize.height === 0) {
          console.warn('gridSize is zero!')
          return;
        }
        let width = this.pageSize.width - 2;
        let height = this.pageSize.height - 2;
        this.verticalLineCount = Math.ceil(width / this.gridSize.width);
        this.horizontalLineCount = Math.ceil(height / this.gridSize.height);
        console.log('verticalLineCount = %d, horizontalLineCount=%d.', this.verticalLineCount, this.horizontalLineCount);
      }
    }
}
</script>

<style lang="less" scoped>
#guide-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  top: 0;
  left: 0;

  .horizontal {
    position: absolute;
    width: 100%;
    border-bottom: 1px dotted #d6d6d6;
  }

  .vertical {
    position: absolute;
    height: 100%;
    border-right: 1px dotted #d6d6d6;
  }
}

</style>