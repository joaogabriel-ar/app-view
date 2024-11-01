import styled from "styled-components"
import Link from "../../interfaces/Link";
import { MdFirstPage } from "react-icons/md";
import { MdOutlineLastPage } from "react-icons/md";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";



interface Pagination {
    links:Link[] | undefined;
    sendPage: Function;
}

export default function Pagination ({links, sendPage}: Pagination) {

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

    function getPage(page:number | undefined) {
        

        sendPage(String(page));

    }
    
    return (
        <PaginatorContainer>
            <LinkContainer>
                <LinkItem>
                    <MdFirstPage onClick={() => getPage(1)}/> 
                </LinkItem>
                <LinkItem>
                    <GrFormPrevious onClick={() => {
                        let index:number|undefined = links?.findIndex((l) => l.active);
                        
                        if(index) {

                            let prevPage = index - 1;

                            if(prevPage <= 0) {
                                return;
                            }
    
                            getPage(prevPage - 1);
                        }


                    }} />
                </LinkItem>
                {
                    links?.map((l:Link, index:number) => {

                        if(index === links.length - 1 || index === 0) {
                            return;
                        }

                        return (
                            !l.active ? <LinkItem  onClick={() => getPage(index)}>{index}</LinkItem> : <LinkItemActive onClick={() => getPage(index)}>{index}</LinkItemActive>
                        )
                    })
                }
                <LinkItem>
                    <MdOutlineNavigateNext onClick={() => {
                            let index: number | undefined = links?.findIndex((l) => l.active);
                            
                            if (index) {

                                let nextPage = index + 1                                

                                if (links && nextPage >= links.length - 1) {
                                    return;
                                }

                                getPage(nextPage);
                            }
                        }

                    }
                />

                </LinkItem>
                <LinkItem>
                    <MdOutlineLastPage onClick={() => getPage(links && links.length - 2)}/>
                </LinkItem>
                
            </LinkContainer>
        </PaginatorContainer>
    )

}