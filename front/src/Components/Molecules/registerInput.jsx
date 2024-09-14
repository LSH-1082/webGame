import LoginRegisterLabel from "../Atoms/loginRegisterLabel"
import LoginRegisterInput from "../Atoms/loginRegisterInput"
import { LoginRegisterInput as Register } from "./meleculesStyle"

const RegisterInput = ({username, password, passwordCheck, onUsernameChange, onPasswordChange, onPasswordCheckChange}) => {
    return(
        <Register>
            <LoginRegisterLabel text="ID"/>
            <LoginRegisterInput type="text" value={username} onChange={onUsernameChange} autoComplete="username"/>
            <LoginRegisterLabel text="Password" />
            <LoginRegisterInput type="password" value={password} onChange={onPasswordChange} autoComplete="current-password"/>
            <LoginRegisterLabel text="Password Check"/>
            <LoginRegisterInput type="password" value={passwordCheck} onChange={onPasswordCheckChange} autoComplete="current-password"/>
        </Register>
    )
}

export default RegisterInput;