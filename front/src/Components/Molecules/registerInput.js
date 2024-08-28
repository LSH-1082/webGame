import LoginRegisterLabel from "../Atoms/loginRegisterLabel"
import LoginRegisterInput from "../Atoms/loginRegisterInput"
import { LoginRegisterInput as Register } from "./meleculesStyle"

const RegisterInput = () => {
    return(
        <Register>
            <LoginRegisterLabel text="ID"/>
            <LoginRegisterInput type="text"/>
            <LoginRegisterLabel text="Password"/>
            <LoginRegisterInput type="password"/>
            <LoginRegisterLabel text="Password Check"/>
            <LoginRegisterInput type="password"/>
        </Register>
    )
}

export default RegisterInput;