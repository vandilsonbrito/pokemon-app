import useMedia from "use-media";
import "./pagination-styles.scss"
import { getPageNumbers } from "../../utils/functions/getPageNumbers";

interface PaginationProps {
  currentPage: number
  onPageChange: (page: number) => void
  totalPages: number
}

export function Pagination({ currentPage, onPageChange, totalPages }: PaginationProps) {

    const isMobile = useMedia({maxWidth: '719px'});

    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };
    
    const pageNumbers = getPageNumbers(currentPage, totalPages);

    return (
        <div className="pagination">
        <button className="pagination__button" onClick={handlePrevious} disabled={currentPage === 1}>
            <img src="../../assets/left-arrow.svg" alt="" />
            Anterior
        </button>
        {
            isMobile && (
                <span>{currentPage}</span>
            )
        }
        { 
            !isMobile && pageNumbers.map((page) => (
                <button
                    key={page}
                    className={`pagination__button ${page === currentPage ? "pagination__button--active" : ""}`}
                    onClick={() => typeof page === "number" && onPageChange(page)}
                    disabled={page === currentPage || typeof page !== "number"}
                >
                    {page}
                </button>
        ))}
        <button className="pagination__button" onClick={handleNext} disabled={currentPage === totalPages}>
            Próximo
            <img src="../../assets/right-arrow.svg" alt="" />
        </button>
        </div>
    )
}

