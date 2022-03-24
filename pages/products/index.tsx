import { InferGetStaticPropsType } from "next";
import { ProductsList } from "../../app/components/products/ProductsList";
import { PRODUCTS_PER_PAGE } from "../../app/constants/constants";
import { Product } from "../../app/types/Product";

const ProductsPage = (
  {
    data,
  }: InferGetStaticPropsType<typeof getStaticProps>
) => {
  return <ProductsList data={data} />;
};

export const getStaticProps = async () => {
  const currentPage = 0;
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=${PRODUCTS_PER_PAGE}&offset=${currentPage * PRODUCTS_PER_PAGE}`
  );
  const data: Product[] = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default ProductsPage;