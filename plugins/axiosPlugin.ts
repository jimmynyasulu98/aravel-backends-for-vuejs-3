import axios from "axios";

export default defineNuxtPlugin(async (nuxtApp) => {

    axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1";
    axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.headers.common["Accept"] ="application/json";
   
    
    axios.defaults.withCredentials = true;
    
    axios.interceptors.response.use(
        (res) => res,
        (error)=>{
            
            if([401,419].includes(error.response.status)){
                const { logout } = useAuth();
                logout
            } else{
                return Promise.reject(error);
            }
        }
    )
    await axios.get("/sanctum/csrf-cookie", {
        baseURL: "http://127.0.0.1:8000",
    });
    
})