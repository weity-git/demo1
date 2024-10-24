import axios from "axios";
import router from '@/router';
import URL from "@/configs/api_url.json";

 const instance=axios.create({
        baseURL:URL.api_url,
        timeout:1000*6
    });
    
    // 2.1 添加请求拦截器
    // 添加公共请求头、处理请求参数等
    instance.interceptors.request.use((config)=>{
        console.log("请求前校验");
        const token=localStorage.getItem("token");
        config.headers['tcyl'] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGFpbXMiOnsicGhvbmUiOiIxMzAwMjM4NjgyMCJ9LCJleHAiOjE3Mjk3MTA2NTB9.dRRRfEdXuF85rM9F3w3WtSKfFA4q1AHN08zsYRVr7XE";
/*         if(token){
           
        }; */
        return config;
    }),(err)=>{
        return ProPromise.reject(err);// 在请求错误的时候的逻辑处理
    }

      // 2.2 添加响应拦截器
    // 修改响应信息，比如数据转换、错误处理等
    instance.interceptors.response.use(
        (res) => {
          // 在请求成功后对响应数据做处理
           console.log(res.data);
          if (res.status === 200) {
            return res.data;
          } 
        },
        (err) => {
          // 对响应错误做些什么
          if(err.response.status){
              switch (err.response.status) {
                  case 400:
                  // 处理错误信息，例如抛出错误信息提示，或者跳转页面等处理方式。
                    err.message = "错误请求";
                    break;
                  case 401:
                    err.message = "未授权，请重新登录";
                    break;
                  case 403:
                    err.message = "拒绝访问";
                    break;
                  case 404:
                    err.message = "请求错误,未找到该资源!!!!";
                    alert(err.message)
                    break;
                  case 405:
                    err.message = "请求方法未允许";
                    break;
                  case 408:
                    err.message = "请求超时";
                    break;
                  case 500:
                    err.message = "服务器端出错";
                    break;
                  case 501:
                    err.message = "网络未实现";
                    break;
                  case 502:
                    err.message = "网络错误";
                    break;
                  case 503:
                    err.message = "服务不可用";
                    break;
                  case 504:
                    err.message = "网络超时";
                    break;
                  case 505:
                    err.message = "http版本不支持该请求";
                    break;
                  default:
                    err.message = `连接错误${err.response.status}`;
              }
          }
        
          
          return Promise.reject(err); // 在响应错误的时候的逻辑处理
        }
      );
  
  
  
  export default instance;