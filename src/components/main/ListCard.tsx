import styled from "styled-components";
import MainInfoProps from "../../interfaces/MainInfoProps";
import Asset from "../../interfaces/Asset";
import formatter from "../../helpers";
import Pagination from "./Pagination";
import Link from "../../interfaces/Link";
import axios from 'axios';
import WalletResponse from "../../interfaces/WalletResponse";
import { useEffect, useState } from "react";


export default function ListCard({assetsPaginated , handleAssetsPaginated}:MainInfoProps) {

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
        `;
        
        const ListCard = styled.div`
        background-color: #fafafa;
        display:flex;
        justify-content:space-around;
        align-items:center;
        gap: 10px;
        width:100%;
        padding-block:10px;

    `;

    const [page, setPage] = useState<string | undefined>(undefined);

    async function paginate() {
        
        if(assetsPaginated && page) {

            let link = assetsPaginated.links.find((l:Link) => l.label == page);
    
            if(link && link.url) {
        
                const response = await axios.get<WalletResponse>(link.url);
                
                if(response.data) {
    
                    handleAssetsPaginated(response.data.wallet_assets);
                    
                }
    
            }
        }
    }

    useEffect(() => {
        paginate();
      }, [page]);

    function handlePagination (page: string | undefined) {
        setPage(page);
        
    }
      

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
            {
                assetsPaginated && assetsPaginated.data ? (
                    assetsPaginated.data.map((item:Asset) => {                        
                        return <>
                            <ListContainer>
                                <ListCard>
                                    <div>{item.id}</div>
                                    <div>{item.name}</div>
                                    <div>Saldo atual: <b> R$ {formatter.format(item.pivot.balance)}</b></div>
                                    <div>Quantidade: {item.pivot.quantity}</div>
                                </ListCard>
                            </ListContainer>
                        </>
                    })
                ) : <div>none</div>
            }
            <Pagination links={assetsPaginated?.links} sendPage={handlePagination}/>
        </Card>
    )

}