import axios from 'axios'
import { saveAs } from 'file-saver'

const baseURL = import.meta.env.VITE_APP_BASE_API

export default {
    zip(url, data, name = 'dowloads.zip') {
        var url = baseURL + url
        axios({
          method: 'post',
          url: url,
          responseType: 'blob',
          data,
          //headers: { 'Authorization': 'Bearer ' + getToken() }
        }).then(async (res) => {
          const isBlob = await blobValidate(res.data);
          if (isBlob) {
            const blob = new Blob([res.data], { type: 'application/zip' })
            this.saveAs(blob, name)
          } else {
            //this.printErrMsg(res.data);
            console.log('dowload error', res.data)
          }
        })
      },
    saveAs(text, name, opts) {
        saveAs(text, name, opts);
    }
}

// 验证是否为blob格式
async function blobValidate(data) {
    try {
      const text = await data.text();
      JSON.parse(text);
      return false;
    } catch (error) {
      return true;
    }
  }