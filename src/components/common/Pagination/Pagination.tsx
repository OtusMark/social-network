import React, {useState} from "react";
import { Button } from "../Button/Button";
import styled, { StyledComponentProps } from "styled-components/macro";

type PropsType = {
    pageSize: number
    totalItemsCount: number
    currentPage: number
    changePage: (pageNumber: number) => void
    portionSize: number
}


export const Pagination: React.FC<PropsType> = (props) => {

    const {
        pageSize, // Number of items displayed on the page.
        totalItemsCount, // Total number of items.
        currentPage, // The current page displayed.
        changePage, // Callback function that sets the current page when clicking on the page number.
        portionSize // Number of pages displayed on the pagination.
    } = props

    let pagesCount = Math.ceil(totalItemsCount / pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize)

    let [portionNumber, setPortionNumber] = useState(1)

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    const disablePrevButton = () => {
        return portionNumber === 1
    }

    const disableNextButton = () => {
        return portionNumber === portionCount
    }

    return (
        <PaginatorContainer>
            <Button onClick={() => {setPortionNumber(portionNumber - 1)}} disabled={disablePrevButton()}>PREV</Button>
                {pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => <PageNumberButton key={p}
                                                currentPage={currentPage}
                                                pageNumber={p}
                                                onClick={() => {changePage(p)}}>{p}</PageNumberButton>)}
            <Button onClick={() => {setPortionNumber(portionNumber + 1)}} disabled={disableNextButton()}>NEXT</Button>
        </PaginatorContainer>
    )
}

const PaginatorContainer = styled.div`
  display: flex;
  
  align-items: center;
  
  & button:not(:first-child) {
    margin-left: .5rem;
  }
`

const PageNumberButton = styled(Button)<StyledComponentProps<any, any, any, any>>`
  text-align: center;
  text-transform: uppercase;
  width: 3rem;
  padding-left: 0;
  padding-right: 0;
  background-color: ${({theme, currentPage, pageNumber}) => currentPage === pageNumber ? theme.color.primary.main : theme.color.grey['100']};
  color: ${({theme, currentPage, pageNumber}) => currentPage === pageNumber ? theme.color.white : theme.color.black};
  
  &:hover {
    background-color: ${({theme, currentPage, pageNumber}) => currentPage === pageNumber ? theme.color.primary.dark : theme.color.grey['200']};
  }
`