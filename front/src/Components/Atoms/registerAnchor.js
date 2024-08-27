import { RegisterAnchor as Anchor } from "./atomsStyle";

const RegisterAnchor = (props) => {
    return(<>
    <Anchor href="/register">{props.text}</Anchor>
    </>);
}

export default RegisterAnchor;