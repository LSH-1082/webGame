import { LoginRegisterButton as Button } from "./atomsStyle";

const LoginRegisterButton = (props) => {

    return(<>
    <Button>{props.text}</Button> 
    </>);
}

export default LoginRegisterButton;