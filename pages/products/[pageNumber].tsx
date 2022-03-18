import { useRouter } from "next/router"
import { InferGetStaticPropsType } from "next";
import { ProductsList } from "../../app/components/ProductsList";
import { PAGES_TOTAL, PRODUCTS_PER_PAGE } from "../../app/constants/constants";
import { InferGetStaticPaths } from "../../app/types/InferGetStaticPaths";
import { Product } from "../../app/types/Product";

export const getStaticPaths = async () => {
  const paths = Array.from({ length: 20 }, (_, i) => ({
    params: { pageNumber: (i + 1).toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({
  params
}: InferGetStaticPaths<typeof getStaticPaths>) => {
  const currentPage = +(params?.pageNumber || 0);
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

const ProductsPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <div>Loading...</div>;
  }
  return <ProductsList data={data} />;
};

export default ProductsPage;