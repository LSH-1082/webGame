import { LoginRegisterInput as Input} from "./atomsStyle";

const LoginRegisterInput = ({type, value, onChange, autoComplete}) => {
    return(<>
    <Input type={type} value={value} onChange={onChange} autoComplete={autoComplete}/> 
    </>);
}

export default LoginRegisterInput;