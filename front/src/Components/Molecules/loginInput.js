import LoginRegisterLabel from "../Atoms/loginRegisterLabel"
import LoginRegisterInput from "../Atoms/loginRegisterInput"
import { LoginInput as Login } from "./meleculesStyle"

const LoginInput = () => {
    return(
        <Login>
            <LoginRegisterLabel text="ID"/>
            <LoginRegisterInput type="text"/>
            <LoginRegisterLabel text="Password"/>
            <LoginRegisterInput type="password"/>
        </Login>
    )
}

export default LoginInput;