import { ProductListItem } from "./ProductListItem";
import { Product } from "../../types/Product";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Pagination } from "../pagination/Pagination";

export interface ProductsListProps {
  data: Product[];
};

export const ProductsList = ({ data }: ProductsListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { query } = useRouter();

  useEffect(() => {
    if (query.pageNumber !== undefined && typeof query.pageNumber === "string") {
      setCurrentPage(parseInt(query.pageNumber));
    }
  }, [query])

  return (
    <>
      <div className="flex justify-center mb-7 mt-4">
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map(product => {
          return (
            <li key={product.id} className="shadow-xl border-2">
              <ProductListItem data={{
                id: product.id,
                title: product.title,
                imageUrl: product.image,
                imageAlt: product.title,
              }}/>
            </li>
          );
        })}
      </ul>
      <div className="flex justify-center mb-7 mt-14">
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
}