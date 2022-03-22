import Image from "next/image";
import { Rating } from "./Rating";

export interface ProductDetails {
  id: number,
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  rating: number;
};

interface ProductProps {
  data: ProductDetails;
};

export const ProductDetails = ({ data }: ProductProps) => {
  return (
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
          <Rating rating={data.rating} />
        </div>
      </div>
    </div>
  );
};
