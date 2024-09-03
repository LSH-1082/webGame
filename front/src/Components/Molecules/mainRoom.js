import RoomLabel from "../Atoms/roomLabel";
import RoomLockImg from "../Atoms/roomLockImg";
import MainRoomPeople from "./mainRoomPeople";
import { MainRoom as Molecules } from "./meleculesStyle";

// {roomNum, roomName, roomInPeople, roomLeftPeople}

const MainRoom = () => {
    let roomNum = 341
    let roomName = "아무나 들어와라"
    let roomInPeople = 1
    let roomLeftPeople = 2
    let password = true;

    return(
        <Molecules onClick={(e) => console.log("클릭")}>
            <RoomLabel text={`No. ${roomNum}`}/>
            <RoomLabel text={roomName}/>
            {password ? (<RoomLockImg/>) : (<></>)}
            <MainRoomPeople roomInPeople={roomInPeople} roomLeftPeople={roomLeftPeople}/>
        </Molecules>
    );
}

export default MainRoom;