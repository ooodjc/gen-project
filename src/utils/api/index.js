import request from '@/utils/request'
import download from './download'

const api = {
    //上传文件
    UploadUrl(){
        const baseApi = import.meta.env.VITE_APP_BASE_API
        return baseApi + 'file/upload'
    },
    /* 获取数据库表名称 */
    allTableName(data = {}){
        return request.get('allTableName', data)
    },
    allTableInfo(data = {}){
        return request.get('allTableInfo', data)
    },
    /* 下载代码 */
    download(data = {}){
        return download.zip('download',data)
    }
}

export default api