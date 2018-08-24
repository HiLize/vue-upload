<template>
  <div id="app">
    <div class="marginStyle">
      <div class="title">请根据以下模板整理数据后导入</div>
      <Button icon="ios-cloud-download" size='large' style="margin: 1rem 1rem 1rem 0;" @click="inportexcel">下载模板</Button>
<!-- action="//jsonplaceholder.typicode.com/posts/" -->
      <Upload
        ref="upload"
        action="/v3/cpdaily-im/admin/tribe/import"
        :data="objectData"
        :with-credentials="true"
        :before-upload="beforeUpload"
        :on-progress="onProgress"
        :on-success="onSuccess"
        :on-error="onError"
        style="display: inline-block;margin: 1rem;height: 36px;overflow: hidden;vertical-align: middle;"
      >
        <Button icon="ios-cloud-upload" size='large'>上传EXCEL</Button>
      </Upload>
      <p class="successTitle"><span v-show="fileName">上传文件：{{fileName}}</span></p>
    </div>

    <div class="marginStyle">
      <div class="title">群成员权限设置</div>
      <div style="margin: 1rem 1rem 1rem 0;font-size: 0.75rem;">可否主动退群：<iSwitch size="small" v-model="objectData.isQuik"/></div>
      <div style="margin: 1rem 1rem 1rem 0;font-size: 0.75rem;">可否邀请他人：<iSwitch size="small" v-model="objectData.isInvite"/></div>
      <div>
        <Select :onChange="handleChangeSelect"/>
      </div>
    </div>

    <Button size='large' style="margin: 1rem 1rem 1rem 0;" type="primary" @click="confirmModal">确定创建群聊</Button>

    <ModalProgress :isShow="showModal" :percent="percent" :tipText="tipText" :status="progressStatus" :handleClose="closeModal"/>
    <ModalConfirm
      :isShow="showConfirmModal"
      :handleClose="closeModal"
      :handleSubmit="creatList"
    >
      是否确认创建该群聊
    </ModalConfirm>

    <!-- <Divider  orientation="left">测试组件</Divider>
    <SearchInput placeholder="请输入学工号/姓名/手机号"/> -->
    <iTable />
  </div>
</template>

<script>
import { Upload, Icon, Button, Switch, Option, Divider } from "iview";
import ModalProgress from "../components/ModalProgress";
import ModalConfirm from "../components/ModalConfirm";
import Table from "../components/Table";
import Select from "../components/Select"
import Search from "../components/Search"

// Switch 与html原有的元素重名，这时候会报错，要修改一下名称就会好了
export default {
  name: "app",
  components: {
    Upload,
    Icon,
    Button,
    iSwitch: Switch,
    ModalProgress,
    ModalConfirm,
    iTable: Table,
    Select,
    Option,
    Divider,
    SearchInput: Search
  },
  data() {
    return {
      file: null,
      showModal: false,
      percent: 0,
      progressStatus: "active",
      tipText: "",
      fileName: "",
      showConfirmModal: false,
      objectData: {
        isQuik: false,
        isInvite: false,
        schoolId: 123
      }
    };
  },
  methods: {
    beforeUpload(file) {
      this.file = file
      this.fileName = file.name
      this.progressStatus = "active";
      return false;
    },
    onProgress(event, fill, fillList) {
      this.showModal = true;
      this.percent = event.percent - 1;
      this.tipText = "正在校验建群数据,";
      console.log(event, fill, fillList, "onProgress");
    },
    onSuccess(response, file) {
      this.percent = 100;
      this.tipText = "校验建群数据成功,";
      setTimeout(() => {
        this.showModal = false;
      }, 1000);
      console.log(file.name, "onSuccess", response);
    },
    onError(error) {
      this.percent = 100;
      this.progressStatus = "wrong";
      this.tipText = "校验失败" + error;
      console.log(error, "onError");
    },
    closeModal() {
      this.showModal = false;
      this.showConfirmModal = false;
    },
    confirmModal() {
      this.showConfirmModal = true;
    },
    creatList() {
      console.log("确认创建群聊", this.objectData, this.$refs.searchinput);
      this.closeModal();
      this.$refs.upload.post(this.file);
    },
    change(status) {
      this.$Message.info("开关状态：" + status);
    },
    inportexcel() {
      console.log("导出接口");
    },
    handleChangeSelect(value) {
      this.objectData.schoolId = value
      console.log(value, 'index onChange')
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
  padding: 2rem;
  height: 100%;
}
.title {
  font-weight: 500;
  line-height: 2rem;
  font-size: 1rem;
}
.successTitle {
  height: 1rem;
  font-size: 0.75rem;
  color: #2c3e50;
}
.marginStyle {
  margin: 1rem 0;
}
.selectStyle {
  width: 17rem;
}
</style>
