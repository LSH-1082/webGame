import { MainUserOrganism as Organism } from "./organismsStyle";
import MainUserInfo from "../Molecules/mainUserInfo";

const MainUserOrganism = ({idText, winText, loseText}) => {
    let rateText = `${((winText/(winText + loseText)) * 100).toFixed(1)}%`;

    return(
        <Organism>
            <MainUserInfo titleText="ID: " subText={idText}/>
            <MainUserInfo titleText="Win: " subText={winText}/>
            <MainUserInfo titleText="Lose: " subText={loseText}/>
            <MainUserInfo titleText="WinRate: " subText={rateText}/>
        </Organism>
    );
}

export default MainUserOrganism;