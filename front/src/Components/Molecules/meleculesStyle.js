import styled from "styled-components";

export const LoginRegisterInput = styled.div`
    display: flex;
    flex-direction: column;
`

export const MainUserInfo = styled.div`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export const MainRoomPeople = styled.div`
`

export const MainMakeRoom = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
`

export const MainRoom = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
    border-bottom: solid 2px grey;
    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
`

export const MainRankId = styled.div`
    display: flex;
`

export const MainRankStat = styled.div`
`

export const MainRank = styled.div`
    border-bottom: solid 2px grey;
`