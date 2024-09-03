import styled from "styled-components";

export const LoginRegisterOrganism = styled.form`
    width: 500px;
    height: 450px;
    border: 4px solid;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    border-color: rgba(0, 0, 0, 0.3);
`

export const MainUserOrganism = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 100px;
    border: 3px solid #A0A0A0;
    border-radius: 15px;
    margin-bottom: 20px;
`

export const MainRoomList = styled.div`
    height: 100vh;
    border: 4px solid grey;
    border-radius: 10px;
    overflow: auto;
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, and Opera */
    }
    scrollbar-width: none; /* Firefox */
`

export const MainRoomOrganism = styled.div`
    width: 70%;
    height: 85vh;
    display: flex;
    flex-direction: column;
`

export const MainRankListOrganism = styled.div`
    width: 100%;
    height: 100vh;
    border: 3px solid grey;
    border-radius: 10px;
    overflow: auto;
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, and Opera */
    }
    scrollbar-width: none; /* Firefox */
`

export const MainRankOrganism = styled.div`
    height: 85vh;
    display: flex;
    align-items: center;
    flex-direction: column;
`