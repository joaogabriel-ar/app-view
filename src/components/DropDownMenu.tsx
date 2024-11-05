import styled from "styled-components";

export default function DropDownMenu() {

    const DropDownMenuContainer = styled.div`
        font-size: 12px;
        position:absolute;
        display:flex;
        flex-direction: column;
        
    `;

    const DropDownItem = styled.div`
        position:absolute;
        display:flex;
        flex-direction: column;
    `;

    return (
        <DropDownMenuContainer>
            <DropDownItem>
                Teste
            </DropDownItem>
            <DropDownItem>
                Teste
            </DropDownItem>
            <DropDownItem>
                Teste
            </DropDownItem>
        </DropDownMenuContainer>
    )

}