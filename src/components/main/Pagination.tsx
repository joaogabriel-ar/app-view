import Link from "../../interfaces/Link";
import { MdFirstPage } from "react-icons/md";
import { MdOutlineLastPage } from "react-icons/md";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { LinkContainer, LinkItem, LinkItemActive, PaginatorContainer } from "../../styles/styles";



interface Pagination {
    links:Link[] | undefined;
    handlePagination: Function;
    page: number | undefined;
}

export default function Pagination ({links, handlePagination,page }: Pagination) {

    function handlePageChange(next: boolean, first: boolean, last: boolean) {        

        console.log(links);
        

        if(page === undefined || !links) {
            return;
        }
        
        if(!next && !first && !last) {
            
            let prev = page - 1;
            
            if(prev >= 0) {

                handlePagination(prev);
            }

            
        } else if(next) {
            
            let next = page + 1;

            if(next <= links.length - 2) {
                handlePagination(next);

            }


        } else if (first) {

            handlePagination(1);

        } else {

            handlePagination(links.length - 2);

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