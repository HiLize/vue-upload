<template>
  <Modal
      v-model="isShow"
      width="500"
      draggable
      scrollable
      :transfer="true"
      :closable="false"
      :footer-hide="true">
      <div style="min-height: 18rem;">
      <div class="modalContent">
        <iProgress :percent="percent" :status="status" hide-info class="tipsText"/>
        <div class="tipsText">{{tipText}}已完成{{parseInt(percent, 10)}}%</div>
      </div>
      <div class="btnContent" v-if="status === 'wrong'">
        <Button type="warning" size='large' style="display: inline-block;margin: 0 1rem;">下载并查看错误数据</Button>
        <Button type="primary" size='large' style="display: inline-block;margin: 0 1rem;" @click="handleClose">返回重新上传</Button>
      </div>
      </div>
  </Modal>
</template>

<script>
import { Modal, Progress, Button } from "iview";

export default {
  components: { Modal, iProgress: Progress, Button },
  props: {
    isShow: Boolean,
    status: String,
    percent: Number,
    tipText: String,
    handleClose: Function
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modalContent {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  min-height: 15rem;
  line-height: 3rem;
  font-size: 1rem;
}
.btnContent {
  text-align: right;
}
.tipsText {
  display: block;
  width: 80%;
  text-align: center;
}
</style>
