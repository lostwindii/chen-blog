//axios二次封装
import axios from 'axios'
import QS from 'qs'
import { LoadingBar , Message } from 'view-design'

let instance = axios.create({
    baseURL: 'http://127.0.0.1:3000',
    timeout: 10 * 1000
});

instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么

    /* 添加loading S */
    LoadingBar.start();
    /* 添加loading E */

    return config
}, function (error) {
    // 对请求错误做些什么

    /* 关闭loading S */
    LoadingBar.finish();
    /* 关闭loading E */

    return Promise.reject(error)
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么

    /* 关闭loading S */
    LoadingBar.finish();
    /* 关闭loading E */

    return response
}, function (error) {
    // 对响应错误做点什么

    /* 关闭loading S */
    LoadingBar.finish();
    /* 关闭loading E */

    return Promise.reject(error)
});

let httpRequest = {
    // get请求
    get (url, params) {
        return new Promise((resolve, reject) => {
            instance({
                method: 'get',
                url: url,
                params: params
            }).then(response => {
                // 请求成功
                resolve(response.data)
            }).catch(err => {
                Message.error({
                    content:'请求发生错误'
                });
                reject(err)
            })
        })
    },
    // post请求
    post (url, data) {
        return new Promise((resolve, reject) => {
            instance({
                method: 'post',
                url: url,
                data: QS.stringify(data)
            }).then(response => {
                // 请求成功
                resolve(response.data)
            }).catch(err => {
                Message.error({
                    content:'请求发生错误'
                });
                reject(err)
            })
        })
    }
};

export default httpRequest
