import Link from "next/link";
import Image from "next/image";
import { ProductDetails } from "./ProductDetails"

type ProductListItemType = Pick<
  ProductDetails,
  'id' | 'title' | 'imageUrl' | 'imageAlt'
>;

interface ProductListItemProps {
  data: ProductListItemType;
};

export const ProductListItem = ({ data }: ProductListItemProps) => (
  <>
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
    <Link href={`/products/product/${data.id}`}>
      <a>
        <h2 className="p-4 text-3xl font-bold">{data.title}</h2>
      </a>
    </Link>
  </>
);