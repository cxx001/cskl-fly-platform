<template>
  <div>
    <a-collapse v-model="activeKey">
      <a-collapse-panel key="1" header="基础属性">
        <a-form-model
          :model="form"
          :label-col="labelCol"
          :wrapper-col="wrapperCol"
        >
          <a-form-model-item v-if="form.name != ''" label="名称">
            <a-input v-model="form.name" />
          </a-form-model-item>
          <a-form-model-item v-if="form.isEntity" label="绑定实物">
            <a-select
              v-model="form.entityId"
              placeholder="无"
            >
              <a-select-option value="0"> 无 </a-select-option>
              <a-select-option value="1"> 实物加法器 </a-select-option>
            </a-select>
          </a-form-model-item>
        </a-form-model>
      </a-collapse-panel>
      <a-collapse-panel key="2" header="参数"> </a-collapse-panel>
      <a-collapse-panel key="3" header="状态"> </a-collapse-panel>
      <a-collapse-panel key="4" header="端口信息"> </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeKey: ["1", "2", "3", "4"],
      labelCol: { span: 5 },
      wrapperCol: { span: 15 },
      form: this.$store.state.model.attrForm.default,
    };
  },

  methods: {
  },

  watch: {
    'form.entityId' (val) {
      this.$store.dispatch("model/setAttrForm", {key: this.form.id, form: {entityId: val}});
    }
  }
};
</script>

<style scoped>
</style>