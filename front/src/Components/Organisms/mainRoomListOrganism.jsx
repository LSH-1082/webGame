import MainRoom from "../Molecules/mainRoom";
import { MainRoomList as Organisms } from "./organismsStyle";

const MainRoomListOrganisms = ({roomList}) => {
    return(
        <Organisms>
            {roomList.map(room => {
                <MainRoom
                    roomNum={room.roomNum}
                    roomName={room.roomName}
                    password={room.password}
                    roomInPeople={room.roomInPeople}
                />
            })}
            <MainRoom/>
        </Organisms>
    );
}

export default MainRoomListOrganisms;