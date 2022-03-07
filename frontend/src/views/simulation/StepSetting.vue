<template>
  <a-form-model :layout="form.layout" :model="form" v-bind="formItemLayout">
    <a-form-model-item label="仿真时间">
      <a-input v-model="form.fieldA" placeholder="input placeholder" />
    </a-form-model-item>
    <a-form-model-item label="仿真步长">
      <a-input v-model="form.fieldB" placeholder="input placeholder" />
    </a-form-model-item>
    <a-form-model-item label="仿真算法">
      <a-select
        v-model="form.region"
        placeholder="please select your algorithm"
      >
        <a-select-option value="1"> 定步长欧拉法 </a-select-option>
      </a-select>
    </a-form-model-item>
    <a-checkbox @change="onChange"> 启用分段步长和算法控制 </a-checkbox>

    <a-table
      bordered
      :row-selection="{
        selectedRowKeys: selectedRowKeys,
        onChange: onSelectChange,
      }"
      :data-source="dataSource"
      :columns="columns"
      :pagination="false"
    >
      <template slot="start" slot-scope="text, record">
        <editable-cell
          :text="text"
          @change="onCellChange(record.key, 'start', $event)"
        />
      </template>
      <template slot="end" slot-scope="text, record">
        <editable-cell
          :text="text"
          @change="onCellChange(record.key, 'end', $event)"
        />
      </template>
      <template slot="step" slot-scope="text, record">
        <editable-cell
          :text="text"
          @change="onCellChange(record.key, 'step', $event)"
        />
      </template>
      <template slot="algorithm" slot-scope="text, record">
        <editable-cell
          :text="text"
          @change="onCellChange(record.key, 'step', $event)"
        />
      </template>
    </a-table>
    <a-button class="editable-add-btn" @click="handleAdd"> Add </a-button>
    <a-button class="editable-add-btn" @click="handleDelete"> Delete </a-button>
  </a-form-model>
</template>

<script>
import EditableCell from "./EditableCell.vue";

export default {
  components: {
    EditableCell,
  },
  data() {
    return {
      form: {
        layout: "horizontal",
        fieldA: "",
        fieldB: "",
      },

      selectedRowKeys: [],
      dataSource: [],
      count: 0,
      columns: [
        {
          title: "起始时间",
          dataIndex: "start",
          width: "20%",
          scopedSlots: { customRender: "start" },
        },
        {
          title: "结束时间",
          dataIndex: "end",
          width: "20%",
          scopedSlots: { customRender: "end" },
        },
        {
          title: "步长",
          dataIndex: "step",
          width: "20%",
          scopedSlots: { customRender: "step" },
        },
        {
          title: "算法",
          dataIndex: "algorithm",
          width: "20%",
          scopedSlots: { customRender: "algorithm" },
        },
      ],
    };
  },
  methods: {
    onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    },
    onCellChange(key, dataIndex, value) {
      const dataSource = [...this.dataSource];
      const target = dataSource.find((item) => item.key === key);
      if (target) {
        target[dataIndex] = value;
        this.dataSource = dataSource;
      }
    },
    handleAdd() {
      const { count, dataSource } = this;
      const newData = {
        key: count,
      };
      this.dataSource = [...dataSource, newData];
      this.count = count + 1;
    },
    handleDelete() {
      this.selectedRowKeys.forEach((key) => {
        const dataSource = [...this.dataSource];
        this.dataSource = dataSource.filter((item) => item.key !== key);
      });
    },
    onSelectChange(selectedRowKeys) {
      console.log("selectedRowKeys changed: ", selectedRowKeys);
      this.selectedRowKeys = selectedRowKeys;
    },
  },
  computed: {
    formItemLayout() {
      const { layout } = this.form;
      return layout === "horizontal"
        ? {
            labelCol: { span: 3 },
            wrapperCol: { span: 10 },
          }
        : {};
    },
  },
};
</script>

<style>
</style>