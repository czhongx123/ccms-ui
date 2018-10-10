<template>
  <div class="tenantManagement">
    <Form ref="formCustom"
          :model="formCustom"
          :label-width="80">
      <Row>
        <Col span="16">
        <Row>
          <Col span="9">
          <FormItem label="队列名"
                    prop="tenantName">
            <Input type="text"
                   placeholder="请输入队列名"
                   v-model="formCustom.tenantName"></Input>
          </FormItem>
          </Col>
          <Col span="9">
          <FormItem label="状态"
                    prop="status">
            <Select v-model="formCustom.status">
              <Option value="全部">全部</Option>
              <Option value="正常">正常</Option>
              <Option value="停止">停止</Option>
            </Select>
          </FormItem>
          </Col>
          <Col span="6">
          <FormItem>
            <Icon type="ios-search"
                  size="24"
                  @click="handleSubmit('formCustom')" />
            <Icon type="md-sync"
                  size="24"
                  @click="handleReset('formCustom')"
                  style="margin-left: 8px" />
          </FormItem>
          </Col>
        </Row>
        </Col>
        <Col span="8">
        <div class="rightButtons">
          <FormItem>
            <Button type="primary"
                    @click="tenantAdd()">新增</Button>
          </FormItem>
        </div>
        </Col>
      </Row>
    </Form>
    <Form class="formTable">
      <FormItem label="表格展示内容选取"
                prop="tableSelect">
        <Select v-model="formTable.tableSelect"
                multiple
                @on-change="selectChange()"
                style="width:260px">
          <Option v-for="item in tableSelectData"
                  :value="item.value"
                  :key="item.value">{{ item.label }}</Option>
        </Select>
      </FormItem>
    </Form>
    <Table border
           class="tenantTable"
           ref="selection"
           :columns="columns"
           :data="data"></Table>
    <Modal v-model="modalNumber"
           title=" "
           @on-ok="okNumber"
           @on-cancel="cancel">
      <Form ref="formNumber"
            :model="formNumber"
            :label-width="80">
        <FormItem label="坐席归属">
          <RadioGroup v-model="formNumber.type"
                      @on-change="radioChange()">
            <Radio label="队内坐席"></Radio>
            <Radio label="待分配坐席"></Radio>
            <Radio label="队内+待分配坐席"></Radio>
            <Radio label="全部坐席"></Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="工号范围">
          <Input type="text"
                 style="width:100px"
                 v-model="formNumber.numberStart"></Input> ~
          <Input type="text"
                 style="width:100px"
                 v-model="formNumber.numberEnd"></Input>
          <Icon type="ios-search"
                size="24"
                @click="numberSearch" />
        </FormItem>
      </Form>
      <div class="modalNumberButtons"
           style="text-align: right;margin-bottom: 5px">
        <Icon type="md-add"
              size="24"
              @click="numberAdd()" />
        <Icon type="md-remove"
              size="24"
              @click="numberRemove()"
              style="margin-left: 8px" />
      </div>
      <Table border
             :columns="columnsModalNumber"
             :data="dataModalNumber"
             @on-selection-change="tableModalChange()">
      </Table>
    </Modal>
    <Modal v-model="modalEdit"
           title="编辑"
           ok-text="保存"
           @on-ok="okEdit"
           @on-cancel="cancel">

    </Modal>
    <Modal v-model="modalRemove"
           title="温馨提示"
           ok-text="删除"
           @on-ok="okRemove"
           @on-cancel="cancel">
      <p>是否确认删除该条数据?</p>
    </Modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //队列名form
      formCustom: {
        tenantName: '',
        status: '全部'
      },
      // 表格选择框form
      formTable: {
        tableSelect: ''
      },
      // 表格选择框data
      tableSelectData: [
        {
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        },
        {
          value: 'Sydney',
          label: 'Sydney'
        },
        {
          value: 'Ottawa',
          label: 'Ottawa'
        },
        {
          value: 'Paris',
          label: 'Paris'
        },
        {
          value: 'Canberra',
          label: 'Canberra'
        }
      ],
      // 表格中第一个图标modal框form
      formNumber: {
        type: '',
        numberStart: '',
        numberEnd: ''
      },
      columnsModalNumber: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '工号',
          key: 'number'
        }
      ],
      dataModalNumber: [
        {
          number: '001'
        },
        {
          number: '002'
        },
        {
          number: '003'
        },
        {
          number: '004'
        }
      ],
      // 页面表格
      columns: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '对列名',
          key: 'tenantName'
        },
        {
          title: '呼叫分配策略',
          key: 'tenantStrategy'
        },
        {
          title: '状态',
          key: 'tenantStatus'
        },
        {
          title: '成员数',
          key: 'number'
        },
        {
          title: '操作',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Icon', {
                props: {
                  type: 'md-contact',
                  size: '25'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.modalNumber = true
                    console.log(params.row)
                  }
                }
              }),
              h('Icon', {
                props: {
                  type: 'ios-create',
                  size: '25'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.modalEdit = true
                    console.log(params.row)
                  }
                }
              }),
              h('Icon', {
                props: {
                  type: 'ios-trash',
                  size: '25'
                },
                on: {
                  click: () => {
                    this.modalRemove = true
                    console.log(params.row)
                  }
                }
              })
            ])
          }
        }
      ],
      data: [
        {
          tenantName: '队列1',
          tenantStrategy: '最长空闲时间',
          tenantStatus: '启用',
          number: '12'
        }
      ],
      modalNumber: false,
      modalEdit: false,
      modalRemove: false
    }
  },
  methods: {
    // 表格选择框change
    selectChange(value) {
      console.log(value)
    },
    // 搜索图标点击
    handleSubmit() {
      console.log(this.formCustom)
    },
    // 重置图标点击
    handleReset() {
      this.$refs.formCustom.resetFields()
    },
    // 第一个modal单选框change
    radioChange(value) {
      console.log(value)
    },
    // 新增按钮
    tenantAdd() {},
    // 第一个modal工号搜索
    numberSearch() {
      console.log(this.formNumber)
    },
    // modal表格多选change
    tableModalChange(selection) {
      console.log(selection)
    },
    // 添加
    numberAdd() {},
    // 删除
    numberRemove() {},
    okNumber() {},
    okEdit() {},
    okRemove() {},
    cancel() {}
  }
}
</script>
<style>
.tenantManagement .rightButtons {
  text-align: right;
  padding-right: 10px;
}
.tenantManagement .tenantTable {
  margin: 10px;
}
.tenantManagement .formTable {
  margin-left: 10px;
}
.tenantManagement .modalNumberButtons {
  text-align: right;
  background: red;
}
</style>
