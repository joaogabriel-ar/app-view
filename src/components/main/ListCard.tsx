import styled from "styled-components";

export default function ListCard() {

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
    min-height: 75px;

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
    `

    return(
        <Card>
            <CardHeader>
                <Title>
                    Lista de Ativos
                </Title>
                <AddAssetButton>
                    <div> + </div>
                    <div>Adicionar Ativo</div>
                </AddAssetButton>
            </CardHeader>
            <div>
                <SearchBar placeholder="Buscar"></SearchBar>
            </div>
        </Card>
    )

}