import RoomLabel from "../Atoms/roomLabel";
import RoomLockImg from "../Atoms/roomLockImg";
import MainRoomPeople from "./mainRoomPeople";
import { MainRoom as Molecules } from "./meleculesStyle";

const MainRoom = ({roomNum, roomName, roomInPeople, password}) => {
    return(
        <Molecules onClick={(e) => console.log("클릭")}>
            <RoomLabel text={`No. ${roomNum}`}/>
            <RoomLabel text={roomName}/>
            {password ? (<RoomLockImg/>) : (<></>)}
            <MainRoomPeople roomInPeople={roomInPeople} roomLeftPeople="2"/>
        </Molecules>
    );
}

export default MainRoom;