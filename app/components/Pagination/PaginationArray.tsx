import { PAGES_TOTAL } from "../../constants/constants";
import { PaginationItem } from "./PaginationItem";

interface Props {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

function calculateNumberOfPages(currentPage: number) {
  switch (currentPage) {
    case 1:
      return 1;
    case PAGES_TOTAL:
      return 1;
    case 2 || 3:
      return currentPage;
    case PAGES_TOTAL - 1 || PAGES_TOTAL - 2:
      return PAGES_TOTAL - currentPage + 1;
    default:
      return 3;
  }
}

export const PaginationArray = ({
  currentPage,
  setCurrentPage,
}: Props) => {
  let pages = Array.from(
    { length: calculateNumberOfPages(currentPage) },
    (_, i) => {
      if (currentPage === 1) {
        return currentPage + 1;
      } else if (currentPage === 2) {
        return currentPage + i;
      } else if (currentPage === PAGES_TOTAL - 1) {
        return currentPage - i;
      } else {
        return currentPage - 1 + i;
      }
    }
  );
  pages = currentPage === PAGES_TOTAL - 1 ? pages.reverse() : pages;
  return (
    <>
      {pages.map((number) => (
        <PaginationItem
          key={number}
          pageNumber={number}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ))}
    </>
  );
};