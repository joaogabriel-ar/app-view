import styled from "styled-components"
import Link from "../../interfaces/Link";
import { MdFirstPage } from "react-icons/md";
import { MdOutlineLastPage } from "react-icons/md";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";



interface Pagination {
    links:Link[] | undefined;
    handlePagination: Function;
    page: number | undefined;
}

export default function Pagination ({links, handlePagination,page }: Pagination) {

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

    function handlePageChange(next: boolean, first: boolean, last: boolean) {        

        if(page === undefined || !links) {
            return;
        }
        
        if(!next && !first && !last) {
            
            let prev = page - 1;
            
            handlePagination(prev);
            
        } else if(next) {
            
            let next = page + 1;

            handlePagination(next);

        } else if (first) {

            handlePagination(0);

        } else {

            handlePagination(links.length - 1);

        }

    }
    
    return (
        <PaginatorContainer>
            <LinkContainer>
                <LinkItem onClick={() => handlePageChange(false, true, false)}>
                    <MdFirstPage /> 
                </LinkItem>
                <LinkItem onClick={() => handlePageChange(false, false, false)}>
                    <GrFormPrevious />
                </LinkItem>

                <LinkItemActive>
                    {page}
                </LinkItemActive>
                
                <LinkItem onClick={() =>handlePageChange(true, false, false) }>
                    <MdOutlineNavigateNext />

                </LinkItem>
                <LinkItem onClick={() => handlePageChange(false, false, true)}>
                    <MdOutlineLastPage />
                </LinkItem>
                
            </LinkContainer>
        </PaginatorContainer>
    )

}