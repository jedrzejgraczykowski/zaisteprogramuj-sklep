import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { ProductDetails } from "../../../app/components/ProductDetails";
import { PAGES_TOTAL, PRODUCTS_PER_PAGE } from "../../../app/constants/constants";
import { InferGetStaticPaths } from "../../../app/types/InferGetStaticPaths";
import { Product } from "../../../app/types/Product";

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=${PRODUCTS_PER_PAGE}&offset=${PAGES_TOTAL * PRODUCTS_PER_PAGE}`,
  );
  const data: Product[] = await res.json();

  const paths = Array.from(
    { length: data[data.length - 1]?.id || 0 },
    (_, i) => ({
      params: { productId: (i + 1).toString() },
    })
  );

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({
  params
}: InferGetStaticPaths<typeof getStaticPaths>) => {
  if (!params?.productId) {
    return {
      props: {},
      notFound: true,
    };
  }

  const res = await fetch(
    `https://naszsklep-api.vercel.app/api/products/${params?.productId}`
  );
  const data: Product | null = await res.json();

  if (!data) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};

const ProductIdPage = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <div>Loading...</div>
  }

  if (!data) {
    return <div>Something went wrong...</div>
  }

  return (
    <>
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
    </>
  );
};

export default ProductIdPage;