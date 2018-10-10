<template>
  <div class="businessManagement">
    <Form ref="formCustom"
          :model="formCustom"
          :label-width="80">
      <Row>
        <Col span="16">
        <Row>
          <Col span="9">
          <FormItem label="企业名称"
                    prop="businessName">
            <Input type="text"
                   placeholder="请输入企业名称"
                   v-model="formCustom.businessName"></Input>
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
                    @click="businessAdd()">新增</Button>
          </FormItem>
        </div>
        </Col>
      </Row>
    </Form>
    <Table border
           class="businessTable"
           ref="selection"
           :columns="columns"
           :data="data"></Table>
    <Modal v-model="modalEdit"
           title="修改"
           ok-text="保存"
           @on-ok="okEdit"
           @on-cancel="cancel">
      <Form ref="formEdit"
            :rules="ruleEdit"
            :model="formEdit"
            :label-width="80">
        <FormItem label="企业ID"
                  prop="businessId">
          <Input type="text"
                 v-model="formEdit.businessId"></Input>
        </FormItem>
        <FormItem label="企业名称"
                  prop="businessName">
          <Input type="text"
                 v-model="formEdit.businessName"></Input>
        </FormItem>
        <FormItem label="状态"
                  prop="status">
          <Select v-model="formEdit.businessStatus"
                  @on-change="statusChange()">
            <Option value="启用">启用</Option>
            <Option value="停用">停用</Option>
          </Select>
        </FormItem>
        <FormItem label="企业地址"
                  prop="businessSite">
          <Input type="textarea"
                 v-model="formEdit.businessSite"></Input>
        </FormItem>
        <FormItem label="坐席号码段"
                  prop="number">
          <Input type="text"
                 v-model="formEdit.numberStart"
                 style="width: 40%"></Input> ~
          <Input type="text"
                 v-model="formEdit.numberEnd"
                 style="width: 40%"></Input>
          <Tooltip content="为当前企业分配坐席工号范围, 工号仅限数字, 如: 5000~5999 "
                   placement="top"
                   max-width="200">
            <Icon type="ios-information-circle"
                  size="20" />
          </Tooltip>
        </FormItem>
      </Form>
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
      formCustom: {
        businessName: '',
        status: '全部'
      },
      formEdit: {
        businessId: '',
        businessName: '',
        number: '',
        businessStatus: '启用',
        businessSite: ''
      },
      ruleEdit: {
        businessId: [
          {
            required: true,
            message: '企业ID不能为空',
            trigger: 'blur'
          }
        ],
        businessName: [
          {
            required: true,
            message: '企业名称不能为空',
            trigger: 'blur'
          }
        ]
      },
      columns: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        {
          title: '企业ID',
          key: 'businessId'
        },
        {
          title: '企业名称',
          key: 'businessName'
        },
        {
          title: '企业地址',
          key: 'businessSite'
        },
        {
          title: '状态',
          key: 'businessStatus'
        },
        {
          title: '坐席号码段',
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
          businessId: '001',
          businessName: '方正',
          businessSite: 'xxxxxxxxxxx',
          businessStatus: '启用',
          number: '13333333333'
        }
      ],
      modalEdit: false,
      modalRemove: false
    }
  },
  methods: {
    statusChange(value) {
      console.log(value)
    },
    handleSubmit() {
      console.log(this.formCustom)
    },
    handleReset() {
      this.$refs.formCustom.resetFields()
    },
    businessAdd() {},
    okEdit() {
      console.log(this.formEdit)
    },
    okRemove() {},
    cancel() {
      this.$refs.formEdit.resetFields()
    }
  }
}
</script>
<style>
.businessManagement .rightButtons {
  text-align: right;
  padding-right: 10px;
}
.businessManagement .businessTable {
  margin: 10px;
}
</style>
