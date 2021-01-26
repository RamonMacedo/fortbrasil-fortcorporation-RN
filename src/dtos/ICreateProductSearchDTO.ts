/* eslint-disable camelcase */
export default interface IProduct {
  id_product_market: string;
  id_product: string;
  description: string;
  avatar: string;
  business_unit: string;
  markets: [
    {
      id_market: string;
      price: string;
      emitting_name: string;
      zipcode: string;
      latitude: string;
      longitude: string;
      distance: string;
      sale_date: Date;
    },
  ];
}
