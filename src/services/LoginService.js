import http from "../services/interceptor/AxiosInterceptor"


export default class LoginService {




    Login(data) {
        console.log("*******login on service is ****", data)
        return http.post("/User/Login/", data);


    }




}