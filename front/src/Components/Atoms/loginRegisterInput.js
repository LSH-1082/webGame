import { useState } from "react";
import { LoginRegisterInput as Input} from "./atomsStyle";

const LoginRegisterInput = (props) => {
    const [input, setInput] = useState();

    return(<>
    <Input type={props.type} onChange={(e) => setInput(e.target.value)}/> 
    </>);
}

export default LoginRegisterInput;