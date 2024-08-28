import { useNavigate } from "react-router-dom";
import { useState } from "react";
import RegisterInput from "../Molecules/registerInput";
import LoginRegisterButton from "../Atoms/loginRegisterButton";
import {LoginRegisterOrganism as Organism} from "./organismsStyle";
import { registerUser } from "../Axios/axios";

const RegisterOrganism = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    
    const onUsernameChange = (e) => setUsername(e.target.value);
    const onPasswordChange = (e) => setPassword(e.target.value);
    const onPasswordCheckChange = (e) => setPasswordCheck(e.target.value);

    const register = (e) => {
        e.preventDefault();
        if(formCheck()){
            registerUser({
                username: username,
                password: password
            }).then(res => {
                alert("회원가입이 완료 되었습니다. 로그인해주세요.");
                navigate("/");
            }).catch(error => {
                alert(error.response.data);
            })
        } 
    } 

    const formCheck = () => {
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

    return(
    <Organism onSubmit={register}>
        <RegisterInput 
            username={username} 
            password={password} 
            passwordCheck={passwordCheck} 
            onUsernameChange={onUsernameChange}
            onPasswordChange={onPasswordChange}
            onPasswordCheckChange={onPasswordCheckChange}
        />
        <LoginRegisterButton type="submit" text="회원가입"/>
    </Organism>
    );
}

export default RegisterOrganism;