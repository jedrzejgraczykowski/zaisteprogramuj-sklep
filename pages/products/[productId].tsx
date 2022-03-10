import {GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Link from "next/link";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Main } from "../../components/Main";
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
  const res = await fetch("https://naszsklep-api.vercel.app/api/products");
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
    `https://naszsklep-api.vercel.app/api/products/${params?.productId}`
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
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main>
        <Link href="/products">
          <a className="font-bold hover:font-extrabold">{"<- Back to Products"}</a>
        </Link>
        <ProductDetails
          data={{
            id: data.id,
            title: data.title,
            imageUrl: data.image,
            imageAlt: data.title,
            description: data.description,
            rating: data.rating.rate,
          }}
        />
      </Main>
      <Footer />
    </div>
  );
};

export default ProductIdPage;