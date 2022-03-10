import Link from "next/link";
import { Rating } from "./Rating";

interface ProductDetails {
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

export const ProductDetails = ({ data }: ProductProps) => (
  <div className="mt-5">
    <div className="flex">
      <img src={data.imageUrl} alt={data.imageAlt} />
      <div>
        <h2 className="p-4 text-3xl font-bold">{data.title}</h2>
        <p className="p-4">{data.description}</p>
        <Rating rating={data.rating} />
      </div>
    </div>
  </div>
);

type ProductListItem = Pick<
  ProductDetails,
  'id' | 'title' | 'imageUrl' | 'imageAlt'
>;

interface ProductListItemProps {
  data: ProductListItem;
};

export const ProductListItem = ({ data }: ProductListItemProps) => (
  <>
    <img src={data.imageUrl} alt={data.imageAlt} />
    <Link href={`/products/${data.id}`}>
      <a>
        <h2 className="p-4 text-3xl font-bold">{data.title}</h2>
      </a>
    </Link>
  </>
);