import { useState } from 'react';
import { Query, Product } from '@/global/Type';
import styles from './styles.module.scss';
import Image from 'next/image';
import Button from '@/components/Button';
import { Rating } from 'react-simple-star-rating';

import Head from 'next/head';

type Props = { product: Product };

const Product: React.FC<Props> = ({ product }) => {
  return (
    <div className="container">
      <Head>
        <title>{product.title}</title>
        <meta name="description" content={product.description} />
      </Head>
      <div className={styles.product}>
        {/* product image */}
        <div className={styles.imageSection}>
          <img src={product.image} alt={product.title} />
        </div>
        {/* product info */}
        <div className={styles.productInfo}>
          {/* product header */}
          <div className={styles.header}>
            <div>
              <h1 className={styles.productTitle}>{product.title}</h1>
              <span className={styles.productCategory}>{product.category}</span>
              <p className={styles.productPrice}>${product.price}</p>
            </div>
            <div>
              <Rating
                // onClick={handleRating}
                ratingValue={product.rating.rate * 10} /* Available Props */
                allowHalfIcon
                transition
                fillColor="#f5626b"
                size={20}
                // readonly
              />
            </div>
          </div>
          {/* product description */}
          <div className={styles.productDescription}>
            <h2>Description</h2>
            <p> {product.description}</p>
          </div>

          {/* product footer */}

          <div className={styles.productFooter}>
            <div>
              <Button varient="solid" color="gradient">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.shop}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                <span style={{ fontWeight: 'bold' }}> add to card</span>
              </Button>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={styles.share}
              >
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ query }: any) {
  const { id } = query as Query;

  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();

  return {
    props: { product },
  };
}

export default Product;
