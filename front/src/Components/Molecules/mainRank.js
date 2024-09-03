import { MainRank as Molecules } from "./meleculesStyle";
import MainRankStat from "./mainRankStat";
import MainRankId from "./mainRankId";

const MainRank = ({userId, winCount, winRate}) => {
    return(
        <Molecules>
            <MainRankId userId={userId}/>
            <MainRankStat winCount={winCount} winRate={winRate}/>
        </Molecules>
    );
}

export default MainRank;