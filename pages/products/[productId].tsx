import {GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { ProductDetails } from "../../components/Product";

interface StoreApiResponse {
  id: number,
  title: string,
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export const getStaticPaths = async () => {
  const res = await fetch("https://fakestoreapi.com/products/");
  const data: StoreApiResponse[] = await res.json();



  return {
    paths: data.map(product => {
      return {
        params: {
          productId: product.id.toString(),
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({
  params
}: GetStaticPropsContext<{ productId: string }>) => {
  if (!params?.productId) {
    return {
      props: {},
      notFound: true,
    };
  }

  const res = await fetch(
    `https://fakestoreapi.com/products/${params?.productId}`
  );
  const data: StoreApiResponse | null = await res.json();

  return {
    props: {
      data,
    },
  };
};

const ProductIdPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!data) {
    return <div>Coś poszło nie tak...</div>
  }

  return (
    <ProductDetails
      data={{
        title: data.title,
        imageUrl: data.image,
        imageAlt: data.title,
        description: data.description,
        rating: data.rating.rate,
      }}
    />
  );
};

export default ProductIdPage;