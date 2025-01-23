export const getPageNumbers = (currentPage: number, totalPages: number) => {
    const pages: (number | string)[] = [];
  
    if (totalPages <= 4) {
      // Mostra todas as páginas se forem <= 4
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Garante sempre 3 páginas consecutivas antes do último
      let startPage = Math.max(1, currentPage - 1);
      let endPage = Math.min(totalPages, currentPage + 1);
  
      // Ajusta para as últimas páginas para manter o padrão de exibição
      if (currentPage >= totalPages - 2) {
        startPage = totalPages - 3;
        endPage = totalPages - 1;
      }
  
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
  
      // Adiciona reticências apenas antes da última página, se necessário
      if (currentPage < totalPages - 2) {
        pages.push("...");
      }
  
      // Adiciona a última página
      pages.push(totalPages);
    }
  
    return pages;
  };