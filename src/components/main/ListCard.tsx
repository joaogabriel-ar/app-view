import Asset from "../../interfaces/Asset";
import formatter from "../../helpers";
import Pagination from "./Pagination";
import { Actions, AddAssetButton, CardHeader, ListCardContainer, ListContainer, PaginationCard, SearchBar, Title } from "../../styles/styles";
import ListCardI from "../../interfaces/ListCard";
import { HiDotsHorizontal } from "react-icons/hi";
import DropDownMenu from "../DropDownMenu";
import { useState } from "react";


export default function ListCard({assetsPaginated , handlePagination, page}: ListCardI) {

    const [open, setOpen] = useState<boolean>(false);

    function openDropDownMenu(index:number) {
        setOpen(!open);
    }

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
                    assetsPaginated.data.map((item:Asset, index:number) => {                        
                        return <>
                                <ListCardContainer key={item.id}>
                                    <div>{item.id}</div>
                                    <div>{item.name}</div>
                                    <div>Saldo atual: <b> R$ {formatter.format(item.pivot.balance)}</b></div>
                                    <div>Quantidade: {item.pivot.quantity}</div>
                                    <Actions onClick={() => openDropDownMenu(index)}>
                                        <HiDotsHorizontal/>
                                        {open && <DropDownMenu />}
                                    </Actions>
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