import { MainRankOrganism as Organisms } from "./organismsStyle";
import MainRankListOrganism from "./mainRankListOrganism";
import MainUserOrganism from "./mainUserOrganism";

const MainRankOrganism = () => {
    return(
        <Organisms>
            <MainUserOrganism/>
            <MainRankListOrganism/>
        </Organisms>
    );
}

export default MainRankOrganism;