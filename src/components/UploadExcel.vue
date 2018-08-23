<template>
    <div class="marginStyle">
        <Button icon="ios-cloud-download" size='large' style="margin: 1rem 1rem 1rem 0;" @click="inportexcel">下载模板</Button>
    <!-- action="//jsonplaceholder.typicode.com/posts/" -->
        <Upload
            ref="upload"
            action="/posts/"
            :data="objectData"
            :with-credentials="true"
            :before-upload="beforeUpload"
            :on-progress="onProgress"
            :on-success="onSuccess"
            :on-error="onError"
            class="uploadStyle"
        >
            <Button icon="ios-cloud-upload" size='large'>上传EXCEL</Button>
        </Upload>
        <p class="successTitle"><span v-show="fileName">上传文件：{{fileName}}</span></p>

        <ModalProgress :isShow="showModal" :percent="percent" :tipText="tipText" :status="progressStatus" :handleClose="closeModal"/>
    </div>
</template>

<script>
import { Upload, Button, } from "iview";
import ModalProgress from "./ModalProgress";

export default {
    components: { Upload, Button, ModalProgress },
    props: {
        
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
    .marginStyle {
        height: 10rem;
        .uploadStyle {
            display: inline-block;
            margin: 1rem;
            height: 36px;
            overflow: hidden;
            vertical-align: middle;
        }
    }
</style>


