import { Rating } from "./Rating";

interface ProductDetails {
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
  <>
    <img src={data.imageUrl} alt={data.imageAlt} />
    <h2 className="p-4 text-3xl font-bold">{data.title}</h2>
    <p className="p-4">{data.description}</p>
    <Rating rating={data.rating} />
  </>
);

type ProductListItem = Pick<
  ProductDetails,
  'title' | 'imageUrl' | 'imageAlt'
>;

interface ProductListItemProps {
  data: ProductListItem;
};

export const ProductListItem = ({ data }: ProductListItemProps) => (
  <>
    <img src={data.imageUrl} alt={data.imageAlt} />
    <h2 className="p-4 text-3xl font-bold">{data.title}</h2>
  </>
);