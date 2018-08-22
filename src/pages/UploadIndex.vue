<template>
  <div id="app">
    <div class="title">请根据以下模板整理数据后导入</div>

    <div>
      <p class="successTitle"><span v-show="fileName">成功上传文件：{{fileName}}</span></p>
      <Button icon="ios-cloud-download" size='large' style="margin: 1rem 1rem 1rem 0;" @click="inportexcel">下载模板</Button>
<!-- action="//jsonplaceholder.typicode.com/posts/" -->
      <Upload
        action="/posts/"
        :before-upload="beforeUpload"
        :on-progress="onProgress"
        :on-success="onSuccess"
        :on-error="onError"
        style="display: inline-block;margin: 1rem;height: 36px;overflow: hidden;vertical-align: middle;"
      >
        <Button icon="ios-cloud-upload" size='large'>上传EXCEL</Button>
      </Upload>
    </div>

    <div>
      <div class="title">群成员权限设置:</div>
      <span style="display: inline-block;margin: 1rem 1rem 1rem 0;">可否主动退群：<iSwitch size="default"/></span>
      <span style="display: inline-block;margin: 1rem;">可否邀请他人：<iSwitch size="default"/></span>
    </div>

    <Button size='large' style="margin: 1rem 1rem 1rem 0;" :disabled="creatDisable" type="primary" @click="confirmModal">确定创建群聊</Button>

    <ModalProgress :isShow="showModal" :percent="percent" :tipText="tipText" :status="progressStatus" :handleClose="closeModal"/>
    <ModalConfirm
      :isShow="showConfirmModal"
      :handleClose="closeModal"
      :handleSubmit="creatList"
    >
      是否确认创建该群聊
    </ModalConfirm>
  </div>
</template>

<script>
import { Upload, Icon, Button, Switch, Progress } from "iview";
import ModalProgress from "../components/ModalProgress";
import ModalConfirm from "../components/ModalConfirm";
// import Table from "../components/Table";

// Switch 与html原有的元素重名，这时候会报错，要修改一下名称就会好了
export default {
  name: "app",
  components: {
    Upload,
    Icon,
    Button,
    iSwitch: Switch,
    iProgress: Progress,
    ModalProgress,
    ModalConfirm
  },
  data() {
    return {
      file: null,
      showModal: false,
      percent: 0,
      progressStatus: "active",
      tipText: "",
      fileName: "",
      creatDisable: true,
      showConfirmModal: false
    };
  },
  methods: {
    beforeUpload() {
      this.progressStatus = "active";
      this.showModal = true;
      this.percent = 0;
      this.tipText = "开始校验建群数据,";
    },
    onProgress(event, fill, fillList) {
      this.percent = event.percent - 1;
      this.tipText = "正在校验建群数据,";
      console.log(event, fill, fillList, "onProgress");
    },
    onSuccess(response, file) {
      this.percent = 100;
      this.tipText = "校验建群数据成功,";
      setTimeout(() => {
        this.showModal = false;
        this.fileName = file.name;
        this.creatDisable = false;
      }, 1000);
      console.log(file.name, "onSuccess");
    },
    onError(error) {
      this.percent = 100;
      this.fileName = "";
      this.creatDisable = true;
      this.progressStatus = "wrong";
      this.tipText = "校验失败" + error;
      console.log(error, file, "onError");
      // this.showModal = false
    },
    closeModal() {
      this.showModal = false;
      this.showConfirmModal = false;
    },
    confirmModal() {
      this.showConfirmModal = true;
    },
    creatList() {
      this.closeModal();
      console.log("确认创建群聊");
    },
    change(status) {
      this.$Message.info("开关状态：" + status);
    },
    inportexcel() {
      console.log("导出接口");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 2rem;
  font-size: 1rem;
}
.title {
  font-weight: 500;
  line-height: 3rem;
}
.successTitle {
  height: 0.75rem;
  font-size: 0.75rem;
  color: #2c3e50;
}
</style>
