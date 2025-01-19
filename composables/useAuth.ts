import axios from "axios";


interface User {
    id  : number, first_name : string,last_name  : string,
    membership_number : string, email : string ,is_principal_member : boolean,
    email_verified_at? : Date, password : string, remember_token? : string,
    two_factor_secret? : Date, two_factor_recovery_codes?: Date,
    two_factor_confirmed_at?: Date, deleted_at?: Date,created_at: Date,
    updated_at: Date,

}

const user = ref< User | null>(null);
export const useAuth = () => {

    async function getUser(): Promise <User | null> {
       if (user.value) return user.value;
       try{
        const resp = await axios.get('/user');
        const user = resp.data;
        return {
            ...user,       
            created_at: new Date(user.created_at),
            updated_at: new Date(user.updated_at),
        }
       }catch(error){
         return null
       }
    }

    async function initUser() {
        user.value = await getUser();
    }

    interface LoginPayload{
        email: string;
        password: string
      }
    async function login(payload: LoginPayload) {
        await axios.post("/login", payload)
        useRouter().push("me")
    }

    async function logout() {
        await axios.post("/logout")
        user.value = null,
        useRouter().replace('login')
    }

    return {
        login,
        logout,
        initUser,
        user,
    }
}