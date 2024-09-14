import MainLabel from "../Atoms/mainLabel";
import MainButton from "../Atoms/mainButton";
import { MainMakeRoom as Room } from "./meleculesStyle";

const MainMakeRoom = ({mainText, mainButton}) => {
    return(
        <Room>
            <MainLabel text={mainText}/>
            <MainButton text={mainButton}/>
        </Room>
    );
}

export default MainMakeRoom;