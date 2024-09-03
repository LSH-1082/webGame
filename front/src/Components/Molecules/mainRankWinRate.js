import UserInfoLabel from "../Atoms/userInfoLabel";
import { MainRankStat as Molecules } from "./meleculesStyle";

const MainRankWinRate = ({winRate}) => {
    return(
        <Molecules>
            <UserInfoLabel text="winRate: "/>
            <UserInfoLabel text={winRate}/>
        </Molecules>
    );
}

export default MainRankWinRate;