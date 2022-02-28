import { InferGetStaticPropsType } from "next";

interface StoreApiResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products/");
  const data: StoreApiResponse[] = await res.json();

  return {
    props: {
      data,
    },
  };
};

const ProductsPage = ({
  data
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <div>{data[0].title}</div>;
};

export default ProductsPage;