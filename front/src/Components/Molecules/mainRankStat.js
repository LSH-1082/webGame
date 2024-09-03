import { MainRankStat as Molecules } from "../Molecules/meleculesStyle";
import MainRankWinCount from "./mainRankWinCount";
import MainRankWinRate from "./mainRankWinRate";

const MainRankStat = ({winCount, winRate}) => {
    return(
        <Molecules>
            <MainRankWinCount winCount={winCount}/>
            <MainRankWinRate winRate={winRate}/>
        </Molecules>
    );
}

export default MainRankStat;