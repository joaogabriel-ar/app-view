import Asset from "../../interfaces/Asset";
import formatter from "../../helpers";
import Pagination from "./Pagination";
import { AddAssetButton, CardHeader, ListCardContainer, ListContainer, PaginationCard, SearchBar, Title } from "../../styles/styles";
import ListCardI from "../../interfaces/ListCard";

export default function ListCard({assetsPaginated , handlePagination, page}: ListCardI) {

    return(
        <PaginationCard>
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
            <ListContainer>
            {
                assetsPaginated && assetsPaginated.data ? (
                    assetsPaginated.data.map((item:Asset) => {                        
                        return <>
                                <ListCardContainer>
                                    <div>{item.id}</div>
                                    <div>{item.name}</div>
                                    <div>Saldo atual: <b> R$ {formatter.format(item.pivot.balance)}</b></div>
                                    <div>Quantidade: {item.pivot.quantity}</div>
                                </ListCardContainer>
                        </>
                    })
                ) : <div>none</div>
            }
            </ListContainer>
            <Pagination links={assetsPaginated?.links} handlePagination={handlePagination} page={page}/>
        </PaginationCard>
    )

}