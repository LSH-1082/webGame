import { useState } from "react";
import MainTemplate from "../Components/Templates/mainTemplate";

const MainPage = () => {
    const [userData, setUserData] = useState([]);
    const [rankList, setRankList] = useState([]);
    const [roomList, setRoomList] = useState([]);

    return(
        <MainTemplate
            userData={userData}
            rankList={rankList}
            roomList={roomList}
        />
    );
}

export default MainPage;
