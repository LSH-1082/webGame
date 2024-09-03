import { MainTemplate as Template } from "./templatesStyle";
import MainRoomOrganism from "../Organisms/mainRoomOrganism";
import MainRankOrganism from "../Organisms/mainRankOrganism";

const MainTemplate = () => {
    return(
        <Template>
            <MainRoomOrganism/>
            <MainRankOrganism/>
        </Template>
    );
}

export default MainTemplate;