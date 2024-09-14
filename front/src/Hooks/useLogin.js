import { loginUser } from "../Apis/api";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
    const navigate = useNavigate();

    const login = async (username, password) => {

        const checkForm = () => {
            if(username === "" || password === ""){
                alert("아이디/비밀번호를 입력해 주세요!");
                return false;
            }
            return true;
        }

        if (checkForm()) {
            const formData = new FormData();
            formData.append("username", username);
            formData.append("password", password);
            try {
                const response = await loginUser(formData);
                if (response?.data?.success) {
                    navigate("/main"); // 로그인 성공 후 리다이렉트
                } 
                else {
                    alert("아이디 혹은 비밀번호가 일치하지 않습니다!");
                }
            } 
            catch (error) {
                alert("로그인 중 오류가 발생했습니다.");
                console.error(error);
            }
        }
    }
    
    return { login }
}

export default useLogin;