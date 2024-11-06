import styled from "styled-components"; 
import { useState } from "react";

export default function DropDownMenu() {

    const [openBuyModal, setBuyModal] = useState<boolean>(false);
    const [openSellModal, setSellModal] = useState<boolean>(false);

    const DropDownMenuContainer = styled.div`
       font-size: 12px;
        position: absolute;
        background-color: #ffffff;
        color: gray;
        width: 200px;
        bottom: -115px;
        left: -195px;
        min-height: 50px;
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;
        gap: 10px;
        flex-wrap: wrap;
        z-index: 1;
        border-radius: 10px;
        padding: 10px;
        border: 1px solid #c9c9c9;
        
    `;

    const Divider = styled.hr`
        width: 100%;

    `;

    const DropDownItem = styled.div`
        cursor: pointer;
    `;

    return (
        <>
            <DropDownMenuContainer>
                <DropDownItem  onClick={() => {
                    console.log('clickas');
                    
                    setBuyModal(true)
                }}>
                    Nova compra
                </DropDownItem>
                <DropDownItem onClick={() => {setSellModal(true)}}>
                    Nova venda
                </DropDownItem>
                <Divider />
                <DropDownItem>
                    Excluir
                </DropDownItem>
            </DropDownMenuContainer>
            
        </>
    )

}