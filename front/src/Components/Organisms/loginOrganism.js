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

    const login = (e) => {
        e.preventDefault();
        loginUser({
            username: username,
            password: password
        }).then((res) => console.log(res.data));
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