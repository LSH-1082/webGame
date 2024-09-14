import { MainRankListOrganism as Organisms } from "./organismsStyle";
import MainRank from "../Molecules/mainRank";

const MainRankListOrganism = ({rankList}) => {

    return(
        <Organisms>
            {rankList.map(ranker => {
                <MainRank userId={ranker.username} winCount={ranker.winCount} winRate={`${((ranker.winText/(ranker.winText + ranker.loseText)) * 100).toFixed(1)}%`}/>
            })}
        </Organisms>
    );
}

export default MainRankListOrganism;