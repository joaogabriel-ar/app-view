import styled from "styled-components";

const Card = styled.div`        
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction:column;
    flex: 1 1 150px;
    gap: 10px;
    padding: 1rem;
    border-radius: 15px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    
`;

const PaginationCard = styled.div`        
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction:column;
    flex: 1 1 150px;
    gap: 10px;
    padding: 1rem;
    border-radius: 15px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    min-height: 400px;
    
`;

const CardHeader = styled.div`        
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:100%;
`;


const Title = styled.div`
    font-size:18px;
    font-weight:500;
`;

const AddAssetButton = styled.button`
        background-color: #6895f8;
        color: white;
        border: none;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 191px;
        padding: 7px 25px;
        font-size: 14px;
        gap: 20px;

    `;

const SearchBar = styled.input`
        background-color: #f8f9fa;
        border: none;
        min-width: 100px;
        border-radius: 10px;
        padding: 5px 10px;    
    `;
const ListContainer = styled.div`
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        gap:10px;
        width:100%;
        min-height: 250px;
        `;

const ListCardContainer = styled.div`
        background-color: #fafafa;
        display:flex;
        justify-content:space-around;
        align-items:center;
        gap: 10px;
        width:100%;
        padding-block:10px;

    `;

const MainInfoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items:start;
    flex-wrap: wrap;
    gap: 15px;

`;
const Wrapper = styled.div`
    height: 50%;
    width: 80%;
    margin: auto;
    display:flex;
    justify-content:center;
    align-items:left;
    flex-direction:column;
    gap:15px;
    `;
    const PaginatorContainer = styled.div`
        width: 100%;
        display: flex;
        justify-content: right;

    `

    const LinkContainer = styled.div`
        display: flex;
        gap: 10px;
        background-color: #e8ecee;
        border-radius: 15px;
        justify-content:center;
        align-items:center
    `;

    const LinkItem = styled.div`
        padding: 12px;
        display:flex;
        justify-content:center;
        align-items:center;
        cursor: pointer;
        `;
        const LinkItemActive = styled.div`
        padding: 12px;
        background-color: #6895f8;
        cursor: pointer;
    `;

export {
    Card,
    CardHeader,
    ListCardContainer,
    SearchBar,
    ListContainer,
    AddAssetButton,
    Title,
    Wrapper,
    MainInfoContainer,
    PaginatorContainer,
    LinkItem,
    LinkItemActive,
    LinkContainer,
    PaginationCard
};