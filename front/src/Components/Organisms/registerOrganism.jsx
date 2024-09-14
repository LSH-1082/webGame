import { useState } from "react";
import RegisterInput from "../Molecules/registerInput";
import LoginRegisterButton from "../Atoms/loginRegisterButton";
import {LoginRegisterOrganism as Organism} from "./organismsStyle";
import useRegister from "../../Hooks/useRegister";

const RegisterOrganism = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState("");
    
    const onUsernameChange = (e) => setUsername(e.target.value);
    const onPasswordChange = (e) => setPassword(e.target.value);
    const onPasswordCheckChange = (e) => setPasswordCheck(e.target.value);

    const {register} = useRegister();

    const handleSubmit = (e) => {
        e.preventDefault();
        register(username, password, passwordCheck);
    }
 
    return(
    <Organism onSubmit={handleSubmit}>
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