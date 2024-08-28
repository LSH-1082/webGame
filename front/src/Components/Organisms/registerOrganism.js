import RegisterInput from "../Molecules/registerInput";
import LoginRegisterButton from "../Atoms/loginRegisterButton";
import {LoginRegisterOrganism as Organism} from "./organismsStyle";

const RegisterOrganism = () => {
    return(
    <Organism>
        <RegisterInput/>
        <LoginRegisterButton text="회원가입"/>
    </Organism>
    );
}

export default RegisterOrganism;