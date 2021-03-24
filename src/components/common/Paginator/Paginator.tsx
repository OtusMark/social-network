import React, {useState} from "react";
import s from './Paginator.module.scss'

type PropsType = {
    pageSize: number
    totalItemsCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize: number
}


export const Paginator: React.FC<PropsType> = ({pageSize, totalItemsCount, currentPage, onPageChanged, portionSize}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div>
            {portionNumber > 1 &&  <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>}
            <div>
                {pages
                    .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
                    .map(p => <span className={(currentPage === p) ? s.selectedPage : ''} onClick={(e) => {
                        onPageChanged(p)
                    }}>{p}</span>)}
            </div>
            {portionCount > portionNumber &&  <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}
        </div>
    )
}