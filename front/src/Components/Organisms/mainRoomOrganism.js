import MainMakeRoom from "../Molecules/mainMakeRoom";
import MainRoomListOrganisms from "./mainRoomListOrganism";
import { MainRoomOrganism as Organism } from "./organismsStyle";

const MainRoomOrganism = () => {
    return(
        <Organism>
            <MainMakeRoom mainText="방 리스트" mainButton="방만들기"/>
            <MainRoomListOrganisms/>
        </Organism>
    );
}

export default MainRoomOrganism;
