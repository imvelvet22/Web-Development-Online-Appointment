import React, { useState } from 'react';
import css from './Products.module.css';
import Plane from '../../assets/Plane.png';
import { ProductsData } from "../../data/products";

const Products = () => {
    const [MenuProducts, setMenuProducts] = useState(ProductsData);

    return (
        <div className={css.container}>
            <img src={Plane} alt="" />
            <h1>Our Limited Offer Products</h1>

            <div className={css.products}>
                <ul className={css.menu}>
                    <li>All</li>
                    <li>Hair Care</li>
                    <li>Nail Care</li>
                    <li>Skin Care</li>
                </ul>

                <div className={css.list}>
                    {MenuProducts.map((product, i) => (
                        <div className={css.product}>
                            <div className={css.leftSection}>
                                <span>{product.name}</span>
                                <span>{product.detail}</span>
                            </div>
                            <div>Show Now</div>

                            <img src={product.img} alt="" classname="image-p" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
