import UserInfoLabel from "../Atoms/userInfoLabel";
import { MainRankId as Molecules } from "./meleculesStyle";

const MainRankId = ({userId}) => {
    return(
        <Molecules>
            <UserInfoLabel text="ID: "/>
            <UserInfoLabel text={userId}/>
        </Molecules>
    );
}

export default MainRankId;