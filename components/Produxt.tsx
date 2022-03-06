import { Rating } from "./Rating";

interface ProductProps {
  data: {
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    rating: number;
  };
};

export const Product = ({ data }: ProductProps) => (
  <>
    <img src={data.imageUrl} alt={data.imageAlt} />
    <h2 className="p-4 text-3xl font-bold">{data.title}</h2>
    <p className="p-4">{data.description}</p>
    <Rating rating={data.rating} />
  </>
);