<template>
  <div class="module-component-wrapper">
    <Card class="demo-box">
      <p slot="title">当前环境：{{env.name}}</p>
      <ul>
        <li v-for="(v, k) of env.data"
            :key="k">{{k}} = {{v}}</li>
      </ul>
    </Card>
    <Card class="demo-box">
      <p slot="title">图片资源</p>
      <img class="img"
           :src="require('@/assets/image/img.png')"
           alt="">
    </Card>
    <Card class="demo-box">
      <p slot="title">音频资源</p>
      <audio :src="require('@/assets/audio/message.mp3')"
             controls></audio>
    </Card>
    <Card class="demo-box">
      <p slot="title">iconfont的图标引用symbol</p>
      <svg class="icon"
           aria-hidden="true">
        <use xlink:href="#icon-dingshuji"></use>
      </svg>
      <svg class="icon"
           aria-hidden="true">
        <use xlink:href="#icon-bijiben"></use>
      </svg>
      <svg class="icon"
           aria-hidden="true">
        <use xlink:href="#icon-gangbi"></use>
      </svg>
      <svg class="icon"
           aria-hidden="true">
        <use xlink:href="#icon-jiazi"></use>
      </svg>
      <svg class="icon"
           aria-hidden="true">
        <use xlink:href="#icon-wenjianjia"></use>
      </svg>
    </Card>
    <Card class="demo-box">
      <p slot="title">使用jQuery</p>
      <Button @click="jqueryDemo">点击淡入/淡出</Button>
      <div id="jqueryDemo">使用jQuery之前仔细考虑是否有更好的选择。</div>
    </Card>
    <Card class="demo-box">
      <p slot="title">http请求</p>
      <Button @click="ajaxGet">发起异步请求</Button>
      <div>{{ajaxRes}}</div>
    </Card>
    <Card class="demo-box">
      <p slot="title">设置非路由组件数据</p>
      <Button @click="changeAlertShow">打开alert</Button>
      <Input v-model="alertTip"
             placeholder="输入内容" />
      <Button @click="changeAlertTip">设置</Button>
    </Card>
    <Card class="demo-box">
      <p slot="title">iframe嵌入</p>
      <iframe :src="env.data.SERVER_URL + 'iframe/demo.html'"
              frameborder="0"></iframe>
    </Card>
  </div>
</template>
<script>
import { env } from '@/config/index'
import $ from 'jquery'
export default {
  name: 'staticType',
  data() {
    return {
      env: {
        name: process.env.NODE_ENV,
        data: env
      },
      publicUrl: process.env.BASE_URL,
      alertTip: '',
      ajaxRes: ''
    }
  },
  methods: {
    changeAlertTip() {
      this.$store.commit('pm/changeAlertTip', this.alertTip)
    },
    changeAlertShow() {
      this.$store.commit('pm/changeAlertShow', true)
    },
    jqueryDemo() {

      $('#jqueryDemo').fadeToggle('slow')
    },
    ajaxGet() {
      this.$api.ex1.getSomething().then(res => {
        this.ajaxRes = res
      })
    }
  }
}
</script>

<style lang="stylus">
.module-component-wrapper
  display flex
  flex-wrap wrap

  .demo-box
    text-align center
    width 350px

    .icon
      font-size 50px

    ul
      list-style none

    .img
      width 200px
</style>
