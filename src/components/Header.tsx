import styled from "styled-components";
import { IoHomeOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Header() {

    const Header = styled.div`        
        display: flex;
        justify-content: left;
        align-items: center;
        gap: 10px;
        padding: 1rem;
        border-radius: 15px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    `;

    return (
        <Header>
            <IoHomeOutline />
            <MdKeyboardArrowRight />
            <p>Meus investimentos</p>
        </Header>
    )

}