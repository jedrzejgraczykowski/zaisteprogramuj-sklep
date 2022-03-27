const title = process.env.NEXT_PUBLIC_SHOP_NAME;
const description = process.env.NEXT_PUBLIC_SHOP_DESCRIPTION;

const NextSeoConfig = {
  title,
  description,
  openGraph: {
    title,
    description,
    site_name: title,
  },
};

export default NextSeoConfig;