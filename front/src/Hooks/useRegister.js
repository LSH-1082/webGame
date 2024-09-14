import { useNavigate } from "react-router-dom";
import { registerUser } from "../Apis/api";

const useRegister = () => {
    const navigate = useNavigate();

    const register = async (username, password, passwordCheck) => {
        const checkForm = () => {
            if(username === "" || password === "" || passwordCheck === ""){
                alert("모든 항목을 입력해주세요!");
                return false;
            }
            if(password !== passwordCheck){
                alert("비밀번호와 비밀번호 확인이 일치하지 않습니다!");
                return false;
            }
            return true;
        }
    
        if(checkForm()){
            try {
                const response = await registerUser({username: username, password: password});
                if (response?.data?.success) {
                    navigate("/");
                } 
                else {
                    alert("기존 회원이 존재합니다!");
                }
            } 
            catch (error) {
                alert("로그인 중 오류가 발생했습니다.");
                console.error(error);
            }
        } 
    }
    return { register }
}

export default useRegister;