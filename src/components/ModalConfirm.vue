<template>
  <Modal
      v-model="isShow"
      width="400"
      scrollable
      :transfer="true"
      :closable="false"
      :footer-hide="true"
      class-name="vertical-center-modal"
    >
      <div class="modalContent">
        <slot></slot>
        <div class="btnContent">
            <Button type="warning" size='large' style="display: inline-block;margin: 0 1rem;" @click="handleClose">取消</Button>
            <Button type="primary" size='large' style="display: inline-block;margin: 0 1rem;" @click="handleSubmit">确认</Button>
        </div>
      </div>
  </Modal>
</template>

<script>
import { Modal, Button } from "iview";

export default {
  components: { Modal, Button },
  props: {
    isShow: Boolean,
    handleClose: {
      type: Function,
      default: () => {}
    },
    handleSubmit: {
      type: Function,
      default: () => {}
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .vertical-center-modal{
    display: flex;
    align-items: center;
    justify-content: center;
    .ivu-modal{
      top: 0;
    }
    .modalContent {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: relative;
      min-height: 10rem;
      line-height: 4rem;
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
  }
</style>
