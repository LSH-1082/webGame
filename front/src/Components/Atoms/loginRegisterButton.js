import { LoginRegisterButton as Button } from "./atomsStyle";

const LoginRegisterButton = ({type = "button", onClick, text}) => {

    return(<>
    <Button type={type} onClick={onClick}>{text}</Button> 
    </>);
}

export default LoginRegisterButton;