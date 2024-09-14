import { MainRank as Molecules } from "./meleculesStyle";
import MainRankId from "./mainRankId";
import MainRankWinCount from "./mainRankWinCount";
import MainRankWinRate from "./mainRankWinRate";

const MainRank = ({userId, winCount, winRate}) => {
    return(
        <Molecules>
            <MainRankId userId={userId}/>
            <MainRankWinCount winCount={winCount}/>
            <MainRankWinRate winRate={winRate}/>
        </Molecules>
    );
}

export default MainRank;