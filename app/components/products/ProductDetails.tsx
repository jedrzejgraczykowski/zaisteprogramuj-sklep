import Image from "next/image";
import { Rating } from "./Rating";
import ReactMarkdown from "react-markdown";
import Head from "next/head";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { RandomShopMarkdown } from "../shared/RandomShopMarkdown";

export interface ProductDetails {
  id: number,
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  rating: number;
  longDescription: string;
};

interface ProductProps {
  data: ProductDetails;
};

export const ProductDetails = ({ data }: ProductProps) => {
  return (
    <>
      <NextSeo
        title={data.title}
        description={data.description}
        canonical={`https://zaisteprogramuj-sklep.vercel.app/products/${data.id}`}
        openGraph={{
          url: `https://zaisteprogramuj-sklep.vercel.app/products/${data.id}`,
          title: data.title,
          description: data.description,
          images: [
            {
              url: data.imageUrl,
              alt: data.imageAlt,
              type: 'image/jpeg',
            },
          ],
          site_name: 'Random Shop',
        }}
      />
      <div className="mt-5">
        <div className="flex flex-col">
          <div className="bg-white p-4">
            <Image
              src={data.imageUrl}
              alt={data.imageAlt}
              layout="responsive"
              width={16}
              height={9}
              objectFit="contain"
            />
          </div>
          <div>
            <h2 className="p-4 text-3xl font-bold">{data.title}</h2>
            <p className="p-4">{data.description}</p>
            <article className="prose lg:prose-xl p-4">
              <RandomShopMarkdown>{data.longDescription}</RandomShopMarkdown>
            </article>
            <Rating rating={data.rating} />
          </div>
        </div>
      </div>
    </>
  );
};
