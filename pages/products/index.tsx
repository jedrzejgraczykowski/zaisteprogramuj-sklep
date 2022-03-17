import { InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { off } from "process";
import { useQuery } from "react-query";
import Footer from "../../app/components/Footer";
import Header from "../../app/components/Header";
import Main from "../../app/components/Main";
import { ProductListItem } from "../../app/components/Product";
import { Product } from "../../app/types/Product";


export const getStaticProps = async () => {
  const res = await fetch("https://naszsklep-api.vercel.app/api/products");
  const data: Product[] = await res.json();

  return {
    props: {
      data,
    },
  };
};

export const ProductsPage = (
  {
    data,
  }: InferGetStaticPropsType<typeof getStaticProps>
) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data?.map(product => {
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
      </Main>
      <Footer />
    </div>
  );
};

export default ProductsPage;