import LoginInput from "../Molecules/loginInput";
import LoginRegisterButton from "../Atoms/loginRegisterButton";
import RegisterAnchor from "../Atoms/registerAnchor"
import { LoginRegisterOrganism as Organism } from "./organismsStyle";
import useLogin from "../../Hooks/useLogin";
import { useState } from "react";

const LoginOrganism = () => {
    const { login } = useLogin();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onUsernameChange = (e) => {setUsername(e.target.value)}
    const onPasswordChange = (e) => {setPassword(e.target.value)}

    const handleSubmit = (e) => {
        e.preventDefault();
        login(username, password);
    };

    return(
    <Organism onSubmit={handleSubmit}>
        <LoginInput username={username} password={password} onUsernameChange={onUsernameChange} onPasswordChange={onPasswordChange}/>
        <LoginRegisterButton type="submit" text="로그인"/>
        <RegisterAnchor text="회원가입하러가기"/>
    </Organism>
    );
}

export default LoginOrganism;