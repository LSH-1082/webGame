import UserInfoLabel from "../Atoms/userInfoLabel";
import {MainUserInfo as Info} from "./meleculesStyle";

const MainUserInfo = ({titleText, subText}) => {
    return(
        <Info>
            <UserInfoLabel text={titleText}/>
            <UserInfoLabel text={subText}/>
        </Info>
    );
}

export default MainUserInfo;