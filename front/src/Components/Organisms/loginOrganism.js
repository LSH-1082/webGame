import LoginInput from "../Molecules/loginInput";
import LoginRegisterButton from "../Atoms/loginRegisterButton";
import RegisterAnchor from "../Atoms/registerAnchor"
import {LoginRegisterOrganism as Organism} from "./organismsStyle";
import { useState } from "react";
import { loginUser } from "../Axios/axios";

const LoginOrganism = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const onUsernameChange = (e) => setUsername(e.target.value);
    const onPasswordChange = (e) => setPassword(e.target.value);

    const checkForm = () => {
        if(username === "" || password === ""){
            alert("아이디/비밀번호를 입력해 주세요!");
            return false;
        }
        return true;
    }

    const login = (e) => {
        e.preventDefault();
        if(checkForm()){
            const formData = new FormData();
            formData.append("username", username);
            formData.append("password", password);
            loginUser(formData).catch(error => alert("아이디 혹은 비밀번호가 일치하지 않습니다!"));
        }
    }

    return(
    <Organism onSubmit={login}>
        <LoginInput username={username} password={password} onUsernameChange={onUsernameChange} onPasswordChange={onPasswordChange}/>
        <LoginRegisterButton type="submit" text="로그인"/>
        <RegisterAnchor text="회원가입하러가기"/>
    </Organism>
    );
}

export default LoginOrganism;