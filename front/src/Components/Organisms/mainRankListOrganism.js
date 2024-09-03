import { MainRankListOrganism as Organisms } from "./organismsStyle";
import MainRank from "../Molecules/mainRank";

const MainRankListOrganism = () => {
    return(
        <Organisms>
            <MainRank userId="qwer" winCount="134" winRate="73.2%"/>
            <MainRank userId="qwer" winCount="134" winRate="73.2%"/>
            <MainRank userId="qwer" winCount="134" winRate="73.2%"/>
            <MainRank userId="qwer" winCount="134" winRate="73.2%"/>
            <MainRank userId="qwer" winCount="134" winRate="73.2%"/>
            <MainRank userId="qwer" winCount="134" winRate="73.2%"/>
        </Organisms>
    );
}

export default MainRankListOrganism;