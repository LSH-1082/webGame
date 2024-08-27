import LoginInput from "../Molecules/loginInput";
import LoginRegisterButton from "../Atoms/loginRegisterButton";
import RegisterAnchor from "../Atoms/registerAnchor"
import {LoginOrganism as Organism} from "./organismsStyle";

const LoginOrganism = () => {
    return(
    <Organism>
        <LoginInput/>
        <LoginRegisterButton text="로그인"/>
        <RegisterAnchor text="회원가입하러가기"/>
    </Organism>
    );
}

export default LoginOrganism;