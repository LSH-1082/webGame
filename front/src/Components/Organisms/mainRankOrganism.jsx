import { MainRankOrganism as Organisms } from "./organismsStyle";
import MainRankListOrganism from "./mainRankListOrganism";
import MainUserOrganism from "./mainUserOrganism";
import MainLabel from "../Atoms/mainLabel";

const MainRankOrganism = ({username, winCount, loseCount, rankList}) => {
    return(
        <Organisms>
            <MainUserOrganism
                idText={username}
                winText={winCount}
                loseText={loseCount}
            />
            <MainLabel text="Rank"/>
            <MainRankListOrganism
                rankList={rankList}
            />
        </Organisms>
    );
}

export default MainRankOrganism;