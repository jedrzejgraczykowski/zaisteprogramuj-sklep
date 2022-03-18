import Link from "next/link";

export interface PaginationItemProps {
  pageNumber: number;
  currentPage: number;
  setCurrentPage: (x: number) => void;
}

export const PaginationItem = ({
  pageNumber,
  currentPage,
  setCurrentPage,
}: PaginationItemProps) => {
  return (
    <Link href={`/products/${pageNumber}`}>
      <a
        onClick={() => setCurrentPage(pageNumber)}
        className={`${
          currentPage === pageNumber
            ? "border-gray-700 text-gray-700"
            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
        } border-t-2 pt-4 px-4 inline-flex items-center text-md font-medium`}
      >
        {pageNumber}
      </a>
    </Link>
  );
};