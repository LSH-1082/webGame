import { MainTemplate as Template } from "./templatesStyle";
import MainRoomOrganism from "../Organisms/mainRoomOrganism";
import MainRankOrganism from "../Organisms/mainRankOrganism";

const MainTemplate = ({userData, rankList, roomList}) => {
    return(
        <Template>
            <MainRoomOrganism roomList={roomList}/>
            <MainRankOrganism 
                username={userData.username}
                winCount={userData.winCount}
                loseCount={userData.loseCount}
                rankList={rankList}
            />
        </Template>
    );
}

export default MainTemplate;