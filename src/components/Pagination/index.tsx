import useMedia from "use-media";
import "./pagination-styles.scss"

interface PaginationProps {
  currentPage: number
  onPageChange: (page: number) => void
}

export function Pagination({ currentPage, onPageChange }: PaginationProps) {

    const isMobile = useMedia({maxWidth: '719px'});

    return (
        <div className="pagination">
        <button className="pagination__button" onClick={() => onPageChange(currentPage - 1)}>
            <img src="../../assets/left-arrow.svg" alt="" />
            Anterior
        </button>
        {
            isMobile && (
                <span>{currentPage}</span>
            )
        }
        { 
            !isMobile && [1, 2, 3, 4, 5].map((page) => (
                <button
                    key={page}
                    className={`pagination__button ${page === currentPage ? "pagination__button--active" : ""}`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
        ))}
        <button className="pagination__button" onClick={() => onPageChange(currentPage + 1)}>
            Próximo
            <img src="../../assets/right-arrow.svg" alt="" />
        </button>
        </div>
    )
}

