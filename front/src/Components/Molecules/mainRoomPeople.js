import RoomLabel from "../Atoms/roomLabel";
import {MainRoomPeople as People} from "./meleculesStyle";

const MainRoomPeople = ({roomInPeople, roomLeftPeople}) => {
    return(
        <People>
            <RoomLabel text={roomInPeople}/>
            <RoomLabel text="/"/>
            <RoomLabel text={roomLeftPeople}/>
        </People>
    );
}

export default MainRoomPeople;