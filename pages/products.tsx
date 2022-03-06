import { InferGetStaticPropsType } from "next";
import { Product } from "../components/Produxt";

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
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data.map(product => {
        return (
          <li key={product.id} className="shadow-xl border-2">
            <Product data={{
              title: product.title,
              description: product.description,
              imageUrl: product.image,
              imageAlt: product.title,
              rating: product.rating.rate,
            }}/>
          </li>
        );
      })}
    </ul>
  );
};

export default ProductsPage;