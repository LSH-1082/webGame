import LoginRegisterLabel from "../Atoms/loginRegisterLabel"
import LoginRegisterInput from "../Atoms/loginRegisterInput"
import { LoginRegisterInput as Login } from "./meleculesStyle"

const LoginInput = ({username, password, onUsernameChange, onPasswordChange}) => {
    return(
        <Login>
            <LoginRegisterLabel text="ID"/>
            <LoginRegisterInput type="text" value={username} onChange={onUsernameChange} autoComplete="username"/>
            <LoginRegisterLabel text="Password"/>
            <LoginRegisterInput type="password" value={password} onChange={onPasswordChange} autoComplete="current-password"/> 
        </Login>
    )
}

export default LoginInput;