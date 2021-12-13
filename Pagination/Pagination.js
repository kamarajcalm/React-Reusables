import React from 'react';
import { usePagination, DOTS } from '../../hooks/usePagination';
import styles from "../Pagination/Pagination.module.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Pagination = props => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,

    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (paginationRange.length === 0) {
        return null
    }
    return (
        <>

            <ul className={styles["page"]} style={{ cursor: "pointer" }}>
                <li

                    onClick={() => {

                        if (currentPage - 1 >= 0) {
                            onPageChange(currentPage - 1)
                        }
                    }}
                >
                    <span>
                        <MdChevronLeft size={30} />
                    </span>
                </li>
                {
                    paginationRange.map((page, index) => {
                        if (page === DOTS) {
                            return (
                                <li className={styles["page__dots"]}>...</li>
                            )
                        }
                        return (
                            <li
                                onClick={() => {
                                    onPageChange(index)
                                }}
                                className={`${styles["page__numbers"]} ${currentPage === (index) && styles["active"]}`}
                            >{index + 1}</li>
                        )
                    })
                }





                <li
                    onClick={() => {
                        if (currentPage + 1 <= paginationRange.length - 1) {
                            onPageChange(currentPage + 1)
                        }
                    }}

                >
                    <span>
                        <MdChevronRight size={30} />
                    </span>
                </li>
            </ul>


        </>
    );
};

export default Pagination;
