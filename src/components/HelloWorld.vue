<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
     <div>
        <Upload
            :before-upload="handleUpload"
            action="//jsonplaceholder.typicode.com/posts/">
            <Button icon="ios-cloud-upload-outline" size='default'>Select the file to upload</Button>
        </Upload>
        <div v-if="file !== null">Upload file: {{ file.name }} <Button type="text" @click="upload" :loading="loadingStatus">{{ loadingStatus ? 'Uploading' : 'Click to upload' }}</Button></div>
    </div>
    <Icon type="ios-checkmark" size="42"/>
    <Upload
        multiple
        type="drag"
        action="//jsonplaceholder.typicode.com/posts/">
        <div style="padding: 20px 0">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            <p>Click or drag files here to upload</p>
        </div>
    </Upload>
  </div>
</template>

<script>
import {Upload, Icon, Button} from 'iview'
export default {
  name: "HelloWorld",
  components: {Upload, Icon, Button},
  props: {
    msg: String
  },
  data () {
    return {
        file: null,
        loadingStatus: false
    }
  },
  methods: {
      handleUpload (file) {
          this.file = file;
          return false;
      },
      upload () {
          this.loadingStatus = true;
          setTimeout(() => {
              this.file = null;
              this.loadingStatus = false;
              this.$Message.success('Success')
          }, 1500);
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
