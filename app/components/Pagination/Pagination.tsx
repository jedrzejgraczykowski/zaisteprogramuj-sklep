import Link from "next/link";
import { PAGES_TOTAL } from "../../constants/constants";
import { PaginationArray } from "./PaginationArray";
import { PaginationDots } from "./PaginationDots";
import { PaginationItem } from "./PaginationItem";

export interface PaginationProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const Pagination = ({
  currentPage, setCurrentPage
}: PaginationProps) => {
  return (
    <nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
      <div className="flex items-baseline">
        <PaginationItem
          pageNumber={1}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <PaginationDots
          visible={currentPage > 3}
          setCurrentPage={setCurrentPage}
        />
        <PaginationArray
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <PaginationDots
          visible={currentPage < PAGES_TOTAL - 2}
          setCurrentPage={setCurrentPage}
        />
        <PaginationItem
          pageNumber={PAGES_TOTAL}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </nav>
  );
}

