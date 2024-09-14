import UserInfoLabel from "../Atoms/userInfoLabel";
import { MainRankStat as Molecules } from "./meleculesStyle";

const MainRankWinCount = ({winCount}) => {
    return(
        <Molecules>
            <UserInfoLabel text="winCount: "/>
            <UserInfoLabel text={winCount}/>
        </Molecules>
    );
}

export default MainRankWinCount;