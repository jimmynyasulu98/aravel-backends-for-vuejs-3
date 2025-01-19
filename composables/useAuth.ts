import axios from "axios";

export const useAuth = () => {

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
        useRouter().replace('login')
    }

    return {
        login,
        logout,
    }
}